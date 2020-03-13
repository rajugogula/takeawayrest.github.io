import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "Hello root here !";

  constructor () {
    const availableData = JSON.parse(localStorage.getItem('tableData'));
    
    if (!availableData) {
       const tableData = [{
          number: 1,
          seat: 5,
          status: false,
          totalCost: 0,
          bookedTime: null,
          orderSummary: []
       },
       {
        number: 2,
        seat: 4,
        status: false,
        totalCost: 0,
        bookedTime: null,
        orderSummary: []
     },
     {
      number: 3,
      seat: 5,
      status: false,
      totalCost: 0,
      bookedTime: null,
      orderSummary: []
   },
   {
    number: 4,
    seat: 4,
    status: false,
    totalCost: 0,
    bookedTime: null,
    orderSummary: []
 },
 {
  number: 5,
  seat: 5,
  status: false,
  totalCost: 0,
  bookedTime: null,
  orderSummary: []
},
{
  number: 6,
  seat: 4,
  status: false,
  totalCost: 0,
  bookedTime: null,
  orderSummary: []
}];
 const data = JSON.stringify(tableData);
 localStorage.setItem('tableData', data);

    }
  }
}
