import { Component, OnInit } from '@angular/core';
import { IPersona } from './persona';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: IPersona[];

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
    this.cargarData();
  }

  delete(persona: IPersona) {
    this.personasService.deletePersona(persona.id.toString())
      .subscribe(persona => this.cargarData(),
        error => console.error(error));
  }

  cargarData() {
    this.personasService.getPersonas()
      .subscribe(personasDesdeWS => this.personas = personasDesdeWS,
        error => console.error(error));
  }

}
