console.log(new Date().getTime()); //To display time in ms from 1 Jan 1970
function waitASec()
{
    let startTime=new Date().getTime();
    while(new Date().getTime()<startTime+1000)
    {
        //Wait karne k liye loop
    }
}
function myFun()
{
    console.log("Funtion is running");
}
function runAfterNSec(fun,n)
{
    for(let i=0;i<n;i++)
    {
        waitASec();
    }
    fun();
}
runAfterNSec(myFun,5);