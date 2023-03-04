import { __decorate, __metadata, __param } from "tslib";
import { Component, ElementRef, Input, HostListener, InjectionToken, Optional, Inject, OnInit, HostBinding, ViewEncapsulation, ChangeDetectorRef, EventEmitter, Output, } from '@angular/core';
import { Subject } from 'rxjs';
export const MDB_OPTION_PARENT = new InjectionToken('MDB_OPTION_PARENT');
export const MDB_OPTION_GROUP = new InjectionToken('MDB_OPTION_GROUP');
let OptionComponent = class OptionComponent {
    constructor(_el, _cdRef, _parent, group) {
        this._el = _el;
        this._cdRef = _cdRef;
        this._parent = _parent;
        this.group = group;
        this.disabled = false;
        this.selectionChange = new EventEmitter();
        this._selected = false;
        this._active = false;
        this._multiple = false;
        this.clicked = false;
        this.clickSource = new Subject();
        this.click$ = this.clickSource.asObservable();
        this.option = true;
        this.clicked = false;
    }
    get active() {
        return this._active;
    }
    get selected() {
        return this._selected;
    }
    get optionHeight() {
        return this._optionHeight;
    }
    get role() {
        return 'option';
    }
    get isDisabled() {
        return this.disabled ? true : false;
    }
    get isSelected() {
        return this.selected;
    }
    onClick() {
        this.clickSource.next(this);
    }
    get label() {
        return this._el.nativeElement.textContent;
    }
    getLabel() {
        return this._el.nativeElement.textContent;
    }
    get offsetHeight() {
        return this._el.nativeElement.offsetHeight;
    }
    ngOnInit() {
        if (this._parent && this._parent.visibleOptions && this._parent.optionHeight) {
            this._optionHeight = this._parent.optionHeight;
        }
        if (this._parent && this._parent.multiple) {
            this._multiple = true;
        }
    }
    select() {
        if (!this._selected) {
            this._selected = this._multiple ? !this._selected : true;
            this.selectionChange.emit(this);
            this._cdRef.markForCheck();
        }
    }
    deselect() {
        if (this._selected) {
            this._selected = false;
            this.selectionChange.emit(this);
            this._cdRef.markForCheck();
        }
    }
    setActiveStyles() {
        if (!this._active) {
            this._active = true;
            this._cdRef.markForCheck();
        }
    }
    setInactiveStyles() {
        if (this._active) {
            this._active = false;
            this._cdRef.markForCheck();
        }
    }
};
OptionComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MDB_OPTION_PARENT,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MDB_OPTION_GROUP,] }] }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], OptionComponent.prototype, "value", void 0);
__decorate([
    HostBinding('class.disabled'),
    Input(),
    __metadata("design:type", Object)
], OptionComponent.prototype, "disabled", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], OptionComponent.prototype, "selectionChange", void 0);
__decorate([
    HostBinding('class.mdb-option'),
    __metadata("design:type", Object)
], OptionComponent.prototype, "option", void 0);
__decorate([
    HostBinding('class.active'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], OptionComponent.prototype, "active", null);
__decorate([
    HostBinding('class.selected'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], OptionComponent.prototype, "selected", null);
__decorate([
    HostBinding('style.height.px'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], OptionComponent.prototype, "optionHeight", null);
__decorate([
    HostBinding('attr.role'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], OptionComponent.prototype, "role", null);
__decorate([
    HostBinding('attr.aria-disabled'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], OptionComponent.prototype, "isDisabled", null);
__decorate([
    HostBinding('attr.aria-selected'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], OptionComponent.prototype, "isSelected", null);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OptionComponent.prototype, "onClick", null);
OptionComponent = __decorate([
    Component({
        selector: 'mdb-select-option',
        template: "<span class=\"mdb-option-checkbox-wrapper\" *ngIf=\"_multiple\">\n  <input type=\"checkbox\" [checked]=\"selected\" class=\"form-check-input mdb-option-checkbox\" />\n  <label class=\"mdb-option-checkbox-label\"></label>\n</span>\n<span class=\"mdb-option-text\" ngClass=\"{'active', active}\">\n  <ng-content></ng-content>\n</span>\n",
        encapsulation: ViewEncapsulation.None,
        styles: [".mdb-option{width:100%;height:48px;white-space:nowrap;text-overflow:ellipsis;cursor:pointer;display:flex;flex-direction:row;align-items:center;color:rgba(0,0,0,.87);padding-left:16px;padding-right:16px;font-size:1rem;font-weight:400;background-color:transparent}.mdb-option.active,.mdb-option.selected.active,.mdb-option:hover{background-color:#ddd}.mdb-option.selected.disabled{cursor:default;color:#9e9e9e;background-color:transparent}.mdb-option.selected{background-color:#eee}.mdb-option.disabled{cursor:default;color:#9e9e9e}.mdb-option.mdb-select-all-option.selected.active{background-color:#ddd}.mdb-option.mdb-select-all-option.selected{background-color:#fff}.mdb-option-label{display:flex;align-items:center;justify-content:space-between;width:100%;height:37px;line-height:37px}.mdb-option-checkbox-label{height:10px!important;top:0!important;margin-top:-2px!important}.mdb-option-text{width:100%}.mdb-option-text.active{background-color:#00f}.mdb-option-icon{height:34px;width:34px}[type=checkbox]:checked,[type=checkbox]:not(:checked){position:absolute;opacity:0;pointer-events:none}.form-check-input[type=checkbox]+label,label.btn input[type=checkbox]+label{position:relative;padding-left:35px;cursor:pointer;display:inline-block;height:1.5625rem;line-height:1.5625rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.form-check-input[type=checkbox]+label:before,.form-check-input[type=checkbox]:not(.filled-in)+label:after,label.btn input[type=checkbox]+label:before,label.btn input[type=checkbox]:not(.filled-in)+label:after{content:\"\";position:absolute;top:0;left:0;width:18px;height:18px;z-index:0;border:2px solid #8a8a8a;border-radius:1px;margin-top:3px;transition:.2s}.form-check-input[type=checkbox]:not(.filled-in)+label:after,label.btn input[type=checkbox]:not(.filled-in)+label:after{border:0;transform:scale(0)}.form-check-input[type=checkbox]:not(:checked):disabled+label:before,label.btn input[type=checkbox]:not(:checked):disabled+label:before{border:none;background-color:#bdbdbd}.form-check-input[type=checkbox]:checked+label:before,label.btn input[type=checkbox]:checked+label:before{top:-4px;left:-5px;width:12px;height:1.375rem;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #4285f4;border-bottom:2px solid #4285f4;transform:rotate(40deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:100% 100%}.form-check-input[type=checkbox]:checked:disabled+label:before,label.btn input[type=checkbox]:checked:disabled+label:before{border-right:2px solid #bdbdbd;border-bottom:2px solid #bdbdbd}.form-check-input[type=checkbox]:indeterminate+label:before,label.btn input[type=checkbox]:indeterminate+label:before{top:-11px;left:-12px;width:10px;height:1.375rem;border-top:none;border-left:none;border-right:2px solid #4285f4;border-bottom:none;transform:rotate(90deg);-webkit-backface-visibility:hidden;backface-visibility:hidden;transform-origin:100% 100%}.form-check-input[type=checkbox]:indeterminate:disabled+label:before,label.btn input[type=checkbox]:indeterminate:disabled+label:before{border-right:2px solid rgba(0,0,0,.46);background-color:transparent}.form-check-input[type=checkbox].filled-in+label:after,label.btn input[type=checkbox].filled-in+label:after{border-radius:.125rem}.form-check-input[type=checkbox].filled-in+label:after,.form-check-input[type=checkbox].filled-in+label:before,label.btn input[type=checkbox].filled-in+label:after,label.btn input[type=checkbox].filled-in+label:before{content:\"\";left:0;position:absolute;transition:border .25s,background-color .25s,width .2s .1s,height .2s .1s,top .2s .1s,left .2s .1s;z-index:1}.form-check-input[type=checkbox].filled-in:not(:checked)+label:before,label.btn input[type=checkbox].filled-in:not(:checked)+label:before{width:0;height:0;border:3px solid transparent;left:6px;top:10px;transform:rotateZ(37deg);transform-origin:100% 100%}.form-check-input[type=checkbox].filled-in:not(:checked)+label:after,label.btn input[type=checkbox].filled-in:not(:checked)+label:after{height:20px;width:20px;background-color:transparent;border:2px solid #5a5a5a;top:0;z-index:0}.form-check-input[type=checkbox].filled-in:checked+label:before,label.btn input[type=checkbox].filled-in:checked+label:before{top:0;left:1px;width:8px;height:13px;border-top:2px solid transparent;border-left:2px solid transparent;border-right:2px solid #fff;border-bottom:2px solid #fff;transform:rotateZ(37deg);transform-origin:100% 100%}.form-check-input[type=checkbox].filled-in:checked+label:after,label.btn input[type=checkbox].filled-in:checked+label:after{top:0;width:20px;height:20px;border:2px solid #a6c;background-color:#a6c;z-index:0}.form-check-input[type=checkbox].filled-in.filled-in-danger:checked+label:after,label.btn input[type=checkbox].filled-in.filled-in-danger:checked+label:after{background-color:#f44336;border-color:#f44336}.form-check-input[type=checkbox]:disabled:not(:checked)+label:before,label.btn input[type=checkbox]:disabled:not(:checked)+label:before{background-color:#bdbdbd;border-color:#bdbdbd}.form-check-input[type=checkbox]:disabled:not(:checked)+label:after,label.btn input[type=checkbox]:disabled:not(:checked)+label:after{border-color:#bdbdbd;background-color:#bdbdbd}.form-check-input[type=checkbox]:disabled:checked+label:before,label.btn input[type=checkbox]:disabled:checked+label:before{background-color:transparent}.form-check-input[type=checkbox]:disabled:checked+label:after,label.btn input[type=checkbox]:disabled:checked+label:after{background-color:#bdbdbd;border-color:#bdbdbd}"]
    }),
    __param(2, Optional()), __param(2, Inject(MDB_OPTION_PARENT)),
    __param(3, Optional()), __param(3, Inject(MDB_OPTION_GROUP)),
    __metadata("design:paramtypes", [ElementRef,
        ChangeDetectorRef, Object, Object])
], OptionComponent);
export { OptionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vb3B0aW9uL29wdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxZQUFZLEVBQ1osY0FBYyxFQUNkLFFBQVEsRUFDUixNQUFNLEVBQ04sTUFBTSxFQUNOLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsaUJBQWlCLEVBQ2pCLFlBQVksRUFDWixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQztBQWEzQyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLGNBQWMsQ0FBa0IsbUJBQW1CLENBQUMsQ0FBQztBQUUxRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLGNBQWMsQ0FBdUIsa0JBQWtCLENBQUMsQ0FBQztBQVE3RixJQUFhLGVBQWUsR0FBNUIsTUFBYSxlQUFlO0lBb0IxQixZQUNVLEdBQWUsRUFDZixNQUF5QixFQUNjLE9BQXdCLEVBQzFCLEtBQXFCO1FBSDFELFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUNjLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBbkJwRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRUUsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUlqRSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDeEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGdCQUFXLEdBQTZCLElBQUksT0FBTyxFQUFtQixDQUFDO1FBQ3ZFLFdB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aEMsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQkFBaUI7NENBQ3BDLFFBQVEsWUFBSSxNQUFNLFNBQUMsZ0JBQWdCOztBQXZCN0I7SUFBUixLQUFLLEVBQUU7OzhDQUFZO0FBSXBCO0lBRkMsV0FBVyxDQUFDLGdCQUFnQixDQUFDO0lBQzdCLEtBQUssRUFBRTs7aURBQ1M7QUFFUDtJQUFULE1BQU0sRUFBRTs7d0RBQWdFO0FBdUJ6RTtJQURDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQzs7K0NBQ2xCO0FBR2Q7SUFEQyxXQUFXLENBQUMsY0FBYyxDQUFDOzs7NkNBRzNCO0FBR0Q7SUFEQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7OzsrQ0FHN0I7QUFHRDtJQURDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQzs7O21EQUc5QjtBQUdEO0lBREMsV0FBVyxDQUFDLFdBQVcsQ0FBQzs7OzJDQUd4QjtBQUdEO0lBREMsV0FBVyxDQUFDLG9CQUFvQixDQUFDOzs7aURBR2pDO0FBR0Q7SUFEQyxXQUFXLENBQUMsb0JBQW9CLENBQUM7OztpREFHakM7QUFHRDtJQURDLFlBQVksQ0FBQyxPQUFPLENBQUM7Ozs7OENBR3JCO0FBakVVLGVBQWU7SUFOM0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QiwwVkFBb0M7UUFFcEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7SUF3QkcsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDckMsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7cUNBSHhCLFVBQVU7UUFDUCxpQkFBaUI7R0F0QnhCLGVBQWUsQ0FzSDNCO1NBdEhZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIEluamVjdGlvblRva2VuLFxuICBPcHRpb25hbCxcbiAgSW5qZWN0LFxuICBPbkluaXQsXG4gIEhvc3RCaW5kaW5nLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBNZGJPcHRpb25QYXJlbnQge1xuICBvcHRpb25IZWlnaHQ6IG51bWJlcjtcbiAgdmlzaWJsZU9wdGlvbnM6IG51bWJlcjtcbiAgbXVsdGlwbGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWRiT3B0aW9uR3JvdXAge1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBNREJfT1BUSU9OX1BBUkVOVCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxNZGJPcHRpb25QYXJlbnQ+KCdNREJfT1BUSU9OX1BBUkVOVCcpO1xuXG5leHBvcnQgY29uc3QgTURCX09QVElPTl9HUk9VUCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxPcHRpb25Hcm91cENvbXBvbmVudD4oJ01EQl9PUFRJT05fR1JPVVAnKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNlbGVjdC1vcHRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ29wdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL29wdGlvbi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBPcHRpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB2YWx1ZTogYW55O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKVxuICBASW5wdXQoKVxuICBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3Rpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE9wdGlvbkNvbXBvbmVudD4oKTtcblxuICBfb3B0aW9uSGVpZ2h0OiBudW1iZXI7XG5cbiAgcHJpdmF0ZSBfc2VsZWN0ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XG4gIF9tdWx0aXBsZSA9IGZhbHNlO1xuXG4gIGNsaWNrZWQgPSBmYWxzZTtcblxuICBjbGlja1NvdXJjZTogU3ViamVjdDxPcHRpb25Db21wb25lbnQ+ID0gbmV3IFN1YmplY3Q8T3B0aW9uQ29tcG9uZW50PigpO1xuICBjbGljayQ6IE9ic2VydmFibGU8T3B0aW9uQ29tcG9uZW50PiA9IHRoaXMuY2xpY2tTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTURCX09QVElPTl9QQVJFTlQpIHByaXZhdGUgX3BhcmVudDogTWRiT3B0aW9uUGFyZW50LFxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTURCX09QVElPTl9HUk9VUCkgcHVibGljIGdyb3VwOiBNZGJPcHRpb25Hcm91cFxuICApIHtcbiAgICB0aGlzLmNsaWNrZWQgPSBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWRiLW9wdGlvbicpXG4gIG9wdGlvbiA9IHRydWU7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxuICBnZXQgYWN0aXZlKCkge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJylcbiAgZ2V0IHNlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUuaGVpZ2h0LnB4JylcbiAgZ2V0IG9wdGlvbkhlaWdodCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25IZWlnaHQ7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIGdldCByb2xlKCkge1xuICAgIHJldHVybiAnb3B0aW9uJztcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRpc2FibGVkJylcbiAgZ2V0IGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1zZWxlY3RlZCcpXG4gIGdldCBpc1NlbGVjdGVkKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCkge1xuICAgIHRoaXMuY2xpY2tTb3VyY2UubmV4dCh0aGlzKTtcbiAgfVxuXG4gIGdldCBsYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuICB9XG5cbiAgZ2V0IG9mZnNldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5fcGFyZW50ICYmIHRoaXMuX3BhcmVudC52aXNpYmxlT3B0aW9ucyAmJiB0aGlzLl9wYXJlbnQub3B0aW9uSGVpZ2h0KSB7XG4gICAgICB0aGlzLl9vcHRpb25IZWlnaHQgPSB0aGlzLl9wYXJlbnQub3B0aW9uSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgdGhpcy5fcGFyZW50Lm11bHRpcGxlKSB7XG4gICAgICB0aGlzLl9tdWx0aXBsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmICghdGhpcy5fc2VsZWN0ZWQpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fbXVsdGlwbGUgPyAhdGhpcy5fc2VsZWN0ZWQgOiB0cnVlO1xuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2UuZW1pdCh0aGlzKTtcbiAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIGRlc2VsZWN0KCkge1xuICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcyk7XG4gICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBzZXRBY3RpdmVTdHlsZXMoKSB7XG4gICAgaWYgKCF0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBzZXRJbmFjdGl2ZVN0eWxlcygpIHtcbiAgICBpZiAodGhpcy5fYWN0aXZlKSB7XG4gICAgICB0aGlzLl9hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxufVxuIl19