<script>
    // JavaScript Document
$(document).ready(function(e) {
	
	linum = $('.mainlist li').length;//图片数量
    
	w = linum * 250;//ul宽度
	$('.piclist').css('width', w + 'px');//ul宽度
	$('.swaplist').html($('.mainlist').html());//复制内容
	
	$('.og_next').click(function(){
		
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){//多于4张图片
			ml = parseInt($('.mainlist').css('left'));//默认图片ul位置
			sl = parseInt($('.swaplist').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w*-1){//默认图片显示时
				$('.swaplist').css({left: '1000px'});//交换图片放在显示区域右侧
				$('.mainlist').animate({left: ml - 1000 + 'px'},'slow');//默认图片滚动				
				if(ml==(w-1000)*-1){//默认图片最后一屏时
					$('.swaplist').animate({left: '0px'},'slow');//交换图片滚动
				}
			}else{//交换图片显示时
				$('.mainlist').css({left: '1000px'})//默认图片放在显示区域右
				$('.swaplist').animate({left: sl - 1000 + 'px'},'slow');//交换图片滚动
				if(sl==(w-1000)*-1){//交换图片最后一屏时
					$('.mainlist').animate({left: '0px'},'slow');//默认图片滚动
				}
			}
		}
	})
	$('.og_prev').click(function(){
		
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){
			ml = parseInt($('.mainlist').css('left'));
			sl = parseInt($('.swaplist').css('left'));
			if(ml<=0 && ml>w*-1){
				$('.swaplist').css({left: w * -1 + 'px'});
				$('.mainlist').animate({left: ml + 1000 + 'px'},'slow');				
				if(ml==0){
					$('.swaplist').animate({left: (w - 1000) * -1 + 'px'},'slow');
				}
			}else{
				$('.mainlist').css({left: (w - 1000) * -1 + 'px'});
				$('.swaplist').animate({left: sl + 1000 + 'px'},'slow');
				if(sl==0){
					$('.mainlist').animate({left: '0px'},'slow');
				}
			}
		}
	})
    
    
    
    //  2
    linum1 = $('.mainlist1 li').length;//图片数量
  
	w1 = linum1 * 250;//ul宽度
	$('.piclist1').css('width', w1 + 'px');//ul宽度
	$('.swaplist1').html($('.mainlist1').html());//复制内容
	
	$('.og_next1').click(function(){
		
		if($('.swaplist1,.mainlist1').is(':animated')){
			$('.swaplist1,.mainlist1').stop(true,true);
		}
		
		if($('.mainlist1 li').length>4){//多于4张图片
			ml = parseInt($('.mainlist1').css('left'));//默认图片ul位置
			sl = parseInt($('.swaplist1').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w1*-1){//默认图片显示时
				$('.swaplist1').css({left: '1000px'});//交换图片放在显示区域右侧
				$('.mainlist1').animate({left: ml - 1000 + 'px'},'slow');//默认图片滚动				
				if(ml==(w1-1000)*-1){//默认图片最后一屏时
					$('.swaplist1').animate({left: '0px'},'slow');//交换图片滚动
				}
			}else{//交换图片显示时
				$('.mainlist1').css({left: '1000px'})//默认图片放在显示区域右
				$('.swaplist1').animate({left: sl - 1000 + 'px'},'slow');//交换图片滚动
				if(sl==(w1-1000)*-1){//交换图片最后一屏时
					$('.mainlist1').animate({left: '0px'},'slow');//默认图片滚动
				}
			}
		}
	})
	$('.og_prev1').click(function(){
		
		if($('.swaplist1,.mainlist1').is(':animated')){
			$('.swaplist1,.mainlist1').stop(true,true);
		}
		
		if($('.mainlist1 li').length>4){
			ml = parseInt($('.mainlist1').css('left'));
			sl = parseInt($('.swaplist1').css('left'));
			if(ml<=0 && ml>w1*-1){
				$('.swaplist1').css({left: w1 * -1 + 'px'});
				$('.mainlist1').animate({left: ml + 1000 + 'px'},'slow');				
				if(ml==0){
					$('.swaplist1').animate({left: (w1 - 1000) * -1 + 'px'},'slow');
				}
			}else{
				$('.mainlist1').css({left: (w1 - 1000) * -1 + 'px'});
				$('.swaplist1').animate({left: sl + 1000 + 'px'},'slow');
				if(sl==0){
					$('.mainlist1').animate({left: '0px'},'slow');
				}
			}
		}
	})
    
    
     //  2
    linum1 = $('.mainlist1 li').length;//图片数量
  
	w1 = linum1 * 250;//ul宽度
	$('.piclist1').css('width', w1 + 'px');//ul宽度
	$('.swaplist1').html($('.mainlist1').html());//复制内容
	
	$('.og_next1').click(function(){
		
		if($('.swaplist1,.mainlist1').is(':animated')){
			$('.swaplist1,.mainlist1').stop(true,true);
		}
		
		if($('.mainlist1 li').length>4){//多于4张图片
			ml = parseInt($('.mainlist1').css('left'));//默认图片ul位置
			sl = parseInt($('.swaplist1').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w1*-1){//默认图片显示时
				$('.swaplist1').css({left: '1000px'});//交换图片放在显示区域右侧
				$('.mainlist1').animate({left: ml - 1000 + 'px'},'slow');//默认图片滚动				
				if(ml==(w1-1000)*-1){//默认图片最后一屏时
					$('.swaplist1').animate({left: '0px'},'slow');//交换图片滚动
				}
			}else{//交换图片显示时
				$('.mainlist1').css({left: '1000px'})//默认图片放在显示区域右
				$('.swaplist1').animate({left: sl - 1000 + 'px'},'slow');//交换图片滚动
				if(sl==(w1-1000)*-1){//交换图片最后一屏时
					$('.mainlist1').animate({left: '0px'},'slow');//默认图片滚动
				}
			}
		}
	})
	$('.og_prev1').click(function(){
		
		if($('.swaplist1,.mainlist1').is(':animated')){
			$('.swaplist1,.mainlist1').stop(true,true);
		}
		
		if($('.mainlist1 li').length>4){
			ml = parseInt($('.mainlist1').css('left'));
			sl = parseInt($('.swaplist1').css('left'));
			if(ml<=0 && ml>w1*-1){
				$('.swaplist1').css({left: w1 * -1 + 'px'});
				$('.mainlist1').animate({left: ml + 1000 + 'px'},'slow');				
				if(ml==0){
					$('.swaplist1').animate({left: (w1 - 1000) * -1 + 'px'},'slow');
				}
			}else{
				$('.mainlist1').css({left: (w1 - 1000) * -1 + 'px'});
				$('.swaplist1').animate({left: sl + 1000 + 'px'},'slow');
				if(sl==0){
					$('.mainlist1').animate({left: '0px'},'slow');
				}
			}
		}
	})
    
    
     //  3
    linum2 = $('.mainlist2 li').length;//图片数量
  
	w2 = linum2 * 250;//ul宽度
	$('.piclist2').css('width', w2 + 'px');//ul宽度
	$('.swaplist2').html($('.mainlist2').html());//复制内容
	
	$('.og_next2').click(function(){
		
		if($('.swaplist2,.mainlist2').is(':animated')){
			$('.swaplist2,.mainlist2').stop(true,true);
		}
		
		if($('.mainlist2 li').length>4){//多于4张图片
			ml = parseInt($('.mainlist2').css('left'));//默认图片ul位置
			sl = parseInt($('.swaplist2').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w2*-1){//默认图片显示时
				$('.swaplist2').css({left: '1000px'});//交换图片放在显示区域右侧
				$('.mainlist2').animate({left: ml - 1000 + 'px'},'slow');//默认图片滚动				
				if(ml==(w2-1000)*-1){//默认图片最后一屏时
					$('.swaplist2').animate({left: '0px'},'slow');//交换图片滚动
				}
			}else{//交换图片显示时
				$('.mainlist2').css({left: '1000px'})//默认图片放在显示区域右
				$('.swaplist2').animate({left: sl - 1000 + 'px'},'slow');//交换图片滚动
				if(sl==(w2-1000)*-1){//交换图片最后一屏时
					$('.mainlist2').animate({left: '0px'},'slow');//默认图片滚动
				}
			}
		}
	})
	$('.og_prev2').click(function(){
		
		if($('.swaplist2,.mainlist2').is(':animated')){
			$('.swaplist2,.mainlist2').stop(true,true);
		}
		
		if($('.mainlist2 li').length>4){
			ml = parseInt($('.mainlist2').css('left'));
			sl = parseInt($('.swaplist2').css('left'));
			if(ml<=0 && ml>w2*-1){
				$('.swaplist2').css({left: w2 * -1 + 'px'});
				$('.mainlist2').animate({left: ml + 1000 + 'px'},'slow');				
				if(ml==0){
					$('.swaplist2').animate({left: (w2 - 1000) * -1 + 'px'},'slow');
				}
			}else{
				$('.mainlist2').css({left: (w2 - 1000) * -1 + 'px'});
				$('.swaplist2').animate({left: sl + 1000 + 'px'},'slow');
				if(sl==0){
					$('.mainlist2').animate({left: '0px'},'slow');
				}
			}
		}
	})
    
    
    //4
    linum3 = $('.mainlist3 li').length;//图片数量
  
	w3 = linum3 * 250;//ul宽度
	$('.piclist3').css('width', w3 + 'px');//ul宽度
	$('.swaplist3').html($('.mainlist3').html());//复制内容
	
	$('.og_next3').click(function(){
		
		if($('.swaplist3,.mainlist3').is(':animated')){
			$('.swaplist3,.mainlist3').stop(true,true);
		}
		
		if($('.mainlist3 li').length>4){//多于4张图片
			ml = parseInt($('.mainlist3').css('left'));//默认图片ul位置
			sl = parseInt($('.swaplist3').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w3*-1){//默认图片显示时
				$('.swaplist3').css({left: '1000px'});//交换图片放在显示区域右侧
				$('.mainlist3').animate({left: ml - 1000 + 'px'},'slow');//默认图片滚动				
				if(ml==(w3-1000)*-1){//默认图片最后一屏时
					$('.swaplist3').animate({left: '0px'},'slow');//交换图片滚动
				}
			}else{//交换图片显示时
				$('.mainlist3').css({left: '1000px'})//默认图片放在显示区域右
				$('.swaplist3').animate({left: sl - 1000 + 'px'},'slow');//交换图片滚动
				if(sl==(w3-1000)*-1){//交换图片最后一屏时
					$('.mainlist3').animate({left: '0px'},'slow');//默认图片滚动
				}
			}
		}
	})
	$('.og_prev3').click(function(){
		
		if($('.swaplist3,.mainlist3').is(':animated')){
			$('.swaplist3,.mainlist3').stop(true,true);
		}
		
		if($('.mainlist3 li').length>4){
			ml = parseInt($('.mainlist3').css('left'));
			sl = parseInt($('.swaplist3').css('left'));
			if(ml<=0 && ml>w3*-1){
				$('.swaplist3').css({left: w3 * -1 + 'px'});
				$('.mainlist3').animate({left: ml + 1000 + 'px'},'slow');				
				if(ml==0){
					$('.swaplist3').animate({left: (w3 - 1000) * -1 + 'px'},'slow');
				}
			}else{
				$('.mainlist3').css({left: (w3 - 1000) * -1 + 'px'});
				$('.swaplist3').animate({left: sl + 1000 + 'px'},'slow');
				if(sl==0){
					$('.mainlist3').animate({left: '0px'},'slow');
				}
			}
		}
	})
    
    
    
});

