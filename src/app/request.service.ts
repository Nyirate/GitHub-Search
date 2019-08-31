import { Injectable } from '@angular/core';
import { Userr } from './userr';
import { Repo } from './repo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  user:Userr;
  repo:Repo[];
  Username: string;
  emma: Object;
  
  constructor(private http:HttpClient) {
    this.user=new Userr("","",0,0,0)
    this.repo = [];
   }
  //  search() {
  //   let promise = new Promise ((resolve, reject)=>{
  //    this.http.get("https://api.github.com/users/"+this.Username+"?access_token=c640142ec133d7db16859a0380e82ae43819a6d0")
  //    .subscribe((emma) => {
  //      this.emma = emma;
  //      console.log(this.emma); 
  //      resolve()
  //   },
  //   _err=>{
      
  //     reject()
  //   })
    
  //   })
  //  }

  //  repoSearch(){
  //    interface ApiResponse{
  //      name:string;
  //      created:Date;      
  //    }
  //    let promise = new Promise ((resolve, _reject)=>{
  //      this.http.get("https://api.github.com/users/"+this.Username+"/repos?access_token=c640142ec133d7db16859a0380e82ae43819a6d0")
  //      for(var a in this.emma) {
  //        this.repo.push = (this.emma[a]);
  //      }
  //        resolve()

     
     
  //    })
   }
  }

