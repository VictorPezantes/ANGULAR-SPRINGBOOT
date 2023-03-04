import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
var MDBBadgeComponent = /** @class */ (function () {
    function MDBBadgeComponent(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    MDBBadgeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            var customClassArr = this.color.split(' ');
            customClassArr.forEach(function (el) {
                _this._renderer.addClass(_this._el.nativeElement, el);
            });
        }
    };
    MDBBadgeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(), HostBinding('class.badge-default'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "default", void 0);
    __decorate([
        Input(), HostBinding('class.badge-primary'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "primary", void 0);
    __decorate([
        Input(), HostBinding('class.badge-success'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "success", void 0);
    __decorate([
        Input(), HostBinding('class.badge-info'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "info", void 0);
    __decorate([
        Input(), HostBinding('class.badge-warning'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "warning", void 0);
    __decorate([
        Input(), HostBinding('class.badge-danger'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "danger", void 0);
    __decorate([
        Input(), HostBinding('class.badge-pill'),
        __metadata("design:type", Boolean)
    ], MDBBadgeComponent.prototype, "pill", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MDBBadgeComponent.prototype, "classInside", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MDBBadgeComponent.prototype, "color", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], MDBBadgeComponent.prototype, "class", void 0);
    MDBBadgeComponent = __decorate([
        Component({
            selector: 'mdb-badge',
            template: "<span class=\"{{class}} {{classInside}}\">\n  <ng-content></ng-content>\n</span>\n",
            encapsulation: ViewEncapsulation.None,
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".badge{box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12);border-radius:.125rem;color:#fff!important}.badge-pill{border-radius:10rem;padding-right:.6rem;padding-left:.6rem}.badge-primary{background-color:#4285f4!important;color:#fff!important}.badge-danger{background-color:#ff3547!important;color:#fff!important}.badge-warning{background-color:#fb3!important;color:#fff!important}.badge-success{background-color:#00c851!important;color:#fff!important}.badge-info{background-color:#33b5e5!important;color:#fff!important}.badge-default{background-color:#2bbbad!important;color:#fff!important}.badge-secondary{background-color:#a6c!important;color:#fff!important}.badge-dark{background-color:#212121!important;color:#fff!important}.badge-light{background-color:#e0e0e0!important;color:#000!important}"]
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], MDBBadgeComponent);
    return MDBBadgeComponent;
}());
export { MDBBadgeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2JhZGdlL21kYi1iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBY0UsMkJBQW9CLEdBQWUsRUFBVSxTQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7SUFFckUsb0NBQVEsR0FBUjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFN0MsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEVBQVU7Z0JBQ2hDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3RELENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkFYd0IsVUFBVTtnQkFBcUIsU0FBUzs7SUFicEI7UUFBNUMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLHFCQUFxQixDQUFDOztzREFBa0I7SUFDakI7UUFBNUMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLHFCQUFxQixDQUFDOztzREFBa0I7SUFDakI7UUFBNUMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLHFCQUFxQixDQUFDOztzREFBa0I7SUFDcEI7UUFBekMsS0FBSyxFQUFFLEVBQUUsV0FBVyxDQUFDLGtCQUFrQixDQUFDOzttREFBZTtJQUNYO1FBQTVDLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQzs7c0RBQWtCO0lBQ2xCO1FBQTNDLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQzs7cURBQWlCO0lBQ2xCO1FBQXpDLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQzs7bURBQWU7SUFFL0M7UUFBUixLQUFLLEVBQUU7OzBEQUFxQjtJQUVwQjtRQUFSLEtBQUssRUFBRTs7b0RBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTs7b0RBQWU7SUFaWixpQkFBaUI7UUFQN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsOEZBQXlDO1lBRXpDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztTQUNoRCxDQUFDO3lDQWV5QixVQUFVLEVBQXFCLFNBQVM7T0FkdEQsaUJBQWlCLENBMEI3QjtJQUFELHdCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0ExQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItYmFkZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWRiLWJhZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFkZ2UtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1EQkJhZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1kZWZhdWx0JykgZGVmYXVsdDogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1wcmltYXJ5JykgcHJpbWFyeTogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1zdWNjZXNzJykgc3VjY2VzczogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1pbmZvJykgaW5mbzogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS13YXJuaW5nJykgd2FybmluZzogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1kYW5nZXInKSBkYW5nZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtcGlsbCcpIHBpbGw6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY2xhc3NJbnNpZGU6IHN0cmluZztcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdiYWRnZScpO1xuICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICBjb25zdCBjdXN0b21DbGFzc0FyciA9IHRoaXMuY29sb3Iuc3BsaXQoJyAnKTtcblxuICAgICAgY3VzdG9tQ2xhc3NBcnIuZm9yRWFjaCgoZWw6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBlbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==