import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  public userListControl: FormGroup;
  public customControl: FormControl;

  constructor() { }

  ngOnInit() {
    this.userListControl = new FormGroup({
      users: new FormArray([
        new FormControl('user 1'),
        new FormControl('user 2'),
        new FormControl('user 3'),
        new FormControl('user 4'),
      ])
    });
    this.userListControl.valueChanges.subscribe(val => {
      console.info("userListControl.valueChanges: val: ", val)
    });
    this.customControl = new FormControl();
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
