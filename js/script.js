$(function(){	
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
	
	var current2 = 0;
	var schedule_slide = $('.schedule_slide>li');
	var stop2;
	var button = $('.button_list>li');
	
	function timer2(){
		stop2=setInterval(function(){
			var prev = schedule_slide.eq(current2);
			move2(prev,'0%','-100%');
			current2++;
			if(current2==lolling.size()){current2=0};
			var next = schedule_slide.eq(current2);
			move2(next,'100%','0%');
		},3000);
	};
	function move2(tg,start,end){
		tg.css({left:start}).stop().animate({left:end});
	};
	timer2();
	
/* 	button.on({
		click:function(){
			var tg = $(this);
			var i = tg.index();
			button.removeClass('on');
			tg.addClass('on');
			move1(i);
		}
	});
	
	function move1(i){
		if(current2==i) return;
		var currentEl = schedule_slide.eq(current);
		var nextEl = schedule_slide.eq(i);
		current2=i;
	};	 */
});