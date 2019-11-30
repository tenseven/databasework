function check(){
    var xhr=new XMLHttpRequest();
    xhr.open("POST","login.php",true);
    xhr.setRequestHeader('Content-type', "application/json");
    var number=document.getElementById('number').value;
    var password=document.getElementById('pwd').value;
    var init_number=document.getElementById('init_number').value;
    var init_pwd=document.getElementById('init_pwd').value;
    var second_pwd=document.getElementById('second_pwd').value;
    var datas={
        "student_number":number,
        "password":password
    };
    var json_datas=JSON.stringify(datas);
    
    xhr.onreadystatechange = function(){
        if(xhr.readyState==XMLHttpRequest.DONE && xhr.status==200){
            var myresponse=JSON.parse(this.responseText);
            var judge=myresponse.errcode;
            var get_errmsg=myresponse.errmsg;
            if(judge==0){
                window.location.href="./shouye.html";
            }else{
                document.getElementById("response_msg").innerHTML=get_errmsg;
            }
        }
    }
    xhr.send(json_datas);
}
function display_login(){
    document.getElementById("change_signup").style.display='none';
    document.getElementById("change_login").style.display='block';
    document.getElementById("change_login").style;
    document.getElementById("login_border").style.borderColor="black";
    document.getElementById("signup_border").style.borderColor="white";

}
function display_signup(){
    document.getElementById("change_signup").style.display='block';
    document.getElementById("change_login").style.display='none';
    document.getElementById("change_signup").style.paddingTop='9%';
    document.getElementById("change_signup").style.paddingLeft='36%';
    document.getElementById("signup_border").style.borderColor="black";
    document.getElementById("login_border").style.borderColor="white";

}
function button_ani(){
    document.getElementById("input2").style.borderColor="black";
}
function button_huanyuan(){
    document.getElementById("input2").style.borderColor="white";
}