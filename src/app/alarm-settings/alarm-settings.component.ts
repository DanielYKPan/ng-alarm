import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-alarm-settings',
    templateUrl: './alarm-settings.component.html',
    styleUrls: ['./alarm-settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlarmSettingsComponent implements OnInit {

    @HostBinding('class.alarm-settings-wrapper')
    get alarmSettingWrapperClass(): boolean {
        return true;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
