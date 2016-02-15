<%@ page language="java" import="src.ie.gmit.sw.user.*"
	pageEncoding="utf-8"%>
<%@ page import="java.util.*"%>

<%
	request.setCharacterEncoding("utf-8");
	String action = request.getParameter("action");

	if (action != null && action.trim().equals("register")) {
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		String password2 = request.getParameter("password2");
		String phone = request.getParameter("phone");
		String addr = request.getParameter("addr");
		NormalUser u = new NormalUser();
		//	uuu u = new uuu();
		String[] storePass={password,password2};
		u.setStorePass(storePass);
		u.setUsername(username);
		if (password == password2) {
			u.setPassword(password);
		}
		u.setPhone(phone);
		u.setAddress(addr);
		u.setCreateDate(new Date());
		u.save();
		out.println("RegisterSuccessful!Congragulation!");
		return;
	}
%>

<html>
<head>
<title>Exchange Website register</title>
<script type="text/javascript">
	var req;

	//检查账号
	function checkID() {
		var idField = document.getElementById("userid");
		var url = "checkID.jsp?id=" + escape(idField.value);
		if (window.XMLHttpRequest) {
			req = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			req = new ActiveXObject("Microsoft.XMLHTTP");
		}
		req.open("GET", url, true);
		req.onreadystatechange = callback;
		req.send(null);
	}

	function callback() {
		if (req.readyState == 4) {
			if (req.status == 200) {
				//alert(req.responseText);
				var msg = req.responseXML.getElementsByTagName("msg")[0];
				//alert(msg);
				setuserMsg(msg.childNodes[0].nodeValue);
			}
		}
	}

	function setuserMsg(msg) {
		//alert(msg);
		mdiv = document.getElementById("usermsg");
		if (msg == "invalid") {
			mdiv.innerHTML = "<font color='red'>username exists</font>";
			document.getElementById("regi").setAttribute("disabled",false);

		} else {
			mdiv.innerHTML = "<font color='green'>congratulations! you can use this username!</font>";
			document.getElementById("regi").removeAttribute("disabled");

		}
	}

	//检查密码
	function checkpass() {
		var idField = document.getElementById("passid");
		var url = "checkPass.jsp?pass=" + escape(idField.value);
		if (window.XMLHttpRequest) {
			req = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			req = new ActiveXObject("Microsoft.XMLHTTP");
		}
		req.open("GET", url, true);
		req.onreadystatechange = callbackpass;
		req.send(null);
	}

	function callbackpass() {
		if (req.readyState == 4) {
			if (req.status == 200) {
				//alert(req.responseText);
				var msg = req.responseXML.getElementsByTagName("msg")[0];
				//alert(msg);
				setpassMsg(msg.childNodes[0].nodeValue);
			}
		}
	}

	function setpassMsg(msg) {
		//	checkTwoPass();
		//alert(msg);
		mdiv = document.getElementById("passmsg");
	
		if (msg == "invalid") {
			mdiv.innerHTML = "<font color='red'>wrong</font>";
			document.getElementById("regi").setAttribute("disabled");
		} else {
			mdiv.innerHTML = "<font color='green'>right</font>";
			document.getElementById("regi").removeAttribute("disabled");

		}
	}

	function checkTwoPass() {
		var pass = document.getElementById("passid").value;
		var pass2 = document.getElementById("passid2").value;
		var url = "checktwopass.jsp?pass=" + escape(pass)+"&pass2="+escape(pass2);

		if (window.XMLHttpRequest) {
			req = new XMLHttpRequest();
		} else if (window.ActiveXObject) {
			req = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//req.open("GET", url, true, pass, pass2);
		req.open("GET", url, true);
		req.onreadystatechange = callbackpasscheck;
		req.send(null);
	}

	function callbackpasscheck() {
		if (req.readyState == 4) {
			if (req.status == 200) {
				//alert(req.responseText);
				var msg = req.responseXML.getElementsByTagName("msg")[0];
				//alert(msg);
				setpasscheckMsg(msg.childNodes[0].nodeValue);
			}
		}
	}
	
	function setpasscheckMsg(msg) {
		//	checkTwoPass();
		// alert(msg+"00");
		mdiv2 = document.getElementById("passmsg2");
	//	document.write(msg+"`````");
		if (msg=="valid") {
			document.getElementById("regi").removeAttribute("disabled");
			mdiv2.innerHTML = "<font color='green'>valid</font>";
		} else {
			mdiv2.innerHTML = "<font color='red'>invalid</font>";
			document.getElementById("regi").setAttribute("disabled");
		}
	}
	
/* 	 function checkpwd(){
		  var p1=document.register.password.value;//获取密码框的值
		  var p2=document.register.password2.value;//获取重新输入的密码值
		  if(p1==""){
		   alert("请输入密码！");//检测到密码为空，提醒输入//
		   document.form1.pwd1.focus();//焦点放到密码框
		   return false;//退出检测函数
		  }//如果允许空密码，可取消这个条件
		  
		  if(p1!=p2){//判断两次输入的值是否一致，不一致则显示错误信息
		   document.getElementById("passmsg2").innerHTML="两次输入密码不一致，请重新输入";//在div显示错误信息
		   return false;
		  }else{
		   //密码一致，可以继续下一步操作 
		  }
		 } */
</script>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="keywords"
	content="Discuz!,Board,Comsenz,forums,bulletin board,">
<meta name="description" content="11  - Discuz! Board">
<meta name="generator" content="Discuz! 4.0.0RC4 with Templates 4.0.0">
<meta name="MSSmartTagsPreventParsing" content="TRUE">
<meta http-equiv="MSThemeCompatible" content="Yes">




</head>
<body leftmargin="0" rightmargin="0" topmargin="0"
	onkeydown="if(event.keyCode==27) return false;">
	<div id="popLayer" style="position: absolute; z-index: 1000;"
		class="cPopText"></div>
</head>

<script src="include/header.js" type="text/javascript"></script>
<table style="table-layout: fixed;" align="center" border="0"
	cellpadding="0" cellspacing="0" width="97%">
	<tbody>
		<tr>
			<td class="nav" align="left" nowrap="nowrap" width="90%">&nbsp;
				Shopping &#187; Register</td>
			<td align="right" width="10%">&nbsp;<a href="#bottom"><img
					src="" align="absmiddle" border="0"></a></td>
		</tr>
	</tbody>
</table>
<br>

<form method="post" name="register" action="register.jsp"
	onSubmit="this.regsubmit.disabled=true;">
	<input type="hidden" name="action" value="register" />

	<table class="tableborder" align="center" cellpadding="4"
		cellspacing="1" width="97%">
		<tbody>
			<tr>
				<td colspan="2" class="header">Register -necessary information</td>
			</tr>
			<tr>
				<td class="altbg1" width="21%">UserName:</td>
				<td class="altbg2"><input id="userid" name="username" size="25"
					maxlength="25" type="text" Onchange="checkID()"> <span
					id="usermsg"></span>
			</tr>

			<tr>
				<td class="altbg1">Password:</td>
				<td class="altbg2"><input id="passid" name="password" size="25"
					maxlength="25" type="password" Onchange="checkpass()"><span id="passmsg"></span>
			</tr>

			<tr>
				<td class="altbg1">Confirm Password:</td>
				<td class="altbg2"><input id="passid2" name="password2" size="25" 
					type="password" Onchange="checkTwoPass()"><span
					id="passmsg2"></span>
			</tr>

			<tr>
				<td class="altbg1">Phone</td>
				<td class="altbg2"><input name="phone" type="text" id="phone"
					size="25"></td>
			</tr>

			<tr>
				<td class="altbg1" valign="top">Delivery Address:</td>
				<td class="altbg2"><textarea name="addr" cols="60" rows="5"
						id="addr"></textarea></td>
			</tr>
		</tbody>
	</table>
	<br>

	<div align="center">
		<input id="regi" name="regsubmit" value="Submit " type="submit" disabled="disabled"/>
	</div>

</form>

<p align="center"></p>
<table class="smalltxt" cellpadding="4" cellspacing="0" width="100%">
	<tbody>
		<tr class="altbg1">
			<td><% new Date(); %></td>
			<td align="right"><a
				class="bold">Clear Cookies</a></td>
			<td align="right" width="1">&nbsp;</td>
		</tr>
		<tr style="padding: 0px; font-size: 0px; line-height: 0px;" images=""
			green="" bg01.gif="")="">
			<td colspan="3"></td>
		</tr>
	</tbody>
</table>
<p align="center">

	<br> <a name="bottom"></a> <a target="_blank"
		href="http://www.thinkpadclub.com.cn/"><u>Shopping</u></a><br>
	Tel:010-58052712
	<!--<br><font color=#ebebeb>
Powered by <a href="http://www.discuz.net" target="_blank"><font color=#ebebeb>Discuz!</font></a> 
<a href="misc.php?action=viewlicense"><b style="color:#ebebeb">4.0.0RC4</b></a>&nbsp;
&copy; 2001-2005 <a href="http://www.comsenz.com" target="_blank"><font color=#ebebeb>Comsenz Technology Ltd</font></a>
<br>Processed in 0.011754 second(s), 5 queries
-->
</p>
</body>
</html>