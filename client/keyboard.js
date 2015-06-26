//global helper
Template.registerHelper('isKeyboardVisible', function() {
    return Session.get('isKeyboardVisible');
});

Meteor.startup(function () {
    Session.setDefault('isKeyboardVisible', cordova.plugins.Keyboard.isVisible);

    window.addEventListener('native.keyboardshow', function () {
        Session.set('isKeyboardVisible', true);
    });
    window.addEventListener('native.keyboardhide', function () {
        Session.set('isKeyboardVisible', false);
    });
});