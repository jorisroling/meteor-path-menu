Package.describe({
  name: 'jorisroling:meteor-path-menu',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Path like menu in Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jorisroling/meteor-path-menu',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  // api.use('ecmascript');
  // api.addFiles('meteor-path-menu.js');
  api.addFiles([
    'jquery-ui-1.11.4.custom.js',
    'jquery.menu.js',
    'piemenu.css',
  ], 'client');
  api.addAssets(['cross.svg',
    'usr.png'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('jorisroling:meteor-path-menu');
  api.addFiles('meteor-path-menu-tests.js');
});
