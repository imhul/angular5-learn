import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  public userListControl: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userListControl = this.formBuilder.group({
      users: this.formBuilder.array([
        ['user 1'],
        ['user 2'],
        ['user 3'],
        ['user 4'],
      ])
    });
    this.userListControl.valueChanges.subscribe(val => {
      // this.name = val.firstName
      console.info("userListControl.valueChanges: val: ", val)
    });
  }

  removeUserControl(index: any) {
    (this.userListControl.controls['users'] as FormArray).
      removeAt(index)
  }

  addUserControl() {
    const formArrayLength = 
      (this.userListControl.controls['users'] as FormArray)
        .controls.length;

    (this.userListControl.controls['users'] as FormArray).
      push(new FormControl(`user ${formArrayLength + 1}`))
  }

}

