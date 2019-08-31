import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userr } from '../userr';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  userr:Userr;
  response: any;
  Username: string = "";
  constructor(private http:HttpClient) { }

  ngOnInit() {
    
  }
    // interface ApiResponse{
    //   login:string;
    //   email:string;
    //   public_repos:number;
    //   followers:number;
    //   following:number;
    // }

    search() {
      this.http.get("https://api.github.com/users/daneden?access_token=c640142ec133d7db16859a0380e82ae43819a6d0" + this.Username)
      .subscribe((response) => {
        this.response = response;
        console.log(this.response); 
      })
     }
 }

//     this.http.get<ApiResponse>("https://api.github.com/users/daneden?access_token=c640142ec133d7db16859a0380e82ae43819a6d0 ").subscribe(data=>{

//       this.userr = new Userr(data.login,data.email, data.public_repos, data.followers, data.following)
//     })
  
// }
