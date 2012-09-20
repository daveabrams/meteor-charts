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

//create collection objects with data available on client and server
var PieCollection  = new Meteor.Collection('PieCollection');
var LineCollection  = new Meteor.Collection('LineCollection');


if (Meteor.isClient) {

  var PieChart  = MeteorCharts.Collection(PieCollection);  //add decorators to make into a chart object
  // PieChart.insert({ name:'Chicago', x:5});
  // PieChart.insert({ name:'New York', x:4});
  // PieChart.insert({ name:'Toronto', x:7});

  var LineChart  = MeteorCharts.Collection(LineCollection);  //add decorators to make into a chart object
  // LineChart.insert({ name:'Toronto', x:7, y:5});
  // LineChart.insert({ name:'Seattle', x:1, y:10});
  // LineChart.insert({ name:'Dallas', x:2, y:15});

  //meteor needs to know that we're interested in PieChart collection
  Template.piechart.chart1 = function()  { PieChart.react(); return ""; }
  Template.piechart.rendered = function() { PieChart.pieChart(this); }
  
  Template.linechart.chart2 = function() { LineChart.react(); return ""; }
  Template.linechart.rendered = function() {  LineChart.lineChart(this); }
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}