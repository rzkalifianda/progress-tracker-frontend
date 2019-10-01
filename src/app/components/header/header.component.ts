import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() text = '';
  constructor() { }

  ngOnInit() {
  }


}
