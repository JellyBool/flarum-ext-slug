import app from 'flarum/app';

import SlugSettingsModal from 'jellybool/slug/components/SlugSettingsModal';

app.initializers.add('jellybool-slug', () => {
    app.extensionSettings['jellybool-slug'] = () => app.modal.show(new SlugSettingsModal());
});
