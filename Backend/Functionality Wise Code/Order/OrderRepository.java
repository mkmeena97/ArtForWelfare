package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
	
	
}
