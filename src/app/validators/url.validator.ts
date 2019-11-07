import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UrlValidator {

    static validate(control: AbstractControl): ValidationErrors | null {
        const url = String(control.value);
        if (url.startsWith("http://") || url.startsWith("https://")) {
            return null;
        }
        return { url: "เห้ยยยยย url ผิด"};
    }
}
