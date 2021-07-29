<?php header("Content-Type:text/html;charset=utf-8"); ?>
<?php 
  include "../define.php";
    
  $id   = $_POST["id"]; 
  $pass = $_POST["pass"]; 
  $name = $_POST["name"]; 
  $genger  = $_POST["genger"]; 
  $phone  = $_POST["phone"];
  $year  = $_POST["year"];
  $month  = $_POST["month"];
  $day  = $_POST["day"];
  
  $birth = $year.".".$month.".".$day; 
  $regist_day = date("Y-m-d (H:i)");  // 현재의 '년-월-일-시-분'을 저장
  
  
  $con = mysqli_connect("localhost", DBuser, DBpass, DBname);
  
  $sql = "insert into members(id, pass, name, genger, birth, regist_day, level, point) "; 
  $sql .= "values('$id', '$pass', '$name', '$genger', '$birth', '$regist_day', 9, 0)";
  
  mysqli_query($con, $sql);  // $sql 에 저장된 명령 실행 
  mysqli_close($con);
  
  echo " 
      <script> 
          // location.href = 'index2.php'; 
          location.href = 'login_form.php'; 
      </script> 
  "; 
?>