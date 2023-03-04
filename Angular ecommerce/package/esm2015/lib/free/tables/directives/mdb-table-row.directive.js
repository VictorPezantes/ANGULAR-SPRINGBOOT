import { __decorate, __metadata } from "tslib";
import { Directive, Output, EventEmitter, OnInit, OnDestroy, ElementRef } from '@angular/core';
let MdbTableRowDirective = class MdbTableRowDirective {
    constructor(el) {
        this.el = el;
        this.rowCreated = new EventEmitter();
        this.rowRemoved = new EventEmitter();
    }
    ngOnInit() {
        this.rowCreated.emit({ created: true, el: this.el.nativeElement });
    }
    ngOnDestroy() {
        this.rowRemoved.emit({ removed: true });
    }
};
MdbTableRowDirective.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    Output(),
    __metadata("design:type", Object)
], MdbTableRowDirective.prototype, "rowCreated", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MdbTableRowDirective.prototype, "rowRemoved", void 0);
MdbTableRowDirective = __decorate([
    Directive({
        selector: '[mdbTableRow]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], MdbTableRowDirective);
export { MdbTableRowDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXRhYmxlLXJvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS90YWJsZXMvZGlyZWN0aXZlcy9tZGItdGFibGUtcm93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSy9GLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBSy9CLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBSHhCLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3JDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBRy9DLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Q0FFRixDQUFBOztZQVh5QixVQUFVOztBQUh4QjtJQUFULE1BQU0sRUFBRTs7d0RBQXNDO0FBQ3JDO0lBQVQsTUFBTSxFQUFFOzt3REFBc0M7QUFIcEMsb0JBQW9CO0lBSGhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO0tBQzFCLENBQUM7cUNBTXdCLFVBQVU7R0FMdkIsb0JBQW9CLENBZ0JoQztTQWhCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVGFibGVSb3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBNZGJUYWJsZVJvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBAT3V0cHV0KCkgcm93Q3JlYXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcm93UmVtb3ZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm93Q3JlYXRlZC5lbWl0KHsgY3JlYXRlZDogdHJ1ZSwgZWw6IHRoaXMuZWwubmF0aXZlRWxlbWVudCB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMucm93UmVtb3ZlZC5lbWl0KHsgcmVtb3ZlZDogdHJ1ZSB9KTtcbiAgfVxuXG59XG4iXX0=