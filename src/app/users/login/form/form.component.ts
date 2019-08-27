import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { FormValidators } from './form.validators';
import { Router } from '@angular/router';
import { NotifyService } from '../../../services/notify/notify.service';

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
  public payLoad: any;
  public submitObj: any;

  constructor(
    private _router: Router,
    private notify: NotifyService) { }

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
    this.isValid = FormValidators.preSubmitValidator(this.FormGroupStatus, this.passStatus);
    if(this.isValid) {
      this.sendMessage("Form is valid!");
    } else this.sendMessage("Form is invalid!");
    return this.isValid
  }

  submit(data: {}) {
    this.payLoad = JSON.stringify(data);
    this.isSubmitted = true
  }

  onSubmit() {
    this.submitObj = {
      pass: this.passControl.value,
      name: this.fullNameControl.value,
    };
    this.submit(this.submitObj);
    if(this.isSubmitted) {
      this.sendMessage(`Form submitted! Hello, ${this.submitObj.name.firstName}`);
      setTimeout(() => {
        this._router.navigate([
          ".", 
          { outlets: { popup: null } }
        ])
      }, 2000)
    } else this.sendMessage(`Submit error!`);
  }

  sendMessage(text: string): void {
    this.notify.send(text);
  }

  ngOnDestroy() {
    this.notify.destroy();
  }
}
