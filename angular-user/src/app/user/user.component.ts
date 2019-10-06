import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from  '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: any = {};
  username;
  // user: User;
  constructor(
    private _loginService: UserService
  ) { }

  ngOnInit() {
  }

  login() {
    // this.username = this.user.username;
    // this._loginService.login(this.user).subscribe(res => {

    // }, error => {

    // });
    this._loginService.login(this.user).subscribe((data)=>{
      console.log(data)
    })
  }

}
