package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="cities")
public class Cities {

	@Id
	int city_id;
	
	@Column
	String city_name;
	
	@ManyToOne
	@JoinColumn(name="state_id")
	State state_id;

	public Cities() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cities(String city_name, State state_id) {
		super();
		this.city_name = city_name;
		this.state_id = state_id;
	}

	
	
	
	
}
