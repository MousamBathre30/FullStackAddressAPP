import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../services/person.model'; // Ensure correct path

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private apiUrl = 'http://localhost:8080/contacts'; // ✅ Backend URL

  constructor(private http: HttpClient) {
    console.log('PersonService Initialized');
  }

  getAllContacts(): Observable<Person[]> {
    return this.http.get<Person[]>(this.apiUrl);
  }

  addContact(person: Person): Observable<Person> {
    return this.http.post<Person>(`${this.apiUrl}/add`, person); // ✅ FIXED endpoint
  }

  getContactById(id: number): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${id}`);
  }

  updateContact(id: number, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${id}`, person);
  }

  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
