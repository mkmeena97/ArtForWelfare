package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Ngo;
import com.example.demo.repositories.NgoRepository;

@Service
public class NgoService {

	@Autowired
	NgoRepository nrepo;
	
	
	public Ngo getNgo(Login user_id)
	{
		return nrepo.getNgo(user_id);
	}
	
	public Ngo saveNgo(Ngo o)
	{
		return nrepo.save(o);
	}
	
	
  
}
