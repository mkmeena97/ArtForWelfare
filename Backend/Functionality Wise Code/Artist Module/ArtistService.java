package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Artist;

import com.example.demo.entities.Login;
import com.example.demo.repositories.ArtistRepository;

@Service
public class ArtistService {
	
	@Autowired
	ArtistRepository arepo;
	
	public Artist getArtist(Login user_id)
	{
		return arepo.getArtist(user_id);
	}
	
	public Artist saveArtist(Artist a)
	{
		return arepo.save(a);
	}
}