$(document).ready(function(){
	$('.og_prev,.og_next').hover(function(){
			$(this).fadeTo('fast',1);
		},function(){
			$(this).fadeTo('fast',0.7);
	})

    $('.og_prev1,.og_next1').hover(function(){
			$(this).fadeTo('fast',1);
		},function(){
			$(this).fadeTo('fast',0.7);
	})
    
    $('.og_prev2,.og_next2').hover(function(){
			$(this).fadeTo('fast',1);
		},function(){
			$(this).fadeTo('fast',0.7);
	})
    
      $('.og_prev3,.og_next3').hover(function(){
			$(this).fadeTo('fast',1);
		},function(){
			$(this).fadeTo('fast',0.7);
	})
})


</script>


<style>
    a:hover{ color:#84B263;}
.box{ width:1500px; margin:0 auto; position:relative; overflow:hidden; _height:100%;}
.picbox{ width:1500px; height:300px; overflow:hidden; position:relative;}


.piclist{ height:300px;position:absolute; left:0px; top:0px}
.piclist li{ background:#eee; margin-right:20px; padding:5px; float:left;}
.swaplist{ position:absolute; left:-3000px; top:0px}


.piclist1{ height:300px;position:absolute; left:0px; top:0px}
.piclist1 li{ background:#eee; margin-right:20px; padding:5px; float:left;}
.swaplist1{ position:absolute; left:-3000px; top:0px}

.piclist2{ height:300px;position:absolute; left:0px; top:0px}
.piclist2 li{ background:#eee; margin-right:20px; padding:5px; float:left;}
.swaplist2{ position:absolute; left:-3000px; top:0px}



.og_prev2,.og_next2{ width:60px; height:150px; background:url(../images/icon.png) no-repeat; background:url(../images/icon_ie6.png) no-repeat\9; position:absolute; top:90px; z-index:99; cursor:pointer;filter:alpha(opacity=70); opacity:0.7;}

.og_prev,.og_next{ width:60px; height:150px; background:url(../images/icon.png) no-repeat; background:url(../images/icon_ie6.png) no-repeat\9; position:absolute; top:90px; z-index:99; cursor:pointer;filter:alpha(opacity=70); opacity:0.7;}

.og_prev1,.og_next1{ width:60px; height:150px; background:url(../images/icon.png) no-repeat; background:url(../images/icon_ie6.png) no-repeat\9; position:absolute; top:90px; z-index:99; cursor:pointer;filter:alpha(opacity=70); opacity:0.7;}


</style>