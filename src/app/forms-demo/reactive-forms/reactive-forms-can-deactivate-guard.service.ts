import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms.component';

@Injectable({
    providedIn: 'root'
})
export class ReactiveFormsCanDeactivateGuardService implements CanDeactivate<ReactiveFormsComponent> {
    canDeactivate(component: ReactiveFormsComponent): boolean {
        if (component.registrationForm.dirty) {
            return confirm('Are you sure want to discard your changes ?');
        }
        return true;
    }
}
