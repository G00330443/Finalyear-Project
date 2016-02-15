package src.ie.gmit.sw.mysql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/*  
 * http://blog.csdn.net/xiaoxian8023/article/details/9154063   解释PreparedStatement 和statement
 *     */
public class DB {
	
	//连接数据库
	public static Connection connect() {
		Connection conn = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/shopping","root","");
			System.out.println("successful");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		
		return conn;
	}
	
	public static PreparedStatement prepare(Connection conn,  String sql) {
		PreparedStatement ps = null; 
		try {
			if(conn != null) {
				ps = conn.prepareStatement(sql);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return ps;
	}
	
	public static PreparedStatement prepare(Connection conn,  String sql, int autoGenereatedKeys) {
		PreparedStatement ps = null; 
		try {
			if(conn != null) {
				ps = conn.prepareStatement(sql, autoGenereatedKeys);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return ps;
	}
	
	public static Statement getStatement(Connection conn) {
		Statement stmt = null; 
		try {
			if(conn != null) {
				stmt = conn.createStatement();
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return stmt;
	}
	
	/*
	public static ResultSet getResultSet(Connection conn, String sql) {
		Statement stmt = getStatement(conn);
		ResultSet rs = getResultSet(stmt, sql);
		close(stmt);
		return rs;
	}
	*/
	
	public static ResultSet getResultSet(Statement stmt, String sql) {
		ResultSet rs = null;
		try {
			if(stmt != null) {
				rs = stmt.executeQuery(sql);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return rs;
	}
	
	public static void executeUpdate(Statement stmt, String sql) {
		try {
			if(stmt != null) {
				stmt.executeUpdate(sql);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public static void close(Connection conn) {
		try {
			if(conn != null) {
				conn.close();
				conn = null;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public static void close(Statement stmt) {
		try {
			if(stmt != null) {
				stmt.close();
				stmt = null;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
	
	public static void close(ResultSet rs) {
		try {
			if(rs != null) {
				rs.close();
				rs = null;
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

}
