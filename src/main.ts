import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http'; // ✅ Import withFetch

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', loadComponent: () => import('./app/components/person-list/person-list.component').then(m => m.PersonListComponent) },
      { path: 'add-person', loadComponent: () => import('./app/components/person-form/person-form.component').then(m => m.PersonFormComponent) }
    ]),
    provideHttpClient(withFetch()), // ✅ Use fetch API for better performance
  ],
}).catch(err => console.error(err));
