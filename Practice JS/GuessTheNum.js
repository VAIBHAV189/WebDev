let guess=Number(prompt("Guess the number"));
let num=4;
if(guess===4)
{
    alert("You got it right");
}
else if(guess<4)
{
    alert("too low. Try Again");
}
else{
    alert("too High. try Again");
}