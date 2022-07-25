import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   assistidos: Array <string> = ['p1', 'p3', 'p5', 'p6', 'p7', 'p8', 'p9' ];
   favoritos: Array <string> = ['p10', 'p2', 'p12', 'p10', 'p11', 'p13', 'p14'];
  constructor() { }

  ngOnInit(): void {
  }

}
