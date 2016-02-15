package src.ie.gmit.sw.user;

public interface User {

	void getOrders();
	
	void save();
	
	void change();
	
	static void delete(int id) {
	}
	
	static void search() {
		
	}
	
}
