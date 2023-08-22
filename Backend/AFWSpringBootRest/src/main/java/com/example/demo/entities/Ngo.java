package com.example.demo.entities;

import java.sql.Blob;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="ngo")
public class Ngo {
	
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int ngo_id;
	
	@JsonIgnoreProperties("Login")
	@OneToOne
	@JoinColumn(name="user_id")
	Login user_id;
	@Column
	private String fname;
	@Column
	private String lname;
	@Column
	private int area_id;
	
	@Column
	private String address;
	@Column
	private String contact;
	@Column
	private Blob certificate;
	@Column
	private String account_no;
	
	
	public Ngo() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Ngo( String fname, String lname, int area_id, String address, String contact,
			Blob certificate, String account_no, Login user_id) {
		super();
		
		this.user_id = user_id;
		this.fname = fname;
		this.lname = lname;
		this.area_id = area_id;
		this.address = address;
		this.contact = contact;
		this.certificate = certificate;
		this.account_no = account_no;
	}
	




	public int getNgo_id() {
		return ngo_id;
	}


	public void setNgo_id(int ngo_id) {
		this.ngo_id = ngo_id;
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


	public Blob getCertificate() {
		return certificate;
	}


	public void setCertificate(Blob certificate) {
		this.certificate = certificate;
	}


	public String getAccount_no() {
		return account_no;
	}


	public void setAccount_no(String account_no) {
		this.account_no = account_no;
	}



	
	
	
	
	
	

}
