$(function() {
   tog();
});
$(document).on('page:load', function()
{
	tog();
} );
function tog(){
var elements = $(".shownbar");

	elements.attr("class", "hiddenbar");

}


function togglebar (barID) {
var whichpost = document.getElementById(barID);
if (whichpost.className=="shownbar")
{ whichpost.className="hiddenbar"; }
else { whichpost.className="shownbar"; }
}
