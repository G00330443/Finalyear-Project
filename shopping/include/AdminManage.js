<script type="text/javascript">

$(document).ready(function(){
$("#regsubmit").click(function(event){
        var file = document.getElementById('picture').files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
		$.ajax({
			url: '/userupdate',
			type: 'POST',
            fileElementId:'picture',
			data: 	'phoneNumber=' + $("#phone").val()
					+'&address=' + $("#addr").val()
					+'&name='+$("#username").val()
                    +'&picture='+encodeURI(this.result).replace(/\+/g,'%2B')
                    
			,success: function(data) {
               if (data!='') {
                    alert("success update");
                 //   alert(data);
                    document.getElementById("pictureshow").innerHTML = '<img width="200" height="100" src="'+data+'" alt=""/>';
                    window.location="/";
               }else{
                    alert("update wrong");
                    window.location="/AdminManage";
               }
			}
		});
        }
    //    alert($("#username").val());
	});

});
</script>
