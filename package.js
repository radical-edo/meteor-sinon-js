Package.describe({
  name: 'radical3do:sinon',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Meteor Sinon.js package warper',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/radical-edo/meteor-sinon-js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "exposify": "0.5.0",
  "sinon": "1.17.4"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['cosmos:browserify@0.9.3']);
  api.addFiles('sinon.1.17.4.browserify.js');
  api.export(['sinon']);
});
