package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class ForgotPwd {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		int user_id;
		String user_name;
		String password;
		@ManyToOne
		@JoinColumn(name="role_id") //foreign key column name
		Role role_id;
		boolean approve;
		
		
		String email;
		
		
		@ManyToOne
		@JoinColumn(name = "que_id")
		Question question;
		@Column
		String answer;
		
		
		public ForgotPwd() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		public ForgotPwd(String user_name, String password, Role role_id, boolean approve, String email, Question que_id,String answer) {
			super();
			this.user_name = user_name;
			this.password = password;
			this.role_id = role_id;
			this.approve = approve;
			this.email = email;
			this.question = que_id;
			this.answer = answer;
		}


		public int getUser_id() {
			return user_id;
		}

		public void setUser_id(int user_id) {
			this.user_id = user_id;
		}

		public String getUser_name() {
			return user_name;
		}

		public void setUser_name(String user_name) {
			this.user_name = user_name;
		}

		public String getPassword() {
			return password;
		}

		public void setPassword(String password) {
			this.password = password;
		}

		public Role getRole_id() {
			return role_id;
		}

		public void setRole_id(Role role_id) {
			this.role_id = role_id;
		}

		public boolean isApprove() {
			return approve;
		}

		public void setApprove(boolean approve) {
			this.approve = approve;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public Question getQuestion() {
			return question;
		}

		public void setQuestion(Question question) {
			this.question = question;
		}

		public String getAnswer() {
			return answer;
		}

		public void setAnswer(String answer) {
			this.answer = answer;
		}
}
