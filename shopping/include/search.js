<link rel="stylesheet" href="css/jquery.bigautocomplete.css" type="text/css" />

<script type="text/javascript" src="javascripts/jquery.bigAutocomplete.js"></script>

<script type="text/javascript">

  $(document).ready(function () {
       $("#search").keyup(function(event){
         $.ajax({
             url: "/searchitems",
             type: "POST",
             data: 'search=' + $("#search").val(),
             success: function (msg) {
            //  var datas = eval('{name:' + msg + '}');
            //  var cc=JSON.parse(msg);
                 $("#search").bigAutocomplete({
                   data: msg,
                   max: 10,          
                   scrollHeight: 300,
                   scroll: true,
                   callback:function(data){
                    // alert(data.title);	
                   }
                 });
             }
         });
     });
   /*    $("#ss").click(function(event){
          $.ajax({
                         url: "/searchitempage",
                         type: "POST",
                         data: 'search=' + $("#search").val(),
                         success: function (msg) {
                                window.location="searchitempage";
                         }
                     });
     });
       
       $("#wwww").click(function(event){
          $.ajax({
                         url: "/searchitempage",
                         type: "POST",
                         data: 'search=' + $("#search").val(),'ww1=' + $("#ww1").val(),
                      +'&ww2='+$("#ww2").val(),
                      +'&ww3='+$("#ww3").val(),
                      +'&type='+ 123,
                         success: function (msg) {
                                window.location="searchitempage";
                         }
                     });
     });*/
       
       
       $("input:button").click(function(){
          alert("cc");
          var value = $(this).attr("name");
          var patt1=new RegExp("ss");
          var patt2=new RegExp("wwww");
          alert(value)
          if (patt1.test(value)) {
                $.ajax({
                         url: "/searchitempage",
                         type: "POST",
                         data: 'search=' + $("#search").val(),
                         success: function (msg) {
                                window.location="searchitempage";
                         }
                     });
          }
          
          if (patt2.test(value)) {
             $.ajax({
                    url: "/searchitempage",
                    type: "POST",
                    data: 'ww1=' + $("#ww1").val()
                      +'&ww2='+$("#ww2").val()
                      +'&ww3='+$("#ww3").val()
                      +'&type='+ 123,
                    success: function (msg) {
                           window.location="searchitempage";
                    }
                });
          }
        
     });
       
  });
</script>