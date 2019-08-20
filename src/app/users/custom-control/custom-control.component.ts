import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
    public propagateChange = () => {};
    public propagateTouch = () => {};

    writeValue(color: cColor): void {
      this.currentColor = color
    };

    get currentColor() {
      return this._currentColor
    };

    set currentColor(color: cColor) {
      this._currentColor = color;
      this.propagateChange();
      this.propagateTouch();
    };

    registerOnChange(fn: any): void {
      this.propagateChange = fn
    };

    registerOnTouched(fn: any): void {
      this.propagateTouch = fn
    };

    switchColor(color: cColor) {
      this.currentColor = color
    };

    toggleDown() {
      this.currentColor = this._colors[(
          this._colors.indexOf(this.currentColor) + 1
      ) % 3]
    };

    toggleUp() {
      this.currentColor = this._colors[(
          this._colors.indexOf(this.currentColor) + 2
      ) % 3]
    };
}
  
  