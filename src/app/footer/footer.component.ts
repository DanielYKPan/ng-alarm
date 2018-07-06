import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

    @Input() isConfigSettings: boolean;

    @Output() isConfigSettingsChange = new EventEmitter<boolean>();

    @HostBinding('class.app-footer')
    get footerClass(): boolean {
        return true;
    }

    constructor() {
    }

    ngOnInit() {
    }

    public handleBtnClick( event: any ) {
        this.isConfigSettings = !this.isConfigSettings;
        this.isConfigSettingsChange.emit(this.isConfigSettings);
        event.preventDefault();
    }
}
