package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Order;
import com.example.demo.entities.OrderDetail;
import com.example.demo.repositories.OrderDetailRepository;

@Service
public class OrderDetailServices {
	
	@Autowired
	OrderDetailRepository odrepo;
	
	public OrderDetail  saveOrder(OrderDetail o)
	{
		return odrepo.save(o);
	}
	
}
