package com.example.demo.entities;


import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name="orders")
public class Order {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int order_id;
	
	@Column
	int cust_id;
	
	@Column
	float amount;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column
	Date datetime;
	
	@Column
	String payment_id;
	
	@Column
	String pay_mode;
	

	public Order(int i, float f, String string, String string2) {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public Order(int cust_id, float amount, String payment_id, String pay_mode,Date currentdate) {
		super();
		this.cust_id = cust_id;
		this.amount = amount;
		this.payment_id = payment_id;
		this.pay_mode = pay_mode;
		this.datetime=currentdate;
	}



	@Override
	public String toString() {
		return "Order [order_id=" + order_id + ", cust_id=" + cust_id + ", amount=" + amount + ", datetime=" + datetime
				+ ", payment_id=" + payment_id + ", pay_mode=" + pay_mode + "]";
	}



	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

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

	public Date getDatetime() {
		return datetime;
	}

	public void setDatetime(Date datetime) {
		this.datetime = datetime;
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
	
	
	
	
	
}
