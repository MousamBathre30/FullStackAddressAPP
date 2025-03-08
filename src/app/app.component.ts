import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router'; // ✅ Import RouterOutlet
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule], // ✅ No issue here
  template: `
    <h1>Address Book App</h1>
    
    <nav>
      <button routerLink="/list">Home</button> <!-- ✅ Use routerLink -->
      <button routerLink="/add-person">Add Person</button> <!-- ✅ Use routerLink -->
    </nav>
    
    <router-outlet></router-outlet> <!-- ✅ This will now work -->
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  // Not needed if routerLink is used, but keeping it for safety
  navigateToHome() {
    this.router.navigate(['/list']);
  }

  navigateToAddPerson() {
    this.router.navigate(['/add-person']);
  }
}
