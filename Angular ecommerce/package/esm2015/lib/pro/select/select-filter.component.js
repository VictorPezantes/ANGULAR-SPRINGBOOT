import { __decorate, __metadata } from "tslib";
import { Component, OnInit, ElementRef, ViewChild, forwardRef, HostListener, EventEmitter, Output, Input, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export const MDB_SELECT_FILTER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef(() => MdbSelectFilterComponent),
    multi: true,
};
let MdbSelectFilterComponent = class MdbSelectFilterComponent {
    constructor(_el) {
        this._el = _el;
        this.placeholder = '';
        this.autocomplete = true;
        this.inputChange = new EventEmitter();
        this._onChange = () => { };
        this._onTouched = () => { };
    }
    _handleInput(event) {
        const valueChanged = this.value !== event.target.value;
        if (valueChanged) {
            this._onChange(event.target.value);
            this.inputChange.emit(event.target.value);
            this.value = event.target.value;
        }
    }
    ngOnInit() { }
    focus() {
        this.input.nativeElement.focus();
    }
    /** Control value accessor methods */
    setDisabledState(isDisabled) {
        this._el.nativeElement.disabled = isDisabled;
    }
    writeValue(value) {
        Promise.resolve(null).then(() => {
            this._el.nativeElement.value = value;
        });
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
};
MdbSelectFilterComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    ViewChild('input'),
    __metadata("design:type", ElementRef)
], MdbSelectFilterComponent.prototype, "input", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbSelectFilterComponent.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbSelectFilterComponent.prototype, "autocomplete", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MdbSelectFilterComponent.prototype, "inputChange", void 0);
__decorate([
    HostListener('input', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdbSelectFilterComponent.prototype, "_handleInput", null);
MdbSelectFilterComponent = __decorate([
    Component({
        selector: 'mdb-select-filter',
        template: "<div #filter class=\"mdb-select-filter md-form px-2\">\n  <input\n    #input\n    [placeholder]=\"placeholder\"\n    [attr.autocomplete]=\"autocomplete\"\n    [attr.role]=\"'searchbox'\"\n    type=\"text\"\n    class=\"mdb-select-filter-input search form-control w-100 d-block\"\n  />\n</div>\n",
        providers: [MDB_SELECT_FILTER_VALUE_ACCESSOR]
    }),
    __metadata("design:paramtypes", [ElementRef])
], MdbSelectFilterComponent);
export { MdbSelectFilterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3NlbGVjdC9zZWxlY3QtZmlsdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE1BQU0sQ0FBQyxNQUFNLGdDQUFnQyxHQUFRO0lBQ25ELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsa0RBQWtEO0lBQ2xELFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsd0JBQXdCLENBQUM7SUFDdkQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBT0YsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFvQm5DLFlBQW9CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBaEIxQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixpQkFBWSxHQUFHLElBQUksQ0FBQztRQUVWLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUEyQjVFLGNBQVMsR0FBeUIsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO1FBRTNDLGVBQVUsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFoQmdCLENBQUM7SUFWdkMsWUFBWSxDQUFDLEtBQVU7UUFDckIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUV2RCxJQUFJLFlBQVksRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUlELFFBQVEsS0FBSSxDQUFDO0lBRWIsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxxQ0FBcUM7SUFFckMsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUMvQyxDQUFDO0lBTUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzlCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBc0I7UUFDckMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQztDQUNGLENBQUE7O1lBL0IwQixVQUFVOztBQWxCZjtJQUFuQixTQUFTLENBQUMsT0FBTyxDQUFDOzhCQUFRLFVBQVU7dURBQUM7QUFFN0I7SUFBUixLQUFLLEVBQUU7OzZEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTs7OERBQXFCO0FBRW5CO0lBQVQsTUFBTSxFQUFFOzhCQUF1QixZQUFZOzZEQUFnQztBQUc1RTtJQURDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs0REFTakM7QUFsQlUsd0JBQXdCO0lBTHBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0Isa1RBQTZDO1FBQzdDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO0tBQzlDLENBQUM7cUNBcUJ5QixVQUFVO0dBcEJ4Qix3QkFBd0IsQ0FtRHBDO1NBbkRZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIGZvcndhcmRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgRXZlbnRFbWl0dGVyLFxuICBPdXRwdXQsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgY29uc3QgTURCX1NFTEVDVF9GSUxURVJfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE1kYlNlbGVjdEZpbHRlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNlbGVjdC1maWx0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc2VsZWN0LWZpbHRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVyczogW01EQl9TRUxFQ1RfRklMVEVSX1ZBTFVFX0FDQ0VTU09SXSxcbn0pXG5leHBvcnQgY2xhc3MgTWRiU2VsZWN0RmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgdmFsdWU6IGFueTtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnKSBpbnB1dDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBhdXRvY29tcGxldGUgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBpbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIF9oYW5kbGVJbnB1dChldmVudDogYW55KSB7XG4gICAgY29uc3QgdmFsdWVDaGFuZ2VkID0gdGhpcy52YWx1ZSAhPT0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKHZhbHVlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fb25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgZm9jdXMoKSB7XG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICAvKiogQ29udHJvbCB2YWx1ZSBhY2Nlc3NvciBtZXRob2RzICovXG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBfb25DaGFuZ2U6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuICAgIFByb21pc2UucmVzb2x2ZShudWxsKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxufVxuIl19