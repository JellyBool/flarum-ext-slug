<?php

namespace JellyBool\Chinese\Listener;

use JellyBool\Translug\Translug;
use Flarum\Event\DiscussionWillBeSaved;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Settings\SettingsRepositoryInterface;

/**
 * Class AddChineseSlug
 * @package Jellybool\Chinese\Listener
 */
class AddChineseSlug {

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @param SettingsRepositoryInterface $settings
     */
    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * @param Dispatcher $events
     */
    public function subscribe(Dispatcher $events)
    {
        $events->listen(DiscussionWillBeSaved::class, [$this, 'slugDiscussionTitle']);
    }

    /**
     * @param DiscussionWillBeSaved $event
     */
    public function slugDiscussionTitle(DiscussionWillBeSaved $event)
    {
        $translator = $this->getTranslator();
        $slug = $translator->translug($event->discussion->title);
        $event->discussion->slug = $slug;
    }

    /**
     * @return Translug
     */
    protected function getTranslator()
    {
        return new Translug([
            'appKey' => $this->settings->get('jellybool-slug.apikey'),
            'appSecret' => $this->settings->get('jellybool-slug.apisecret')
        ]);
    }
}