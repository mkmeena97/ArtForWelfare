package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.entities.Ngo;

@Transactional
@Repository
public interface NgoRepository extends JpaRepository<Ngo, Integer> {
	
	@Query("select n from Ngo n where user_id=:user_id")
	public Ngo getNgo(Login user_id);
	
	@Modifying
	@Query("update Ngo set certificate=:file where ngo_id=:ngo_id")
	public int uploaCertificate(int ngo_id,byte[] file);
	

}
