import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';
import { Repo} from '../repo'
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-search-foorm',
  templateUrl: './search-foorm.component.html',
  styleUrls: ['./search-foorm.component.css']
})
export class SearchFoormComponent implements OnInit {

  Username: string = "";
  emma: any;
  repos: any;
  
  constructor(private http:HttpClient) { }

  ngOnInit() {

  }
  search() {
    let promise = new Promise ((resolve, reject)=>{
     this.http.get("https://api.github.com/users/"+this.Username+"?access_token="+environment.API)
     .subscribe((emma) => {
       this.emma = emma;
       console.log(this.emma); 
       resolve()
    },
    _err=>{
      
      reject()
    })
    
    })
   }


}