let str="hello-bro";
function kebabToSnake(str)
{
    let s=str.replace(/-/g,"_");
    return s;
}
console.log(kebabToSnake("Hello-I-am-Vaibhav"));