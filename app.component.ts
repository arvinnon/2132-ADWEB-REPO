import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//string binding
export class AppComponent {
  title = 'Interpolation Binding';
  appName = 'This is an one-way data binding';

  header1 = 'Number Interpolation';


//numeric bindings
  n1 = 70;
  n2 = 30;
  sum = 0;
  diffe = 0;
  quo = 0;
  prod = 0;

  //property binding
  clientName:string = 'Arvin Non';

  //class binding
  appliedCSSClass = 'green';
  notapplieCSSClass = false;
  //style binding
  myColor = 'red';

  //two-way data binding

  showData($event:any) {
    console.log("Button is Clicked!");
  }

  //keyup function
  getData(data:any){
    console.warn(data)
  }

}
