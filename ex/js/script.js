$(function(){

 	var mySlider = $('.bxslider').bxSlider({
		mode : 'horizontal', //수평방향으로 이동
		speed : 300, //이동속도
		pause: 5000, //다음 이미지의 머무는 시간
		pager:true, //페이징 인디케이터 숨김
		moveSlides: 1, // 이동 슬라이드 갯수 (한개씩
		slideWidth: 339, //한개 이미지의 너비
		minSlides: 1, //촤소 노출 슬라이드 수평방향으로,
		slideSelector: 'li, a',
		maxSlides: 5, //최대 노출 슬라이드 수 
		 /* slideMargin: 50, //이미지 간의 간격  */
		auto: true, //자동 슬라이드 여부
		autoHover: true, //마우스 오버시 자동정지
		controls:false // 이전 다음 버튼 숨김(아래 따로 예쁘게 만들 것임)
	});
	$('.prev').on('click',function(){
		mySlider.goToPrevSlide();
		return false;
	});
	$('.next').on('click',function(){
		mySlider.goToNextSlide();
		return false;
	});
});
