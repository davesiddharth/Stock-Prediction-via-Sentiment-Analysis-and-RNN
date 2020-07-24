
Plotly.d3.csv("../data/microsoft_predictions.csv", function(err,rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}
// console.log(data)
var count_inc=0;
var count_dec=0;
var count_inc2=0;
var count_dec2=0;

var val_label=unpack(rows,"Label");
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

var val_label_predicted=unpack(rows,"Prediction");
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





var trace1={
    values :[count_inc,count_dec],
     labels : ["Increase","Decrease"],
    //  marker:{colors:["blue","yellow"]}, 
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
    title: {
        text: "Sentiment Analysis",
        font: {
          size: 24
        },
      },


  grid: {rows: 1, columns: 2}
};

Plotly.newPlot('microsoft_predict', data, layout);
})