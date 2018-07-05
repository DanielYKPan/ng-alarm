import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { Alarm } from '../store/alarm-model';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements OnInit {

    @Input() alarms: Alarm[];

    @HostBinding('class.app-body')
    get bodyClass(): boolean {
        return true;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
