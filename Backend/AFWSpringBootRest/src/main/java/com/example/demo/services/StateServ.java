package com.example.demo.services;

import java.util.List;	

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.State;
import com.example.demo.repositories.StateRepo;

@Service
public class StateServ {
	
	@Autowired
	StateRepo srepo;
	

	public State getbyId(int stateid)
	{
		return srepo.findById(stateid).get();
		
	}
	
	public List<State> getall()
	{
		return srepo.findAll();
		
	}

}
