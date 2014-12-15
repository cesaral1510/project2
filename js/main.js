$( ".mid" ).css( "border", "1px solid red" );

$(function(){
	$("#register-form").validate({
		rules: {
			firstname: {
				required: true
			},
			lastname: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			password:{
				required: true,
				minlength: 8
			}
		}

	});






});