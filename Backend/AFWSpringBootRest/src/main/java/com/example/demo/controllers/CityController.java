package com.example.demo.controllers;

import java.util.List;	

//import java.util.Optional;
//
//import javax.swing.text.html.Option;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.City;
import com.example.demo.entities.State;
import com.example.demo.services.CityServ;
import com.example.demo.services.StateServ;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CityController {

	@Autowired
	CityServ cserv;
	
	@Autowired
	StateServ sserv;
	
	@GetMapping("/getcities")
	public List<City> getall()
	{
		return cserv.getAll();
	}
	
	@GetMapping("/getAllCities")
	public List<City> getallcities(@RequestParam int stateid)
	{
		State s = sserv.getbyId(stateid);
		return cserv.getByState(s);
		
	}
}
