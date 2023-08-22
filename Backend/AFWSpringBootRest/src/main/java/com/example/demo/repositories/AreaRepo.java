package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Area;
import com.example.demo.entities.City;

@Repository
public interface AreaRepo extends JpaRepository<Area, Integer> {
	
	@Query("select a from Area a where city_id=:cityid")
	public List<Area> getall(City cityid);
	
	

}
