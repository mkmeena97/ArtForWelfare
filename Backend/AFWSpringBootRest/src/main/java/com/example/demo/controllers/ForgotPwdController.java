package com.example.demo.controllers;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Login;
import com.example.demo.entities.LoginCheck;
import com.example.demo.entities.Question;
import com.example.demo.services.ForgotPwdService;
import com.example.demo.services.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ForgotPwdController {
	
	@Autowired
	ForgotPwdService fservice;
	
	@Autowired
	LoginService lservice;
	
	
	
	@GetMapping("/checkemail")
	public Question checkemail(@RequestParam String email)
	{
		return fservice.getQuestionText(email);
	}
	
	@PostMapping("checksecurityanswer")
	public Login checkAnswer(@RequestBody Map<String, String> request)
	{
		String emailid = request.get("emailid");
	    String answer = request.get("answer");
		return lservice.checkSecurityAnswer(emailid,answer);
	}
	
	@PostMapping("resetpassword")
	public Boolean passwordReset(@RequestBody Map<String, String> request)
	{
		String emailid=request.get("emailid");
		String password=request.get("newPassword");
		return fservice.updatePassword(emailid, password);
	}

}
