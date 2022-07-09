var currentDay = moment();
$("#currentDay").text(currentDay.format("MMM Do, YYYY"));
// grab current hour
let currentHour = moment().format('H');
console.log(currentHour)
// grab all them text blocks
var textBlocks = $(".form-control");
//variables for local storage
var save4Later = document.querySelector(".input-group");
var task = document.querySelector('.form-control');
var button = $('.saveBtn');





var localStorageSave = function() {
    var userInput = $(this).parent().siblings('input').val()
    var id = $(this).parent().siblings('input').attr('id')
    console.log(id)
    localStorage.setItem(id, userInput);
}

button.on('click', localStorageSave);




// Loop through each text block and change background based on what hour it is using moment
for (var i = 0; i < textBlocks.length; i++) {
    var textBlocksID = textBlocks[i].id;
    var change = document.getElementById(textBlocks[i].id);
// console.log(textBlocks[i])
    // $(textBlocksID[i].id).removeClass('.present .past .future');
    if (textBlocksID < currentHour) {
        $(textBlocks[i]).removeClass('present past future');
        $(textBlocks[i]).addClass('past');
        
    } else if (textBlocksID > currentHour) {
        $(textBlocks[i]).removeClass('present past future');
        $(textBlocks[i]).addClass('future');
    } else {
        $(textBlocks[i]).removeClass('present past future');
        $(textBlocks[i]).addClass('present');
    // } console.log($(textBlocksID[i]))
    }}
    


for (var j = 9; j <= 17; j++) {
    if (j===9){
    $('#0'+j).val(localStorage.getItem('0'+j))
}else{
    $('#'+j).val(localStorage.getItem(j))
}
}