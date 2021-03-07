import { Component, OnInit } from '@angular/core';
import { MidasoftService } from 'src/app/services/midasoft.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {


  constructor(private serviceMidasoft:MidasoftService) { }

  ngOnInit(): void {
    this.registerNewUser()
  }

  registerNewUser()
  {
    console.log(this.serviceMidasoft.registerUser);
    
  }

}
