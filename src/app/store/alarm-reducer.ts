/**
 * alarm-reducer
 */
import { Alarm } from './alarm-model';
import { AlarmActions, AlarmActionTypes } from './alarm-actions';

export interface State {
    alarms: Alarm[];
}

const initialState: State = {
    alarms: [],
};

export function reducer( state = initialState, action: AlarmActions ): State {
    switch (action.type) {
        case AlarmActionTypes.AddAlarm:
            return {
                alarms: [action.payload, ...state.alarms]
            };

        default:
            return state;
    }
}

export const getAlarms = ( state: State ) => state.alarms;
