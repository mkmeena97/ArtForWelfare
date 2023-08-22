package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="customers")
public class Customer {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	int cust_id;
	
	@OneToOne
	@JoinColumn(name="user_id")
	Login user_id;
	
	@Column
	String fname;
	@Column
	String lname;
	
//	@OneToOne
//	@JoinColumn(name="area_id")
//	Area area_id;
	int area_id;
	
	@Column
	String address;
	
	@Column
	String contact;
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Customer( String fname, String lname, int area_id, String address, String contact,Login user_id) {
		super();
		this.user_id = user_id;
		this.fname = fname;
		this.lname = lname;
		this.area_id = area_id;
		this.address = address;
		this.contact = contact;
	}

	public Customer(String fname, String lname, int area_id, String address, String contact) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.area_id = area_id;
		this.address = address;
		this.contact = contact;
	}
	public int getCust_id() {
		return cust_id;
	}
	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}
	public Login getUser_id() {
		return user_id;
	}
	public void setUser_id(Login user_id) {
		this.user_id = user_id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public int getArea_id() {
		return area_id;
	}
	public void setArea_id(int area_id) {
		this.area_id = area_id;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	
	
	
	
}
