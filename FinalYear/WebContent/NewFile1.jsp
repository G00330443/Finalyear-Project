<!DOCTYPE html>
<html>
<head>
<script type="text/javascript">
function validatorloginName(){  
    var loginName=document.getElementById("uname").value;  
    if(loginName == "")  
    {  
       alert("用户名不能为空!");  
       return;  
    }  
    $.ajax({  
           type: "POST",      
            url: "ValidateName",      
             data: "loginName="+loginName,   
            success: function(data){  
           if(data=="true"){     
            alert("恭喜您！用户名没有被使用！");    
            
           }else{     
            alert("抱歉！用户名已存在！");     
           }   
           }            
           });     
   }         
    </script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Shopping</title>
    <form action="register.do?action=add" onsubmit="return submessage(this)" method="post" name="form1">  
            <table border="1" width="500" cellspacing="1" cellpadding="3" align="left" bordercolor="#326598" >  
                <tr>  
                    <td colspan="7" bgcolor="#FEA817">  
                        [align=center]  
                            <font color="#FFFFFF"><b>用户注册</b> </font>  
                        [/align]  
                    </td>  
                </tr>  
                <tr>  
                    <td>  
                        用户名  
                    </td>  
                    <td>  
                        <input name="uname" id="username" type="text" class="form_text" size="20" onblur="validatorloginName()">        
                    </td>  
                </tr>  
                  
                <tr>  
                    <td>  
                        登陆密码  
                    </td>  
                    <td>  
                        <input type="password" name="upwd">  
                    </td>  
                </tr>  
                <tr>  
                    <td>  
                        确认密码  
                    </td>  
                    <td>  
                        <input type="password" name="upwd1">  
                    </td>  
                </tr>  
                <tr>  
                    <td colspan="2" align="center">  
                        <input type="submit" value="提交">  
                        <input type="reset" value="重置">  
                    </td>  
                </tr>  
            </table>  
                    </form>  
</body>
</html>