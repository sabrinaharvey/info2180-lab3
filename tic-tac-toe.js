window.onload = function()
{
    let board = document.getElementById("board");
    console.log(board);
    let squares = document.querySelectorAll("#board div");
    
    for(var i in squares)
    {
        squares[i].classList.add("square");
    }


    



}