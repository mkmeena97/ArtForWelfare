package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.Date;
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
	public boolean saveOrder(@RequestBody OrderPojo op )
	{
		//System.out.println(op.getDatetime());
		Date currentdate = new Date();
		Order o = new Order(op.getCust_id(),op.getAmount(),op.getPayment_id(),op.getPay_mode(),currentdate);
		Order saved=oservice.saveOrder(o);
     	List<OrderDetail> odlist=new ArrayList<>();
     	boolean flag=false;
     	List<Integer> list=op.getArt_id();
		for(int n : list)
		{
			OrderDetail od = new OrderDetail(saved, n);
     		odlist.add(od);
		}
		for(OrderDetail od : odlist)
		{
			flag = odservice.save(od);
		}
		
		return flag;
	}
		
		
		
	
}
