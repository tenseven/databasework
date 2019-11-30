var show_book=new XMLHttpRequest();
show_book.open("POST","show_book.php",true);
show_book.setRequestHeader('content-type','application/json');
var send_null=JSON.stringify();
show_book.onreadystatechange=function (){
    if(show_book.readyState==XMLHttpRequest.DONE && show_book.status==200){
        var get_reply=JSON.parse(this.responseText);
        var book_amount=get_reply.number;
        var book_block=document.getElementById("book_block");

        for(times=0;times<book_amount;times++){
            var create_book_pic=document.createElement('div');
            create_book_pic.className='bookunit';
            console.log(get_reply.errmsg[times].id);
            create_book_pic.innerHTML='<ul class="list"><li class="list2"><a style="text-decoration:none;" href="/matirials/book.html?id='+get_reply.errmsg[times].id+'"><img src='+get_reply.errmsg[times].picture+' height="210px" width="200px" alt="暂无封面"></a></li>'+
            '<li class="list2"><a style="text-decoration:none;color:black;" href="/matirials/book.html?id='+get_reply.errmsg[times].id+'">'+get_reply.errmsg[times].name+'</a></li><li class="list2">&nbsp;&nbsp;&nbsp;&nbsp;</li><li class="list2">&nbsp;&nbsp;&nbsp;&nbsp;</li></ul><ul class="list"><li class="list2">&nbsp;&nbsp;&nbsp;&nbsp;</li><li class="list2">&nbsp;&nbsp;&nbsp;&nbsp</li></ul>'
            book_block.append(create_book_pic);
        }
        
        
    }
}
show_book.send(send_null);