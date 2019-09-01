let ans=prompt("what do you want todo");
let list=new Array();
while(ans!="quit")
{
    if(ans=="new")
    {
        list.push(prompt("Enter a new todo"));
    }
    if(ans=="list")
    {
        console.log("**********************");
        for(let i=0;i<list.length;i++)
        {
            console.log(i+": "+list[i]);
        }
        console.log("**********************");
        
    }
    ans=prompt("What more you want to do");
}
console.log("Ok you have now quit the app ");