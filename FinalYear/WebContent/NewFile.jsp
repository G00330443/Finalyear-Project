<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>图片</title>
<script language="javascript">
<!--
	//图片滚动列表 mengjia 070927
	var Speed_1 = 10; //速度(毫秒)
	var Space_1 = 20; //每次移动(px)
	var PageWidth_1 = 116 * 3; //翻页宽度
	var interval_1 = 7000; //翻页间隔
	var fill_1 = 0; //整体移位
	var MoveLock_1 = false;
	var MoveTimeObj_1;
	var MoveWay_1 = "right";
	var Comp_1 = 0;
	var AutoPlayObj_1 = null;
	function GetObj(objName) {
		if (document.getElementById) {
			return eval('document.getElementById("' + objName + '")')
		} else {
			return eval('document.all.' + objName)
		}
	}
	function AutoPlay_1() {
		clearInterval(AutoPlayObj_1);
		AutoPlayObj_1 = setInterval('ISL_GoDown_1();ISL_StopDown_1();',
				interval_1)
	}
	function ISL_GoUp_1() {
		if (MoveLock_1)
			return;
		clearInterval(AutoPlayObj_1);
		MoveLock_1 = true;
		MoveWay_1 = "left";
		MoveTimeObj_1 = setInterval('ISL_ScrUp_1();', Speed_1);
	}
	function ISL_StopUp_1() {
		if (MoveWay_1 == "right") {
			return
		}
		;
		clearInterval(MoveTimeObj_1);
		if ((GetObj('ISL_Cont_1').scrollLeft - fill_1) % PageWidth_1 != 0) {
			Comp_1 = fill_1 - (GetObj('ISL_Cont_1').scrollLeft % PageWidth_1);
			CompScr_1()
		} else {
			MoveLock_1 = false
		}
		AutoPlay_1()
	}
	function ISL_ScrUp_1() {
		if (GetObj('ISL_Cont_1').scrollLeft <= 0) {
			GetObj('ISL_Cont_1').scrollLeft = GetObj('ISL_Cont_1').scrollLeft
					+ GetObj('List1_1').offsetWidth
		}
		GetObj('ISL_Cont_1').scrollLeft -= Space_1
	}
	function ISL_GoDown_1() {
		clearInterval(MoveTimeObj_1);
		if (MoveLock_1)
			return;
		clearInterval(AutoPlayObj_1);
		MoveLock_1 = true;
		MoveWay_1 = "right";
		ISL_ScrDown_1();
		MoveTimeObj_1 = setInterval('ISL_ScrDown_1()', Speed_1)
	}
	function ISL_StopDown_1() {
		if (MoveWay_1 == "left") {
			return
		}
		;
		clearInterval(MoveTimeObj_1);
		if (GetObj('ISL_Cont_1').scrollLeft % PageWidth_1
				- (fill_1 >= 0 ? fill_1 : fill_1 + 1) != 0) {
			Comp_1 = PageWidth_1 - GetObj('ISL_Cont_1').scrollLeft
					% PageWidth_1 + fill_1;
			CompScr_1()
		} else {
			MoveLock_1 = false
		}
		AutoPlay_1()
	}
	function ISL_ScrDown_1() {
		if (GetObj('ISL_Cont_1').scrollLeft >= GetObj('List1_1').scrollWidth) {
			GetObj('ISL_Cont_1').scrollLeft = GetObj('ISL_Cont_1').scrollLeft
					- GetObj('List1_1').scrollWidth
		}
		GetObj('ISL_Cont_1').scrollLeft += Space_1
	}
	function CompScr_1() {
		if (Comp_1 == 0) {
			MoveLock_1 = false;
			return
		}
		var num, TempSpeed = Speed_1, TempSpace = Space_1;
		if (Math.abs(Comp_1) < PageWidth_1 / 2) {
			TempSpace = Math.round(Math.abs(Comp_1 / Space_1));
			if (TempSpace < 1) {
				TempSpace = 1
			}
		}
		if (Comp_1 < 0) {
			if (Comp_1 < -TempSpace) {
				Comp_1 += TempSpace;
				num = TempSpace
			} else {
				num = -Comp_1;
				Comp_1 = 0
			}
			GetObj('ISL_Cont_1').scrollLeft -= num;
			setTimeout('CompScr_1()', TempSpeed)
		} else {
			if (Comp_1 > TempSpace) {
				Comp_1 -= TempSpace;
				num = TempSpace
			} else {
				num = Comp_1;
				Comp_1 = 0
			}
			GetObj('ISL_Cont_1').scrollLeft += num;
			setTimeout('CompScr_1()', TempSpeed)
		}
	}
	function picrun_ini() {
		GetObj("List2_1").innerHTML = GetObj("List1_1").innerHTML;
		GetObj('ISL_Cont_1').scrollLeft = fill_1 >= 0 ? fill_1
				: GetObj('List1_1').scrollWidth - Math.abs(fill_1);
		GetObj("ISL_Cont_1").onmouseover = function() {
			clearInterval(AutoPlayObj_1)
		}
		GetObj("ISL_Cont_1").onmouseout = function() {
			AutoPlay_1()
		}
		AutoPlay_1();
	}
	//产品展示滚动图片结束
