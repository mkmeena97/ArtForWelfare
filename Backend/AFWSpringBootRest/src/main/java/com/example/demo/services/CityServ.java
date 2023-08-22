package com.example.demo.services;

import java.util.List;	


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.City;
import com.example.demo.entities.State;
import com.example.demo.repositories.CityRepo;


@Service
public class CityServ {

	@Autowired
	CityRepo crepo;
	

  public List<City> getAll()
  {
	  return crepo.findAll();
  }
  
  public List<City> getByState(State s)
  {
	return crepo.getall(s);
	  
  }
  
  public City getById(int cityid)
  {
	return crepo.findById(cityid).get();
	  
  }

}
