<script type="text/javascript">

$(document).ready(function(){
$("#addToCart").click(function(event){
       
		$.ajax({
			url: '/addToCart123',
			type: 'POST',
			data: 	'_id=' + $("#asd").val()
					+'&number='+$("#number").val()
			,success: function(data) {
              if (data!=null) {
                
                var a=JSON.parse(data);
                
                for(var i=1;i<a.length;i++){

                        document.getElementById("name"+i).value =a[i].name;
                         document.getElementById("number"+i).value =a[i].number;
                          document.getElementById("price"+i).value =a[i].price;
                        document.getElementById("total").value ="$ :"+a[0].total;
                }
              }
			}
		});
	});
});

</script>