import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    private _isConfigSettings = false;
    get isConfigSettings(): boolean {
        return this._isConfigSettings;
    }

    public handleFooterBtnClick( isConfigSettings: boolean ) {
        this._isConfigSettings = isConfigSettings;
    }
}
