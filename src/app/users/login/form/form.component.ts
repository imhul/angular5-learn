import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';


import { FormValidators } from './form.validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public fullNameControl: FormGroup;
  public passControl: FormControl;
  public name: string = '%user%';
  public FormGroupStatus: string;
  public FormGroupError: ValidationErrors;
  public passStatus: string;
  public isValid: boolean = false;
  public isSubmitted: boolean = false;
  public payLoad: string = '';
  public submitObj: {} = {};

  constructor() { }

  ngOnInit() {

    this.fullNameControl = new FormGroup({
      firstName: new FormControl('Johnny', [
        Validators.required,
        FormValidators.LengthValidator(5),
      ]),
      lastName: new FormControl('Depp', [
        Validators.required,
        FormValidators.LengthValidator(5),
      ]),
    });

    this.fullNameControl.valueChanges.subscribe(val => {
      this.name = val.firstName
    });

    this.fullNameControl.statusChanges.subscribe(stat => {
      this.FormGroupStatus = stat;
      this.formValidation();
    });

    this.passControl = new FormControl('123456', [
      Validators.required, 
      Validators.minLength(6), 
    ]);

    this.passControl.statusChanges.subscribe(stat => {
      this.passStatus = stat;
      this.formValidation();
    });
  }

  formValidation() {
    return this.isValid = FormValidators.preSubmitValidator(this.FormGroupStatus, this.passStatus)
  }

  onSubmit() {
    this.submitObj = {
      pass: this.passControl.value,
      name: this.fullNameControl.value,
    }
    this.payLoad = JSON.stringify(this.submitObj);
    console.info("submit payLoad: ", this.payLoad);
  }
}
