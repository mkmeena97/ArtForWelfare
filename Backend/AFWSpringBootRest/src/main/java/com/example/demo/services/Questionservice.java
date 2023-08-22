package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Question;
import com.example.demo.repositories.QuestionRepo;

@Service
public class Questionservice {
	
	@Autowired
	QuestionRepo qrepo;
	
	public List<Question> getall()
	{
		return qrepo.findAll();
		
	}
	
	public Question getQueById(int que_id)
	{
		return qrepo.findById(que_id).get();
	}
}
