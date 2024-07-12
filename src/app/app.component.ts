import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { WhislistComponent } from './whislist/whislist.component';

// class abc{
//   constructor(){
// console.log('abc class')
//   }
//   show(){
//     console.log('hello abc class')
//   }
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CardComponent,WhislistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // viewProviders:[abc],
  // encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'versionpractice';

  constructor(){
    console.log("hello app component")
    // _abc.show();
  }

  // cdata:any;

  // getdata(val:any){
  //   this.cdata=val
  // }

  // @HostListener("click",['$event'])
  // show(){
  //   alert('hello')
  // }
}
