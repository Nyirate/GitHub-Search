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
  emma: any;
  Username: string = "";

  constructor(private http:HttpClient) { }

  ngOnInit() {
    
  }
  
  
}
