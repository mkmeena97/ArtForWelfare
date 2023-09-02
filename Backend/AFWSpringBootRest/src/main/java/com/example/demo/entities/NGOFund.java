package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="ngo_fund")
public class NGOFund {
	@Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
	private int nf_id;
//	@ManyToOne
//	@JoinColumn(name="ngo_id")
	private int ngo_id;
	@Column
	private int art_id;
	@Column
	private float amount;
	@Column
	
	
	
	private Date datetime;
	
	
	
	public NGOFund() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public int getNf_id() {
		return nf_id;
	}
	public void setNf_id(int nf_id) {
		this.nf_id = nf_id;
	}


	public int getArt_id() {
		return art_id;
	}
	public void setArt_id(int art_id) {
		this.art_id = art_id;
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

	public int getNgo_id() {
		return ngo_id;
	}

	public void setNgo_id(int ngo_id) {
		this.ngo_id = ngo_id;
	}
	

}
