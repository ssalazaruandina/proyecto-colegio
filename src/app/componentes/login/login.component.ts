import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Alumno, buscar } from 'src/app/ts/backend';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    usuario: new FormControl('',Validators.required),
    contrasenia: new FormControl('',Validators.required)
  })
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  private alumno1: Alumno = {
    usuarioA : "Alum1",
    contraseniaA: "Alum1o",
    nombreA: "Jose",
    apellidoPA: "Quillahuaman",
    apellidoMA: "Titto",
    sexoA: "M"
  }
  private alumno2: Alumno = {
    usuarioA : "Alum2",
    contraseniaA: "Alum1a",
    nombreA: "Maria",
    apellidoPA: "Salazar",
    apellidoMA: "Quispe",
    sexoA: "F"
  }
  private alumnos: Alumno[] = [this.alumno1,this.alumno2];
  public DatosCorrectos:boolean = false;
  validar(form: FormGroup):void{
    if(buscar(this.alumnos, this.login.value.usuario,this.login.value.contrasenia) > -1){
      this.router.navigate(['asistencia']);
    }
    else{
      console.log("datos incorrectos")
      this.DatosCorrectos = true;
      setTimeout(()=>{
        this.DatosCorrectos = false;
      },2000);
    }
    console.log(form)
    //https://www.flaticon.com/premium-icon/students_2995620?related_id=2995620&origin=search
  }
  
}
