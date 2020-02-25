import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'custom-components';

  data = ['helo','hh'];
  obj = {
    helo : 'helo_in'
  }
  selectedItems = ['hh']
  
  selectionDone(event){
    console.log(event);
  }
}
