import { Component, OnInit } from '@angular/core';
import { Sportcar } from '../sportcar';
import { SPORTCARS_LIST } from '../list-sportcars';

@Component({
  selector: 'app-sportcars',
  templateUrl: './sportcars.component.html',
  styleUrls: ['./sportcars.component.css']
})
export class SportcarsComponent implements OnInit {
  
  sportcars = SPORTCARS_LIST;
  selectedSportcar: Sportcar;

  constructor() { }

  ngOnInit() {
  }
  onSelect(sportcar: Sportcar): void {
    this.selectedSportcar = sportcar;
  }
}
