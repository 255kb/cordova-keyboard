Package.describe({
    name: '255kb:cordova-keyboard',
    version: '1.2.0',
    summary: 'Reactive keyboard status for Meteor Cordova apps.',
    git: 'https://github.com/255kb/cordova-keyboard',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    api.use(['session', 'templating'], 'client');

    Cordova.depends({
        "ionic-plugin-keyboard": "1.0.7"
    });

    api.addFiles(['client/keyboard.js'], 'web.cordova');
});