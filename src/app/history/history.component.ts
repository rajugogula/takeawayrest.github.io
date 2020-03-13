import { Component } from '@angular/core';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})

export class History {

   historyData: Array<any>;
   totalCost: number;

  constructor() { 
    this.historyData = JSON.parse(localStorage.getItem('history'));

    let data = this.historyData && this.historyData.length > 0 && this.historyData.reduce((acc,curr) => {
      return acc + curr.cost
    }, 0);
    
    this.totalCost = data ? data : 0
   }
}
