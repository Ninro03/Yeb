$(function(){
	/* 매치&채팅탭 */
	var tab = $('#tab_menu > ul > li');
	var content = $('#tab_con > div');
	content.hide().eq(0).show();
	tab.click(function(e){
		e.preventDefault();	
		var tg = $(this);
		var i = tg.index();
		tab.removeClass('active');
		tg.addClass('active');
		content.css('display','none');
		content.eq(i).css('display','block');
	});
	
	/* 지역탭 */
	/* var s_tab = $('.s_tab > ul > li');
	var s_content = $('.match_list > ul');
	s_content.hide().eq(0).show();
	s_tab.click(function(e){
		e.preventDefault();	
		var tg = $(this);
		var i = tg.index();
		tab.removeClass('act');
		tg.addClass('act');
		content.css('display','none');
		content.eq(i).css('display','block'); */
});