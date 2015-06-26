Package.describe({
    name: '255kb:cordova-keyboard',
    version: '1.1.0',
    summary: 'Reactive keyboard status for Meteor Cordova apps.',
    git: 'https://github.com/255kb/cordova-keyboard',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');

    api.use(['session', 'templating'], 'client');

    Cordova.depends({
        "com.ionic.keyboard": "1.0.4"
    });

    api.addFiles(['client/keyboard.js'], 'web.cordova');
});