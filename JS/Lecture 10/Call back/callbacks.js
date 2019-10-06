function f(f1)
{
    console.log('Fstarts to run  ');
    setTimeout(function()
    {
        let result='r';
        f1(result);
    },3000);
}


f(function(res)
{
    console.log('Function f has been completed and result is '+res);
})