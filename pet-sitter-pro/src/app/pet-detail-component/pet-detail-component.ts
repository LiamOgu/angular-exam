import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet, PetService } from '../pet-service';

@Component({
  selector: 'app-pet-detail-component',
  imports: [],
  templateUrl: './pet-detail-component.html',
  styleUrl: './pet-detail-component.css',
})
export class PetDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private petService = inject(PetService);

  pet?: Pet;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pet = this.petService.getPetById(id);
  }

  goBack() {
    this.router.navigate(['/pensionnaires']);
  }

  updateCareStatus() {
    if (this.pet) {
      this.petService.updateCareStatus(this.pet.id);
    }
  }
}
