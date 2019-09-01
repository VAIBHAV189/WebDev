function capitalize(str)
{
    return str.charAt(0).toUpperCase()+str.slice(1);
}
let city="delhi"
let newCity=capitalize(city);
console.log(newCity);