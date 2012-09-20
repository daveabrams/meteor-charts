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

var MeteorCharts = new Object();


//create a Meteor-Chart collection based on a mongodb document 
MeteorCharts.Collection=function(CC)
{
  //CC stands for ChartCollection
  //meteor collection that auto sync's with server database
  //decorated with methods and members to do live, reactive charts
  //when the collection changes data 
  //var CC = meteorCollection; //new Meteor.Collection(DBDocument);

  //DB fetch method.  override this to sort, filter
  //CC.fetchDB  = function() { return CC.find({}).fetch(); }
  CC.fetchDB  = function() { return CC.find({},{sort : {x:-1}}).fetch(); }

  //DB objects from fetch call
  CC.objectList = new Array(); 
  
  //Reactive Javascript array, used by chart method
  CC.dataArray = new Array(); 
  
  //reactive call to update array
  // ReactiveObjectList - results from a DB cursor - collection.find().fetch()
  // ReactiveArray - the array to update, uses the 'data' field 
  CC.updateArray = function() { 
    CC.dataArray.x=new Array();
    CC.objectList.forEach( function(z) { CC.dataArray.x.push(z.x); } );
  }
  
  //Reactive array for X,Y line charts
  CC.updateXYArray = function() { 
    CC.dataArray.x=new Array();
    CC.dataArray.y=new Array();
    CC.objectList.forEach( function(z) { CC.dataArray.x.push(z.x); CC.dataArray.y.push(z.y); } );
  }
  

  //react to database changes
  //meteor needs to know that we're interested in CC in the template
  CC.react = function() { CC.objectList = CC.fetchDB(); }

  //chart options
  CC.chartOptions = {};
  //See options at
  //http://g.raphaeljs.com/reference.html#Paper.linechart
  //http://g.raphaeljs.com/reference.html#Paper.piechart
  //TODO - make 'legend' a reactive array from 'name' field of the collection 

  //drawing canvas, used to clear it on updates
  CC.canvas=null;

  //CC.pie=null;

  //create pie chart
  CC.createPieChart = function(_this)
  {
    var x = _this.firstNode.offsetLeft;
    var y = _this.firstNode.offsetTop;
    var w = _this.firstNode.clientWidth; 
    var h = _this.firstNode.clientHeight; 
    var center_x = Math.round(w/2); 
    var center_y = Math.round(h/2);
    var radius = Math.round(Math.min(w/2,h/2));
   
    if (CC.canvas!=null)
    {  
      CC.canvas.clear(); 
      CC.canvas.setSize(w,h);
    }
    else 
    {
     CC.canvas= Raphael(x,y,w,h); 
    }
    return CC.canvas.piechart(center_x,center_y, radius, CC.dataArray.x, CC.chartOptions);
  }
   
  //update data array and pie chart
  CC.pieChart = function(_this)
  {
    CC.updateArray();
    CC.createPieChart(_this);
  }

  
  //create line chart
  CC.createLineChart = function(_this)
  {
    var x = _this.firstNode.offsetLeft;
    var y = _this.firstNode.offsetTop;
    var w = _this.firstNode.clientWidth; 
    var h = _this.firstNode.clientHeight; 
   
    if (CC.canvas!=null)
    {  
      CC.canvas.clear(); 
      CC.canvas.setSize(w,h);
    }
    else
    {
      CC.canvas = Raphael(x,y,w,h); 
    }
    return CC.canvas.linechart(0,0,w,h, CC.dataArray.x, CC.dataArray.y, CC.chartOptions);
  }
  
  //update data array and pie chart
  CC.lineChart = function(_this)
  {
    CC.updateXYArray();
    CC.createLineChart(_this);
  }
  
  CC.dotChart = function(_this) { 
  //TODO
  }
  
  CC.vBarChart = function(_this) { 
  //TODO
  }

  CC.barChart = function(_this) { 
  //TODO
  }
  
  return CC;
}
 
 
 
 
//-------------------------------------------------------------------
//EXAMPLE project.js Javascript to use meteor-charts

/*
/create collection objects with data available on client and server
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
*/


//-------------------------------------------------------------------
//EXAMPLE project.html to use meteor-charts

/*
<head>
  <title>Meteor-Charts</title>
</head>

<body>
  <h1>Meteor-Charts</h1>
   Pie Chart
   {{> piechart}}
  
    <p>
    Line Chart
    {{> linechart}}
 <p>
</body>


<template name="piechart">
  <div style='height:400px;width:400px;'>
  {{chart1}}
  </div>
</template>


<template name="linechart">
  <div style='height:400px;width:400px;'>
  {{chart2}}
  </div>
</template>
*/