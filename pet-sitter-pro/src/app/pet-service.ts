import { Injectable } from '@angular/core';

export interface Pet {
  id: number;
  name: string;
  species: string;
  age: number;
  color: string;
  weight: number;
  owner: string;
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
      age: 3,
      color: 'Doré',
      weight: 28,
      owner: 'Marie Dupont',
      needCare: true,
      description: 'Golden Retriever très joueur et affectueux. Aime les longues promenades.',
    },
    {
      id: 2,
      name: 'Luna',
      species: 'Chat',
      age: 2,
      color: 'Blanc et gris',
      weight: 4,
      owner: 'Pierre Martin',
      needCare: false,
      description: 'Chatte siamoise indépendante. Préfère la tranquillité.',
    },
    {
      id: 3,
      name: 'Coco',
      species: 'Perroquet',
      age: 5,
      color: 'Multicolore',
      weight: 1.2,
      owner: 'Sophie Leblanc',
      needCare: true,
      description: 'Perroquet ara très bavard. Adore les cacahuètes.',
    },
    {
      id: 4,
      name: 'Nemo',
      species: 'Poisson',
      age: 1,
      color: 'Orange',
      weight: 0.05,
      owner: 'Lucas Bernard',
      needCare: false,
      description: 'Poisson rouge paisible dans son aquarium.',
    },
    {
      id: 5,
      name: 'Rocky',
      species: 'Lapin',
      age: 2,
      color: 'Gris et blanc',
      weight: 1.5,
      owner: 'Emma Rousseau',
      needCare: true,
      description: 'Lapin nain énergique qui adore sauter partout.',
    },
  ];
}
