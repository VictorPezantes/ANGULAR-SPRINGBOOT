import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
let MDBBadgeComponent = class MDBBadgeComponent {
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    ngOnInit() {
        this._renderer.addClass(this._el.nativeElement, 'badge');
        if (this.color) {
            const customClassArr = this.color.split(' ');
            customClassArr.forEach((el) => {
                this._renderer.addClass(this._el.nativeElement, el);
            });
        }
    }
};
MDBBadgeComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { MDBBadgeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWJhZGdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2JhZGdlL21kYi1iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBU3ZCLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBYzVCLFlBQW9CLEdBQWUsRUFBVSxTQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUFHLENBQUM7SUFFckUsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTdDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFVLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FDRixDQUFBOztZQVowQixVQUFVO1lBQXFCLFNBQVM7O0FBYnBCO0lBQTVDLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQzs7a0RBQWtCO0FBQ2pCO0lBQTVDLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQzs7a0RBQWtCO0FBQ2pCO0lBQTVDLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQzs7a0RBQWtCO0FBQ3BCO0lBQXpDLEtBQUssRUFBRSxFQUFFLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQzs7K0NBQWU7QUFDWDtJQUE1QyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMscUJBQXFCLENBQUM7O2tEQUFrQjtBQUNsQjtJQUEzQyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMsb0JBQW9CLENBQUM7O2lEQUFpQjtBQUNsQjtJQUF6QyxLQUFLLEVBQUUsRUFBRSxXQUFXLENBQUMsa0JBQWtCLENBQUM7OytDQUFlO0FBRS9DO0lBQVIsS0FBSyxFQUFFOztzREFBcUI7QUFFcEI7SUFBUixLQUFLLEVBQUU7O2dEQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7O2dEQUFlO0FBWlosaUJBQWlCO0lBUDdCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLDhGQUF5QztRQUV6QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztxQ0FleUIsVUFBVSxFQUFxQixTQUFTO0dBZHRELGlCQUFpQixDQTBCN0I7U0ExQlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItYmFkZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWRiLWJhZGdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYmFkZ2UtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1EQkJhZGdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1kZWZhdWx0JykgZGVmYXVsdDogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1wcmltYXJ5JykgcHJpbWFyeTogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1zdWNjZXNzJykgc3VjY2VzczogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1pbmZvJykgaW5mbzogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS13YXJuaW5nJykgd2FybmluZzogYm9vbGVhbjtcbiAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5iYWRnZS1kYW5nZXInKSBkYW5nZXI6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3MuYmFkZ2UtcGlsbCcpIHBpbGw6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgY2xhc3NJbnNpZGU6IHN0cmluZztcblxuICBASW5wdXQoKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQsICdiYWRnZScpO1xuICAgIGlmICh0aGlzLmNvbG9yKSB7XG4gICAgICBjb25zdCBjdXN0b21DbGFzc0FyciA9IHRoaXMuY29sb3Iuc3BsaXQoJyAnKTtcblxuICAgICAgY3VzdG9tQ2xhc3NBcnIuZm9yRWFjaCgoZWw6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCBlbCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==