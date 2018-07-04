import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

    @HostBinding('class.app-header')
    get headerClass(): boolean {
        return true;
    }

    constructor() {
    }

    ngOnInit() {
    }

}
