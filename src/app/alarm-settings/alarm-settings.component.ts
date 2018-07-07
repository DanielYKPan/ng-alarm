import { AfterContentInit, ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { Alarm } from '../store/alarm-model';

@Component({
    selector: 'app-alarm-settings',
    templateUrl: './alarm-settings.component.html',
    styleUrls: ['./alarm-settings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlarmSettingsComponent implements OnInit, AfterContentInit {

    @Input() public alarm: Alarm;

    @Output() public save = new EventEmitter<Alarm>();

    @Output() public update = new EventEmitter<Alarm>();

    @HostBinding('class.alarm-settings-wrapper')
    get alarmSettingWrapperClass(): boolean {
        return true;
    }

    private _hour: number;
    get hour(): number {
        return this._hour;
    }

    private _minute: number;
    get minute(): number {
        return this._minute;
    }

    private _days: number[];
    get days(): number[] {
        return this._days;
    }

    set days( val: number[] ) {
        this._days = val;
    }

    get canIncreaseHour(): boolean {
        return this._hour < 23;
    }

    get canDecreaseHour(): boolean {
        return this._hour > 0;
    }

    get canIncreaseMinute(): boolean {
        return this._minute < 59;
    }

    get canDecreaseMinute(): boolean {
        return this._minute > 0;
    }

    constructor() {
    }

    public ngOnInit() {
    }

    public ngAfterContentInit(): void {
        this._hour = this.alarm ? this.alarm.hour : 0;
        this._minute = this.alarm ? this.alarm.minute : 0;
        this._days = this.alarm && this.alarm.days.length > 0 ?
            [...this.alarm.days] : [0, 1, 2, 3, 4, 5, 6];
    }

    public handleHoursUp( event: any ) {
        if (this.canIncreaseHour) {
            this._hour += 1;
        }

        event.preventDefault();
    }

    handleHoursDown( event: any ) {
        if (this.canDecreaseHour) {
            this._hour -= 1;
        }

        event.preventDefault();
    }

    handleMinutesUp( event: any ) {
        if (this.canIncreaseMinute) {
            this._minute += 1;
        }

        event.preventDefault();
    }

    handleMinutesDown( event: any ) {

        if (this.canDecreaseMinute) {
            this._minute -= 1;
        }

        event.preventDefault();
    }

    handleSavingBtnClick( event: any ) {
        if (this.alarm) {
            this.alarm.hour = this._hour;
            this.alarm.minute = this._minute;
            this.alarm.days = this._days;
            this.alarm.isActive = true;
            this.update.emit(this.alarm);
        } else {
            const newAlarm = new Alarm();
            newAlarm.hour = this._hour;
            newAlarm.minute = this._minute;
            newAlarm.days = this._days;
            newAlarm.isActive = true;
            this.save.emit(newAlarm);
        }
        event.preventDefault();
    }
}
