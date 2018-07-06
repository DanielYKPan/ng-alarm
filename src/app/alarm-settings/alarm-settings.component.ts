import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-alarm-settings',
    templateUrl: './alarm-settings.component.html',
    styleUrls: ['./alarm-settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlarmSettingsComponent implements OnInit {

    @Input() public days: number[] = [];

    @Input() public hours: number = 0;

    @Input() public minutes: number = 0;

    @Output() public save = new EventEmitter<any>();

    @HostBinding('class.alarm-settings-wrapper')
    get alarmSettingWrapperClass(): boolean {
        return true;
    }

    constructor() {
    }

    ngOnInit() {
    }

    handleHoursUp( event: any ) {
    }

    handleHoursDown( event: any ) {
    }

    handleMinutesUp( event: any ) {
    }

    handleMinutesDown( event: any ) {
    }

    handleSavingBtnClick( event: any ) {
        this.save.emit();
        event.preventDefault();
    }
}
