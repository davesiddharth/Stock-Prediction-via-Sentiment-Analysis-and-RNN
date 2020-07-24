Plotly.d3.csv('../data/predicted_stock/facebook_stock.csv', function(err,rows){

  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }
  
  var trace_train_pred = {
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
  
    name: 'train_prediction',
  
    line: {
      color: 'rgb(244, 208, 63)',
      width: 2
    }
  };
  
  var trace_valid_pred = {
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
    name: 'valid_prediction',
  
    line: {
      color: 'rgb(72, 201, 76)',
      width: 2
    }
  };
  
  var trace_test_pred = {
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
    name: 'test_prediction',
  
    line: {
      color: 'rgb(231, 76, 60)',
      width: 2
    }
  };
  
  
  
  
  var data = [trace_train_pred, trace_valid_pred, trace_test_pred];
  
  var layout = {
    title: {
      text: "RNN Prediction Model",
      font: {
        size: 24
      },
    },
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
  
  Plotly.newPlot('facebook_prediction_plot', data, layout);
  });