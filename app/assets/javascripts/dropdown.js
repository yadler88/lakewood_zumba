function togglebar (barID) {
var whichpost = document.getElementById(barID);
if (whichpost.className=="shownbar")
{ whichpost.className="hiddenbar"; }
else { whichpost.className="shownbar"; }
}
