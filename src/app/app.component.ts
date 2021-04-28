import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Search Using ng2-search-filter';

  term: string;

  filterData =
  [
    {
      "empId": "8080628",
      "empName": "Deeya Upadhyay",
      "empLocation": "Hyderabad"
    },
    {
      "empId": "8080432",
      "empName": "Shivangi Jaitly",
      "empLocation": "Banglore"
    },
    {
      "empId": "8080433",
      "empName": "Dheeraj Rallabandi",
      "empLocation": "Chennai"
     
    },
    {
      "empId": "8080435",
      "empName": "Vinay SN",
      "empLocation": "Bangalore"
     
    },
    {
      "empId": "8080436",
      "empName": "Krishna Gupta",
      "empLocation": "Hyderabad"
     
    }
  ]
}
