import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';
const appRoute: Routes = [
  { path: 'link1', component: UserComponent },

];

export const routing = RouterModule.forRoot(appRoute);
