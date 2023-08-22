package com.example.demo.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Ngo;
import com.example.demo.services.VerifyngoService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class VerifyngoController {
	
	@Autowired
	VerifyngoService vservice;
	
	@GetMapping("/notverifiedNgo")
	public List<Ngo> getNgo()
	{
		
		return vservice.getNotApprovedNgos();
		
	}
	
	@PostMapping("/varifyngo/{user_id}")
	public Boolean varifyNgo(@PathVariable int user_id)
	{
		return vservice.varifyNgoById(user_id);
	}

}
