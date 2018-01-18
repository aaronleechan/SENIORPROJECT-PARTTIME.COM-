import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  check: boolean;

  constructor() {
    this.check = true;
  }

  ngOnInit() {
  }

  checkAll(){
    if(this.check){
      this.check = false;
    }else{
      this.check = true;
    }
  }

}

