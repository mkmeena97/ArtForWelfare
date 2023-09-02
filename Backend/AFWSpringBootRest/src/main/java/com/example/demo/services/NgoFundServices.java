package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.entities.NGOFund;
import com.example.demo.repositories.NgoFundRepository;


@Service
public class NgoFundServices {
	@Autowired
	NgoFundRepository nfrepo;
	
	public List<NGOFund> viewAllfund()
	{
		return nfrepo.findAll();
	}
	
	public List<NGOFund> viewFundByNGOid( int ngo_id)
	{
		return nfrepo.viewFundByNGOid(ngo_id);

	}

}
