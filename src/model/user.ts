export class User {
    id: number; 
    nombre : String;
    apellido: string;
    correo: string;
    contrasenia: string;

    
    constructor(id: number, nombre: string, apellido: string, correo: string, contrasenia: string){
      this.id = id;
      this.nombre = nombre;
      this.apellido = apellido;
      this.correo = correo;
      this.contrasenia = contrasenia;
    }
  }
  