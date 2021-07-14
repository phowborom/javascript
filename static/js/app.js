// from data.js
var tableData = data;
console.log(tableData);

// Reference table body
var tbody = d3.select("tbody");
console.log(data);

// Loop Through 'data' and console.log each sighting
data.forEach(function(ufo){
    console.log(ufo);
    var row = tbody.append("tr");

    // Use 'Objects.entries' to console.log each sighting
    Object.entries(ufo).forEach(function([key,value]){
        console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Define event to run filter
var button = d3.select("#filter-btn");
button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");

// User input location field
var inputElement = d3.select("#datetime"); 
var inputValue = inputElement.property("value");

// Filter data by user input and print out in each row
var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
filteredData.forEach(function(dateData){
    var row=tbody.append("tr");

    Object.entries(dateData).forEach(function([key,value]){
    var cell=tbody.append("td");
    cell.text(value);
        });
    });
});