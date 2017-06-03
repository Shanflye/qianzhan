$('button').click(function(){
    var un=$('[type=text]').val();
    var up=$('[type=password]').val();
    if(un&&up){
        $.ajax({
            type:'POST',
            url:'data/login.php',
            data:{uname:un,upwd:up},
            success:function(data){
                if(data.code==='1'){
                    alert('登录成功，1s后跳转到主页');
                    setTimeout(function(){
                        sessionStorage['uname']=un;
                        location.href='index.html'
                    },1000)
                }else{
                    alert('登录失败，用户名或密码错误！')
                }
            }
        })
    }

});