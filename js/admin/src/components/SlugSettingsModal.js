import SettingsModal from 'flarum/components/SettingsModal';

export default class SlugSettingsModal extends SettingsModal {
  className() {
    return 'Modal--small';
  }

  title() {
      return app.translator.trans('jellybool-slug.admin.settings.title');
  }

  form() {
    return [
      <div className="Form-group">
        <label>{app.translator.trans('jellybool-slug.admin.settings.apikey')}</label>
        <input className="FormControl" type="text" bidi={this.setting('jellybool-slug.apikey')}/>
          <label>{app.translator.trans('jellybool-slug.admin.settings.apisecret')}</label>
          <input className="FormControl" type="text" bidi={this.setting('jellybool-slug.apisecret')}/>
      </div>
    ];
  }
}
