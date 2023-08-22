package com.example.demo.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entities.Login;
import com.example.demo.entities.Question;
import com.example.demo.repositories.ForgotpwdRepository;
import com.example.demo.repositories.LoginRepository;

@Service
public class ForgotPwdService {
	
	@Autowired
	ForgotpwdRepository frepo;
	
	@Autowired
	LoginRepository lrepo;
	
	public Question getQuestionText(String email)
	{
		Question q;
		System.out.println(email);
		Optional<Question> oq = frepo.getQueTextByEmail(email);
		try
		{
			q=oq.get();
		}
		catch(Exception e)
		{
			q=null;
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		return q;
	}
	
	public int updatePassword(String emailid,String password)
	{
		return lrepo.resetPassword(emailid, password);
	}
	
}
