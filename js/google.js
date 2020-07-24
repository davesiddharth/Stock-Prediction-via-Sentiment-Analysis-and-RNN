Plotly.d3.csv('../data/google_stock.csv', function(err,rows){

function unpack(rows, key) {
  return rows.map(function(row) {
    return row[key];
  });
}

var trace = {
  x: unpack(rows, 'Date'),
  close: unpack(rows, 'Close'),
  high: unpack(rows, 'High'),
  low: unpack(rows, 'Low'),
  open: unpack(rows, 'Open'),

  // cutomise colors
  increasing: {line: {color: 'green'}},
  decreasing: {line: {color: 'red'}},

  type: 'candlestick',
  xaxis: 'x',
  yaxis: 'y'
};

var data = [trace];

var layout = {
  dragmode: 'zoom',
  showlegend: false,
  xaxis: {
    rangeslider: {
		 visible: true
   },
   title: "Time period",
   rangeselector: {buttons: [
    {
      count: 6,
      label: '6m',
      step: 'month',
      stepmode: 'backward'
    },
    {
      count: 1,
      label: '1y',
      step: 'year',
      stepmode: 'backward'
    },
    {
      count: 3,
      label: '3y',
      step: 'year',
      stepmode: 'backward'
    },
    {step: 'all'}
  ]},
  },
  yaxis:{title: "Stock Price"},
  title: {
    text: "Stock trend (2014-2020)",
    font: {
      size: 24
    },
  },

};

Plotly.newPlot('google_plot', data, layout);
});


