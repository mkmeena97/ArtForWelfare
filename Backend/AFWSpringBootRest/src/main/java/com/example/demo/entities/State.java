package com.example.demo.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="states")
public class State {
    @Id
	private int state_id;
    @Column
	private String state_name;
    
 
    
	public State() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	public State(int state_id, String state_name) {
		super();
		this.state_id = state_id;
		this.state_name = state_name;
		
	}

	public int getState_id() {
		return state_id;
	}

	public void setState_id(int state_id) {
		this.state_id = state_id;
	}

	public String getState_name() {
		return state_name;
	}

	public void setState_name(String state_name) {
		this.state_name = state_name;
	}

	
	

	
	
	
	

}
