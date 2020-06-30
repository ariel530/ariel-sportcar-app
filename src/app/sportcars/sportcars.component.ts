import { Component, OnInit } from '@angular/core';
import { Sportcar } from '../sportcar';
import { SPORTCARS_LIST } from '../list-sportcars';
import { RACES_LIST } from '../list-races';

@Component({
  selector: 'app-sportcars',
  templateUrl: './sportcars.component.html',
  styleUrls: ['./sportcars.component.css']
})
export class SportcarsComponent implements OnInit {
  
  sportcars = SPORTCARS_LIST;
  selectedSportcar: Sportcar;
  races = RACES_LIST;

  constructor() { }

  ngOnInit() {
  }
  onSelect(sportcar: Sportcar): void {
    this.selectedSportcar = sportcar;
  }
}
