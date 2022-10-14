//Exercise 1
//Adding class square to each div element on the board
window.onload = function()
{
    let board = document.getElementById('board');
    let squares = board.getElementsByTagName('div');

    for(let i of squares)
    {
        i.classList.add('square');   
    }

   
    let state = new Array(9);
    let lastPlayer = "O"
    let index = 0;
    let GameOver = false;
    let status = document.getElementById("status");

    for (let s of squares)
    {
        s.id = index++;
        s.onclick = (event) =>
        {
            //Exercise 2
            //Placing X or O in each square when clicked
            if(lastPlayer === "X")
            {
                //To prevent player from changing letters
                if (event.target.innerText === '')
                {
                    event.target.innerText = "O";
                    event.target.classList.add("O");
                    state[event.target.id] = "O";
                    lastPlayer = "O";
                }
                
            }

            else if(lastPlayer === "O")
            {
                if(event.target.innerText === '')
                {
                    event.target.innerText = "X";
                    event.target.classList.add("X");
                    state[event.target.id] = "X";
                    lastPlayer = "X";

                }
               
            }

            //Exercise 4
            //Winning Conditions
            if (state[0]!= undefined && ((state[0] === state[1] && state[1]===state[2])
            || (state[0]===state[3] && state[3]===state[6]) || (state[0]===state[4] && state[4]==state[8])))
            {
                status.innerText = `Congratulations! ${state[0]} is the Winner!`;
                status.classList.add('you-won');
                GameOver = true;
            }

            else if (state[4]!= undefined && ((state[2]===state[4] && state[4]==state[6]) 
            ||(state[3] === state[4] && state[4]===state[5]) || (state[1]===state[4] && state[4]===state[7])))
            {
                status.innerText = `Congratulations! ${state[4]} is the Winner!`;
                status.classList.add('you-won');
                GameOver = true;
            }

            else if(state[8]!== undefined && ((state[2]===state[5] && state[5]===state[8]) 
            || (state[6]===state[7] && state[7]===state[8])))
            {
                
                status.innerText = `Congratulations! ${state[8]} is the Winner!`;
                status.classList.add('you-won');
                GameOver = true;
            }

        }

         //Exercise 3
         //Adding hover functionality to each square
         s.onmouseover = function()
         {
             this.classList.add("hover");
         }

         s.onmouseout = function() 
         {
             s.classList.remove("hover");
         }

    }

    //Exercise 5
    //New game button in order to restart the game
    let newGame = document.querySelector('button');

    newGame.addEventListener("click", function()
    {
        state = new Array(9);
        GameOver = false;
        lastPlayer = "O";

        status.classList.remove('you-won');
        status.innerText = 'Move your mouse over a square and click to play an X or an O.';

        for (let s of squares)
        {
            s.classList.remove('X');
            s.classList.remove('O');
            s.innerText = '';
        }
    });
}

