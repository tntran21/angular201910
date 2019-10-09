import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from  '../service/user.service';
import {Router, RouterModule } from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  user: any = {};

  // user: User;
  constructor(
    private _loginService: UserService,
    private _router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    // if (this.username == '') {
    //   console.log('chua nhap email');
    //   // $('#username').focus()
    // }
    this._loginService.login(this.user).subscribe(res =>{
      console.log(res)
      this._router.navigate(['category']);
    });
  }

}
