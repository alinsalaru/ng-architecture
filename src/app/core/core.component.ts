import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  isLoggedIn = false;

  constructor() { }

  ngOnInit() {
  }

  loginHasChanged($event) {
    this.isLoggedIn = !this.isLoggedIn
  }

}
