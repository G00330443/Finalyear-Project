<%@ page import="java.util.*"%>
<%@ page import="src.ie.gmit.sw.user.*"%>
<%@ page import="src.ie.gmit.sw.mysql.*"%>
<%@ page import="java.sql.*"%>
<%
	response.setContentType("text/xml");
	response.setHeader("Cache-Control", "no-store"); //HTTP1.1
	response.setHeader("Pragma", "no-cache"); //HTTP1.0
	response.setDateHeader("Expires", 0); //prevents catching at proxy server
	//System.out.println(request.getParameter("id"));
	//check the database
	String name = request.getParameter("id");
	//System.out.println(name + "         ***********");
	Boolean flag;

	//connect mysql
	Connection connect = DB.connect();
	String sql = "select * from user where username = '" + name + "'";
	Statement state = DB.getStatement(connect);
	ResultSet rs = DB.getResultSet(state, sql);

	//check id 
	if (!rs.next()) {
		flag = true;
	} else {
		flag = false;
	}

	DB.close(rs);
	DB.close(state);
	DB.close(connect);

	System.out.println(flag+"~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
	if (!flag) {
		response.getWriter().write("<msg>invalid</msg>");
	} else {
		response.getWriter().write("<msg>valid</msg>");
	}
%>
