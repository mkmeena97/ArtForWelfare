package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.repositories.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository crepo;
	
	public Customer getCustomer(Login user_id)
	{
		return crepo.getCustomer(user_id);
	}
	
	public Customer saveCustomer(Customer c)
	{
		return crepo.save(c);
	}
}
