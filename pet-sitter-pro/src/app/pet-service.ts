import { Injectable } from '@angular/core';

export interface Pet {
  id: number;
  name: string;
  species: string;
  needCare: boolean;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class PetService {
  updateCareStatus(id: number) {
    const pet = this.pets.find((p) => p.id === id);
    if (pet) {
      pet.needCare = !pet.needCare;
    }
  }

  getPetById(id: number) {
    return this.pets.find((p) => p.id === id);
  }

  pets: Pet[] = [
    {
      id: 1,
      name: 'Max',
      species: 'Chien',
      needCare: true,
      description: 'Golden Retriever très joueur et affectueux. Aime les longues promenades.',
    },
    {
      id: 2,
      name: 'Luna',
      species: 'Chat',
      needCare: false,
      description: 'Chatte siamoise indépendante. Préfère la tranquillité.',
    },
    {
      id: 3,
      name: 'Coco',
      species: 'Perroquet',
      needCare: true,
      description: 'Perroquet ara très bavard. Adore les cacahuètes.',
    },
    {
      id: 4,
      name: 'Nemo',
      species: 'Poisson',
      needCare: false,
      description: 'Poisson rouge paisible dans son aquarium.',
    },
    {
      id: 5,
      name: 'Rocky',
      species: 'Lapin',
      needCare: true,
      description: 'Lapin nain énergique qui adore sauter partout.',
    },
  ];
}
