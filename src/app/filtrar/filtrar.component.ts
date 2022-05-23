import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';


@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent implements OnInit {

  opcion:String="";
  misHeroes: Heroe [] = [];

  constructor(public miservicio: HeroeService) { 

    console.log("Constructor de heroes");

  }

  ngOnInit(): void {

    console.log("ngOnInit de Heroes");
    this.misHeroes = this.miservicio.getHeroes();
    console.log(this.misHeroes);

  }

  casaEle(casa:String){
    this.opcion = casa;
  }

  darEle(heroe:Heroe){
    return this.opcion == heroe.casa;
  }

}
