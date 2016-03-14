<script type="text/javascript">

$(document).ready(function(){
$("#loginButtons").click(function(event){
		$.ajax({
			url: '/logincheck',
			type: 'POST',
			data: 	'username=' + $("#username").val()
					+ '&password=' + $("#password").val()
					
			,success: function(data) {
                if (data!=0) {
                        alert("wrong ");
                        window.location="login";
               } else {
                     
                        window.location="/";
               }
			}
		});
	});

});
</script>