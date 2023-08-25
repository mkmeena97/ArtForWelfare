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
	private String ngo_name;
	@Column
	private String domain;
	@Column
	private int area_id;
	
	@Column
	private String address;
	@Column
	private String contact;
	@Column
	private byte[] certificate;
	@Column
	private String account_no;
	

	public Ngo() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ngo( String ngo_name, String domain, int area_id, String address, String contact
			, String account_no, Login user_id) {
		super();
		
		this.user_id = user_id;
		this.ngo_name = ngo_name;
		this.domain = domain;
		this.area_id = area_id;
		this.address = address;
		this.contact = contact;
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


	public String getNgo_name() {
		return ngo_name;
	}


	public void setNgo_name(String ngo_name) {
		this.ngo_name = ngo_name;
	}


	public String getDomain() {
		return domain;
	}


	public void setLname(String domain) {
		this.domain = domain;
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


	public byte[] getCertificate() {
		return certificate;
	}


	public void setCertificate( byte[] certificate) {
		this.certificate = certificate;
	}


	public String getAccount_no() {
		return account_no;
	}


	public void setAccount_no(String account_no) {
		this.account_no = account_no;
	}



	
	
	
	
	
	

}
