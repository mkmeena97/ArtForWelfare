package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerReg;
import com.example.demo.entities.Login;
import com.example.demo.entities.Role;
import com.example.demo.services.CustomerService;
import com.example.demo.services.LoginService;
import com.example.demo.services.RoleService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class CustomerController {

	@Autowired
	CustomerService cservice;
	
	@Autowired
	LoginService lservice;
	
	@Autowired
	RoleService rservice;
	
	@GetMapping("/getCustomer")
	public Customer getCustomer(@RequestParam("user_id") int user_id)
	{
		Login l=lservice.getByID(user_id);
		return cservice.getCustomer(l);
	}
	
	@PostMapping("/regCustomer")
	public Customer regCustomer(@RequestBody CustomerReg cs) 
	{
		Role r= rservice.getRole(3);
		Login l=new Login(cs.getUser_name(),cs.getPassword(),r,true,cs.getEmail(),cs.getQue_id(),cs.getAnswer());
		Login saved=lservice.save(l);
		
		Customer c=new Customer(cs.getFname(),cs.getLname(),cs.getArea_id(),cs.getAddress(),cs.getContact(),saved);
		return cservice.saveCustomer(c);
	}
}
