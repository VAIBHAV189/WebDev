let nrms=0;
let prms=0;
let rms=0;
function myFunction()
{

    let a=document.getElementById("box").value;
    let arr=(a.split(' '));
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>=0)
        {
            prms= Math.sqrt(Math.pow(prms,2)+Math.pow(Number(arr[i]),2));
        }
        else
        {
            nrms=Math.sqrt(Math.pow(nrms,2)+Math.pow(Number(arr[i]),2));
        }
        rms=Math.sqrt(Math.pow(rms,2)+Math.pow(Number(arr[i]),2));
    }
    let p=document.getElementById("prms");
    p.innerHTML=" PRMS:- "+prms;
    let n=document.getElementById("nrms");
    n.innerHTML=" NRMS:- "+nrms;
    let x=document.getElementById("rms");
    x.innerHTML=" RMS:- "+rms;
}

