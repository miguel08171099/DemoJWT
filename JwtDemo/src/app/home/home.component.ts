import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../user/user';
import { UserService } from '../user/user.service';
import { AuthenticationService } from '../jwt_needs/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loading = false;
  users: User[] | undefined;

  constructor(private userService: UserService) { }

  ngOnInit() {
      this.loading = true;
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.loading = false;
          this.users = users;
      });
  }
}
