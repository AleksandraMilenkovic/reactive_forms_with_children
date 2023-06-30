import 'zone.js/dist/zone';
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, FormArray, Validators, FormBuilder  } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { ChildComponent } from './child';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent, ReactiveFormsModule],
  template: `
  <form [formGroup]="profileForm">
    <div *ngFor="let item of profileForm.controls | keyvalue; let i = index" >
        <app-child [name]="item.key"></app-child>
    </div>
    <p>Form value:</p>
    <pre>{{ profileForm.value | json }}</pre>
  </form>
  `
})
export class App {
  name = 'Angular';
  uio = "Hello";
  showForm: boolean = false;
  extraFields: boolean = false;
  profileForm;

  constructor(private fb: FormBuilder) {
    let group = {
      'name': ['', [Validators.required]],
      'surname': ['', [Validators.required]],
      'email': ['', [Validators.required]]
    };

    let middlename = true;

    if(middlename) {
      group['middlename'] = ['', [Validators.required]];
    }

      this.profileForm = fb.group(group);
  }

}

bootstrapApplication(App);
