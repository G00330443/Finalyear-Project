<script type="text/javascript">

$(document).ready(function(){
$("#ppp").click(function(event){
       
		$.ajax({
			url: '/paying',
			type: 'POST',
			data: 	'_id=' + $("#userid").val()
			,success: function(data) {
                alert("Successful Consuming");
                 window.location="/";
			}
		});
	});
});

</script>