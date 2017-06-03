<?php
header('Content-Type: text/plain;charset=UTF-8');
require('init.php');
$n = $_REQUEST['un'];
$p = $_REQUEST['up'];
$t = $_REQUEST['ut'];
$v = $_REQUEST['vc'];

session_start();
if($v===$_SESSION['vcodeInServer']){
	$sql="INSERT INTO q_user VALUES(NULL,'$n','$p',$t)";
	$result=mysqli_query($conn,$sql);
	if($result)
    $output=['code'=>'1','msg'=>"注册成功"];
	else
	$output=['code'=>'-2','msg'=>"注册失败"];
}else {
    $output=['code'=>'-1','msg'=>"验证码错误"];
}
echo json_encode($output);