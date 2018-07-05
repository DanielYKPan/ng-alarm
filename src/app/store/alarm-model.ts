/**
 * alarm-model
 */

export interface Alarm {
    id: string;
    hour: number;
    minute: number;
    isActive: boolean;
    days: number[];
}
