import { Injectable } from '@angular/core';

@Injectable({ //metadonnée: par defaut tjik
  providedIn: 'root'
})
export class CalculService {

  constructor() { }
  getNumberOf(list:any[],critiria:string,value:any){
    let n=0;//let pour declarer un variable
      for (let i in list) {
        if (list[i][critiria] === value) //===: tester valeur et type
          n++;
      }
      return n;
    } 
  }

