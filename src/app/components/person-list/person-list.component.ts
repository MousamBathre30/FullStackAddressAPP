import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../services/person.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-list',
  standalone: true,
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss'],
  imports: [CommonModule, RouterModule], // ✅ Import RouterModule
})
export class PersonListComponent {
  contacts: Person[] = [];

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.personService.getAllContacts().subscribe({
      next: (data) => {
        this.contacts = data;
      },
      error: (err) => {
        console.error('Error fetching contacts', err);
      },
    });
  }

  deletePerson(id: number) {
    this.personService.deleteContact(id).subscribe(() => {
      alert('Contact Deleted');
      this.loadContacts(); // ✅ Refresh list after deletion
    });
  }

  navigateToAddPerson() {
    console.log('Navigating to /add-person'); // ✅ Debugging
    this.router.navigate(['/add-person']); // ✅ Ensure this works
  }
}
