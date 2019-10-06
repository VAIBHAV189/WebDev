// console.log(jQuery);

// window.onload=function() //After HTMl gets loaded , we prefer using this instead of defer as this method is supported in older versions of browsers
// {
//     console.log(jQuery);
// }

//Alternate of jQuery is $

// console.log(document.body.children);

// console.log($('#div'));


//Similar to onload
// $(document).ready(function(){
//     console.log(jQuery);

// })

//Using arrow functions


$(document).ready(()=>{
    console.log(jQuery);
    $('#div').css('background-color','orange');
    console.log($("#inp1").attr('checked',false)); //Two arguments use karte hain set karne k liye... single se hum check kar sakte hai
    $('#inp').val("HI There"); //Set the value of some id(setter)
    console.log($('#inp').val());  //Getter (when used without arguments it gives value)

    $('.mydiv').text("Hello Everyone");
    // $('.mydiv').html("I am <b>Vaibhav</b>"); //Agar HTml dalna ho (bold italics wagera saare tags use kar sakte ho iske through)
    
    
    // $('#div') returns this object which we can use for further operations
    // This is called Fluent API or Method Chaining
    $('#div').css('background','aqua').attr('class','div2'); // Method chaining or Fluent API
    console.log($('.div2').attr('id','division'));

    console.log($('div~div').text('I am sibling'));
})



