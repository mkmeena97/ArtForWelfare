package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="questions")
public class Question {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int que_id;
	
	@Column
	String que_text;

	public Question() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Question(int que_id, String que_text) {
		super();
		this.que_id = que_id;
		this.que_text = que_text;
	}
	

	public Question(String que_text) {
		super();
		this.que_text = que_text;
	}

	public int getQue_id() {
		return que_id;
	}

	public void setQue_id(int que_id) {
		this.que_id = que_id;
	}

	public String getQue_text() {
		return que_text;
	}

	public void setQue_text(String que_text) {
		this.que_text = que_text;
	}
	
	
	
	
	
}
