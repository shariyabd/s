$('.hdd').hide()
// $('.personal-responsive-icon').hide()
$('.personal-responsive-item').hide()
$('.shh').click(function(){
	$('.personal-responsive-item').slideDown()
	$('.shh').hide()
	$('.hdd').show()
})
$('.hdd').click(function(){
	$('.personal-responsive-item').slideUp()
	$('.hdd').hide()
	$('.shh').show()
})
$('.click-menu').click(function(){
	$('.personal-responsive-item').hide()
	$('.hdd').hide()
	$('.shh').show()
})