package com.example.demo.services;

import java.util.List;	


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;
import com.example.demo.repositories.AreaRepo;


@Service
public class AreaServ {

	@Autowired
	AreaRepo arepo;
	
	
	public List<Area> getall()
	{
		return arepo.findAll();
	}
	
	public List<Area> getByCity(City c)
	  {
		return arepo.getall(c);
		  
	  }
	 
	public Area getById(int areaid)
	{
		return arepo.findById(areaid).get();
		
	}
	 
	
	
}
