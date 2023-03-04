import { __decorate, __metadata } from "tslib";
import { Component, HostBinding, Input, ElementRef } from '@angular/core';
let SlideComponent = class SlideComponent {
    constructor(el) {
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        /** Wraps element by appropriate CSS classes */
        this.el = null;
        this.el = el;
    }
};
SlideComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    HostBinding('class.active'),
    Input(),
    __metadata("design:type", Boolean)
], SlideComponent.prototype, "active", void 0);
__decorate([
    HostBinding('class.animated'),
    __metadata("design:type", Object)
], SlideComponent.prototype, "animated", void 0);
__decorate([
    HostBinding('class.carousel-item-next'),
    __metadata("design:type", Object)
], SlideComponent.prototype, "directionNext", void 0);
__decorate([
    HostBinding('class.carousel-item-left'),
    __metadata("design:type", Object)
], SlideComponent.prototype, "directionLeft", void 0);
__decorate([
    HostBinding('class.carousel-item-prev'),
    __metadata("design:type", Object)
], SlideComponent.prototype, "directionPrev", void 0);
__decorate([
    HostBinding('class.carousel-item-right'),
    __metadata("design:type", Object)
], SlideComponent.prototype, "directionRight", void 0);
__decorate([
    HostBinding('class.carousel-item'),
    __metadata("design:type", Object)
], SlideComponent.prototype, "el", void 0);
SlideComponent = __decorate([
    Component({
        selector: 'mdb-slide, mdb-carousel-item',
        template: `
    <ng-content></ng-content>
  `
    }),
    __metadata("design:paramtypes", [ElementRef])
], SlideComponent);
export { SlideComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2Fyb3VzZWwvc2xpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTFFLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFnQnpCLFlBQW1CLEVBQWM7UUFYRixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ1Asa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDckIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDakUsK0NBQStDO1FBSXhDLE9BQUUsR0FBcUIsSUFBSSxDQUFDO1FBR2pDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQ2YsQ0FBQztDQUNGLENBQUE7O1lBSHdCLFVBQVU7O0FBWmpDO0lBRkMsV0FBVyxDQUFDLGNBQWMsQ0FBQztJQUMzQixLQUFLLEVBQUU7OzhDQUNlO0FBQ1E7SUFBOUIsV0FBVyxDQUFDLGdCQUFnQixDQUFDOztnREFBa0I7QUFDUDtJQUF4QyxXQUFXLENBQUMsMEJBQTBCLENBQUM7O3FEQUF1QjtBQUN0QjtJQUF4QyxXQUFXLENBQUMsMEJBQTBCLENBQUM7O3FEQUF1QjtBQUN0QjtJQUF4QyxXQUFXLENBQUMsMEJBQTBCLENBQUM7O3FEQUF1QjtBQUNyQjtJQUF6QyxXQUFXLENBQUMsMkJBQTJCLENBQUM7O3NEQUF3QjtBQUtqRTtJQUhDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQzs7MENBR0E7QUFkeEIsY0FBYztJQU4xQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsOEJBQThCO1FBQ3hDLFFBQVEsRUFBRTs7R0FFVDtLQUNGLENBQUM7cUNBaUJ1QixVQUFVO0dBaEJ0QixjQUFjLENBbUIxQjtTQW5CWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNsaWRlLCBtZGItY2Fyb3VzZWwtaXRlbScsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZUNvbXBvbmVudCB7XG4gIC8qKiBJcyBjdXJyZW50IHNsaWRlIGFjdGl2ZSAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBhY3RpdmU6IGJvb2xlYW47XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW5pbWF0ZWQnKSBhbmltYXRlZCA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWl0ZW0tbmV4dCcpIGRpcmVjdGlvbk5leHQgPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1pdGVtLWxlZnQnKSBkaXJlY3Rpb25MZWZ0ID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbS1wcmV2JykgZGlyZWN0aW9uUHJldiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWl0ZW0tcmlnaHQnKSBkaXJlY3Rpb25SaWdodCA9IGZhbHNlO1xuICAvKiogV3JhcHMgZWxlbWVudCBieSBhcHByb3ByaWF0ZSBDU1MgY2xhc3NlcyAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWl0ZW0nKVxuXG4gIC8qKiBMaW5rIHRvIFBhcmVudChjb250YWluZXItY29sbGVjdGlvbikgY29tcG9uZW50ICovXG4gIHB1YmxpYyBlbDogRWxlbWVudFJlZiB8IGFueSA9IG51bGw7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmKSB7XG4gICAgdGhpcy5lbCA9IGVsO1xuICB9XG59XG4iXX0=