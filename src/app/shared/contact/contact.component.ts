import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  selectedValue: string | undefined;


  // Autocomplete
    options: string[] = ['Angular', 'React', 'Vue'];
    objectOptions = [
      { name: 'Angular' },
      { name: 'Angular Material' },
      { name: 'React' },
      { name: 'Vue' },
    ];

    
    myControl = new FormControl();
    // FilteredOptions
    filteredOptions: Observable<string[]> | undefined;

    displayFn(subject: { name: any; }) {
      return subject ? subject.name : undefined;
    }

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue)
    );
  }

}
