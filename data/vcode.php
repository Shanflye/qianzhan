<?php
header('Content-Type: image/png');

$w = 138;
$h = 32;
//�ڷ��������ڴ�������һ�����ͼƬ
$img = imagecreatetruecolor($w, $h);

//��������ı�����ɫ
$c = imagecolorallocate($img, rand(180,240), rand(180, 240), rand(180,240));
//���һ��������Ϊ����
imagefilledrectangle($img, 0, 0, $w, $h, $c);

//����4��������ַ�
$pool = 'ABCDEFGHIJKLMNPQRSTUVWXY3456789';
$vc = '';
for($i=0; $i<4; $i++){
    $char = $pool[ rand(0, strlen($pool)-1 )];
    $vc .= $char;
    $c = imagecolorallocate($img, rand(80,180), rand(80,180), rand(80,180));
    $x = $i * 30+8;
    $y = rand(22, 32);
    $fontSize = rand(20, 30);
    $font = "simhei.ttf";
    $deg = rand(-45, 45);
    imagettftext($img, $fontSize, $deg, $x, $y, $c, $font, $char);
}
//�ѷ����������ɵ������֤�뱣���ڷ�������session��
session_start();
$_SESSION['vcodeInServer'] = $vc;

//����6�����������
for($i=0; $i<6; $i++){
    $c = imagecolorallocate($img, rand(0,255), rand(0,255), rand(0,255));
    imageline($img, rand(0, $w), rand(0, $h), rand(0, $w), rand(0,$h), $c);
}
//����50��������ŵ㡪���뾶Ϊ1��Բ
for($i=0; $i<30; $i++){
    $c = imagecolorallocate($img, rand(0,255), rand(0,255), rand(0,255));
    imagearc($img, rand(0, $w), rand(0, $h), 2,2,0, 360, $c);
}

//��ͼƬ������ͻ���
imagepng($img);
//�ӷ������ڴ���ɾ����ͼƬ
imagedestroy($img);
?>