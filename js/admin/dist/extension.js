'use strict';

System.register('jellybool/slug/components/SlugSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
  "use strict";

  var SettingsModal, SlugSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal.default;
    }],
    execute: function () {
      SlugSettingsModal = function (_SettingsModal) {
        babelHelpers.inherits(SlugSettingsModal, _SettingsModal);

        function SlugSettingsModal() {
          babelHelpers.classCallCheck(this, SlugSettingsModal);
          return babelHelpers.possibleConstructorReturn(this, (SlugSettingsModal.__proto__ || Object.getPrototypeOf(SlugSettingsModal)).apply(this, arguments));
        }

        babelHelpers.createClass(SlugSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return app.translator.trans('jellybool-slug.admin.settings.title');
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                app.translator.trans('jellybool-slug.admin.settings.apikey')
              ),
              m('input', { className: 'FormControl', type: 'text', bidi: this.setting('jellybool-slug.apikey') }),
              m(
                'label',
                null,
                app.translator.trans('jellybool-slug.admin.settings.apisecret')
              ),
              m('input', { className: 'FormControl', type: 'text', bidi: this.setting('jellybool-slug.apisecret') })
            )];
          }
        }]);
        return SlugSettingsModal;
      }(SettingsModal);

      _export('default', SlugSettingsModal);
    }
  };
});;
'use strict';

System.register('jellybool/slug/main', ['flarum/app', 'jellybool/slug/components/SlugSettingsModal'], function (_export, _context) {
    "use strict";

    var app, SlugSettingsModal;
    return {
        setters: [function (_flarumApp) {
            app = _flarumApp.default;
        }, function (_jellyboolSlugComponentsSlugSettingsModal) {
            SlugSettingsModal = _jellyboolSlugComponentsSlugSettingsModal.default;
        }],
        execute: function () {

            app.initializers.add('jellybool-slug', function () {
                app.extensionSettings['jellybool-slug'] = function () {
                    return app.modal.show(new SlugSettingsModal());
                };
            });
        }
    };
});