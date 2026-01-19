import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { PetService } from '../pet-service';

@Component({
  selector: 'app-pet-list-component',
  imports: [FormsModule, RouterLink],
  templateUrl: './pet-list-component.html',
  styleUrl: './pet-list-component.css',
})
export class PetListComponent {
  private petService = inject(PetService);
  private router = inject(Router);

  filterValue: string = 'all';

  get pets() {
    if (this.filterValue === 'urgency') {
      return this.petService.pets.filter((pet) => pet.needCare);
    }
    return this.petService.pets;
  }

  updateCareStatus(id: number) {
    console.log('Updated care status');
    this.petService.updateCareStatus(id);
  }
}
