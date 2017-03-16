Package.describe({
  summary: "Meteor smart package for FullPage.js. Create full screen pages fast and simple.",
  version: "1.3.1",
  git: "https://github.com/lawshe/full-page.git"
});


Package.on_use(function (api) {
  api.use('jquery@1.0.0');
  api.addFiles('jquery.fullPage.css', 'client');
  api.addFiles('jquery.slimscroll.min.js','client');
  api.addFiles('jquery.fullPage.min.js','client');
});
