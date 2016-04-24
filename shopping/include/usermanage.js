<script type="text/javascript">

$(document).ready(function(){
$("input:button").click(function() {
		var value = $(this).attr("name");
    
        var patt1=new RegExp("delect");
        
        if (patt1.test(value)) {
            type=1;
       //    alert("222");
           value=value.replace('delect','');
        }
		
        alert(value);
           $.ajax({
			url: '/adminusermanage',
			type: 'POST',
			data: 	'_id=' + $("#id"+value).val()
            +'&name=' + $("#name").val()
            
			,success: function(data) {
                if (data=='') {
                    alert("success delect");
                    window.location="/admin";
                }
			}
		});
	});
});
</script>