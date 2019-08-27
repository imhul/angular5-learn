import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NotifyService } from '../../services/notify/notify.service';

type cColor = 'red' | 'yellow' | 'green';

@Component({
  selector: 'app-custom-control',
  templateUrl: './custom-control.component.html',
  styleUrls: ['./custom-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomControlComponent),
    multi: true,
  }]
})
export class CustomControlComponent implements ControlValueAccessor {

    private _currentColor: cColor;
    private _colors: cColor[] = ['red', 'yellow', 'green'];
    public propagateChange = (color: cColor) => {};
    public propagateTouch = (color: cColor) => {};

    constructor(private notify: NotifyService) { }

    writeValue(color: cColor): void {
      this.currentColor = color
    };

    get currentColor() {
      return this._currentColor
    };

    set currentColor(color: cColor) {
      this._currentColor = color;
      this.propagateChange(color);
      this.propagateTouch(color);
    };

    registerOnChange(fn: any): void {
      this.propagateChange = fn
    };

    registerOnTouched(fn: any): void {
      this.propagateTouch = fn
    };

    switchColor(color: cColor) {
      this.currentColor = color;
      this.sendMessage(`Current color is ${this.currentColor}`)
    };

    toggleDown() {
      this.currentColor = this._colors[(
          this._colors.indexOf(this.currentColor) + 1
      ) % 3];
      this.sendMessage(`Color is toggled down!`)
    };

    toggleUp() {
      this.currentColor = this._colors[(
          this._colors.indexOf(this.currentColor) + 2
      ) % 3];
      this.sendMessage(`Color is toggled up!`)
    };

    sendMessage(text: string): void {
      this.notify.send(text);
    }
}
  
  