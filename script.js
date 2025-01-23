const btnYes = $("#btn-yes");
const btnNo = $("#btn-no");

let yesCount = 0;
let noCount = 0; 

btnYes.on( "click", function() {
    yesCount++;
    $("#yesCount").text(yesCount)
});

btnNo.on("click", function() {
    noCount++;
    $("#noCount").text(noCount)
});