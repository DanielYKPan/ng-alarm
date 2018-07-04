import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
    styleUrls: ['./body.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BodyComponent implements OnInit {

    @HostBinding('class.app-body')
    get bodyClass(): boolean {
        return true;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
