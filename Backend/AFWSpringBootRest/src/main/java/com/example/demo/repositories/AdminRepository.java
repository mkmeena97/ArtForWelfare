package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Admin;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
	
	@Query("select c from Admin c where c.user_id=:user_id")
	public Admin getAdmin(int user_id);
}
