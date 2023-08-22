package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;	
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.Ngo;






@Repository
public interface VerifyngoRepository extends JpaRepository<Login, Integer> {

	@Query("select n from Ngo n join Login l on n.user_id = l.user_id where l.role_id = 4 and l.approve = 0")
	public  List<Ngo> findNotApprovedNgo();
}
