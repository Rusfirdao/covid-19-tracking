$(function(){
    
    var urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get('country'));

    var country = urlParams.get('country');
    $("#country").html(country);

    var url = "https://pomber.github.io/covid19/timeseries.json";

    $.getJSON(url, function (result) {

        var selectedCountry = result[country];
        console.log(selectedCountry);

        for(var i=0;i<selectedCountry.length;i++){
           
            var row = `<tr>
            <th scope="row">${selectedCountry[i].date}</th>
            <td>${selectedCountry[i].confirmed}</td>
            <td>${selectedCountry[i].recovered}</td>
            <td>${selectedCountry[i].deaths}</td>
            
          </tr>`

          $("#data").append(row);
        }
        var totolConfirm = `<div>${selectedCountry[selectedCountry.length-1].confirmed}</div>`

        $("#confirm").append(totolConfirm);

        var totolDeath = `<div>${selectedCountry[selectedCountry.length-1].deaths}</div>`

        $("#death").append(totolDeath);

        var totolRecover = `<div>${selectedCountry[selectedCountry.length-1].recovered}</div>`

        $("#recover").append(totolRecover);

        // chart
         
        $(document).ready(function() {
          initLineChart();
        });
        
        function initLineChart () {
          var areaChartData = {
            labels  : [
              selectedCountry[selectedCountry.length-15].date,
              selectedCountry[selectedCountry.length-14].date,
              selectedCountry[selectedCountry.length-13].date,
              selectedCountry[selectedCountry.length-12].date,
              selectedCountry[selectedCountry.length-11].date,
              selectedCountry[selectedCountry.length-10].date,
              selectedCountry[selectedCountry.length-9].date,
              selectedCountry[selectedCountry.length-8].date, 
              selectedCountry[selectedCountry.length-7].date, 
              selectedCountry[selectedCountry.length-6].date, 
              selectedCountry[selectedCountry.length-5].date, 
              selectedCountry[selectedCountry.length-4].date, 
              selectedCountry[selectedCountry.length-3].date, 
              selectedCountry[selectedCountry.length-2].date,
              selectedCountry[selectedCountry.length-1].date],
            datasets: [
              {
                label               : "Confirmed",
                backgroundColor     :  [
                  'rgb(244, 253, 184, .2)',
                  ],borderColor: [
                    'rgb(254, 243, 39,.7)',
                    ],borderWidth: 2,
                data                : [
                  selectedCountry[selectedCountry.length-15].confirmed,
                  selectedCountry[selectedCountry.length-14].confirmed,
                  selectedCountry[selectedCountry.length-13].confirmed,
                  selectedCountry[selectedCountry.length-12].confirmed,
                  selectedCountry[selectedCountry.length-11].confirmed,
                  selectedCountry[selectedCountry.length-10].confirmed,
                  selectedCountry[selectedCountry.length-9].confirmed,
                  selectedCountry[selectedCountry.length-8].confirmed, 
                  selectedCountry[selectedCountry.length-7].confirmed, 
                  selectedCountry[selectedCountry.length-6].confirmed, 
                  selectedCountry[selectedCountry.length-5].confirmed, 
                  selectedCountry[selectedCountry.length-4].confirmed, 
                  selectedCountry[selectedCountry.length-3].confirmed, 
                  selectedCountry[selectedCountry.length-2].confirmed,
                  selectedCountry[selectedCountry.length-1].confirmed
              ]
              },
              {
                label               : "Recovered",
                backgroundColor     : [
                  'rgb(15, 127, 39,.2)',
                  ],borderColor: [
                    'rgb(3, 98, 39,.7)',
                    ],
                data                : [
                  selectedCountry[selectedCountry.length-15].recovered, 
                  selectedCountry[selectedCountry.length-14].recovered, 
                  selectedCountry[selectedCountry.length-13].recovered, 
                  selectedCountry[selectedCountry.length-12].recovered, 
                  selectedCountry[selectedCountry.length-11].recovered, 
                  selectedCountry[selectedCountry.length-10].recovered, 
                  selectedCountry[selectedCountry.length-9].recovered, 
                  selectedCountry[selectedCountry.length-8].recovered, 
                  selectedCountry[selectedCountry.length-7].recovered, 
                  selectedCountry[selectedCountry.length-6].recovered, 
                  selectedCountry[selectedCountry.length-5].recovered, 
                  selectedCountry[selectedCountry.length-4].recovered, 
                  selectedCountry[selectedCountry.length-3].recovered, 
                  selectedCountry[selectedCountry.length-2].recovered,
                  selectedCountry[selectedCountry.length-1].recovered
                  ]
              },
              {
                label               : "Deaths",
                backgroundColor     : ['rgb(202, 45, 35,.2)',],
                borderColor: ['rgb(202, 45, 35,.7)',],borderWidth: 2,
                data                : [
                  selectedCountry[selectedCountry.length-15].deaths, 
                  selectedCountry[selectedCountry.length-14].deaths, 
                  selectedCountry[selectedCountry.length-13].deaths, 
                  selectedCountry[selectedCountry.length-12].deaths, 
                  selectedCountry[selectedCountry.length-11].deaths, 
                  selectedCountry[selectedCountry.length-10].deaths, 
                  selectedCountry[selectedCountry.length-9].deaths, 
                  selectedCountry[selectedCountry.length-8].deaths, 
                  selectedCountry[selectedCountry.length-7].deaths, 
                  selectedCountry[selectedCountry.length-6].deaths, 
                  selectedCountry[selectedCountry.length-5].deaths, 
                  selectedCountry[selectedCountry.length-4].deaths, 
                  selectedCountry[selectedCountry.length-3].deaths, 
                  selectedCountry[selectedCountry.length-2].deaths,
                  selectedCountry[selectedCountry.length-1].deaths
                  ]
              }
            ]
          }
          var lineChartOptions = {
            //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
            scaleBeginAtZero        : true,
            //Boolean - Whether grid lines are shown across the chart
            scaleShowGridLines      : true,
            //String - Colour of the grid lines
            scaleGridLineColor      : 'rgba(0,0,0,.05)',
            //Number - Width of the grid lines
            scaleGridLineWidth      : 1,
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines  : true,
            //Boolean - If there is a stroke on each bar
            barShowStroke           : true,
            //Number - Pixel width of the bar stroke
            barStrokeWidth          : 2,
            //Number - Spacing between each of the X value sets
            barValueSpacing         : 5,
            //Number - Spacing between data sets within X values
            barDatasetSpacing       : 1,
            //String - A legend template
            responsive              : true,
            maintainAspectRatio     : true,
            legend: {
              display: true,
              labels: {
                boxWidth: 15,
                defaultFontColor: '#343a40',
                defaultFontSize: 11,
              }
            }
          }
        
          var myChart = document.getElementById("lineChart");
          new Chart(myChart, {
            type: 'line',
            data: areaChartData,
            options: lineChartOptions
          });
        }
  });
});


