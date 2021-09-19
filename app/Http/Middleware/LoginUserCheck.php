<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginUserCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

                 $loginId = Auth::id();

                 //ログイン者とカート情報作成者が一致しなければ別のページにリダイレクト
                 if ($loginId == 7 || $loginId == 2 || $loginId == 1) {
                     return $next($request);
                }

                return redirect(route('lp'));
    }
}
