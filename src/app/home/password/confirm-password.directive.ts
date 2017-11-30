import { NG_VALIDATORS, FormControl, Validator, ValidatorFn, AbstractControl } from '@angular/forms';
import { Directive, forwardRef, Attribute } from '@angular/core';

@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { 
            provide: NG_VALIDATORS, 
            useExisting: forwardRef(() => ConfirmPasswordValidator), 
            multi: true 
        }
    ]
})
export class ConfirmPasswordValidator implements Validator {

    constructor( @Attribute('validateEqual') public validateEqual: string) {}

    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)
        let v = c.value;

        // control value (e.g. password)
        let e = c.root.get(this.validateEqual);

        // value not equal
        if (e && v !== e.value) return {
            validateEqual: false
        }
        return null;
    }


    // emailDomainValidator(control: FormControl) { 
    //     let email = control.value; 
    //     if (email && email.indexOf("@") != -1) { 
    //       let [_, domain] = email.split("@"); 
    //       if (domain !== "codecraft.tv") { 
    //         return {
    //           emailDomain: {
    //             parsedDomain: domain
    //           }
    //         }
    //       }
    //     }
    //     return null; 
    //   }
}