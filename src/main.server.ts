import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfigServer } from './app/app.config.server'; // ✅ Use correct export name


const bootstrap = () => bootstrapApplication(AppComponent, appConfigServer);

export default bootstrap;
