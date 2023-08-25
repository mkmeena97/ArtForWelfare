package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Art;
import com.example.demo.repositories.ArtRepository;

@Service
public class ArtService {
	
	@Autowired
	ArtRepository arepo;
	
	public List<Art> getUnsoldArt()
	{
		return arepo.getUnsoldArts();
	}
	
	public Art addArt(Art a)
	{
		return arepo.save(a);
	}
	
	public boolean uploadImage(int art_id,byte[] image)
	{
		if(arepo.uploadImage(art_id, image)==1)
			return true;
		else
			return false;
	}
	

}
