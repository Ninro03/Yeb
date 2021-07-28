


$(function(){
	
	if(!$('input[name="agree"]').attr('checked')){
		alert("개인정보이용을 ");
		$('input[name="agree"]').focus();
		return false;
	}
	
});