var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));
// grab current hour
let currentHour = moment().format('H');
// grab all them text blocks
var textBlocks = $(".form-control");
// Loop through each text block and change background based on what hour it is using moment
for (var i = 0; i < textBlocks.length; i++) {
    var textBlocksID = textBlocks[i].id;
    var change = document.getElementById(textBlocks[i].id);

    // $(textBlocksID[i].id).removeClass('.present .past .future');
    if (textBlocksID < currentHour) {
        $(change).removeClass('.present .past .future');
        $(change).addClass('.past');
        
    } else if (textBlocksID > currentHour) {
        $(change).removeClass('.present .past .future');
        $(change).addClass('.future');
    } else {
        $(change).removeClass('.present .past .future');
        $(change).addClass('.present');
    } console.log($(textBlocksID[i]))
}
