package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Order;
import com.example.demo.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	OrderRepository orepo;
	
	
	
	public Order saveOrder(Order o)
	{
		
		return orepo.save(o);
	}
	
}
