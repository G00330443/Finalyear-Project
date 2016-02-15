package src.ie.gmit.sw.product;

import java.util.Date;

public class Product {
	private int id;
	private String name;
	private String description;
	private double normalPrice;
	private double memberPrice;
	private Date productDate;
	private String category;
	private int saleCount;
	
	
	public boolean save(){
		return true;
	}
	
	public void change(){
		
	}
	
	public int search(){
		return id;
	}
	
	//
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	//
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	//
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	//
	
	public double getNormalPrice() {
		return normalPrice;
	}
	public void setNormalPrice(double normalPrice) {
		this.normalPrice = normalPrice;
	}
	//
	
	public double getMemberPrice() {
		return memberPrice;
	}
	public void setMemberPrice(double memberPrice) {
		this.memberPrice = memberPrice;
	}
	//
	
	public Date getProductDate() {
		return productDate;
	}
	public void setProductDate(Date productDate) {
		this.productDate = productDate;
	}
	//
	
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	//
	
	public int getSaleCount() {
		return saleCount;
	}
	public void setSaleCount(int saleCount) {
		this.saleCount = saleCount;
	}
	

}