//-->
</script>
<style type="text/css">
<!--
BODY {
	BORDER-TOP-WIDTH: 0px;
	BORDER-LEFT-WIDTH: 0px;
	FONT-SIZE: 12px;
	BORDER-BOTTOM-WIDTH: 0px;
	MARGIN: 0px;
	FONT-FAMILY: 宋体;
	BACKGROUND-COLOR: #fff;
	BORDER-RIGHT-WIDTH: 0px
}

.blk_18 {
	BORDER-RIGHT: #e3e3e3 1px solid;
	BORDER-TOP: #e3e3e3 1px solid;
	MARGIN-TOP: 8px;
	FONT-SIZE: 12px;
	BACKGROUND: #f3f3f3;
	OVERFLOW: hidden;
	BORDER-LEFT: #e3e3e3 1px solid;
	WIDTH: 390px;
	BORDER-BOTTOM: #e3e3e3 1px solid;
	ZOOM: 1
}

.blk_18 .pcont {
	FLOAT: left;
	OVERFLOW: hidden;
	WIDTH: 350px
}

.blk_18 .ScrCont {
	WIDTH: 32766px;
	ZOOM: 1
}

.blk_18 #List1_1 {
	FLOAT: left
}

.blk_18 #List2_1 {
	FLOAT: left
}

