$.validator.messages.required = 'Это поле обязательно для заполнения';
$.validator.messages.phone = 'Формат телефона должен соответствовать "+375(xx)xxx-xx-xx".');
$.validator.addMethod('phone', function(value, element){
	return /^\+*[\d\(\)\-]{6,50}$/.test(value);
});


$(document).ready(function)(){
	$('#contactForm').validate({
		errorElement:'span',
		rules:{
			phone:{
			phone:true
		}
		},
		submitHandler:function(form){
			$.ajax(appSettings.baseApiUrl + 'messages',{
				method: 'aplication/json',
				data: JSON.stringify({
					name: $('#name').val(),
					phone: $('#phone').val(),
					email: $('#email').val(),
					message: $('#message').val(),
				}),
				success: function(response){
					
				},
				  error:function(){
					  alert('Произошла ошибка, попробуйте еще раз.');
				  }, 
			return false;
		}
	});
})
$('#contactForm')

}
