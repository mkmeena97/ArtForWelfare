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
	

	public List<Art> getArtsByArtist(int artist_id)
	{
		return arepo.getArtsOfArtist(artist_id);
	}
	
	

	public Art addArt(Art a)
	{
		return arepo.save(a);
	}
	

	public boolean uploadImage(int art_id,byte[] file)
	{
		if(arepo.uploadImage(art_id, file)==1)

			return true;
		else
			return false;
	}
	

	public Art getArtById(int art_id)
	{
		return arepo.findById(art_id).get();
	}
	


}
