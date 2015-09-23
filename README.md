# Meteor Cordova Keyboard package

## What is it?

Cordova-keyboard is a lightweight package allowing to check the keyboard status (visible or hidden) reactively in a Meteor application.

## Installation

Add the package in your Meteor application with this command:

```
meteor add 255kb:cordova-keyboard
```

## Usage

You can either check the keyboard status by using the Session variable `isKeyboardVisible` or the global template `isKeyboardVisible`: 


    Session.get('isKeyboardVisible');

Or 
    
    {{#if isKeyboardVisible}}
    
    {{/if}}
    
    {{#unless isKeyboardVisible}}
    
    {{/unless}}
    
## Dependencies
- com.ionic.keyboard@1.0.7

## Changelog

### v1.2.0:
- switch to new Cordova plugins repository for dependency

### v1.1.1:
- default value to current keyboard state instead of false

### v1.1.0:
- remove unneeded global helper
