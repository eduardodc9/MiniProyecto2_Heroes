import { Component, OnInit} from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public usuarioService: UsuarioService ) { 
    
  }

  ngOnInit(): void {
  }

  agregarUsuario(nombre:HTMLInputElement, sexoMasculino:HTMLInputElement, sexoFemenino:HTMLInputElement, bday:HTMLInputElement, email:HTMLInputElement){
    
    this.usuarioService.addUsuario({
      name: nombre.value,
      sex: sexoMasculino.checked ? sexoMasculino.value : sexoFemenino.checked ? sexoFemenino.value : "No indico el sexo",
      corre: email.value,
      cumple: bday.value
    });


    console.log(this.usuarioService.getUsuarios);

  }

}
