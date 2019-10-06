$(()=>
{
    $('#btn').click(function()
    {
        console.log('Button is clicked');
    })
    $('#btn').unbind(); //Ab overwrite hoga neeche wala function

    $('#btn').click(()=>{
        console.log("Button Clicked Unbinding");
    })

    // $("#list").append("Not a form of list item");
    $("#list").append(
        $('<li>').text('List Item 1')

    );


})

