import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { Alarm } from '../store/alarm-model';

let nextUniqueId = 0;

@Component({
    selector: 'app-alarm-box',
    templateUrl: './alarm-box.component.html',
    styleUrls: ['./alarm-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlarmBoxComponent implements OnInit {

    @Input() alarm: Alarm;

    @HostBinding('class.app-alarm-box')
    get alarmBoxClass(): boolean {
        return true;
    }

    get isMorningHour(): boolean {
        return this.alarm.hour >= 6 && this.alarm.hour < 18;
    }

    public id = ++nextUniqueId;

    constructor() {
    }

    ngOnInit() {
    }

    public handleDaysChange( days: number[] ) {
        console.log(days);
        console.log(this.alarm.days);
    }

    handleStatusChange( isActive: boolean ) {
        console.log(isActive);
        console.log(this.alarm.isActive);
    }
}
