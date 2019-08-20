import { Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';

export class FormValidators {

    // Custom Sync Validator
    static LengthValidator(number: number) {
    return function (formControl: FormControl) {
      if( formControl.value.length < number ) {
        return {
          message: 'Name length too short!'
        }
      }
      return null
    }
  }
  
  // Custom Async Validator
  static LengthAsyncValidator(formControl: FormControl): Observable<null|any> {
    if( formControl.value.length < 5 ) {
      return of({
        message: 'Name length too short!'
      })
    }
    return of(null)
  }

  static preSubmitValidator(FormGroupStatus: string, passStatus: string): boolean {
    return ((FormGroupStatus === 'INVALID') || (passStatus === 'INVALID')) ? false : true
  }
}