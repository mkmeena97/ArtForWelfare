package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Art;
import com.example.demo.entities.ArtAdd;
import com.example.demo.services.ArtService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ArtController {
	
	@Autowired
	ArtService aservice;
	
	@GetMapping("/unsoldarts")
	public List<Art> getUnsoldArts()
	{
		return aservice.getUnsoldArt();
	}
	
	@PostMapping("/addart")
	public Art addArtImage(@RequestBody ArtAdd o)
	{
		Art a=new Art(o.getArt_id(),o.getCat_id(),o.getPrice(),o.getNgo_id(),o.getDescription(),o.getArt_name(),o.getImage());
		Art saved=aservice.addArt(a);
		
		return saved;
	}

}
