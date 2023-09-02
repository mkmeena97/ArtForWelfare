package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.NGOFund;
import com.example.demo.services.NgoFundServices;
import com.example.demo.services.NgoService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class NgoFundController {
	
	@Autowired
	NgoFundServices nfserv;	
	
	
	@GetMapping("/getFundByNgo_id")
	public List<NGOFund> viewTotalFunds(@RequestParam int  ngo_id)
	{
		return nfserv.viewFundByNGOid(ngo_id);
		
	}

}
