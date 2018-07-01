$(function() {

    const gridMaker = $("#pixelCanvas");

    

$("#sizePicker").submit(function(event) {

    event.preventDefault();

    makeGrid();

 });
  
  

    //execute makeGrid function in creating the table

    function makeGrid() {
		
		let gridHeight = $("#inputHeight").val();

		let gridWeight = $("#inputWeight").val();
		gridMaker.empty();

        for (let row  = 0 ; row <= gridHeight - 1 ; row++){
            gridMaker.append("<tr>");
                for (let column = 0 ; column <= gridWeight - 1; column++){
                 $("tr").last().append("<td></td>");
                }
                gridMaker.append("</tr>");
        }
    }

		makeGrid();

	// add colors to individual cells
	
	$('td').click(function inputColour(){
        myColour = $('#colorPicker').val();
		
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + myColour);
        }

    })
		inputColour();

});


