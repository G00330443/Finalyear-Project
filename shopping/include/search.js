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
       
       $("#ss").click(function(event){
          alert("cc");
          alert($("#search").val());
         $.ajax({
             url: "/searchitempage",
             type: "POST",
             data: 'search=' + $("#search").val(),
             success: function (msg) {
                    window.location="searchitempage";
             }
         });
     });
  });
</script>