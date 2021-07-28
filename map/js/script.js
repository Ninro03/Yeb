$(function(){
	
	a = true;
	$('.f_icon').click(function(){
		if(a){			
			$('.f_box').stop().animate({'height':'376px'},500,function(){a=false;});
		};
	});
	
	b = true;
	$('.filter_box').click(function(){
		if(b){
			$('.f_box2').stop().animate({'bottom':'0'},500,function(){b=false;});
		};	
	});
	
	c = true;
	$('.time_box').click(function(){
		if(c){			
			$('.f_box3').stop().animate({'bottom':'0'},500,function(){c=false;});
		};
	});	
	
	$('#maps').click(function(){
		if(a==false){		
			$('.f_box').stop().animate({'height':'47px'},500,function(){
				a=true;});	
		};
		if(b==false){
			$('.f_box2').stop().animate({'bottom':'-52%'},500,function(){b=true;});
		};		
		if(c==false){		
			$('.f_box3').stop().animate({'bottom':'-68%'},500,function(){c=true;});
		};
	});	

	var filter = $('.f_box2 fieldset');
	filter.each(function(){
		var t = $(this);
		t.find("input:checkbox").on('click',function(){
			if($(this).prop('checked')){
				var tg = $(this);
				var label = $(this).next();
				label.addClass('on');
			}
			else{
				var label = $(this).next();
				label.removeClass('on');
			};
		});
	});
	
	var time = $('.f_box3 fieldset');
	time.each(function(){
		var t = $(this);
		t.find("input:checkbox").on('click',function(){
			if($(this).prop('checked')){
				var tg = $(this);
				var label = $(this).next();
				label.addClass('on');
			}
			else{
				var label = $(this).next();
				label.removeClass('on');
			};
		});
	});	
});
