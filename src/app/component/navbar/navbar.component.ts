import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  user:any;
  constructor(private router:Router) { 
    this.user=JSON.parse(localStorage.getItem('usuario'))
  }

  ngOnInit(): void {
  }

  logOut(e)
  {
    e.preventDefault()
    localStorage.clear();
    this.router.navigateByUrl('login')
  }

}
