
let gues_done=document.querySelector('#sub');
let rss=document.querySelector('#restart');
let currect_guess;
let rem_guess=3;



rss.addEventListener('click',startGame);
document.addEventListener('DOMContentLoaded',startGame);
gues_done.addEventListener('click',guessDone)


function startGame()
{

    var vv=document.querySelector('#restart');
    vv.innerHTML="" ;
    rem_guess=3;
    let printRes=document.querySelector('#res');
    printRes.innerHTML='';



    currect_guess=getRandomArbitrary(1,10);

    remainingMove();
}

function remainingMove()
{
    let mt=document.querySelector('#rem');
    mt.innerHTML='You have '+rem_guess+' remaining guess!';
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function guessDone(e)
{
    let num=document.querySelector('#guess').value;

   // console.log(num);

    makeRes(num);
}



function makeRes(num)
{
    console.log(num);
    console.log(currect_guess);

    let printRes=document.querySelector('#res');
    let r='';
    if(num==currect_guess)
    {
         r='Congratulations! You WIN!!';
         ED();
         isRestart();

    }
    else if(num<currect_guess)
    {
        r='Please Enter an Higher Number. ';
    }
    else{
        r='please Enter a Lower Number';
    }

    rem_guess=rem_guess-1;
    remainingMove();
    if(rem_guess==0)
    {
        r='Sory, You Lose The Game.';
        ED();
        isRestart();
    }


   
    
    printRes.innerHTML=r;

}

function isRestart()
{
    var vv=document.querySelector('#restart');
    vv.innerHTML="<a href=''> Click Here</a> to Restart the Game." ;
}


function ED()
{
    var disabled = document.getElementById("guess").disabled;
    if (disabled) {
        document.getElementById("guess").disabled = false;
    }
    else {
        document.getElementById("guess").disabled = true;
    }

    var disabled = document.getElementById("sub").disabled;
    if (disabled) {
        document.getElementById("sub").disabled = false;
    }
    else {
        document.getElementById("sub").disabled = true;
    }
}