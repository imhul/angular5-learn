import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { NotifyService } from '../../services/notify/notify.service';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  public userListControl: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private notify: NotifyService) { }

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
      console.info("userListControl.valueChanges > val: ", val);
    });
    this.sendMessage('User list by FormBuilder is loaded!')
  }

  removeUserControl(index: any) {
    (this.userListControl.controls['users'] as FormArray).
      removeAt(index);
      this.sendMessage(`User with index ${index} is removed!`)
  }

  addUserControl() {
    const formArrayLength = 
      (this.userListControl.controls['users'] as FormArray)
        .controls.length;

    (this.userListControl.controls['users'] as FormArray).
      push(new FormControl(`user ${formArrayLength + 1}`));
      this.sendMessage(`User ${formArrayLength + 1} is added!`)
  }

  sendMessage(text: string): void {
    this.notify.send(text);
  }

  ngOnDestroy() {
    this.notify.destroy();
  }

}

