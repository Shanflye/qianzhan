<?php
header('Content-Type: application/json');
require('init.php');
$n = $_REQUEST['uname'];
$p = $_REQUEST['upwd'];
$sql = "SELECT uid FROM q_user WHERE uname='$n' AND upwd='$p'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
if(!$row){
    echo '{"code":"-1", "msg":"用户名或密码错误"}';
}else {
    echo '{"code":"1", "msg":"登录成功"}';
}


