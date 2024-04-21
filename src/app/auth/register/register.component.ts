import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Utils } from '../../utils/utils';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      correo: new FormControl(''),
      contrasenia: new FormControl(''),
    });
  }

  //make a function that validates that all fields are filled.
  validateForm() {
    if (
      this.registerForm.value.nombre === '' ||
      this.registerForm.value.apellido === '' ||
      this.registerForm.value.correo === '' ||
      this.registerForm.value.contrasenia === ''
    ) {
      return false;
    } else {
      return true;
    }
  }

  submit(form: FormGroup) {
    if (this.validateForm()) {
      //TODO
    } else{
      console.log("HOLAAAAAAAAA");
      Utils.showAlertError('Todos los campos son obligatorios');
    }
  }
}
