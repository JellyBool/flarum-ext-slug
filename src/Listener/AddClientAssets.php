<?php

namespace JellyBool\Chinese\Listener;

use DirectoryIterator;
use Flarum\Event\ConfigureLocales;
use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;

/**
 * Class AddClientAssets
 * @package Jellybool\Chinese\Listener
 */
class AddClientAssets {
    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(ConfigureClientView::class, [$this, 'configureClientView']);
        $events->listen(ConfigureLocales::class, [$this, 'configureLocales']);
    }

    /**
     * @param ConfigureClientView $event
     */
    public function configureClientView(ConfigureClientView $event)
    {
        if ($event->isAdmin()) {
            $event->addAssets([
                __DIR__ . '/../../js/admin/dist/extension.js',
            ]);
            $event->addBootstrapper('jellybool/slug/main');
        }
    }

    /**
     * @param ConfigureLocales $event
     */
    public function configureLocales(ConfigureLocales $event)
    {
        foreach (new DirectoryIterator(__DIR__.'/../../locale') as $file) {
            if ($file->isFile() && in_array($file->getExtension(), ['yml', 'yaml'])) {
                $event->locales->addTranslations($file->getBasename('.'.$file->getExtension()), $file->getPathname());
            }
        }
    }
}