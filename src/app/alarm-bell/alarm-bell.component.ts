import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-alarm-bell',
  templateUrl: './alarm-bell.component.html',
  styleUrls: ['./alarm-bell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlarmBellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
