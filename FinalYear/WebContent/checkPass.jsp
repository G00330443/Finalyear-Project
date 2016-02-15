<%
response.setContentType("text/xml");
response.setHeader("Cache-Control", "no-store"); //HTTP1.1
response.setHeader("Pragma", "no-cache"); //HTTP1.0
response.setDateHeader("Expires", 0); //prevents catching at proxy server
System.out.println(request.getParameter("pass"));
//System.out.println(request.getParameter("pass2"));
//check the database
String pass=request.getParameter("pass");
//String pass2=request.getParameter("pass2");
if(pass.length()<6){
	response.getWriter().write("<msg>invalid</msg>");
	
}else{
	response.getWriter().write("<msg>valid</msg>");
}

%>
