<script type="text/javascript">

$(document).ready(function(){
$("#submititem").click(function(event){
    
        var file = document.getElementById('picture').files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
       
        reader.onload = function () {
               
		$.ajax({
			url: '/itemsupdate',
			type: 'POST',
			data: 	'username=' + $("#username").val()
					+'&location=' + $("#location").val()
					+'&category='+$("#category").val()
                    +'&itemname='+$("#itemname").val()
                    +'&picture='+encodeURI(this.result).replace(/\+/g,'%2B')
                    +'&phone='+$("#phone").val()
                    +'&price='+$("#price").val()
                    +'&description='+$("#description").val()
			,success: function(data) {
               if (data!='') {
                    alert("success update");
                    window.location="/item_Category_add";
               }else{
                    alert("update wrong");
                    window.location="/item_Category_add";
               }
			}
		});
        }
	});
});

</script>