 package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="areas")
public class Area {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int area_id;
	
	@Column
	private String area_name;
	
	@JsonIgnoreProperties("city")
	@ManyToOne
	@JoinColumn(name = "city_id")
	private City city;
	
	public Area() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Area(int area_id, String area_name, City city) {
		super();
		this.area_id = area_id;
		this.area_name = area_name;
		this.city = city;
	}

	public int getArea_id() {
		return area_id;
	}

	public void setArea_id(int area_id) {
		this.area_id = area_id;
	}

	public String getArea_name() {
		return area_name;
	}

	public void setArea_name(String area_name) {
		this.area_name = area_name;
	}

	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	

	
	
	
	
	

	

}
