import { Component, OnInit, NgModule, Input } from '@angular/core';
import { MatCardModule } from '@angular/material';


@Component({
  selector: 'component-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {
  @Input() data = [];
  constructor() { }

  ngOnInit() {
    const asd = 'lasglsalasl';


    // let a,b,c,d,e;
    // let var1 = this.data.map((item)=>{
    //   a = item.title;
    //   b = item.jobDesc;
    //   c = item.project;
    // });
  }

}
