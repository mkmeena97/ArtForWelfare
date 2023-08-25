package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="arts")
public class Art {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int art_id;
	
	int artist_id;
	int cat_id;
	float price;
	int ngo_id;
	String description;
	String art_name;
	String status;
	byte[] image;
	
	
	public Art() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Art(int artist_id, int cat_id, float price, int ngo_id, String description, String art_name, byte[] image) {
		super();
		this.artist_id = artist_id;
		this.cat_id = cat_id;
		this.price = price;
		this.ngo_id = ngo_id;
		this.description = description;
		this.art_name = art_name;
		this.image = image;
	}
	
	


	public Art(int artist_id, int cat_id, float price, int ngo_id, String description, String art_name) {
		super();
		this.artist_id = artist_id;
		this.cat_id = cat_id;
		this.price = price;
		this.ngo_id = ngo_id;
		this.description = description;
		this.art_name = art_name;
		this.status = status;
	}


	public int getArt_id() {
		return art_id;
	}


	public void setArt_id(int art_id) {
		this.art_id = art_id;
	}


	public int getArtist_id() {
		return artist_id;
	}


	public void setArtist_id(int artist_id) {
		this.artist_id = artist_id;
	}


	public int getCat_id() {
		return cat_id;
	}


	public void setCat_id(int cat_id) {
		this.cat_id = cat_id;
	}


	public float getPrice() {
		return price;
	}


	public void setPrice(float price) {
		this.price = price;
	}


	public int getNgo_id() {
		return ngo_id;
	}


	public void setNgo_id(int ngo_id) {
		this.ngo_id = ngo_id;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public String getArt_name() {
		return art_name;
	}


	public void setArt_name(String art_name) {
		this.art_name = art_name;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}


	public byte[] getImage() {
		return image;
	}


	public void setImage(byte[] image) {
		this.image = image;
	}
	
	
	
	
	
	

}
