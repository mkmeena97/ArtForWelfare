package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Artist;
import com.example.demo.entities.ArtistReg;
import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.PassBasedEnc;
import com.example.demo.entities.Role;
import com.example.demo.entities.SaltValue;
import com.example.demo.services.ArtistService;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class ArtistController {
		
	@Autowired
	ArtistService aservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	@Autowired
	SaltValue saltvalue;
	
	@GetMapping("/getArtist")
	public Artist getArtist(@RequestParam("user_id") int user_id)
	{
		Login l=lservice.getByID(user_id);
		return aservice.getArtist(l);
	}
	@PostMapping("/regArtist")
	public Artist regArtist(@RequestBody ArtistReg cs) 
	{
		Role r= rservice.getRole(2);
		String encrypted = PassBasedEnc.generateSecurePassword(cs.getPassword(),saltvalue.getSalt());
		Login l=new Login(cs.getUser_name(),encrypted,r,true,cs.getEmail(),cs.getQue_id(),cs.getAnswer());
		Login saved=lservice.save(l);
		
		Artist c=new Artist(cs.getFname(),cs.getLname(),cs.getArea_id(),cs.getAddress(),cs.getContact(),cs.getSpeciality(),saved);
		return aservice.saveArtist(c);
	}
	
}
