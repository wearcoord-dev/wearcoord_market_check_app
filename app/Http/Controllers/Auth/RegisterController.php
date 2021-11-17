<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Library\Encodes;
use Laravel\Socialite\Facades\Socialite;


class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'coorditem' => ['required'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\Models\User
     */
    protected function create(array $data)
    {

        $userData = Encodes::encodeFirstSelectCoord($data['coorditem']);

        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'gender' => $userData['gender'],
            'registerCoord' => $userData['coordId'],
            'password' => Hash::make($data['password']),
        ]);
    }

    public function showProviderUserRegistrationForm(Request $request, string $provider)
    {
        $token = $request->token;

        $providerUser = Socialite::driver($provider)->userFromToken($token);

        return view('auth.social_register', [
            'provider' => $provider,
            'email' => $providerUser->getEmail(),
            'token' => $token,
        ]);
    }
    public function registerProviderUser(Request $request, string $provider)
    {
        $request->validate([
            'name' => ['required', 'string', 'min:3', 'max:16', 'unique:users'],
            'token' => ['required', 'string'],
        ]);

        $token = $request->token;

        $providerUser = Socialite::driver($provider)->userFromToken($token);

        $userData = Encodes::encodeFirstSelectCoord($request['coorditem']);


        $user = User::create([
            'name' => $request['name'],
            'gender' => $userData['gender'],
            'registerCoord' => $userData['coordId'],
            'email' => $providerUser->getEmail(),
            'password' => null,
        ]);

        $this->guard()->login($user, true);

        return $this->registered($request, $user)
            ?: redirect($this->redirectPath());
    }
}
