package com.spring.AddressbookAppDevelopment.service;

import com.spring.AddressbookAppDevelopment.DTO.ContactDTO;
import com.spring.AddressbookAppDevelopment.Repo.ContactRepository;
import com.spring.AddressbookAppDevelopment.model.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    // Create a new contact
    public ContactDTO addContact(ContactDTO contactDTO) {
        Contact contact = new Contact();
        contact.setFullName(contactDTO.getFullName());
        contact.setEmail(contactDTO.getEmail());
        contact.setAddress(contactDTO.getAddress());
        contact.setCity(contactDTO.getCity());
        contact.setState(contactDTO.getState());
        contact.setZipCode(contactDTO.getZipCode());
        contact.setPhone(contactDTO.getPhone());

        Contact savedContact = contactRepository.save(contact);

        return new ContactDTO(
                savedContact.getId(),
                savedContact.getFullName(),
                savedContact.getEmail(),
                savedContact.getAddress(),
                savedContact.getCity(),
                savedContact.getState(),
                savedContact.getZipCode(),
                savedContact.getPhone()
        );
    }

    // Get all contacts
    public List<ContactDTO> getAllContacts() {
        List<Contact> contacts = contactRepository.findAll();
        return contacts.stream()
                .map(contact -> new ContactDTO(
                        contact.getId(),
                        contact.getFullName(),
                        contact.getEmail(),
                        contact.getAddress(),
                        contact.getCity(),
                        contact.getState(),
                        contact.getZipCode(),
                        contact.getPhone()
                ))
                .collect(Collectors.toList());
    }

    // Get contact by ID
    public ContactDTO getContactById(Long id) {
        Optional<Contact> contact = contactRepository.findById(id);
        return contact.map(c -> new ContactDTO(
                c.getId(),
                c.getFullName(),
                c.getEmail(),
                c.getAddress(),
                c.getCity(),
                c.getState(),
                c.getZipCode(),
                c.getPhone()
        )).orElse(null);
    }

    // Update contact
    public ContactDTO updateContact(Long id, ContactDTO contactDTO) {
        Optional<Contact> existingContact = contactRepository.findById(id);

        if (existingContact.isPresent()) {
            Contact contact = existingContact.get();
            contact.setFullName(contactDTO.getFullName());
            contact.setEmail(contactDTO.getEmail());
            contact.setAddress(contactDTO.getAddress());
            contact.setCity(contactDTO.getCity());
            contact.setState(contactDTO.getState());
            contact.setZipCode(contactDTO.getZipCode());
            contact.setPhone(contactDTO.getPhone());

            Contact updatedContact = contactRepository.save(contact);
            return new ContactDTO(
                    updatedContact.getId(),
                    updatedContact.getFullName(),
                    updatedContact.getEmail(),
                    updatedContact.getAddress(),
                    updatedContact.getCity(),
                    updatedContact.getState(),
                    updatedContact.getZipCode(),
                    updatedContact.getPhone()
            );
        }
        return null; // Handle not found case properly
    }

    // Delete contact by ID
    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
}
