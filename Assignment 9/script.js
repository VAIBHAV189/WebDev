function myFunction()
{
    let par=document.getElementById("p");
    let a=document.getElementById("num").value;
    let ans="";
    ans+=1;
    for(let i=2;i<=Number(a);i++)
    {
        
        if(i%3==0&&i%5==0)
        {
            ans+=", FizzBuzz";
        }
        else if(i%3==0)
        {
            ans+=", Fizz";
        }
        else if(i%5==0)
        {
            ans+=", Buzz";
        }
        else{
            ans+=", "+String(i);
        }
    }
    par.innerHTML=""+ans;
}