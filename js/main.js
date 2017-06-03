$(function(){
    window.onscroll=function(){
        if($(document).scrollTop()>=50){
            $('#nav').css({position:'fixed',
                            top:'0',
                            zIndex:'1000',
                            height:'70px',
                            padding:'5px 0'})
        }else{
            $('#nav').css({height:'90px',position:'static',padding:'15px 0'});
        }
    };
    function carousel(elem){
        var interval=3000;
        var duration=500;
        var $imgList=elem.find('div.slider>a');
        var $liList=elem.find('ul.slider_dot li');
        var cur= 0,next=1;
        var timer=setInterval(toggle,interval);
        $liList.click(function(){
            var i=$liList.index(this);
            next=i;
            toggle();
        });
        function toggle(){
            $imgList.eq(cur).animate({left:'-100%'},duration,function(){
                $(this).removeClass('active');
            });
            $imgList.eq(next).addClass('active').css('left','100%').animate({left:'0'},duration);
            cur=next;
            next++;
            if(next>=$imgList.length)
                next=0;
            $liList.eq(cur).addClass('active').siblings().removeClass('active');}
    }
    carousel($('#banner'));
    $('div.today_focus>div.rt>ul>li').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('#to_top').click(function(e){
        e.preventDefault();
        $('body').animate({scrollTop:0},500);
    });
    var un=sessionStorage.getItem('uname');
    if(un){
        $('.sjqz').next().css('color','#fff').html(un+'<a class="quit" href="#">退出</a>');
        $('a.quit').click(function(e){
            e.preventDefault();
            sessionStorage['uname']='';
            $('.sjqz').next().html('<a href="login.html">登录</a>'+
            '<i></i>'+
            '<a href="register.html">注册</a>');
        })
    }
});