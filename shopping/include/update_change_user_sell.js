<script type="text/javascript">

$(document).ready(function(){
$("input:button").click(function() {
        
		var value = $(this).attr("name");
        var type;
      //  alert("22");
      //  alert(value);
        var patt1=new RegExp("delect");
        var patt2=new RegExp("update");
        if (patt1.test(value)) {
            type=1;
       //    alert("222");
           value=value.replace('delect','');
        }
        if (patt2.test(value)) {
            //code
            type=0;
         //   alert("111");
            value=value.replace('update','');
        }
		
        alert(value);
           $.ajax({
			url: '/user_items_manage',
			type: 'POST',
			data: 	'_id=' + $("#id"+value).val()
            +'&but_type='+type
            +'&name='+ $("#name"+value).val()
            +'&price='+ $("#price"+value).val()
            +'&description='+ $("#description"+value).val()
            +'&createtime='+ $("#createtime"+value).val()
            +'&number='+ $("#number"+value).val()
            +'&category='+ $("#category"+value).val()
			,success: function(data) {
                
                    window.location="/showAllItems";
        
             
			}
		});
	});
});
</script>