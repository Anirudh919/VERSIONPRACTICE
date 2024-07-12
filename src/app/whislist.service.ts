import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WhislistService {
  private wishlist: any[] = [];

  addToWishlist(item: any) {
    console.log(item)
    this.wishlist.push(item);
  }

  getWishlist() {
    return this.wishlist;
  }

  getWishlistCount() {
    return this.wishlist.length;
    //wrong method
  }
  constructor() { }
}
