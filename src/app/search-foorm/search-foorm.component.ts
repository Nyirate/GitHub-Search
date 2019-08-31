import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';
import { Repo} from '../repo'
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
}