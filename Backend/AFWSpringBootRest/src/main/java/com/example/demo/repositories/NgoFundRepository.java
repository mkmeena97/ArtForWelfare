package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.NGOFund;

@Repository
public interface NgoFundRepository extends JpaRepository<NGOFund, Integer> {
	
    @Query("select f from NGOFund f where ngo_id=:ngo_id")
	public List<NGOFund> viewFundByNGOid(int ngo_id);
    
    
 
    
	
	
	

}
