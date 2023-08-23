package com.example.demo.repositories;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
	
	@Query("select l from Login l where user_name=:user_name and password=:password")
	public Optional<Login> getLogin(String user_name,String password);
	
	@Query("select l from Login l where email=:emailid and answer=:answer")
	public Optional<Login> checkAnswer(String emailid,String answer);
	
	
	
}
