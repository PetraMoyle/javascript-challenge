// from data.js
var tableData = data;

// Viewing data to see if it's linked correctly 
console.log(tableData)

// Creating References
var tbody = d3.select("tbody")

// Reference to the buttons 
var button = d3.select("#filter-btn");
var resetButton = d3.select("#reset-btn");

// Create reset function to reset the table when the button is clicked
function runReset(info) {
    tbody.html("");
    info.forEach(sighting => {
        var row = tbody.append("tr");
        Object.values(sighting).forEach(value => {
            row.append("td").text(value);
        })
    });
};

runReset(data);

// Create a function to run the event/filter  
function runFilter() {
    d3.event.preventDefault();
    var inputFieldDate = d3.select("#datetime");
    var inputValueDate = inputFieldDate.property("value");
    var inputFieldCity = d3.select("#city");
    var inputValueCity = inputFieldCity.property("value");
    var inputFieldState = d3.select("#state");
    var inputValueState = inputFieldState.property("value");
    var inputFieldCountry = d3.select("#country");
    var inputValueCountry = inputFieldCountry.property("value");
    var inputFieldShape = d3.select("#shape");
    var inputValueShape = inputFieldShape.property("value");

    // Filter data based on the input
    var filterData = tableData.filter(rowData => (rowData.datetime === inputValueDate) ||
                                                 (rowData.city ===  inputValueCity) ||
                                                 (rowData.state ===  inputValueState) ||
                                                 (rowData.country ===  inputValueCountry) ||
                                                 (rowData.shape ===  inputValueShape));

    console.log(filterData);
    
    runReset(filterData);

};

button.on("click", runFilter);
resetButton.on("click", runReset);
