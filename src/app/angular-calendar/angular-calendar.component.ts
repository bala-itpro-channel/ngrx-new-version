import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-calendar',
  templateUrl: './angular-calendar.component.html',
  styleUrls: ['./angular-calendar.component.scss']
})
export class AngularCalendarComponent implements OnInit {

  today: Date;
  constructor() { }

  ngOnInit() {
    this.today = new Date();
  }

}
