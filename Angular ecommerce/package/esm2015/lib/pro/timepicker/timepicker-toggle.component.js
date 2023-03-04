import { __decorate, __metadata } from "tslib";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, HostListener, } from '@angular/core';
import { MdbTimePickerComponent } from './timepicker.component';
let MdbTimepickerToggleComponent = class MdbTimepickerToggleComponent {
    constructor() { }
    handleClick() {
        this.mdbTimePickerToggle.open();
    }
    ngOnInit() { }
};
__decorate([
    Input(),
    __metadata("design:type", MdbTimePickerComponent)
], MdbTimepickerToggleComponent.prototype, "mdbTimePickerToggle", void 0);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MdbTimepickerToggleComponent.prototype, "handleClick", null);
MdbTimepickerToggleComponent = __decorate([
    Component({
        template: "<button class=\"mdb-timepicker-toggle\">\n  <svg\n    aria-hidden=\"true\"\n    focusable=\"false\"\n    data-prefix=\"fas\"\n    data-icon=\"clock\"\n    class=\"svg-inline--fa fa-clock fa-w-16\"\n    role=\"img\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n    viewBox=\"0 0 512 512\"\n  >\n    <path\n      fill=\"currentColor\"\n      d=\"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z\"\n    ></path>\n  </svg>\n</button>\n",
        selector: 'mdb-timepicker-toggle',
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".mdb-timepicker-toggle{position:absolute;right:0;top:50%;transform:translateY(-50%);border-color:transparent;background-color:transparent}.mdb-timepicker-toggle svg{height:1em}"]
    }),
    __metadata("design:paramtypes", [])
], MdbTimepickerToggleComponent);
export { MdbTimepickerToggleComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci10b2dnbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby90aW1lcGlja2VyL3RpbWVwaWNrZXItdG9nZ2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBRXZCLEtBQUssRUFDTCxZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFTaEUsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFRdkMsZ0JBQWUsQ0FBQztJQUpoQixXQUFXO1FBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFJRCxRQUFRLEtBQUksQ0FBQztDQUNkLENBQUE7QUFWVTtJQUFSLEtBQUssRUFBRTs4QkFBc0Isc0JBQXNCO3lFQUFDO0FBR3JEO0lBREMsWUFBWSxDQUFDLE9BQU8sQ0FBQzs7OzsrREFHckI7QUFOVSw0QkFBNEI7SUFQeEMsU0FBUyxDQUFDO1FBQ1QsdW1CQUFpRDtRQUNqRCxRQUFRLEVBQUUsdUJBQXVCO1FBRWpDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1FBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDOztHQUNXLDRCQUE0QixDQVd4QztTQVhZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkluaXQsXG4gIElucHV0LFxuICBIb3N0TGlzdGVuZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWRiVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdGltZXBpY2tlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVwaWNrZXItdG9nZ2xlLmNvbXBvbmVudC5odG1sJyxcbiAgc2VsZWN0b3I6ICdtZGItdGltZXBpY2tlci10b2dnbGUnLFxuICBzdHlsZVVybHM6IFsnLi90aW1lcGlja2VyLXRvZ2dsZS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWRiVGltZXBpY2tlclRvZ2dsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG1kYlRpbWVQaWNrZXJUb2dnbGU6IE1kYlRpbWVQaWNrZXJDb21wb25lbnQ7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLm1kYlRpbWVQaWNrZXJUb2dnbGUub3BlbigpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cbn1cbiJdfQ==