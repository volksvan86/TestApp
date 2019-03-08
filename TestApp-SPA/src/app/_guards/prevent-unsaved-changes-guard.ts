import {Injectable} from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ItemEditComponent } from '../items/item-edit/item-edit.component';

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<ItemEditComponent> {
    canDeactivate(component: ItemEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue?  Any unsaved changed will be lost.');
        }
        return true;
    }
}