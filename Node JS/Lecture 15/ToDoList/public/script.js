$(()=>
{
    function refreshtodo()
    {
        $('#todolist').empty();
        $.get('/todos',(data)=>
        {
            for(let item of data)
            {
                $("#todolist").append
                (
                    $('<li>').append
                    (
                        item.name,
                        `<b>${item.priority}</b>`
                    )
                )
            }
        })
    }
    refreshtodo();

    $('#addtodo').click(()=>
    {
        $.post
        (
            '/todos',
            {
                name: $('#newtodo').val(),
                priority: +($('#priority').val())
            },
            (data)=>{
                refreshtodo();
            }
        )
    })
})