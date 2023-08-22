package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Role;
import com.example.demo.repositories.RoleRepository;



@Service
public class RoleService {
	
	@Autowired
	RoleRepository	rrepo;

	public Role getRole(int role_id)
	{
		return rrepo.findById(role_id).get();
	}
}
