package src.ie.gmit.sw.user;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.sql.*;

import src.ie.gmit.sw.mysql.DB;

public class NormalUser implements User{
	private int id;
	private String username;

	private String password;
	private String phone;
	private String address;
	private Date createDate;
	private int userlevel;


	public void authority(){
		Connection connect=DB.connect();
		String sql ="update user set userlevel="+getUserlevel()+" where username="+getUsername();
		Statement state=DB.getStatement(connect);
		
		DB.executeUpdate(state, sql);
		DB.close(connect);
		DB.close(state);
		
	}

	@Override
	public void getOrders() {

	}

	public static void main(String[] args) {
	/*	NormalUser n=new NormalUser();
		for(int i=5;i<18;i++){
		n.delete(i);
		}*/
		String[] ss={"da"	,"da","das"};
		System.out.println(ss[0]);
	}
	@Override
	public void save(){
		createDate=new Date();
		Connection con=DB.connect();
		String sql = "insert into user values (null, ?, ?, ?, ?,?,0)";
		PreparedStatement ps = DB.prepare(con, sql);

		System.out.println(getUsername()+"**"+getPassword()+"**"+getPhone()+"**"+getAddress());
		try {

			ps.setString(1, getUsername());

			ps.setString(2, getPassword());

			ps.setString(3, getPhone());
			ps.setString(4, getAddress());
			ps.setTimestamp(5, new Timestamp(createDate.getTime()));
			ps.executeUpdate();
			//	System.out.println(new Timestamp(createDate.getTime()));
			System.out.println("!!!!!!!!!!");
			//	System.out.println("11");
		} catch (SQLException e ) {
			System.out.println("fail");
			// TODO Auto-generated catch block
			e.printStackTrace();
		}catch(NullPointerException e)
		{
			System.out.println("发生异常的原因为 :"+e.getMessage());
		}

	}

	//获取user  存入各种属性
	public static List<User> getUsers(String name) {
		List<User> users = new ArrayList<User>();
		Connection connect = DB.connect();
		String sql = "select * from user";
		Statement state = DB.getStatement(connect);
		ResultSet rs = DB.getResultSet(state, sql);
		try {
			while (rs.next()) {
				NormalUser u = new NormalUser();
				u.setId(rs.getInt("id"));
				u.setUsername(rs.getString("username"));
				u.setPassword(rs.getString("password"));
				u.setPhone(rs.getString("phone"));
				u.setAddress(rs.getString("addr"));
				u.setCreateDate(rs.getTimestamp("rDate"));
				u.setUserlevel(rs.getInt("userlevel"));
				users.add(u);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DB.close(rs);
			DB.close(state);
			DB.close(connect);
		}
		return users;
	}

	@Override
	public void change() {
		// TODO Auto-generated method stub
		Connection connect=DB.connect();
		String sql ="update user set addr="+"'"+getAddress()+"'"+ ",phone="+"'"+getPhone()+"'"+" where username="+"'"+getUsername()+"'";
		Statement state=DB.getStatement(connect);
		System.out.println(getAddress()+getPhone()+getUsername());
		DB.executeUpdate(state, sql);
		DB.close(connect);
		DB.close(state);
		
		System.out.println("success******");
		
	}

	//删除用户 通过ID
	public static void delete(int id) {
		// TODO Auto-generated method stub
		Connection connect=DB.connect();
		String sql = "delete from user where id = " + id;
		Statement state = DB.getStatement(connect);

		DB.executeUpdate(state, sql);
		System.out.println("success delect"+id);
		DB.close(connect);
		DB.close(state);

	}
	
	public static String checkUserPassMatch(String username){
		Connection connect=DB.connect();
		String sql = "select password from user where username = " + username;
		Statement state = DB.getStatement(connect);
		ResultSet rs = DB.getResultSet(state, sql);
		String pass = null;
		
		try {
			pass=rs.getString("password");
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		DB.close(connect);
		DB.close(state);
		DB.close(rs);

		return pass;
	}

	public NormalUser getU(String name){
		Connection connect = DB.connect();
		String sql = "select * from user where username="+"'"+name+"'";
		Statement state = DB.getStatement(connect);
		ResultSet rs = DB.getResultSet(state, sql);
		
		NormalUser u=new NormalUser();
		u.setUsername(name);
		try {
			rs.next();
			u.setAddress(rs.getString("addr"));
			u.setUserlevel(rs.getInt("userlevel"));
			u.setPhone(rs.getString("phone"));
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			System.out.println("Auto-generated catch block");
			e.printStackTrace();
		}
		return u;
		
	}
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public Date getCreateDate() {
		return createDate;
	}


	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public int getUserlevel() {
		return userlevel;
	}

	public void setUserlevel(int userlevel) {
		this.userlevel = userlevel;
	}
	
	String[] storePass;

	public String[] getStorePass() {
		return storePass;
	}

	public void setStorePass(String[] storePass) {
		this.storePass = storePass;
	}

	public boolean checkPassword(String pass,String pass2){
		if(pass==pass2){
			return true;
		}else{
			return false;
		}
	}
 
}
