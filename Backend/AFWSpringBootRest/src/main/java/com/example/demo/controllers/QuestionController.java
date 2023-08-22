package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Question;
import com.example.demo.services.Questionservice;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class QuestionController {

	@Autowired
	Questionservice qservice;
	
	@GetMapping("/getque")
	public List<Question> getallque()
	{
		return qservice.getall();
		
	}
	
	@GetMapping("/getquebyid")
	public Question getQueById(int que_id)
	{
		return qservice.getQueById(que_id);
	}
	
}
