<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\DB;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->command('inspire')->hourly();

        // 毎日深夜0時に実行
        $schedule->call(function () {
            DB::table('caps_counts')->update(['day' => 0]);
            DB::table('tops_counts')->update(['day' => 0]);
            DB::table('pants_counts')->update(['day' => 0]);
            DB::table('shoes_counts')->update(['day' => 0]);
        })->daily();

        // 毎週日曜日の00:00にタスク実行
        $schedule->call(function () {
            DB::table('caps_counts')->update(['week' => 0]);
            DB::table('tops_counts')->update(['week' => 0]);
            DB::table('pants_counts')->update(['week' => 0]);
            DB::table('shoes_counts')->update(['week' => 0]);
        })->weekly();

        // 毎月１日の00:00にタスク実行
        $schedule->call(function () {
            DB::table('caps_counts')->update(['month' => 0]);
            DB::table('tops_counts')->update(['month' => 0]);
            DB::table('pants_counts')->update(['month' => 0]);
            DB::table('shoes_counts')->update(['month' => 0]);
        })->monthly();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
