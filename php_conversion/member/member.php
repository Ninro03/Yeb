<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<title>Member</title>
	<link rel="stylesheet" href="css/member.css"/>
	<script src="js/jquery-1.12.1.min.js"></script>
	<script src="js/member.js"></script>
	<script type="text/javascript"> 
		function getCheckvalue(){

			if(document.getElementById("chkbox").checked == true){
				alert("회원가입을 진행하시겠습니까?");
			}else{
				alert("서비스 이용약관 및 개인 정보 수집 및 이용에 동의해주세요.");
			}
		 
		}
		function check_input()
		{
			if(!document.member_form.id.value.trim()){
				alert("아이디를 입력하세요.");
				document.member_form.id.focus();
				return;
			}
			if(!document.member_form.pass.value.trim()){
				alert("비밀번호를 입력하세요.");
				document.member_form.pass.focus();
				return;
			}
			if(!document.member_form.pass_confirm.value.trim()){
				alert("비밀번호확인을 입력하세요.");
				document.member_form.pass_confirm.focus();
				return;
			}
			if(!document.member_form.name.value.trim()){
				alert("이름을 입력하세요.");
				document.member_form.name.focus();
				return;
			}
			if(!document.member_form.genger.value.trim()){
				alert("성별을 선택하세요.");
				document.member_form.genger.focus();
				return;
			}
			if(!document.member_form.phone.value.trim()){
				alert("핸드폰 번호를 입력하세요.");
				document.member_form.phone.focus();
				return;
			}
			if(!document.member_form.year.value.trim()){
				alert("생년월일을 선택하세요.");
				document.member_form.year.focus();
				return;
			}
			if(!document.member_form.month.value.trim()){
				alert("생년월일을 선택하세요.");
				document.member_form.month.focus();
				return;
			}
			if(!document.member_form.day.value.trim()){
				alert("생년월일을 선택하세요.");
				document.member_form.day.focus();
				return;
			}
			if(document.member_form.pass.value.trim() !=
					document.member_form.pass_confirm.value.trim()){
				alert("비밀번호가 일치하지 않습니다.\n 다시 입력해 주세요.");
				document.member_form.pass.focus();
				document.member_form.pass.select();
				return;
			}

			document.member_form.submit();
		}

		function check_id() {
			window.open("member_check_id.php?id=" + document.member_form.id.value,
				"IDcheck",
				"left= 700, top= 300, width= 350, height= 200, scrollbars=no, resizable=yes");
		}
	</script>
</head>
<body>
	<div id="wrap">
		<header>
			<div id="header">
				<h1><a href="index.html"><img src="img/logo_text.png" alt="메인로고"/></a></h1>
			</div>
		</header>	
		<section>
			<div id="member">
				<h2>회원가입</h2>
				<form action="login.php" method="post" class="cf">
					<input type="text" name="id" placeholder="이메일을 입력하세요."/>
					<input type="password" name="pass" placeholder="비밀번호를 입력하세요."/>
					<input type="password" name="pass_confirm" placeholder="비밀번호를 한번 더 입력하세요."/>
					<input class="name_box" type="text" name="name" placeholder="이름"/>
					<select class="gender" name="genger" id="" >
						<option value="성별">성별</option>
						<option value="남성">남성</option>
						<option value="여성">여성</option>
					</select>
					<input type="tel" name="phone" placeholder="휴대폰 번호를 입력하세요."/>
					<select class="year fl cf" name="year" id="">
						<option value="생년">생년</option>
						<option value="1990">1990</option>
						<option value="1991">1991</option>
						<option value="1992">1992</option>
						<option value="1993">1993</option>
						<option value="1994">1994</option>
						<option value="1995">1995</option>
						<option value="1996">1996</option>
						<option value="1997">1997</option>
						<option value="1998">1998</option>	
						<option value="1999">1999</option>	
						<option value="2000">2000</option>	
					</select>
					<select class="month fl" name="month" id="" >
						<option value="성별">월</option>
						<option value="1">1</option>
						<option value="2">2</option>	
						<option value="3">3</option>	
						<option value="4">4</option>	
						<option value="5">5</option>	
						<option value="6">6</option>	
						<option value="7">7</option>	
						<option value="8">8</option>	
						<option value="9">9</option>	
						<option value="10">10</option>	
						<option value="11">11</option>	
						<option value="12">12</option>	
					</select>
					<select class="day" name="day" id="">
						<option value="일">일</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
						<option value="6">6</option>
						<option value="7">7</option>
						<option value="8">8</option>	
						<option value="9">9</option>	
						<option value="10">10</option>	
						<option value="11">11</option>	
						<option value="12">12</option>	
						<option value="13">13</option>	
						<option value="14">14</option>	
						<option value="15">15</option>	
						<option value="16">16</option>	
						<option value="17">17</option>	
						<option value="18">18</option>	
						<option value="19">19</option>	
						<option value="20">20</option>	
						<option value="21">21</option>	
						<option value="22">22</option>	
						<option value="23">23</option>	
						<option value="24">24</option>	
						<option value="25">25</option>	
						<option value="26">26</option>	
						<option value="27">27</option>	
						<option value="28">28</option>	
						<option value="29">29</option>	
						<option value="30">30</option>	
						<option value="31">31</option>	
					</select>		
					<div class="agree_wrap">
						<span class="option">
							<input type="checkbox" name="chkbox" value="1" id="chkbox">
							<label for="chkbox"></label>
							<div class="agree_text">
							Yeb <span class="puple">서비스 이용약관</span> 및 <span class="puple">개인 정보 수집 및 이용</span>에 동의 합니다.
							</div>
						</span>
						
					</div>
					<!-- <button>닫기</button> -->
					<button type="submit" onclick="getCheckvalue(); check_input();" value="버튼">회원가입</button>
				</form>
				<div class="gray_line"></div>
				<div class="bottom_text"><a href="#">이미 아이디가 있다면 여기에서 로그인 하세요.</a></div>
			</div>
		</section>
		<footer>

		</footer>
	</div>
</body>
</html>