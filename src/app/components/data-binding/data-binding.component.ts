import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-data-binding',
  imports: [TableModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent  {
  products: any = [{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Watch',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo tree',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
{
    id: '1000',
    code: 'f230fh0g3',
    name: 'Bamboo',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5
}];

    constructor() {}

    // ngOnInit() {
    //     this.productService.getProductsMini().then((data) => {
    //         this.products = data;
    //     });
    // }

}
