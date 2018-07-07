/**
 * alarm-actions
 */

import { Action } from '@ngrx/store';
import { Alarm } from './alarm-model';

export enum AlarmActionTypes {
    Load = 'Add Alarms',
    AddAlarm = 'Add Alarm',
    UpdateAlarm = 'Update Alarm',
    DeleteAlarm = 'Delete Alarm',
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

/**
 * Update an alarm settings
 * */
export class UpdateAlarm implements Action {
    readonly type = AlarmActionTypes.UpdateAlarm;

    constructor( public payload: Alarm ) {
    }
}

/**
 * Delete an alarm
 * */
export class DeleteAlarm implements Action {
    readonly type = AlarmActionTypes.DeleteAlarm;

    constructor( public payload: string ) {
    }
}

export type AlarmActions =
    Load |
    AddAlarm |
    UpdateAlarm |
    DeleteAlarm;
