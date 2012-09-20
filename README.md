meteor-charts
=============

Meteor-Charts : live reactive Javascript charting package (line, dot, bar, pie, interactive pie)

Add charting to a Meteor project ( https://github.com/meteor/meteor )
Vector graphics charting updates when a Meteor.Collection is changed.


Installation
============
Copy the 'charts' package into your meteor/packages folder
<br>
<code>mkdir $METEOR_HOME/packages/charts</code><br>
<code>cp meteor-charts/packages/charts/* $METEOR_HOME/packages/charts/</code><br>
<p>

Create a meteor project folder, then copy the demo app into it

<code>mkdir $METEOR_HOME/projects</code><br>
<code>cd $METEOR_HOME/projects</code><br>
<code>meteor create meteor-charts</code><br>
<code>meteor add charts</code><br>
<code>cd (git clone directory of meteor-charts)</code><br>
<code>cp meteor-charts/meteor-charts/* $METEOR_HOME/projects/meteor-charts  </code><br>


DEMO
====

Start the demo project<br>
<code>cd $METEOR_HOME/projects/meteor-charts/</code><br>
<code>meteor</code><br>

Open a browser to the default page:<br>

<a href="http://localhost:3000/">http://localhost:3000/</a>


Add Initial Data
================

View, Developer, Javascript Console, Console tab
<br>
<code>PieChart.insert({ name:'Chicago', x:5});</code><br>
<code>PieChart.insert({ name:'New York', x:4});</code><br>
<code>PieChart.insert({ name:'Toronto', x:7});</code><br>
<br>
<code>LineChart.insert({ name:'Toronto', x:7, y:5});</code><br>
<code>LineChart.insert({ name:'Seattle', x:1, y:10});</code><br>
<code>LineChart.insert({ name:'Dallas', x:2, y:15});</code><br>
<br>
Watch the charts update on the fly in different browsers when you add new elements.


FEATURES
========

Line Chart, Pie Chart are implemented now.  Others will follow.
<p>
Charts use relative position sizing on the page, so the Handlebars template that specifies the chart has a <code> div style= height:400px;width:400px; </code> tag in it with a width and height specified.  This becomes the location of the chart on the screen automatically.
<p>
To change the sorting order or add more filtering to the Meteor collection, change the fetchDB function:
 <p>
<code>PieChart.fetchDB =  function() { return PieChart.find({},{sort : {x:-1}}).fetch(); }</code><br>
<p>
To change options and legends, update the member:
<p>
<code>PieChart.chartOptions </code><br>


LICENSE
=======
Copyright (c) 2012  Dave Abrams  (dave at <a href="http://www.daveab.com/">daveab.com</a>)

MIT License (MIT)
http://opensource.org/licenses/MIT


DEPENDENCIES 
============
This library uses the http://g.raphaeljs.com/ Javascript package (MIT license). Please donate at g.raphaeljs.com 
