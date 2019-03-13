import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from 'src/app/inventory-items/inventory-items.component';

@Injectable({
  providedIn: 'root'
})
export class InventoryDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllItems(username){
    return this.http.get<Item[]>(`http://localhost:8080/users/${username}/items`);

  }

  deleteItem(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/items/${id}`)
  }

  retrieveItem(username, id){
    return this.http.get<Item>(`http://localhost:8080/users/${username}/items/${id}`);

  }
  updateItem(username, id, Item){
    return this.http.put<Item>(`http://localhost:8080/users/${username}/items/${id}`, Item);

  }
  createItem(username, Item){
    return this.http.post<Item>(`http://localhost:8080/users/${username}/items/`, Item);

  }
}
