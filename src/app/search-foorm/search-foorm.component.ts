import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
@Component({
  selector: 'app-search-foorm',
  templateUrl: './search-foorm.component.html',
  styleUrls: ['./search-foorm.component.css']
})
export class SearchFoormComponent implements OnInit {

  Username: string = "";
  emma: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
//    search() {
//      let promise = new Promise ((resolve, reject)=>{
//       this.http.get("https://api.github.com/users/"+this.Username+"?access_token=c640142ec133d7db16859a0380e82ae43819a6d0")
//       .subscribe((emma) => {
//         this.emma = emma;
//         console.log(this.emma); 
//         resolve()
//      },
//      err=>{
//        this.emma.login = "No login"
//        this.emma.email = "incorrect"

//        reject()
//      })
     
//      })
//     }
// }
