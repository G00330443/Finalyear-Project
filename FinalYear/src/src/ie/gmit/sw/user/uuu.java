package src.ie.gmit.sw.user;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import src.ie.gmit.sw.mysql.DB;

public class uuu {
	private int id;

	private String username;

	private String password;

	private String phone;

	private String addr;

	private Date rdate;

	public String getAddr() {
		return addr;
	}

	public void setAddr(String addr) {
		this.addr = addr;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public Date getRdate() {
		return rdate;
	}

	public void setRdate(Date rdate) {
		this.rdate = rdate;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void save() {
		Connection conn = DB.connect();
		String sql = "insert into user values (null, ?, ?, ?, ?, ?)";
		PreparedStatement pstmt = DB.prepare(conn, sql);
		try {
			pstmt.setString(1, username);
			pstmt.setString(2, password);
			pstmt.setString(3, phone);
			pstmt.setString(4, addr);
			pstmt.setTimestamp(5, new Timestamp(rdate.getTime()));
			pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DB.close(pstmt);
			DB.close(conn);
		}

	}

	public static List<uuu> getUsers() {
		List<uuu> users = new ArrayList<uuu>();
		Connection conn = DB.connect();
		String sql = "select * from user";
		Statement stmt = DB.getStatement(conn);
		ResultSet rs = DB.getResultSet(stmt, sql);
		try {
			while (rs.next()) {
				uuu u = new uuu();
				u.setId(rs.getInt("id"));
				u.setUsername(rs.getString("username"));
				u.setPassword(rs.getString("password"));
				u.setPhone(rs.getString("phone"));
				u.setAddr(rs.getString("addr"));
				u.setRdate(rs.getTimestamp("rdate"));
				users.add(u);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DB.close(rs);
			DB.close(stmt);
			DB.close(conn);
		}
		return users;
	}

	/**
	 * 
	 * @param users
	 * @param pageNo
	 * @param pageSize
	 * @return 总共有多少条记录
	 */
	public static int getUsers(List<uuu> users, int pageNo, int pageSize) {

		int totalRecords = -1;

		Connection conn = DB.connect();
		String sql = "select * from user limit " + (pageNo - 1) * pageSize
				+ "," + pageSize;
		Statement stmt = DB.getStatement(conn);
		ResultSet rs = DB.getResultSet(stmt, sql);

		Statement stmtCount = DB.getStatement(conn);
		ResultSet rsCount = DB.getResultSet(stmtCount,
				"select count(*) from user");

		try {
			rsCount.next();
			totalRecords = rsCount.getInt(1);

			while (rs.next()) {
				uuu u = new uuu();
				u.setId(rs.getInt("id"));
				u.setUsername(rs.getString("username"));
				u.setPassword(rs.getString("password"));
				u.setPhone(rs.getString("phone"));
				u.setAddr(rs.getString("addr"));
				u.setRdate(rs.getTimestamp("rdate"));
				users.add(u);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DB.close(rsCount);
			DB.close(stmtCount);
			DB.close(rs);
			DB.close(stmt);
			DB.close(conn);
		}

		return totalRecords;
	}

	public static boolean delete(int id) {
		boolean b = false;
		Connection conn = DB.connect();
		String sql = "delete from user where id = " + id;
		Statement stmt = DB.getStatement(conn);

		try {
			DB.executeUpdate(stmt, sql);
			b = true;
		} finally {
			DB.close(stmt);
			DB.close(conn);
		}
		return b;
	}

/*	public static uuu check(String username, String password)
			throws UserNotFoundException, PasswordNotCorrectException {
		uuu u = null;
		Connection conn = DB.connect();
		String sql = "select * from user where username = '" + username + "'";
		Statement stmt = DB.getStatement(conn);
		ResultSet rs = DB.getResultSet(stmt, sql);
		try {
			if(!rs.next()) {
				throw new UserNotFoundException("用户不存在:" + username);
			} else {
				if(!password.equals(rs.getString("password"))) {
					throw new PasswordNotCorrectException("密码不正确哦!");
				}
				u = new uuu();
				u.setId(rs.getInt("id"));
				u.setUsername(rs.getString("username"));
				u.setPassword(rs.getString("password"));
				u.setPhone(rs.getString("phone"));
				u.setAddr(rs.getString("addr"));
				u.setRdate(rs.getTimestamp("rdate"));
			}
			
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DB.close(rs);
			DB.close(stmt);
			DB.close(conn);
		}
		return u;
	}
	*/
	public static void update(uuu u) {
		u.update();
	}
	
	public void updatePassword() {
		
	}
	
	public static void updatePassword(uuu u) {
		u.updatePassword();
	}
	
	public static void updatePassword(int userId, String newPassword) {
		
	}
	
	public void update() {
		Connection conn = DB.connect();
		String sql = "update user set phone = ?, addr = ? where id = ?";
		PreparedStatement pstmt = DB.prepare(conn, sql);
		try {
			pstmt.setString(1, phone);
			pstmt.setString(2, addr);
			pstmt.setInt(3, id);
			pstmt.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			DB.close(pstmt);
			DB.close(conn);
		}
	}

	public static void main(String[] args) {
		List<uuu> users = new ArrayList<uuu>();
		int totalRecords = uuu.getUsers(users, 1, 10);
		for (int i = 0; i < users.size(); i++) {

		}
	}
	

}
