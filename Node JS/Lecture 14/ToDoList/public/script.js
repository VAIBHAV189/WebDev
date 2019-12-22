$(()=>
{
    let newtodo = $('#newtodo')
    let addtodo = $('#addtodo')
    let tasklist = $('#tasklist')
    function refreshTodos()
    {
        tasklist.empty()
        $.get('/todos',(data)=>
        {
            for(let todo of data)
            {
                tasklist.append
                (
                    $('<li>')
                        
                        .text(todo)
                        .prop("contenteditable",'true')
                        .append
                        (
                            $('<button>')
                                .attr('id','deltask')
                                .text('X')
                                .click((event)=>{
                                    $.get(`/deletetodo?del=${todo}`,(data)=>
                                    {
                                        if(data=='removed successfully')
                                        {
                                            refreshTodos();
                                        }
                                    })
                                }),
                            $('<button>')
                                .attr('id','update')
                                .text('U')
                                .click(function(event)
                                {
                                    let y=$(this).parent().text();
                                    let naya=y.substring(0,y.length-2);

                                    $.get(`/updatetodo?purana=${todo}&naya=${naya}`,(data)=>{
                                        if(data=='updated')
                                        {
                                            refreshTodos();
                                        }
                                    })
                                })

                        )
                )
            }
        })
    } 
    
    refreshTodos()
    addtodo.click(()=>{
        let value = newtodo.val();
        newtodo.val("");
        $.get(`/addtodo?newtodo=${value}`,(data)=>{
            if(data == 'success') {
                refreshTodos();
            }
        })
    })

})