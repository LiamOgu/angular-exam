import { Routes } from '@angular/router';
import { PetDetailComponent } from './pet-detail-component/pet-detail-component';
import { PetListComponent } from './pet-list-component/pet-list-component';

export const routes: Routes = [
  { path: '', redirectTo: 'pensionnaires', pathMatch: 'full' },
  { path: 'pensionnaires', component: PetListComponent },
  { path: 'animal/:id', component: PetDetailComponent },
];
