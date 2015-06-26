Session.setDefault('isKeyboardVisible', false);

//global helper
Template.registerHelper('isKeyboardVisible', function() {
    return Session.get('isKeyboardVisible');
});

Meteor.startup(function () {
    window.addEventListener('native.keyboardshow', function () {
        Session.set('isKeyboardVisible', true);
    });
    window.addEventListener('native.keyboardhide', function () {
        Session.set('isKeyboardVisible', false);
    });
});