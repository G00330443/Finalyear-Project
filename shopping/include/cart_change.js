<script type="text/javascript">
$(document).ready(function(){ 
$("input:button").click(function() {
		var value = $(this).attr("name"); // $(this)表示获取当前被点击元素的name值
        var type;
        alert(value);
        var patt1=new RegExp("v");
        var patt2=new RegExp("t");
        if (patt1.test(value)) {
            type=1;
           alert("222");
           value=value.replace('v','');
        }
        if (patt2.test(value)) {
            //code
            type=0;
            alert("111");
            value=value.replace('t','');
        }
		
        alert(value);
       
        $.ajax({
			url: '/updatefromCart',
			type: 'POST',
			data: 	'_id=' + $("#iddd"+value).val()
            +'&but_type='+type
		,success: function(data) {
            
            //number of item
            if (type==1) {
                document.getElementById("number"+value).value=parseInt(document.getElementById("number"+value).value)+1;
                alert("price"+parseInt(document.getElementById("total1").value));
                alert("total"+parseInt(document.getElementById("price"+value).value));
                var total=parseInt(document.getElementById("total1").value)+parseInt(document.getElementById("price"+value).value);
                document.getElementById("total1").value=total;
                document.getElementById("total").value=total;
                if (document.getElementById("number"+value).value==0) {
                    document.getElementById("det"+value).style.visibility="hidden";
                }
            }
            
            if (type==0) {
                document.getElementById("number"+value).value=document.getElementById("number"+value).value-1;
                var total=parseInt(document.getElementById("total1").value)-parseInt(document.getElementById("price"+value).value);
                alert(total);
                document.getElementById("total1").value=total;
                document.getElementById("total").value=total;
                if (document.getElementById("number"+value).value==0) {
                    document.getElementById("det"+value).style.visibility="hidden";
                }
            }
           
           //bar
              
            }
		});
	});

});
</script>