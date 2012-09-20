//--------------------------------------------------------------
// METEOR CHARTS SMART PACKAGE
//
// Copyright (c) 2012  Dave Abrams  dave at daveab.com
//
// MIT License (MIT)
// http://opensource.org/licenses/MIT
// 
// Dependencies
// This library uses the http://g.raphaeljs.com/ Javascript package (MIT license).
// 
//------------------------------------------------------------

Package.describe({
  summary: "Meteor-Charts : live reactive charting package (line, dot, bar, pie, interactive pie)",
  internal: true
});

Package.on_use(function (api, where) {
  api.add_files([
    'raphael.js',
    'g.raphael.js',
    'g.bar.js',
    'g.dot.js',
    'g.line.js',
    'g.pie.js',
    'meteor_charts.js'
  ], 'client');
});