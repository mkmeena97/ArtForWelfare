package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.repositories.LoginRepository;

@Service
public class LoginService {
	@Autowired
	LoginRepository lrepo;
	
	public Login getLogin(String user_name,String password)
	{
		Login l;
		Optional<Login> ol = lrepo.getLogin(user_name, password);
		try
		{
			l=ol.get();
		}
		catch(Exception e)
		{
			l=null;
		}
		return l;
	}
	
	
	public Login checkSecurityAnswer(String emailid,String answer)
	{
		return lrepo.checkAnswer(emailid,answer).get();
	}
	
	
	public Login getByID(int user_id)
	{
		return lrepo.findById(user_id).get();
	}
	
	public Login save(Login l)
	{
		return lrepo.save(l);
	}
		
	
}


