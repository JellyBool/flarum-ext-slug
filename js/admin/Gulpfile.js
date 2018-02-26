var flarum = require('flarum-gulp');

flarum({
    modules: {
        'jellybool/slug': [
            'src/**/*.js'
        ]
    }
});
