//Exercise 1
window.onload = function()
{
    let board = document.getElementById('board');
    let squares = board.getElementsByTagName('div');

    for(let i of squares)
    {
        i.classList.add('square');   
    }

   
    let state = new Array(9);
    const options = ['X', 'O'];
    let lastPlayer = "O"
    let index = 0;

    for (let s of squares)
    {
        s.id = index++;
        s.onclick = (event) =>
        {
            //Exercise 2
            if(lastPlayer === "X")
            {
                event.target.innerText = "O";
                event.target.classList.add("O");
                state[event.target.id] = "O";
                lastPlayer = "O";
            }

            else if(lastPlayer === "O")
            {
                event.target.innerText = "X";
                event.target.classList.add("X");
                state[event.target.id] = "X";
                lastPlayer = "X";
            }

        }

         //Exercise 3
         s.onmouseover = function()
         {
             this.classList.add("hover");
         }

         s.onmouseout = function() 
         {
             s.classList.remove("hover");
         }
         
    }
    

}

