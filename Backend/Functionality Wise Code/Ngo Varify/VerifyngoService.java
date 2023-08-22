package com.example.demo.services;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.Ngo;
import com.example.demo.repositories.VerifyngoRepository;


@Service
public class VerifyngoService {

	@Autowired
	VerifyngoRepository vrepo;
	
	public List<Ngo> getNotApprovedNgos() {
        return vrepo.findNotApprovedNgo();
    }
	
	public Boolean varifyNgoById(int user_id)
	{
		if((vrepo.varifyNgo(user_id))==1)
			return true;
		else
			return false;
	}
	
	public List<Ngo> getVarifiedNgos()
	{
		return vrepo.getVarifiedNgo();
	}
	
}
