<?php namespace JellyBool\Chinese;

// 还有一点点 JS 的代码没有调试出来，配置的 Modal 没有弹出来
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->subscribe(Listener\AddClientAssets::class);
    $events->subscribe(Listener\AddChineseSlug::class);
};



