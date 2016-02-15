package src.ie.gmit.sw.order;

import java.util.Date;

public class SalesOrder {
	private int id;
	//private String[] salesItems;
	private String userID;
	private String address;
	private SaleItem[] saleItems;
	private Date orderDate;
	
	public void getTotalPrice(){
		
	}

	public void save(){
		
	}
	
	public void change(){
		
	}
	
	// 
	
	public SaleItem[] getSaleItems() {
		return saleItems;
	}

	public void setSaleItems(SaleItem[] saleItems) {
		this.saleItems = saleItems;
	}
}
