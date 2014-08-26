Package.describe({
  summary: "Meteor smart package for FullPage.js. Create full screen pages fast and simple.",
  version: "1.0.1",
  git: "https://github.com/lawshe/full-page.git"
});

Package.on_use(function (api, where) {
    api.add_files([
        'jquery.fullPage.css',
        'jquery.fullPage.min.js',
        'vendors/jquery.easings.min.js',
        'vendors/jquery.slimscroll.min.js'
    ], 'client');
});

Package.on_test(function (api) {
  api.use('lawshe:full-page');
    api.add_files([
        'jquery.fullPage.css',
        'jquery.fullPage.min.js',
        'vendors/jquery.easings.min.js',
        'vendors/jquery.slimscroll.min.js'
    ], ['client', 'server']);
});
