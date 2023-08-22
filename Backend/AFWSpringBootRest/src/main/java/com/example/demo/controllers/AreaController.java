package com.example.demo.controllers;

import java.util.List;	
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;
import com.example.demo.entities.State;
import com.example.demo.services.AreaServ;
import com.example.demo.services.CityServ;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AreaController {
	@Autowired
	AreaServ aserv;
	
	@Autowired
	CityServ cserv;
	
	
	

	@GetMapping("/getAllAreas")
	public List<Area> getallAreas(@RequestParam int cityid)
	{
		
		City c = cserv.getById(cityid);
		return aserv.getByCity(c);
	}
	

}
