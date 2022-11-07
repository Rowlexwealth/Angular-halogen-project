import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HalogenService } from '../service/halogen.service';
import { Food } from '../share/Info';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  food!: Food[];

  constructor(private halogenService:HalogenService, activatedRoute:ActivatedRoute) { 
    // Always start with food.service.ts
    //1. For search always include activatedRoute
    activatedRoute.params.subscribe((params) =>{
      if(params.searchTerm) 
      //2. go to tsconfig.json and change this "noPropertyAccessFromIndexSignature": false,
      this.food = this.halogenService.getAllItemBySearchTerm(params.searchTerm);
      else
      this.food = halogenService.getAll();
    })
    // 3. Go to search.component.ts
  }

  ngOnInit(): void {
  }

}
