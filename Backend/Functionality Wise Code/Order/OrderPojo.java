package com.example.demo.entities;

import java.util.Date;
import java.util.List;

public class OrderPojo {

	
	int cust_id;
	float amount;
	String payment_id;
	String pay_mode;
	List<Integer> art_id;
	
	public int getCust_id() {
		return cust_id;
	}
	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	public float getAmount() {
		return amount;
	}
	public void setAmount(float amount) {
		this.amount = amount;
	}
	public String getPayment_id() {
		return payment_id;
	}
	public void setPayment_id(String payment_id) {
		this.payment_id = payment_id;
	}
	public String getPay_mode() {
		return pay_mode;
	}
	public void setPay_mode(String pay_mode) {
		this.pay_mode = pay_mode;
	}
	public List<Integer> getArt_id() {
		return art_id;
	}
	public void setArt_id(List<Integer> art_id) {
		this.art_id = art_id;
	}
	
	
	
	
	
}
