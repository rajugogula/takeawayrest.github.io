import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class Reserve {

  tableData: any;
  tableNumber: number;
  orderSummary: any;
  totalCost: number;

  constructor(private router: Router) { 



    let data = localStorage.getItem('tableData');
    this.tableNumber = parseInt(localStorage.getItem('selectedTableNumber'));
    this.tableData = JSON.parse(data);

    const filteredIndex = this.tableData.findIndex( x => x.number === this.tableNumber);

    this.orderSummary = this.tableData[filteredIndex].orderSummary.length > 0 ? this.tableData[filteredIndex].orderSummary : [];

    this.totalCost = this.tableData[filteredIndex].totalCost !== 0 ? this.tableData[filteredIndex].totalCost : 0 ;
  }
  toggleFlag: boolean = false;
  tabIndex: number = 1;

  items = {
    biryanis: [{
      name: 'Chicken Biryani Single',
      cost: '120',
      count: 0
    },
    {
      name: 'Chicken Biryani Full',
      cost: '240',
      count: 0
    },
    {
      name: 'Chicken Biryani Family',
      cost: '440',
      count: 0
    },
    {
      name: 'Chicken Biryani Jumbo',
      cost: '660',
      count: 0
    },
    {
      name: 'Chicken Manchow',
      cost: '120',
      count: 0
    }],
    soups: [{
      name: 'Chicken Manchow',
      cost: '120',
      count: 0
    }],
    starters: [{
      name: 'Chicken Tandoori',
      cost: '120',
      count: 0
    },
  {
    name: 'Chicken Lollipop',
      cost: '20',
      count: 0
  },
{
  name: 'Chilli Paneer',
      cost: '135',
      count: 0
}],
curries: [{
      name: 'Kadai Checken',
      cost: '220',
      count: 0
},
{
      name: 'Dal',
      cost: '160',
      count: 0
},
{
      name: 'Chicken Kodi',
      cost: '120',
      count: 0
}],
drinks: [{
      name: 'Maaza',
      cost: '40',
      count: 0
},
{
      name: 'Sprite',
      cost: '120',
      count: 0
}],
rotis: [{
      name: 'Tandoori Roti',
      cost: '20',
      count: 0
},
{
      name: 'Rumali Roti',
      cost: '12',
      count: 0
},
{
        name: 'Butter Nan',
      cost: '10',
      count: 0
}]
  };

  collapsableTab (index) {
    this.toggleFlag = !this.toggleFlag
    this.tabIndex = index;
  }

  addOrder (item) {
    const index = this.orderSummary.findIndex(x => x.name ===item.name);

    if (index !== -1) {
      this.orderSummary[index].count = this.orderSummary[index].count + 1;
    } else {
      item.count = item.count + 1;
      this.orderSummary.push(item);
    }

    this.totalCost = this.totalCost + parseInt(item.cost);
  }

  deleteItem (item) {

    const index = this.orderSummary.findIndex(x => x.name === item.name);

    if (index !== -1) {
      this.orderSummary[index].count = this.orderSummary[index].count === 0 ?  
      this.orderSummary[index].count : this.orderSummary[index].count-1;
      if (this.orderSummary[index].count === 0) {
        this.orderSummary.splice(index, 1);
      }
    
      this.totalCost = this.totalCost - parseInt(item.cost);

    }
    else{

    }
  }
     
      addOrderToTable () {
        if (this.totalCost === 0) return;

        const filteredIndex = this.tableData.findIndex(x => x.number === this.tableNumber);

        this.tableData[filteredIndex].bookedTime = new Date().toLocaleTimeString();
        this.tableData[filteredIndex].totalCost = this.totalCost;
        this.tableData[filteredIndex].status = true;
        this.tableData[filteredIndex].orderSummary = this.orderSummary;

        localStorage.setItem('tableData', JSON.stringify(this.tableData));
        this.router.navigateByUrl('');
        
      }

      cancelOrder () {
        this.orderSummary = [],
        this.totalCost = 0;
      }

}
