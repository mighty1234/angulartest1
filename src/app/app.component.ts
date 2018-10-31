import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {MapService} from './map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent implements  OnInit {
  users = [];
  events = [];
  location = [];
  searchStr = '';
  curentTab = 1;

  constructor(private userService: UsersService) {
    // this.users = this.userService.users;
  }

  ngOnInit() {
   this.users = this.userService.users;
   // this.userService.getUsers();
    }


  }



