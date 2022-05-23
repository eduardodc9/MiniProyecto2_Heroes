import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor() { }

  getUsuarios(){
    let usuarios:Usuario[]=[];
    let usr = localStorage.getItem('usuario');
    if(usr === null){
      
    }else{
      usuarios = JSON.parse(usr);
    }
    return usuarios;
  }

  addUsuario(usuario:Usuario){
    let usuarios:Usuario[]=[];
    let usr = localStorage.getItem('usuario');
    if(usr === null){
      usuarios.push(usuario);
      localStorage.setItem('usuario', JSON.stringify(usuarios));
    }
    else{
      usuarios = JSON.parse(usr);
      usuarios.push(usuario);
      localStorage.setItem('usuario', JSON.stringify(usuarios));
    }
  }
}
