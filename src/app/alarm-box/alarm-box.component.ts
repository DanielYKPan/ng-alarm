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

    public id = ++nextUniqueId;

    constructor() {
    }

    ngOnInit() {
    }

}
