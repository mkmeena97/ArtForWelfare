package com.example.demo.repositories;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Art;

@Transactional
@Repository
public interface ArtRepository extends JpaRepository<Art, Integer> {

	@Query("select a from Art a where a.status='unsold'")
	public List<Art> getUnsoldArts();
	
	@Modifying
	@Query("update Art set image=:image where art_id=:art_id")
	public int uploadImage(int art_id,byte[] image);
	
}
