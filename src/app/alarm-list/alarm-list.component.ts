import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Alarm } from '../store/alarm-model';

@Component({
    selector: 'app-alarm-list',
    templateUrl: './alarm-list.component.html',
    styleUrls: ['./alarm-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlarmListComponent implements OnInit {

    @Input() alarms: Alarm[];

    constructor() {
    }

    ngOnInit() {
    }

}
