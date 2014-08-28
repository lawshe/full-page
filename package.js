Package.describe({
  summary: "Meteor smart package for FullPage.js. Create full screen pages fast and simple.",
  version: "0.0.2",
  git: "https://github.com/lawshe/full-page.git"
});

Package.on_use(function (api) {
    api.add_files([
        'jquery.fullPage.css',
        'vendors/jquery.easings.min.js',
        'vendors/jquery.slimscroll.min.js',
        'jquery.fullPage.min.js'
    ], 'client');
});

Package.on_test(function (api) {
  api.use('lawshe:full-page');
    api.add_files([
        'jquery.fullPage.css',
        'vendors/jquery.easings.min.js',
        'vendors/jquery.slimscroll.min.js',
        'jquery.fullPage.min.js'
    ], ['client', 'server']);
});
