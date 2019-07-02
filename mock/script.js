var WIDTH_COUNT = 5;
var HEIGHT_COUNT = 5;

var SAPER_POLE = document.getElementById("saper_pole");

var Cells = {
    id: 0,
    pos_w: 0,
    pos_h: 0,
    status: 0, /*0 - close, 1 - open*/
    weight: 0, /* weight >= 9 - this mine */
    mark: 0, /*0 - empty, 1 - ?, 2 - ^. visible on open status */
    
}

function drawCells(width, height, cells){
    for(var j = 1; j <= width; j++){
        for(var k = 1; k <= height; k++){
            var cell = document.createElement("div");
            cell.className = "cell";
            cell.id = j + "_" + k;
            SAPER_POLE.appendChild(cell);
        }
    }
}


(drawCells(WIDTH_COUNT,HEIGHT_COUNT,null));