let mat=new Array(100);
let it=0;
for(let i=0;i<100;i++)
{
    mat[i]=new Array(2);
}
function Add()
{
    let n=document.getElementById("name").value;
    let a=document.getElementById("age").value;
    mat[it][0]=n;
    mat[it][1]=a;
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    it++;
    let li=document.createElement("li");
    li.innerText=n+" "+a;
    let list=document.getElementById("list");
    list.appendChild(li);
}
function Name_Sort()
{
    for(let i=0;i<it-1;i++)
    {
        for(let j=0;j<it-i-1;j++)
        {
            if(mat[j][0]>mat[j+1][0])
            {
                let temp=mat[j][0];
                mat[j][0]=mat[j+1][0];
                mat[j+1][0]=temp;
                let temp1=mat[j][1];
                mat[j][1]=mat[j+1][1];
                mat[j+1][1]=temp1;
            }
        }
    }    
   
    document.getElementById("list").innerHTML="";
    let list=document.getElementById("list");

    for(let i=0;i<it;i++)
    {
        let li=document.createElement("li");
        li.innerText=mat[i][0]+" "+mat[i][1];
        list.appendChild(li);   
    }
}

function Age_Sort()
{
    for(let i=0;i<it-1;i++)
    {
        for(let j=0;j<it-i-1;j++)
        {
            if(mat[j][1]>mat[j+1][1])
            {
                let temp1=mat[j][0];
                mat[j][0]=mat[j+1][0];
                mat[j+1][0]=temp1;
                let temp=mat[j][1];
                mat[j][1]=mat[j+1][1];
                mat[j+1][1]=temp;
            }
        }
    }    
    
    document.getElementById("list").innerHTML="";
    let list=document.getElementById("list");

    for(let i=0;i<it;i++)
    {
        let li=document.createElement("li");
        li.innerText=mat[i][0]+" "+mat[i][1];
        list.appendChild(li);   
    } 
}
