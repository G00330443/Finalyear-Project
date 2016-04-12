<script type="text/javascript">

$(document).ready(function(){
$("#BuyItems").click(function(event){
		$.ajax({
			url: '/ordercheck',
			type: 'GET',
			data: 	'number=' + $("#number").val()
					+'&price=' + $("#price").val()
					+'&size='+$("#size").val()
                    +'&_id='+$("#product_id").val()
                    
			,success: function(data) {
               
			}
		});
});
</script>
