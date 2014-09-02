Package.describe({
  summary: "Meteor smart package for FullPage.js. Create full screen pages fast and simple.",
  version: "0.0.5",
  git: "https://github.com/lawshe/full-page.git"
});


Package.on_use(function (api) {
  api.use('jquery');
  api.addFiles('jquery.fullPage.css', 'client');
  api.addFiles('vendors/jquery.easings.min.js', 'client');
  api.addFiles('vendors/jquery.slimscroll.min.js', 'client');
  api.addFiles('jquery.fullPage.min.js','client');
});
