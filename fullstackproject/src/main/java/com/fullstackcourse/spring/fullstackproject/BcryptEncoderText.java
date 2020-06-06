package com.fullstackcourse.spring.fullstackproject;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderText {

	
	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		for(int i=1; i<10; i++) {
			String encodeString = encoder.encode("1234");
			System.out.println(encodeString);
		}
	}
}
