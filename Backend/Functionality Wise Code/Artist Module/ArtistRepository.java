package com.example.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Artist;

import com.example.demo.entities.Login;

@Repository
public interface ArtistRepository extends JpaRepository<Artist, Integer> {
	
	@Query("select a from Artist a where user_id=:user_id")
	public Artist getArtist(Login user_id);
}
