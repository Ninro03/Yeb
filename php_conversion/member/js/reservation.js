$(function(){
	/* 탭 */
	var tab = $('.tab>li');
	var content = $('.tab_con>div');
	content.hide();
	content.eq(0).show();
	tab.click(function(){
		var tg = $(this);
		var i = tg.index();
		tab.removeClass('active');
		tg.addClass('active');
		content.css('display','none');
		content.eq(i).css('display','block');
	});
	
	/*서브 탭 */
	var sub_tab = $('.sub_tab>li');
	var sub_content = $('.sub_con>div');
	sub_content.hide();
	sub_content.eq(0).show();
	sub_tab.click(function(){
		var tg = $(this);
		var i = tg.index();
		sub_tab.removeClass('active');
		tg.addClass('active');
		sub_content.css('display','none');
		sub_content.eq(i).css('display','block');
	});	


	/*서브 탭 */
	var sub_tab1 = $('.sub_tab1>li');
	var sub_content1 = $('.sub_con1>div');
	sub_content1.hide();
	sub_content1.eq(0).show();
	sub_tab1.click(function(){
		var tg = $(this);
		var i = tg.index();
		sub_tab1.removeClass('active');
		tg.addClass('active');
		sub_content1.css('display','none');
		sub_content1.eq(i).css('display','block');
	});		


});