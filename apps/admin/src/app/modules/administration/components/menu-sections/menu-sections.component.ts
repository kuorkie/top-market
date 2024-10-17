import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-sections',
  templateUrl: './menu-sections.component.html',
  styleUrl: './menu-sections.component.css',
})
export class MenuSectionsComponent {
  constructor() {
  }
  menu:any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      orders: [
        {
          id: '1000-0',
          productCode: 'f230fh0g3',
          date: '2020-09-13',
          amount: 65,
          quantity: 1,
          customer: 'David James',
          status: 'PENDING'
        }
      ]
    }]
  ngOnInit(){

  }

}
