import { Routes } from '@angular/router';
import { PetListComponent } from './pet-list-component/pet-list-component';

export const routes: Routes = [
  { path: '', redirectTo: 'pensionnaires', pathMatch: 'full' },
  { path: 'pensionnaires', component: PetListComponent },
  { path: 'animal/:id', component: PetListComponent },
];
