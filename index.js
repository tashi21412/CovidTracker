var myObj;

$( window ).on( "load", function() {
        console.log( "window loaded" );
        $( document ).ready(function() {

          $.get("https://api.covid19api.com/summary", function(data, status){


          myObj = data;
          console.log(myObj);

          if ( status == "success"){
              loadSummaryTable(myObj);
          }

      });
    });
});


function loadSummaryTable (data){
  var txt;
  var myTable = "myTable";


  for (var x = 0; x < myObj.Countries.length; x++) {
    txt += "<tr class=" + myTable + "><td class=" + myTable + ">" + myObj.Countries[x].Country + "</td>";
    txt += "<td class=" + myTable + ">" + myObj.Countries[x].NewDeaths + "</td>";
    txt += "<td class=" + myTable + ">" + myObj.Countries[x].TotalDeaths + "</td>";
    txt += "<td class=" + myTable + ">" + myObj.Countries[x].NewRecovered + "</td>";
    txt += "<td class=" + myTable + ">" + myObj.Countries[x].TotalRecovered + "</td></tr>";
  }
  $('#summaryTable').append(txt);

}

function sortMyObj(property){

  switch (property) {
    case "Country":

      break;
    default:

  }
}
