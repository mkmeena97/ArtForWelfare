package com.example.demo.repositories
;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.Ngo;






@Repository
@Transactional
public interface VerifyngoRepository extends JpaRepository<Login, Integer> {

	@Query("select n from Ngo n join Login l on n.user_id = l.user_id where l.role_id = 4 and l.approve = 0")
	public  List<Ngo> findNotApprovedNgo();
	
	@Modifying

	@Query("update Login set approve=1 where user_id=(select user_id from Ngo where ngo_id=:ngo_id )")
	public int verifyNgo(int ngo_id); 
	
	@Query("select n from Ngo n join Login l on n.user_id=l.user_id where l.role_id=4 and l.approve=1")
	public List<Ngo> getVerifiedNgo();

	
	
}
