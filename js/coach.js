

function drawChart() {

  var graphData = [['sprint', "jedi", "coach", "total"]];

  


  for (var key in data){
    console.log("Ubicacion: "+key);

    var element = data[key];
    
    for(var key2 in element){
      console.log("Generacion: " +key2);

      var gen = element[key2];

      var rat = gen["ratings"];


      rat.forEach(i => {
        //console.log(i.teacher);
        //console.log(i.jedi);

        graphData.push([
        `sprint  ${key}  ${key2}`,
          i.teacher,
          i.jedi,
          i.teacher + i.jedi
        ]);



      });

      //console.log(rat["0"].teacher);


    }



  }


/*
    Pruebas de graficas para teacher y jedi
    var graphData = google.visualization.arrayToDataTable([
      ['sprint', "jedi", "coach", "total"],
      [
        'sprint 1',
        data.AQP["2016-2"].ratings["0"].teacher,
        data.AQP["2016-2"].ratings["0"].jedi,
        data.AQP["2016-2"].ratings["0"].teacher + data.AQP["2016-2"].ratings["0"].jedi
      ],
      [
        'sprint 2',
        data.AQP["2016-2"].ratings["1"].teacher,
        data.AQP["2016-2"].ratings["1"].jedi,
        data.AQP["2016-2"].ratings["1"].teacher + data.AQP["2016-2"].ratings["1"].jedi
      ],
      [
        'sprint 3',
        data.AQP["2016-2"].ratings["2"].teacher,
        data.AQP["2016-2"].ratings["2"].jedi,
        data.AQP["2016-2"].ratings["2"].teacher + data.AQP["2016-2"].ratings["2"].jedi
      ],
      [
        'sprint 4',
        data.AQP["2016-2"].ratings["3"].teacher,
        data.AQP["2016-2"].ratings["3"].jedi,
        data.AQP["2016-2"].ratings["3"].teacher + data.AQP["2016-2"].ratings["3"].jedi
      ]
    ]);
    */
  
    // Optional; add a title and set the width and height of the chart
    var options = { 'name': '', 'width': 600, 'height': 600 };
  
    // Display the chart inside the <div> element with id="piechart"
    var chart = new google.visualization.BarChart(document.getElementById('bar-chart'));
    //chart.draw(graphData, options);
  var graphDataFinal = google.visualization.arrayToDataTable(graphData);
  chart.draw(graphDataFinal,options);
  }

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);



