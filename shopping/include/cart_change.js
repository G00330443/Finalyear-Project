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
                if (document.getElementById("number"+value).value==0) {
                    document.getElementById("det"+value).style.visibility="hidden";
                }
            }
            if (type==0) {
                document.getElementById("number"+value).value=document.getElementById("number"+value).value-1;
                if (document.getElementById("number"+value).value==0) {
                    document.getElementById("det"+value).style.visibility="hidden";
                }
            }
           
           //bar
                
                console.log(data[0].total);
                 document.getElementById("tot").value="$ : "data[0].total;
                 document.getElementById("total").value="$ : "data[0].total;
            
            }
		});
	});

    
    $("#eee").click(function(event){
       
		$.ajax({
			url: '/ordercheck',
			type: 'GET',
			data: 	'total=' + $("#total").val()
					
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