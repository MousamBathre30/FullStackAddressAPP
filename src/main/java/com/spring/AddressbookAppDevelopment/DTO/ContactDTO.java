package com.spring.AddressbookAppDevelopment.DTO;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ContactDTO {
    private Long id;
    private String fullName;
    private String email;
    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String phone;
}