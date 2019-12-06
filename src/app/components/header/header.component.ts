import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'component-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Input() text = '';
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }
  logout() {
    if(localStorage.getItem('role')==='admin'){
      this.router.navigateByUrl("admin");
    }
    else {
      this.router.navigateByUrl("");
    }
    localStorage.clear();
  }
}
