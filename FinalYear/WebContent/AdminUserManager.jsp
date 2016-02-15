<%@ page language="java" import="src.ie.gmit.sw.user.*"
	pageEncoding="utf-8"%>
<%@ page import="java.util.*"%>
<%@ page import="java.text.SimpleDateFormat"%>
<%
	//检查session，查看用户是否登陆
	NormalUser u = (NormalUser) session.getAttribute("username");
	//String user=(String)session.getAttribute("username");

	//out.println(user+"，Welcome！！");
	if (u == null) {
		response.sendRedirect("index.jsp");
		return;
	}
	//NormalUser u=new NormalUser();
	//u.setUsername(user);
	System.out.println(u.getAddress()+"***");
%>

<%
	request.setCharacterEncoding("utf-8");
	String action = request.getParameter("action");
	
	if (action != null && action.trim().equals("modify")) {
		String phone = request.getParameter("phone");
		String addr = request.getParameter("addr");
		
		u.setPhone(phone);
		u.setAddress(addr);
		u.change();
		out.println("Successful Change , Congrulation");
		return;
	}
%>


</head>
<body leftmargin="0" rightmargin="0" topmargin="0"
	onkeydown="if(event.keyCode==27) return false;">
	<div id="popLayer" style="position: absolute; z-index: 1000;"
		class="cPopText"></div>


	<script src="include/header.js" type="text/javascript"></script>
	<table style="table-layout: fixed;" align="center" border="0"
		width="97%">
		<tbody>
			<tr>
				<td class="nav" align="left" nowrap="nowrap" width="90%">&nbsp;Shopping
					&#187; register</td>
				<td align="right" width="10%">&nbsp;<a href="#bottom"><img
						src="" align="absmiddle" border="0"></a></td>
			</tr>
		</tbody>
	</table>

	<form method="post" name="register"
		onSubmit="this.regsubmit.disabled=true;">
		<input type="hidden" name="action" value="modify" />

		<table align="center" cellpadding="4" cellspacing="100" width="97%">
			<tbody>
				<tr>
					<td colspan="2" class="header">Modify - Necessary Content</td>
				</tr>

				<tr>
					<td class="altbg1" width="21%">Username :</td>
					<td class="altbg2"><input name="username" size="25"
						maxlength="25" type="text" readonly value="<%=u.getUsername()%>">
					</td>
				</tr>

				<tr>
					<td class="altbg1">Phone Number:</td>
					<td class="altbg2"><input name="phone" type="text" id="phone"
						size="25" value="<%=u.getPhone()%>"></td>
				</tr>

				<tr>
					<td class="altbg1" valign="top">Delivery Address:</td>
					<td class="altbg2"><textarea name="addr" cols="60" rows="5"
							id="addr"><%=u.getAddress()%></textarea></td>
				</tr>
			</tbody>
		</table>
		<br>
		<% 
		request.setCharacterEncoding("utf-8");
		String submitaction = request.getParameter("submitaction");

		if (submitaction != null && submitaction.trim().equals("regsubmit")) {
			String username1 = request.getParameter("username");
			String phone1 = request.getParameter("phone");
			String addr1 = request.getParameter("addr");
			NormalUser submitU = new NormalUser();

			submitU.setUsername(username1);
			submitU.setPhone(phone1);
			submitU.setAddress(addr1);
			submitU.change();
			out.println("Change Successful!Congragulation!");
			return;
		}
		%>
		<center>
			<input name="regsubmit" value="Submit" type="submit" submitaction="AdminUserManager.jsp">
		</center>
	</form>

	<script language="JavaScript">
		document.register.username.focus();
	</script>

	<p align="center"></p>
	<table class="smalltxt" cellpadding="4" cellspacing="0" width="100%">
		<tbody>
			<tr class="altbg1">
				<td>
					<%
				Date date = new Date();
				out.print(date);
				%>
				</td>
				<td align="right"><a href="" class="bold">Clean Cookies</a></td>
				<td align="right" width="1">&nbsp;</td>
			</tr>
			<tr style="padding: 0px; font-size: 0px; line-height: 0px;" images=""
				green="" bg01.gif="")="">
				<td colspan="3"></td>
			</tr>
		</tbody>
	</table>
	<p align="center">

		<br> <a name="bottom"></a> <a target="_blank" href=""><u>Second-Hand
				Exchange</u></a><br> Tel:010-58052712

	</p>
</body>
</html>