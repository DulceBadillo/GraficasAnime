 // Load the Visualization API and the corechart package.
 //tiene que ir 
 google.charts.load('current', {'packages':['corechart']});

 // Set a callback to run when the Google Visualization API is loaded.
 //tiene que ir si o sii
 google.charts.setOnLoadCallback(dibujarGrafica);

 // Callback that creates and populates a data table,
 // instantiates the pie chart, passes in the data and
 // draws it.
 function dibujarGrafica() {

   // Create the data table.
   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Topping');
   data.addColumn('number', 'Slices');
   data.addRows([
     ['campiñones',2.5],
     ['cebollas',0.5],
     ['aceitunas',0.1],
     ['Queso',5],
     ['jamon',1],
     ['Pepperoni',3],
     ['piña',3],
   ]);

   // Set chart options
   var options = {'title':'cuanta pizza comisteS anoche',
                  'width':450,
                  'height':300};

   // Instantiate and draw our chart, passing in some options.
   var chart = new google.visualization.PieChart(document.getElementById('grafica'));
   chart.draw(data, options);
 }