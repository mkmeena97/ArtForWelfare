package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Order;
import com.example.demo.entities.OrderDetail;
import com.example.demo.entities.OrderPojo;
import com.example.demo.services.OrderDetailServices;
import com.example.demo.services.OrderService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class OrderController {
	@Autowired
	OrderService oservice;
	
	@Autowired
	OrderDetailServices odservice;
	
	
	@PostMapping("/saveOrder")
	public List<OrderDetail> saveOrder(@RequestBody OrderPojo op )
	{
		Order o = new Order(op.getCust_id(),op.getAmount(),op.getPayment_id(),op.getPay_mode());
		Order saved=oservice.saveOrder(o);
     	List<OrderDetail> list=new ArrayList<>();
     	
		
		for(int i=0;i<op.getArt_id().size();i++)
		{
			OrderDetail od=new OrderDetail(saved,op.getArt_id().get(i));
			OrderDetail o1 = odservice.saveOrder(od);
			list.add(o1);
		}
		return list;
		
		
			
	}
		
		
		
	
}
