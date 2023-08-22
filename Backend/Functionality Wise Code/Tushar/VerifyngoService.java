package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.Ngo;
import com.example.demo.repository.VerifyngoRepository;

@Service
public class VerifyngoService {

	@Autowired
	VerifyngoRepository vrepo;
	
	public List<Ngo> getNotApprovedNgos() {
        return vrepo.findNotApprovedNgo();
    }
	
}
