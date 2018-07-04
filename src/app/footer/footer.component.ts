import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

    public isOn: boolean = false;

    @Output() change = new EventEmitter<boolean>();

    @HostBinding('class.app-footer')
    get footerClass(): boolean {
        return true;
    }

    constructor() {
    }

    ngOnInit() {
    }

    public handleBtnClick( event: any ) {
        this.isOn = !this.isOn;
        this.change.emit(this.isOn);
        event.preventDefault();
    }
}
