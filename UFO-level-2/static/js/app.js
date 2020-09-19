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

// Create event handlers
button.on("click", runEnter);

function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // All data by default if no filters applied
  var filteredData = tableData

  // Select the input element and get the raw HTML node
  var dateInput = d3.select("#datetime");
  var cityInput = d3.select("#city");
  var stateInput = d3.select("#state");
  var countryInput = d3.select("#country");
  var shapeInput = d3.select("#shape");

  // Get the value property of each input element
  var dateInputValue = dateInput.property("value");
  var cityInputValue = cityInput.property("value");
  var stateInputValue = stateInput.property("value");
  var countryInputValue = countryInput.property("value");
  var shapeInputValue = shapeInput.property("value");
  
  // Apply filters based on input values
  if (dateInputValue != ""){
    console.log(dateInputValue);  
    filteredData = filteredData.filter(i => i.datetime === dateInputValue);
  }

  if (cityInputValue != ""){
    console.log(cityInputValue); 
    filteredData = filteredData.filter(i => i.city === cityInputValue);
  }

  if (stateInputValue != ""){
    console.log(stateInputValue);  
    filteredData = filteredData.filter(i => i.state === stateInputValue);
  }

  if (countryInputValue != ""){
    console.log(countryInputValue);  
    filteredData = filteredData.filter(i => i.country === countryInputValue);
  }

  if (shapeInputValue != ""){
    console.log(shapeInputValue);  
    filteredData = filteredData.filter(i => i.shape === shapeInputValue);
  }

  console.log(filteredData);

  // remove table body before we replace with filtered data
  tbody.html("");

  filteredData.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
};