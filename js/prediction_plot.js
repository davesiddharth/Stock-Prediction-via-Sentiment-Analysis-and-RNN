// Plotly.d3.csv("../data/prediction_nb.csv", function(err, rows){

//   function unpack(rows, key) {
//   return rows.map(function(row) { return row[key]; });
// }


// // var trace1 = {
// //   type: "scatter",
// //   mode: "lines",
// //   name: 'Actual values',
// //   x: unpack(rows, 'Date'),
// //   y: unpack(rows, 'label'),
// //   line: {color: '#17BECF'}
// // }

// // var trace2 = {
// //   type: "scatter",
// //   mode: "lines",
// //   name: 'Predicted values',
// //   x: unpack(rows, 'Date'),
// //   y: unpack(rows, 'prediction'),
// //   line: {color: '#7F7F7F'}
// // }


// var trace={
//     values :unpack(rows, 'label'),
//      labels : unpack(rows, 'Date'), 
//     type: "pie"
// }
// var data = [trace];

// var layout = {
//   title: 'Prediction(NLP)',
// };

// Plotly.newPlot('myDiv', data, layout);
// })



Plotly.d3.csv("../data/prediction_nb.csv", function(err,rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}
// console.log(data)
var count_inc=0;
var count_dec=0;
var count_inc2=0;
var count_dec2=0;
// data.forEach(d=> {
//     if (d.label=1.0) {
//         count_inc= count_inc+1;
        
//     } 
//     else { 
//         count_dec= count_dec+1
        
//     }
    
// });

var val_label=unpack(rows,"label");
console.log(val_label)

var val_label_2=[]
val_label.forEach(d => {val_label_2.push(parseFloat(d))
    
});

console.log(val_label_2)
val_label_2.forEach(d=> {
        if (d==1.0) {
            count_inc= count_inc+1;
            
        } 
        else { 
            count_dec= count_dec+1
            
        }
        
    });

//Predicted Labels

var val_label_predicted=unpack(rows,"prediction");
console.log(val_label_predicted)

var val_label_predicted2=[]
val_label_predicted.forEach(d => {val_label_predicted2.push(parseFloat(d))
    
});

console.log(val_label_predicted2)
val_label_predicted2.forEach(d=> {
        if (d==1.0) {
            count_inc2= count_inc2+1;
            
        } 
        else { 
            count_dec2= count_dec2+1
            
        }
        
    });



// var trace1 = {
//   type: "scatter",
//   mode: "lines",
//   name: 'Actual values',
//   x: unpack(rows, 'Date'),
//   y: unpack(rows, 'label'),
//   line: {color: '#17BECF'}
// }

// var trace2 = {
//   type: "scatter",
//   mode: "lines",
//   name: 'Predicted values',
//   x: unpack(rows, 'Date'),
//   y: unpack(rows, 'prediction'),
//   line: {color: '#7F7F7F'}
// }


var trace1={
    values :[count_inc,count_dec],
     labels : ["Increase","Decrease"], 
    type: "pie",
    title: "Actual labels",
    domain:{
        row: 0,
        column:0
    }
}

var trace2={
    values :[count_inc2,count_dec2],
     labels : ["Increase","Decrease"], 
    type: "pie",
    title: "Predicted labels",
    domain:{
        row: 0,
        column:1
    }
}
var data = [trace1, trace2];

var layout = {
  title: 'Actual labels vs Predicted labels(NLP)',
//   annotations: [
//     {
//       font: {
//         size: 20
//       },
//       showarrow: false,
    
//       x: 0.17,
//       y: 0.5
//     },
//     {
//       font: {
//         size: 20
//       },
//       showarrow: false,
//       x: 0.82,
//       y: 0.5
//     }
//   ],
//   height: 400,
//   width: 600,
  
  grid: {rows: 1, columns: 2}
};

Plotly.newPlot('myDiv', data, layout);
})