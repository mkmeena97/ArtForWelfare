package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Admin;
import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;
import com.example.demo.repositories.AdminRepository;

@Service
public class AdminServices {
    @Autowired
	AdminRepository admrepo;
    
   
    public Admin getAdmin(int user_id)
	{
		return admrepo.getAdmin(user_id);
	}
    
    public Admin getAdminById(int admin_id)
    {
		return admrepo.findById(admin_id).get();
    	
    }
	
}
