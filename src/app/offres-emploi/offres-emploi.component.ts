import { Component, OnInit } from '@angular/core';
import { Emplois } from '../core/model/Emplois';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  listEmploi!:Emplois[];
  i:number=0;
  clickMessage = '';
  e!:Emplois;
  Result!:Emplois;

  
  constructor() { }
  ngOnInit(): void {
    this.listEmploi=[
      {reference : "1" , titre : "Responsable" , entreprise : "Actia" , etat : true},
      {reference : "2" , titre : "Ouvrier" , entreprise : "SOTUFAB" , etat : false},
      {reference : "3" , titre : "Directeur" , entreprise : "Hp" , etat : true}
    ]
  }

  Calcul() {
    this.i=0;
    for (let index = 0; index < this.listEmploi.length; index++) {
      if(this.listEmploi[index].etat==true){
        this.i++;
      }     
    }
    this.clickMessage=this.i.toString();
  }

  Search(search: string){
    if (search) {
      for (let index = 0; index < this.listEmploi.length; index++) {
        if(this.listEmploi[index].entreprise==search){
          this.e=this.listEmploi[index];
          this.listEmploi.length=0;
          this.listEmploi[0]=this.e;
        }     
      }
    }
  }

}
