import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";

import { NgToasterComponent } from "./ng-toaster/ng-toaster.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'custom-components';

  // data = ['helo', 'h sd SD SD SDs dsd fsdfs fzs fs fh'];
  // obj = {
  //   helo: 'helo_in'
  // }
  // selectedItems = ['hh'];

  dataObj = [
    {
      id: 1,
      name: "my first option"
    },
    {
      id: 2,
      name: "my first option 1"
    },
    {
      id: 3,
      name: "some optionn"
    }
  ];
  dataObj1 = [
    {
      my_id: 1,
      name: "my sec dropdown"
    }
  ];

  mySetting = {
    label : "Market",
    primary_key : "id",
    label_key : "name"
  }
  mySetting1 = {
    label : "Division",
    primary_key : "my_id",
    label_key : "name"
  }

  selectData = [    {
    id: 2,
    name: "my first option 1"
    }
   ]

   selectData1 = []


  constructor(public ng: NgToasterComponent, public mm: MatSnackBar) { }

  ngOnInit() {
    // this.mm.open("assdsd")
  }

  selectionDone(event) {
    // console.log(event);
    // // this.ng.success("mmm")
    // this.ng.error("heloo")
  }

  showData(){
    console.log(this.selectData);
    console.log(this.selectData1);
    
  }
}
