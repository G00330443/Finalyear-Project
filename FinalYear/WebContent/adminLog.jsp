<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ page import="java.util.*"%>
<%@ page import="src.ie.gmit.sw.user.*"%>
<%@ page import="src.ie.gmit.sw.mysql.*"%>
<%@ page import="java.sql.*"%>


<%
	String action = request.getParameter("action");
	String username = request.getParameter("username");
	String password = request.getParameter("password");
	Boolean flag=false;
	
	Connection connect = DB.connect();
	String sql = "select * from user where username = '" + username + "'";
//	String sqlpass = "select password from user where username = '" + username + "'";

	Statement state = DB.getStatement(connect);
	ResultSet rs = DB.getResultSet(state, sql);
//	ResultSet rspass = DB.getResultSet(state, sqlpass);
//	ResultSet repass=state.executeQuery(sqlpass);
	//out.println(rs.getString("addr"));
	//check id 
	//创建用户
	
	NormalUser u=new NormalUser();
	u.setUsername(username);
//	u.setAddress(rs.getString("addr"));
//	u.setPhone(rs.getString("phone"));
  	if (!rs.next()) {
		flag = true;
	} else {
		flag = false;
	}
  
	if (action != null && action.equals("login")) {

		if (flag) {
			//out.println("username or password not correct!");
%>
<script>
	alert("username or password not correct!");
</script>
<%
	return;
		}
		
		//System.out.println(uu.getAddress()+"-----"+uu.getPhone());
		session.setAttribute("username",u.getU(username));
		response.sendRedirect("index.jsp");
	}
%>

 
 <%-- <%
String action = request.getParameter("action");
if(action != null && action.equals("login")) {
	String username = request.getParameter("username");
	String password = request.getParameter("password");
	User u = null;
	try {
		u = User.check(username, password);
	} catch (UserNotFoundException e) {
		out.println(e.getMessage());
		return;
	} catch (PasswordNotCorrectException e) {
		out.println(e.getMessage());
		return;
	}

	session.setAttribute("user", u);
	response.sendRedirect("Confirm.jsp");
}
%> --%>
 
<script src="include/header.js" type="text/javascript"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
	<form action="adminLog.jsp" method="post">
		<input type="hidden" name="action" value="login" />
		<table border="1" align="center">
			<tr>
				<td>admin name:</td>
				<td><input type="text" size="10" name="username" /></td>
			</tr>
			<tr>
				<td>admin password:</td>
				<td><input type="password" size="10" name="password" /></td>
			</tr>
			<tr>
				<td></td>
				<td><input type="submit" value="login" /><input type="reset"
					value="reset" /></td>
			</tr>
		</table>
	</form>
	<input type="submit" value="register"
		onclick="window.location.href='register.jsp'" />
</body>
</html>