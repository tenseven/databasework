function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
var id=getQueryVariable("id");
var get_book_info=new XMLHttpRequest();
get_book_info.open("POST","get_book.php",true);
get_book_info.setRequestHeader('content-type','application/json');
var identi={
    'id':id
}
var send_book_number=JSON.stringify(identi);
get_book_info.onreadystatechange=function (){
    if(get_book_info.readyState==XMLHttpRequest.DONE && get_book_info.status==200){
        var get_book=JSON.parse(this.responseText);
        var picture_div=document.getElementById("picture_block");
        var picture_addr=get_book.errmsg[2];
        var name=get_book.errmsg[0];
        var author=get_book.errmsg[1];
        var classification=get_book.errmsg[3];
        var introduction=get_book.errmsg[4];
        var comeout_year=get_book.errmsg[5];
        var publication=get_book.errmsg[6];
        var down_addr=get_book.errmsg[7];
        var down_times=get_book.errmsg[8];
        var add_picture=document.createElement('div');
        add_picture.className="add_div";
        add_picture.innerHTML='<img class="imgstyle" src="'+picture_addr+'" height="500px" width="400px" >';
        picture_div.append(add_picture);
        add_picture.className="add_div1";
        var add_word=document.createElement('div');
        add_word.className="add_div";
        add_word.innerHTML='<li class="list1">书名：'+name+'</li><li class="list1">作者：'+author+'</li><li class="list1">类别：'+classification+'</li><li class="list1">出版社：'+publication+'</li><li class="list1">出版年份：'+comeout_year+'</li><li class="list1star"><a id="download_link" style="color:black;text-decoration:none;" href="'+down_addr+'">下载      </a><img src="photo/downloadarrow.jpg" style="width:25px;height:26px;margin-top:20%;"></li>';
        picture_div.append(add_word);
        add_word.className="add_div2";
        add_intro=document.createElement('div');
        add_intro.className="add_div3";

        add_intro.innerHTML='简介:'+introduction;
        picture_div.append(add_intro);
    }
}
get_book_info.send(send_book_number);