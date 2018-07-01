$(function() {

    const gridMaker = $("#pixelCanvas");

    

$("#sizePicker").submit(function(event) {

    event.preventDefault();				//avoids the page to be refreshed after clicking on submit button.

    makeGrid();

 });
  
  

    //execute makeGrid function in creating the table

    function makeGrid() {
		
		let gridHeight = $("#inputHeight").val();     // Grid height is the number of rows.

		let gridWeight = $("#inputWeight").val();     // Grid weight is the number of columns.
		gridMaker.empty();

        for (let row  = 0 ; row <= gridHeight - 1 ; row++){
            gridMaker.append("<tr>");
                for (let column = 0 ; column <= gridWeight - 1; column++){
                 $("tr").last().append("<td></td>");    //makes sure that the cells are added only to the last created table row and not for all.
                }
                gridMaker.append("</tr>");
        }
    }

		makeGrid();

	// add colors to individual cells
	
	$('#pixelCanvas').on("click" , "td", function () {            //event delegation
	const mark = $('#colorPicker').val();
	$(this).css('background-color',mark);
    });
		inputColour();

});


