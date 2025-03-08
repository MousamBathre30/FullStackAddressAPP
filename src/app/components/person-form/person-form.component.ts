import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-form',
  standalone: true,
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss'],
  imports: [CommonModule, FormsModule] // ✅ Ensure FormsModule is included
})
export class PersonFormComponent {
  person = {
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: ''
  };

  errorMessage = ''; // ✅ Store error messages

  constructor(private personService: PersonService, private router: Router) {}

  submitPerson() {
    this.personService.addContact(this.person).subscribe({
      next: () => {
        alert('Contact Saved!');    // this method is used for the pop up 
        this.router.navigate(['/list']);
      },
      error: (error) => {
        console.error('Error saving contact:', error);
        this.errorMessage = 'Failed to save contact. Please check the details and try again.';
      }
    });
  }
}
