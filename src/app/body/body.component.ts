import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from '@angular/core';
import { Alarm } from '../store/alarm-model';
import { bodyAnimations } from './body.animations';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        bodyAnimations.transformBody
    ],
})
export class BodyComponent implements OnInit {

    @Input() isConfigSettings: boolean;

    public alarms: Alarm[] = [
        {
            id: '0',
            hour: 0,
            minute: 30,
            isActive: true,
            days: [0, 2, 4, 6]
        },
        {
            id: '1',
            hour: 10,
            minute: 20,
            isActive: true,
            days: [0, 1, 2, 4]
        },
        {
            id: '2',
            hour: 18,
            minute: 5,
            isActive: true,
            days: [0, 1, 2, 3, 4, 5, 6]
        },
        {
            id: '3',
            hour: 23,
            minute: 42,
            isActive: true,
            days: [0, 2, 4, 6]
        },
    ];

    @HostBinding('class.app-body')
    get bodyClass(): boolean {
        return true;
    }

    @HostBinding('@transformBody')
    get handleTransformBodyAnimations(): string {
        return this.isConfigSettings ? 'settings' : 'list';
    }

    constructor() {
    }

    ngOnInit() {
    }

}
