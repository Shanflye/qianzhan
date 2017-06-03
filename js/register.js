//更换验证码
$('#revcode').click(function(e){
    e.preventDefault();
    const src='data/vcode.php?';
    $(this).prev('img')[0].src=src+Math.random();
});
function vali(txt,reg){
    var span=txt.nextElementSibling;
    if(reg.test(txt.value)){
        span.className="vsucc";
        return true;
    }
    else{
        span.className="vfail";
        return false;
    }
}
utel.onblur=function(){
    vali(this,/^1[34578]\d{9}$/)
};
uname.onblur=function(){
    vali(this,/(\w|[\u4e00-\u9fa5]){4}/)
};
upwd.onblur=function(){
    vali(this,/\w{6}/)
};
vcode.onfocus=function(){
    $('#revcode').next('span').removeClass('vfail');
}
$('[type=checkbox]').change(
  function(){
      if(this.checked==true)
       $('button').removeClass('unuse').attr('disabled',false);
      else
       $('button').addClass('unuse').attr('disabled',true);
  }
);
$('form button').click(function(e){
    e.preventDefault();
    var vtel=vali(utel,/^1[34578]\d{9}$/);
    var vn=vali(uname,/(\w|[\u4e00-\u9fa5]){4}/);
    var vp=vali(upwd,/\w{6}/);
    if(vtel&&vn&&vp){
        $.ajax({
            type:'post',
            url:'data/register.php',
            data:{ut:utel.value,un:uname.value,up:upwd.value,vc:vcode.value.toUpperCase()},
            success:function(data){
                data=JSON.parse(data);
                if(data.code==='-1'){
                    $('#revcode').next('span').addClass('vfail')
                }else if(data.code=='1'){
                    alert('注册成功！1s后跳转到登录页');
                    setTimeout(function(){location.href='login.html'},1000)
                }
            }
        })
    }
});