import { Injectable } from '@angular/core';
import { sample_foods } from 'src/data';
import { Food } from '../share/Info';

@Injectable({
  providedIn: 'root'
})
export class HalogenService {
  getAll():Food[] {
    return sample_foods;
  }

  constructor() { }

  // For search
  getAllItemBySearchTerm(searchTerm:string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  // Go to industry.component.ts
}
