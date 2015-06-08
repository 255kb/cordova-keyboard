# Meteor Cordova Keyboard package

## What is it?

Cordova-keyboard is a lightweight package allowing to check the keyboard status (visible or hidden) reactively in a Meteor application.

## Installation

Add the package in your Meteor application with this command:

```
meteor add 255kb:cordova-keyboard
```

## Usage

You can either check the keyboard status by using the Session variable `isKeyboardVisible` or one of the two global templates `isKeyboardVisible` and `isKeyboardHidden`: 


    Session.get('isKeyboardVisible');

Or 
    
    {{#if isKeyboardVisible}}
    
    {{/if}}
    
    {{#if isKeyboardHidden}}
    
    {{/if}}
    
## Dependencies
- com.ionic.keyboard@1.0.4