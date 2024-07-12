import { Component } from '@angular/core';
import { WhislistService } from '../whislist.service';

@Component({
  selector: 'app-whislist',
  standalone: true,
  imports: [],
  templateUrl: './whislist.component.html',
  styleUrl: './whislist.component.css'
})
export class WhislistComponent {
  cards: string[] = [];


  constructor(private wishlistService: WhislistService) {

  }

  getWishlistData() {
    return this.wishlistService.getWishlist();
  }

}
