import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { PersonasFormComponent } from './personas-form.component';

@Injectable()
export class LeaveFormService implements CanDeactivate<PersonasFormComponent> {

  canDeactivate(component: PersonasFormComponent): boolean {
    if (component.existenCambiosPendientes()) {
      return confirm("Tiene cambios pendientes, ¿Desea salir de todos modos?");
    }
    return true;
  }
  constructor() { }

}
