import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

let nextUniqueId = 0;

@Component({
    selector: 'app-alarm-box',
    templateUrl: './alarm-box.component.html',
    styleUrls: ['./alarm-box.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlarmBoxComponent implements OnInit {

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
