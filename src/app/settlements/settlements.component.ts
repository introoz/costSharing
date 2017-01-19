import { Component, OnInit } from '@angular/core';
import { Settlement } from 'app/_models/settlement';

@Component({
  selector: 'app-settlements',
  templateUrl: './settlements.component.html',
  styleUrls: ['./settlements.component.css']
})
export class SettlementsComponent implements OnInit {

  settlements: Settlement[];
  constructor() { }

  ngOnInit() {
    this.settlements = [];

    var set = new Settlement();
    set.user1 = 'login';
    set.moneyOwed = 30;
    set.user2 = 'test';
    this.settlements.push(set)
  }

}
