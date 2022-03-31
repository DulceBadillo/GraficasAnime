google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Actividad', 'Horas por dia'],
          ['trabajo',    7],
          ['universidad', 7],
          ['ver anime',  2],
          ['redes sociales', 2],
          ['Dormir',  6]
        ]);

        var options = {
          title: 'Mis actividades diarias',
          pieHole: 0.4,
        };

        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
      }