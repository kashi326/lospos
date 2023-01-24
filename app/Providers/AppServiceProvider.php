<?php

namespace App\Providers;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Response::macro('render', function ($view,$data = [], $code = 200) {
            if (request()->wantsJson()) {
                return Response::json([
                    'success' => true,
                    'data' => $data,
                ], $code);
            }
            return Inertia::render($view, $data);
        });
    }
}
