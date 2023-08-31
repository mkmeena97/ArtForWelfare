package com.example.demo.controllers;

import java.sql.Blob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entities.Area;
import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Ngo;
import com.example.demo.entities.NgoReg;
import com.example.demo.entities.Role;
import com.example.demo.services.LoginService;
import com.example.demo.services.NgoService;
import com.example.demo.services.RoleService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class NgoController {
	
	@Autowired
	NgoService nservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	
	@GetMapping("/getNgo")
	public Ngo getNgo(@RequestParam("user_id")int user_id)
	{
		Login l=lservice.getByID(user_id);
		return nservice.getNgo(l);
		
	}
	
	@PostMapping("/regNgo")
	public Ngo regNgo(@RequestBody NgoReg o )
	{
		Role r = rservice.getRole(o.getRole_id());
		Login l = new Login(o.getUser_name(),o.getPassword(),r,false,o.getEmail(),o.getQue_id(),o.getAnswer());
		Login saved = lservice.save(l);
		
		
		Ngo n = new Ngo(o.getNgo_name(),o.getDomain(),o.getArea_id(),o.getAddress(),o.getContact(),o.getAccount_no(),saved);
		return nservice.saveNgo(n);
	}
	
	@PostMapping(value="/uploadcertificate/{ngo_id}",consumes = "multipart/form-data")
	public boolean uploadImage(@PathVariable int ngo_id,@RequestBody MultipartFile file)
	{
		boolean flag=true;
		try
		{
			flag=nservice.uploadCertificate(ngo_id, file.getBytes());
		}
		catch(Exception e)
		{
			flag=false;
		}
		return flag;
		
	}
	
	

}
