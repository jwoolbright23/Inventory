import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Item {
  constructor(
    public id:number,
    public description:string,
    public quantity:number,
    public dateAdded:Date,
  ){

  }
}

@Component({
  selector: 'app-inventory-items',
  templateUrl: './inventory-items.component.html',
  styleUrls: ['./inventory-items.component.css']
})
export class InventoryItemsComponent implements OnInit {

  items: Item[]
  = [
    new Item(1, "cheese", 1, new Date()),
    new Item(2, "ice cream", 2, new Date()),
    new Item(3, "oatmeal", 3, new Date())
  ]

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }

}
