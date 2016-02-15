<%
	response.setContentType("text/xml");
	response.setHeader("Cache-Control", "no-store"); //HTTP1.1
	response.setHeader("Pragma", "no-cache"); //HTTP1.0
	response.setDateHeader("Expires", 0); //prevents catching at proxy server
	//System.out.println(request.getParameter("pass2"));
	//System.out.println(request.getParameter("pass"));
	//System.out.println(request.getParameter("pass2"));

	String pass = request.getParameter("pass");
	String pass2 = request.getParameter("pass2");

	boolean flag;
	if (pass.equalsIgnoreCase(pass2)) {
		System.out.println(pass + "~~~~~~~~");
		response.getWriter().write("<msg>valid</msg>");
	} else {
		System.out.println(pass + "-----------------------");
		response.getWriter().write("<msg>invalid</msg>");
	}

	/* System.out.println(pass2);

	if (flag) {
		System.out.println(pass + "~~~~~~~~");
		response.getWriter().write("<msg>valid</msg>");
	} else {
		System.out.println(pass + "-----------------------");
		response.getWriter().write("<msg>invalid</msg>");
	} */
%>
