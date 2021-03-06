import { Route, ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mode = new FormControl('over');
  constructor(public router: Router) { }

  ngOnInit() {
  }

  showItem() {
    console.log('item cicked');
    this.router.navigate(['/courses']);
  }

}
