import 'zone.js/dist/zone';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormsModule, NgModelGroup, ReactiveFormsModule,ControlValueAccessor,
  NG_VALUE_ACCESSOR, 
FormGroup,
FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
  <div [formGroup]="form">
    <label for="textInput">{{name}}: </label>
    <input id="textInput" type="text" [formControlName]="name" [attr.required]="form.controls[name].errors?.required">
    {{form.controls[name].errors | json}}
  </div>  
  `,
  viewProviders: [{provide: NG_VALUE_ACCESSOR, useExisting: ChildComponent, multi: true}]
})
export class ChildComponent implements OnInit {
  @Input() value: string ='';
  @Input() name: string | any;
  @Input() required: string ='';
@Input() index:number;
form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit() {
    this.form = this.rootFormGroup.control;
    console.log(this.form);
  }

}
