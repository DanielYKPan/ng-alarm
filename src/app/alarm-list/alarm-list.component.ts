import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { Alarm } from '../store/alarm-model';

@Component({
    selector: 'app-alarm-list',
    templateUrl: './alarm-list.component.html',
    styleUrls: ['./alarm-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlarmListComponent implements OnInit {

    @Input() alarms: Alarm[];

    @HostBinding('class.alarm-list-wrapper')
    get alarmListWrapperClass(): boolean {
        return true;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
