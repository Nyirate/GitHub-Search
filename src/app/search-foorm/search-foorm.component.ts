import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search-foorm',
  templateUrl: './search-foorm.component.html',
  styleUrls: ['./search-foorm.component.css']
})
export class SearchFoormComponent implements OnInit {

  Username: string = "";
  response: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
   search() {
     this.http.get("https://api.github.com/users/daneden?access_token=c640142ec133d7db16859a0380e82ae43819a6d0" + this.Username)
     .subscribe((response) => {
       this.response = response;
       console.log(this.response); 
     })
    }
}
