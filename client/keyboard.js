Session.setDefault('isKeyboardVisible', false);

//global helper
Template.registerHelper('isKeyboardVisible', function() {
    return Session.get('isKeyboardVisible');
});
Template.registerHelper('isKeyboardHidden', function() {
    if(!Session.get('isKeyboardVisible')) {
        return true;
    }
    return false;
});

Meteor.startup(function () {
    if(Meteor.isCordova) {
        window.addEventListener('native.keyboardshow', function () {
            Session.set('isKeyboardVisible', true);
        });
        window.addEventListener('native.keyboardhide', function () {
            Session.set('isKeyboardVisible', false);
        });
    }
});