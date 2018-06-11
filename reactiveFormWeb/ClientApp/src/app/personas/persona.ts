import { IDireccion } from "../direcciones/direccion";

export interface IPersona {
  id: number;
  nombre: string;
  fechaNacimiento: Date;
  direcciones: IDireccion[];
}
