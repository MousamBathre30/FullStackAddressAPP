package com.spring.AddressbookAppDevelopment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@ComponentScan(basePackages = "com.spring.AddressbookAppDevelopment")
public class AddressbookAppDevelopment {

	public static void main(String[] args) {
		SpringApplication.run(AddressbookAppDevelopment.class, args);
	}

	
}

