package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
	
	@GetMapping("/getArtById")
	public Art getById(@RequestParam int art_id)
	{
		return aservice.getArtById(art_id);
	}
	
	@GetMapping("/getArtByArtistId")
	public List<Art> getByArtistId(@RequestParam int artist_id)
	{
		return aservice.getArtsByArtist(artist_id);
	}
	
	@PostMapping("/addart")
	public Art addArtImage(@RequestBody ArtAdd o)
	{
		String status="unsold";
		System.out.println(o.getArtist_id());
		Art a=new Art(o.getArtist_id(),o.getCat_id(),o.getPrice(),o.getNgo_id(),o.getDescription(),o.getArt_name(),status);
		Art saved=aservice.addArt(a);
		
		return saved;
	}
	
	@PostMapping(value="/uploadimage/{art_id}",consumes = "multipart/form-data")
	public boolean uploadArt(@PathVariable int art_id,@RequestBody MultipartFile file)
	{
		boolean flag=true;
		try
		{
			flag=aservice.uploadImage(art_id, file.getBytes());
		}
		catch(Exception e)
		{
			flag=false;
		}
		return flag;
	}
}
