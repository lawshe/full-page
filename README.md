# fullPage.js - Meteor Smart Package
This is a meteor smart package for [fullPage.js](http://alvarotrigo.com/fullPage/).

# How to use
- `meteor add lawshe:full-page`

## Initialize
```javascript
Template.TemplateName.rendered = function() {
    $('#fullpage').fullpage();
}
```

## Template Event Handlers

In order for the template event handlers (like button clicks) to work, you should take into account that fullPage wraps your content inside wrappers as "dynamically added content". This will break the integration with Meteor's event handling.

You can avoid this behaviour by initializing with  following options:
```javascript
Template.TemplateName.rendered = function() {
  $('#fullpage').fullpage({
        verticalCentered: false,
        scrollOverflow: false
      });
}
```
Another way to deal with this issue is by using jQuery's.delegate() Method for Dynamic Event Binding.