.blk_18 .LeftBotton {
	BACKGROUND:
		url(http://img.china.alibaba.com/images/unsort/module/picr_1.gif)
		no-repeat;
	FLOAT: left;
	MARGIN: 10px 1px;
	WIDTH: 15px;
	HEIGHT: 72px
}

.blk_18 .RightBotton {
	BACKGROUND:
		url(http://img.china.alibaba.com/images/unsort/module/picr_1.gif)
		no-repeat;
	FLOAT: left;
	MARGIN: 10px 1px;
	WIDTH: 15px;
	HEIGHT: 72px
}

.blk_18 .LeftBotton {
	BACKGROUND-POSITION: 0px 0px;
	MARGIN-LEFT: 5px
}

.blk_18 .RightBotton {
	BACKGROUND-POSITION: 0px -100px;
	MARGIN-LEFT: -1px
}

.blk_18 .LeftBotton:hover {
	BACKGROUND-POSITION: -20px 0px
}

.blk_18 .RightBotton:hover {
	BACKGROUND-POSITION: -20px -100px
}

.blk_18 .pl IMG {
	DISPLAY: block;
	MARGIN: 6px auto 1px;
	CURSOR: pointer;
	BORDER-TOP-STYLE: none;
	BORDER-RIGHT-STYLE: none;
	BORDER-LEFT-STYLE: none;
	BORDER-BOTTOM-STYLE: none
}

.blk_18 .pl {
	BORDER-RIGHT: #f3f3f3 1px solid;
	BORDER-TOP: #f3f3f3 1px solid;
	FLOAT: left;
	BORDER-LEFT: #f3f3f3 1px solid;
	WIDTH: 114px;
	LINE-HEIGHT: 24px;
	BORDER-BOTTOM: #f3f3f3 1px solid;
	TEXT-ALIGN: center;
	TEXT-DECORATION: underline
}

.blk_18 A.pl:hover {
	BORDER-RIGHT: #ff9900 1px solid;
	BORDER-TOP: #ff9900 1px solid;
	BACKGROUND: #fff;
	BORDER-LEFT: #ff9900 1px solid;
	COLOR: #ff9900;
	BORDER-BOTTOM: #ff9900 1px solid
}

.commu_cont3 {
	MARGIN: 9px 7px 7px;
	LINE-HEIGHT: 150%
}

.commu_cont3 UL {
	WIDTH: 188px
}
-->
</style>
</head>
<body>
	<!-- picrotate_left start  -->
	<DIV class=blk_18>
		<A onmouseup=ISL_StopUp_1() class=LeftBotton onmousedown=ISL_GoUp_1()
			onmouseout=ISL_StopUp_1() href="javascript:void(0);" target=_self></A>
		<DIV class=pcont id=ISL_Cont_1>
			<DIV class=ScrCont>
				<DIV id=List1_1>
					<!-- piclist begin -->
					<A class=pl
						href="http://info.china.alibaba.com/news/detail/v3000103-d1002527920.html"
						target=_blank><IMG height=72 alt=20-50元夏装抢疯
						src="http://www.baidu.com/img/baidu_logo.gif" width=96>美女小凡最新夏装</A><A
						class=pl
						href="http://info.china.alibaba.com/news/detail/v5000180-d1002468482.html"
						target=_blank><IMG height=72 alt=韩国人气小耳环
						src="http://www.baidu.com/img/baidu_logo.gif" width=96>韩国人气小耳环</A><A
						class=pl
						href="http://info.china.alibaba.com/news/detail/v9-d1002531301.html"
						target=_blank><IMG height=72 alt=3万6超值装修88平
						src="http://www.baidu.com/img/baidu_logo.gif" width=96>3万6超值装修88平</A><A
						class=pl
						href="http://info.china.alibaba.com/news/detail/v8-d1002530067.html"
						target=_blank><IMG height=72 alt=牛干巴敲开财富门
						src="http://www.baidu.com/img/baidu_logo.gif" width=96>牛干巴敲开财富门</A><A
						class=pl
						href="http://info.china.alibaba.com/news/detail/v5003519-d1002285304.html"
						target=_blank><IMG height=72 alt=4K至7K高性能本本
						src="http://www.baidu.com/img/baidu_logo.gif" width=96>4K至7K高性能本本</A><A
						class=pl
						href="http://info.china.alibaba.com/news/detail/v5001800-d1002511645.html"
						target=_blank><IMG height=72 alt=7万装修102平婚房
						src="http://www.baidu.com/img/baidu_logo.gif" width=96>7万装修102平婚房</A><A
						class=pl
						href="http://info.china.alibaba.com/news/detail/v5003463-d1002527336.html"
						target=_blank><IMG height=72 alt=最新小车节油为主
						src="http://www.baidu.com/img/baidu_logo.gif" width=96>最新小车节油为主</A><A
						class=pl
						href="http://info.china.alibaba.com/news/detail/v5003000-d1002505656.html"
						target=_blank><IMG height=72 alt="热门项目 BT烤翅"
						src="http://www.baidu.com/img/baidu_logo.gif" width=96>热门项目
						BT烤翅</A><A class=pl
						href="http://info.china.alibaba.com/news/detail/v3000103-d1002421590.html"
						target=_blank><IMG height=72 alt=流行T恤+裤装
						src="http://www.baidu.com/img/baidu_logo.gif" width=96>要显瘦就这么穿！</A>
					<!-- piclist end -->
				</DIV>
				<DIV id=List2_1></DIV>
			</DIV>
		</DIV>
		<A onmouseup=ISL_StopDown_1() class=RightBotton
			onmousedown=ISL_GoDown_1() onmouseout=ISL_StopDown_1()
			href="javascript:void(0);" target=_self></A>
	</DIV>
	<SCRIPT type=text/javascript>
<!--
picrun_ini()
//-->
</SCRIPT>
	<!-- picrotate_left end -->
</body>
</html>
<a href="http://js.alixixi.com/">欢迎访问阿里西西网页特效代码站，js.alixixi.com</a>