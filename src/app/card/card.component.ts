import { Component, Input } from '@angular/core';
import { WhislistService } from '../whislist.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  inputs:['card']
})
export class CardComponent {

  card =[{
    id:1,
    Pname:'shoe',
  },
{
  id:2,
  Pname:'bag'
},
{
  id:3,
  Pname:'laptop'
},
{
  id:4,
  Pname:'oil'
}]

// @Input() cardData: any;

  constructor(private wishlistService: WhislistService) {}

  addToWishlist(val:any) {
    
    console.log(val)
    this.wishlistService.addToWishlist(val);
  }
}
