import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {
  aleatoire1:number;
  aleatoire2:number;
  operateur: string;
  resultat : number;

  constructor() { }

  ngOnInit(): void {
  }

  generateRandomNumber(n:number){
    if(n === 1)
    this.aleatoire1= Math.round(Math.random()*100);
    else 
    this.aleatoire2= Math.round(Math.random()*100);

    this.calculResultat();
  }

  modifierOperateur(ope:string){
    this.operateur = ope;
    this.calculResultat();
  }

  calculResultat(){
    if(this.aleatoire1 !== null && this.aleatoire2 !== null && this.operateur !== null){
      switch(this.operateur){
        case "+": this.resultat = this.aleatoire1 + this.aleatoire2;
        break;
        case "-": this.resultat = this.aleatoire1 - this.aleatoire2;
        break;
        case "*": this.resultat = this.aleatoire1 * this.aleatoire2;
        break;
        case "/": this.resultat = this.aleatoire1 / this.aleatoire2;
        break;
      }
    }
  }
}
