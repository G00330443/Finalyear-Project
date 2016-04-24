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

$("#password").keyup(function(event){
        var patt1=new RegExp('(?=^.{6,}$)(?=.*[a-z])(?=.*[0-9])(?!.*\n).*$');
        if(document.getElementById("password").value.length<6){
                document.getElementById("pa1").innerHTML = '<font color="#FF0000">password is too short</font>';
                }        
        if(document.getElementById("password").value.length>=6){
                
                if (patt1.test(document.getElementById("password").value)) {
                    document.getElementById("pa1").innerHTML = '<font color="green">OK</font>';
                }else{
                    document.getElementById("pa1").innerHTML = '<font color="#FF0000">Format erro</font>';
                }
                
        }                 
    });

$("#username").keyup(function(event){
        var patt1=new RegExp('(?=^.{6,}$)(?=.*[a-z])(?=.*[0-9])(?!.*\n).*$');
        if(document.getElementById("username").value.length<6){
                document.getElementById("us1").innerHTML = '<font color="#FF0000">username is too short</font>';
                }        
        if(document.getElementById("username").value.length>=6){
                
                if (patt1.test(document.getElementById("username").value)) {
                    document.getElementById("us1").innerHTML = '<font color="green">OK</font>';
                }else{
                    document.getElementById("us1").innerHTML = '<font color="#FF0000">Format erro</font>';
                }
                
        }                 
    });
});
</script>