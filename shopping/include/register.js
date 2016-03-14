<script type="text/javascript">

$(document).ready(function(){
$("#DataSubmit").click(function(event){
		$.ajax({
			url: '/post',
			type: 'POST',
			data: 	'username=' + $("#username").val()
					+ '&password=' + $("#password").val()
					+ '&email=' + $("#email").val()
                    + '&password_confirm=' + $("#password_confirm").val()
			,success: function(data) {
               if (data==0) {
                        alert("cant create account ");
                        $("#usernamespan").text("Username is exist");
                        window.location="register";
               }else if (data==2) {
                        alert("cant create account ");
                        $("#usernamespan").text("password is different");
                        window.location="register";
               } else {
                        alert("successful");
                        $("#usernamespan").text("register successed");
                        window.location="/";
               }
			}
		});
	});

});
</script>