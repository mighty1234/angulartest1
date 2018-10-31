import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']

})
export  class UserComponent   implements  OnInit {

  @Input() user;
  isMarked = false;
  ngOnInit() {

    console.log('userCompinentWork');
  }
  OnClick() {
 this.isMarked = true;


  }

}

