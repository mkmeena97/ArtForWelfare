package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.Ngo;
import com.example.demo.service.VerifyngoService;

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

}
