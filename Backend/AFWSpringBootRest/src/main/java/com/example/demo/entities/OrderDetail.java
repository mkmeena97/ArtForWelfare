package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="order_details")
public class OrderDetail {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int od_id;
	
	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name="order_id")
	Order order_id;
	
	
	int art_id;
	

	@Override
	public String toString() {
		return "OrderDetail [od_id=" + od_id + ", order_id=" + order_id + ", art_id=" + art_id + "]";
	}



	public OrderDetail() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	public OrderDetail(Order order_id, int art_id) {
		super();
		this.order_id = order_id;
		this.art_id = art_id;
	}



	public int getOd_id() {
		return od_id;
	}


	public void setOd_id(int od_id) {
		this.od_id = od_id;
	}


	public Order getOrder_id() {
		return order_id;
	}


	public void setOrder_id(Order order_id) {
		this.order_id = order_id;
	}


	public int getArt_id() {
		return art_id;
	}


	public void setArt_id(int art_id) {
		this.art_id = art_id;
	}

}
