import { Component, OnInit } from '@angular/core';
import { ClockService } from './clock.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public isConfigSettings = false;

    get clock$(): Observable<Date> {
        return this.clockService.clock$;
    }

    constructor( private clockService: ClockService ) {
    }

    public ngOnInit(): void {
        this.clockService.runClock();
    }
}
