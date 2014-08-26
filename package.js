Package.describe({
  summary: 'Meteor smart package for FullPage.js. Create full screen pages fast and simple.'
});

Package.on_use(function (api) {
    api.add_files([
        'jquery.fullPage.css',
        'jquery.fullPage.min.js',
        'vendors/jquery.easings.min.js',
        'vendors/jquery.slimscroll.min.js'
    ], 'client');
});

Package.on_test(function (api) {
  api.use('full-page');
  //api.add_files('full-page_tests.js', ['client', 'server']);
});

