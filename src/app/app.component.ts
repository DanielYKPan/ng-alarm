import { Component, OnInit } from '@angular/core';
import { ClockService } from './clock.service';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as fromRoot from './store';
import * as fromAlarmActions from './store/alarm-actions';
import { Alarm } from './store/alarm-model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public isConfigSettings = false;

    public alarms$: Observable<Alarm[]>;

    get clock$(): Observable<Date> {
        return this.clockService.clock$;
    }

    constructor( private clockService: ClockService,
                 private store: Store<fromRoot.State> ) {
        this.alarms$ = this.store.pipe(select(fromRoot.getAlarms));
    }

    public ngOnInit(): void {
        this.clockService.runClock();

        this.store.dispatch(new fromAlarmActions.Load());
    }
}
