// from data.js
var tableData = data;

// Viewing data to see if it's linked correctly 
console.log(tableData);

// Creating References
var tbody = d3.select("tbody")

// Appending cells to the row for each value in the UFO sightings 
tableData.forEach(sighting => {
    var row = tbody.append("tr");
    Object.values(sighting).forEach(value => {
        row.append("td").text(value);
    });
});

// Event listener for the Filter Table button 
// Reference to the button 
var button = d3.select("#filter-btn");

// Create an event handler when the button is clicked
button.on("click", runFilter);

// Create a function to run the event 
function runFilter() {
    d3.event.preventDefault();
    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");
    var filterByDate = tableData.filter(rowData => rowData.datetime === inputValue);
    tbody.html("")
    filterByDate.forEach(sighting => {
        var row = tbody.append("tr");
        Object.values(sighting).forEach(value => {
            row.append("td").text(value);
        });
    });
};
