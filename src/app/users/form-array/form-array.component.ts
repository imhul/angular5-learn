import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { NotifyService } from '../../services/notify/notify.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  public userListControl: FormGroup;
  public customControl: FormControl;

  constructor(private notify: NotifyService) { }

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
    this.sendMessage('User list by FormArray is loaded!')
  }

  sendMessage(text: string): void {
    this.notify.send(text);
  }

  removeUserControl(index: any) {
    (this.userListControl.controls['users'] as FormArray).
      removeAt(index);
      this.sendMessage('User is removed!')
  }

  addUserControl() {
    const formArrayLength = 
      (this.userListControl.controls['users'] as FormArray)
        .controls.length;

    (this.userListControl.controls['users'] as FormArray).
      push(new FormControl(`user ${formArrayLength + 1}`));
      this.sendMessage(`User ${formArrayLength + 1} is added!`)
  }

}
