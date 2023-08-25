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

	public Boolean verifyNgoById(int ngo_id)
	{
		if((vrepo.verifyNgo(ngo_id))==1)

			return true;
		else
			return false;
	}
	

	public List<Ngo> getVerifiedNgos()
	{
		return vrepo.getVerifiedNgo();

	}
	
}
