import { Component, EventEmitter, inject } from '@angular/core';
import { WhislistService } from '../whislist.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  // inputs:['pdata']
  // outputs:['childevent']
})
export class NavbarComponent {
// pdata:any;
// childevent=new EventEmitter();
// senddata(val:any){
// this.childevent.emit(val)
// }

constructor(private wishlistService:WhislistService){}
// wishlistService= @inject(WhislistService)

getcount(){
  // console.log(this.wishlistService.getWishlistCount())
 return this.wishlistService.getWishlistCount();
}

}
