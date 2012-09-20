meteor-charts
=============

Meteor-Charts : live reactive Javascript charting package (line, dot, bar, pie, interactive pie)

Add charting to a Meteor project ( https://github.com/meteor/meteor )
Vector graphics charting updates when a Meteor.Collection is changed.


Installation
============
Copy the 'charts' package into your meteor/packages folder

mkdir $METEOR_HOME/packages/charts
cp meteor-charts/packages/charts/* $METEOR_HOME/packages/charts/


Create a meteor project folder, then copy the demo app into it

mkdir $METEOR_HOME/projects
cd $METEOR_HOME/projects
meteor create meteor-charts
meteor add charts
cd (git clone directory of meteor-charts)
cp meteor-charts/meteor-charts/* $METEOR_HOME/projects/meteor-charts  


DEMO
====

Start the demo project
cd $METEOR_HOME/projects/meteor-charts/
meteor

Open a browser to the default page:

http://localhost:3000/


Add Initial Data
================

View, Developer, Javascript Console, Console tab

PieChart.insert({ name:'Chicago', x:5});
PieChart.insert({ name:'New York', x:4});
PieChart.insert({ name:'Toronto', x:7});

LineChart.insert({ name:'Toronto', x:7, y:5});
LineChart.insert({ name:'Seattle', x:1, y:10});
LineChart.insert({ name:'Dallas', x:2, y:15});

Watch the charts update on the fly in different browsers when you add new elements.


FEATURES
========

Line Chart, Pie Chart are implemented now.  Others will follow.

Charts use relative position sizing on the page, so the Handlebars template that specifies the chart has a <div tag in it with a width and height specified.  This becomes the location of the chart on the screen automatically.

To change the sorting order or add more filtering to the Meteor collection, change the fetchDB function:
 
PieChart.fetchDB =  function() { return PieChart.find({},{sort : {x:-1}}).fetch(); }

To change options and legends, update the member:

PieChart.chartOptions 


LICENSE
=======
Copyright (c) 2012  Dave Abrams  (dave at daveab.com)

MIT License (MIT)
http://opensource.org/licenses/MIT


DEPENDENCIES 
============
This library uses the http://g.raphaeljs.com/ Javascript package (MIT license). Please donate at g.raphaeljs.com 
