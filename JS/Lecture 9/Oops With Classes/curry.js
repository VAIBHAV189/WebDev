function add(val)
{
    function helper(nextVal)
    {
        if(typeof nextVal=='undefined')
        {
            return val;
        }
        val+=nextVal;
        return helper;
    }
    return helper;
    
}

console.log(add(1)(2)(3)());