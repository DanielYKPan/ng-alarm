/**
 * alarm-actions
 */

import { Action } from '@ngrx/store';
import { Alarm } from './alarm-model';

export enum AlarmActionTypes {
    Load = 'Add Alarms',
    AddAlarm = 'Add Alarm',
}

/**
 * Load all alarms
 * */
export class Load implements Action {
    readonly type = AlarmActionTypes.Load;

    constructor() {
    }
}

/**
 * Add an alarm to store
 * */
export class AddAlarm implements Action {
    readonly type = AlarmActionTypes.AddAlarm;

    constructor( public payload: Alarm ) {
    }
}

export type AlarmActions =
    Load |
    AddAlarm;
