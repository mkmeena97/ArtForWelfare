package com.example.demo.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="cities")
public class City {
	
	@Id
	private int city_id;
	@Column
	private String city_name;
	
	
	@JsonIgnoreProperties("cities")
	@ManyToOne
	@JoinColumn(name="state_id")       
	State state;
	

	
	
	public City() {
		super();
		// TODO Auto-generated constructor stub
	}



	public City(int city_id, String city_name, State state) {
		super();
		this.city_id = city_id;
		this.city_name = city_name;
		this.state = state;
	}



	public int getCity_id() {
		return city_id;
	}



	public void setCity_id(int city_id) {
		this.city_id = city_id;
	}



	public String getCity_name() {
		return city_name;
	}



	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}



	public State getState() {
		return state;
	}



	public void setState(State state) {
		this.state = state;
	}



	

	
	
	
	
	
	
	
	
	

}
