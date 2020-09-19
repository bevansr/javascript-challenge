// from data.js
var tableData = data;

// Select the table body element on the html document
var tbody = d3.select("tbody");

//Populate the table with data
tableData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the button and the form
var button = d3.select("#filter-btn");
var form = d3.select("form");
console.log(form);
// Create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // All data by default if no filters applied
  var filteredData = tableData

  // Select the input element and get the raw HTML node
  var dateInput = d3.select("#datetime");

  // Get the value property of each input element
  var dateInputValue = dateInput.property("value");
 
  // Apply filter based on input value
  if (dateInputValue != ""){
    console.log(dateInputValue);  
    filteredData = filteredData.filter(i => i.datetime === dateInputValue);
  }

  console.log(filteredData);

  // remove table body before we replace with filtered data
  tbody.html("");

  // Recreate table with filtered data only
  filteredData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
};