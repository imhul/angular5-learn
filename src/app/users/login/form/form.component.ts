import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ValidationErrors } from '@angular/forms';


import { FormValidators } from './form.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public nameControl: FormControl;
  public passControl: FormControl;
  public name: string = '%user%';
  public nameStatus: string;
  public nameError: ValidationErrors;
  public passStatus: string;

  constructor() { }

  ngOnInit() {

    this.nameControl = new FormControl('John', [
      Validators.required,
      FormValidators.LengthValidator(3),
      // FormValidators.LengthAsyncValidator,
    ]);

    this.nameControl.valueChanges.subscribe(val => {
      this.name = val
    });

    this.nameControl.statusChanges.subscribe(stat => {
      this.nameStatus = stat;
      if(stat === 'INVALID') {
        this.nameError = this.nameControl.errors.message;
      }
    });

    this.passControl = new FormControl('1234', [
      Validators.required, 
      Validators.minLength(4), 
    ]);

    this.passControl.statusChanges.subscribe(stat => {
      this.passStatus = stat;
    });
  }
}
