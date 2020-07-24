

Plotly.d3.csv('../data/target_stock/amazon_stock.csv', function(err,rows){

  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }
  
  var trace_train_target = {
    x: unpack(rows.slice(0,1192), 'Date'),
    //close: unpack(rows, 'Close'),
    //high: unpack(rows, 'High'),
    //low: unpack(rows, 'Low'),
    y: unpack(rows.slice(0,1192), 'Open'),
  
    // cutomise colors
    //increasing: {line: {color: 'green'}},
    //decreasing: {line: {color: 'red'}},
  
    type: 'line',
    xaxis: 'x',
    yaxis: 'y',
    name: 'train_target',
  
    line: {
      color: 'rgb(170, 183, 184)',
      width: 1
    }
  };
  
  var trace_valid_target = {
    x: unpack(rows.slice(1191, 1342), 'Date'),
    //close: unpack(rows, 'Close'),
    //high: unpack(rows, 'High'),
    //low: unpack(rows, 'Low'),
    y: unpack(rows.slice(1191, 1342), 'Open'),
  
    // cutomise colors
    //increasing: {line: {color: 'green'}},
    //decreasing: {line: {color: 'red'}},
  
    type: 'line',
    xaxis: 'x',
    yaxis: 'y',
    name: 'valid_target',
  
    line: {
      color: 'rgb(97, 106, 107)',
      width: 1
    }
  };
  
  var trace_test_target = {
    x: unpack(rows.slice(1341, 1490), 'Date'),
    //close: unpack(rows, 'Close'),
    //high: unpack(rows, 'High'),
    //low: unpack(rows, 'Low'),
    y: unpack(rows.slice(1341, 1490), 'Open'),
  
    // cutomise colors
    //increasing: {line: {color: 'green'}},
    //decreasing: {line: {color: 'red'}},
  
    type: 'line',
    xaxis: 'x',
    yaxis: 'y',
    name: 'test_target',
  
    line: {
      color: 'rgb(52, 73, 94)',
      width: 1
    }
  };
  
  
  
  
  var data = [trace_train_target, trace_valid_target, trace_test_target];
  
  var layout = {
    dragmode: 'zoom',
    showlegend: true,
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
    ]}
    },
    yaxis:{title: "Normalized Stock Price"}
  };
  
  Plotly.plot('amazon_prediction_plot', data, layout);
  
  });
  
  
  
