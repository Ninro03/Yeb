$(function(){	
	
	function swing() {
		$('.click_1').animate({'right':'20px'},1000).animate({'left':'300px'},1000, swing);
		$('.click_1').animate({'left':'300px'},600).animate({'right':'20px'},600,swing); 
		}	
	swing();




	/* content1 bxslider */
	$('.bxslider').bxSlider( {
        mode: 'horizontal',// 가로 방향 수평 슬라이드
        speed: 500,        // 이동 속도를 설정
        pager: false,      // 현재 위치 페이징 표시 여부 설정
        moveSlides: 3,     // 슬라이드 이동시 개수
        slideWidth: 150,   // 슬라이드 너비
        minSlides: 1,      // 최소 노출 개수
        maxSlides: 4,      // 최대 노출 개수
        slideMargin: 15,    // 슬라이드간의 간격
        auto: true,        // 자동 실행 여부
        autoHover: true,   // 마우스 호버시 정지 여부
        controls: false    // 이전 다음 버튼 노출 여부
    });
	
	/* 지역탭 */
	var s_tab = $('.s_tab > ul > li');
	var s_content = $('.match_list > ul');
	s_content.hide().eq(0).show();
	s_tab.click(function(e){
		e.preventDefault();	
		var tg = $(this);
		var i = tg.index();
		s_tab.removeClass('act');
		tg.addClass('act');
		s_content.css('display','none');
		s_content.eq(i).css('display','block');
	});
	
	/* content2 롤링 */
	var current = 0;
	var lolling = $('.lolling>li');
	var stop;
	
	function timer(){
		stop=setInterval(function(){	
			var prev = lolling.eq(current);
			move(prev,'0%','-100%');
			current++;
			if(current==lolling.size()){current=0};
			var next = lolling.eq(current);
			move(next,'100%','0%');
		},3000);		
	};

	function move(tg,start,end){
		tg.css({top:start}).stop().animate({top:end});
	};
	timer();
	
	lolling.hover(
		function(){
			clearInterval(stop);
		},
		function(){
			timer();
		}
	);
	
	/* content4 이미지 스크롤 */
	var current2 = 0;
	var schedule_slide = $('.schedule_slide>li');
	var stop2;
	var button = $('.button_list>li');
	var length = schedule_slide.size();
	
	$("<p>&nbsp;/ "+length+"</p>").appendTo(button);
	
	function timer2(){
		stop2=setInterval(function(){
			var prev = schedule_slide.eq(current2);
			move2(prev,'0%','-100%');
			button.find('.color').prepend().html(current2+1);
			current2++;
			if(current2==schedule_slide.size()){current2=0};
			var next = schedule_slide.eq(current2);
			button.find('span').prepend().html(current2+1);
			move2(next,'100%','0%');
		},3000);
	};
	function move2(tg,start,end){
		tg.css({left:start}).stop().animate({left:end});
	};
	timer2();
	

	$('#h_menu').click(function(){
		$('#sidebar').fadeIn(500);
		$('.sidebar_inner').stop(true,true).animate({'margin-left':'-206px'},500);
	});
	var sidebar_a = $('#sidebar a');
	$('#sidebar').click(function(){
		$('#sidebar').fadeOut(500);
		$('.sidebar_inner').stop(false,false).animate({'margin-left':'-457px'},500);
	});
});