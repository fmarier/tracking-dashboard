"use strict";

// December 24
var minDate = new Date(2014, 10, 24);

$(function() {
  Highcharts.setOptions({
    chart: {
      type: 'spline'
    },
    title: {
      x: -20 //center
    },
    xAxis: {
      type: 'datetime',
      // milliseconds
      minTickInterval: 24 * 3600 * 1000,
      // Why is this breaking?
      // min: minDate.getTime()
      // min: 1419379200000
    },
    yAxis: {
      min: 0
    },
  })
});

var tsChart;
var tsOptions = {
  legend: {
    enabled: true,
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 2
  },
  chart: {
    renderTo: 'timeseries'
  },
  title: {
    text: 'Tracking protection Shield Events'
  },
  yAxis: {
    title: {
      text: 'Proportion'
    },
  },
  series: [{ name: 'Tracking protection not active' },
           { name: 'Tracking protection disabled (shield strike-through)' },
           { name: 'Tracking protection enabled (shield showing)' }]
};

var volumeChart;
var volumeOptions = {
  legend: {
    enabled: true,
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 2
  },
  chart: {
    renderTo: 'volume'
  },
  title: {
    text: 'Tracking Protection Shield Events (Volume)'
  },
  yAxis: {
    title: {
      text: 'Volume'
    }
  },
  series: [{ name: 'Tracking protection not active' },
           { name: 'Tracking protection disabled (shield strike-through)' },
           { name: 'Tracking protection enabled (shield showing)' }]
};

var enabledChart;
var enabledOptions = {
  legend: {
    enabled: true,
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 2
  },
  chart: {
    renderTo: 'enabled'
  },
  title: {
    text: 'Tracking Protection Sessions Enabled'
  },
  xAxis: {
    type: 'datetime',
    // milliseconds
    minTickInterval: 24 * 3600 * 1000,
  },
  yAxis: {
    title: {
      text: 'Proportion enabled'
    }
  },
  series: [{ name: 'Enabled' }]
};

var eventChart;
var eventOptions = {
  legend: {
    enabled: true,
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 2
  },
  chart: {
    renderTo: 'events'
  },
  title: {
    text: 'Tracking Protection Disable/Enable events'
  },
  xAxis: {
    type: 'datetime',
    // milliseconds
    minTickInterval: 24 * 3600 * 1000,
  },
  yAxis: {
    title: {
      text: 'Volume',
    }
  },
  series: [{ name: 'Disable' },
           { name: 'Enable' }]
};
