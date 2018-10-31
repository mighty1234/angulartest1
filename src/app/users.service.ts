import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators/';
import  { HttpClient, HttpRequest, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable()
export class UsersService {

  users = this.getUsers();
  constructor (private  http: HttpClient) {}
  getUsers() {
   // return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
     return this.http.get<any>('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb',
       {
         observe: 'body',
         responseType: 'json',

       }).subscribe(data => console.log(data));





     // .pipe(map(response => response.json()))
     // .pipe(map(response => response.results))
     // .pipe(map(users => {
     //   return users.map(u => {
     //     return {
     //       name: u.name.first + ' ' + u.name.last,
     //       geo: u.location.city + ' ' + u.location.state,
     //       image: u.picture.large
     //
     //     };


}
