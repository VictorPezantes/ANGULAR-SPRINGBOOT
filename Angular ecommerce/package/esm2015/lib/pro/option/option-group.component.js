var OptionGroupComponent_1;
import { __decorate, __metadata, __param } from "tslib";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input, HostBinding, Optional, Inject, } from '@angular/core';
import { MDB_OPTION_GROUP, MDB_OPTION_PARENT } from './option.component';
let OptionGroupComponent = OptionGroupComponent_1 = class OptionGroupComponent {
    constructor(_parent) {
        this._parent = _parent;
        this.optionGroup = true;
        this._optionHeight = 48;
        this._disabled = false;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    ngOnInit() {
        if (this._parent && this._parent.visibleOptions && this._parent.optionHeight) {
            this._optionHeight = this._parent.optionHeight;
        }
    }
    ngAfterContentInit() { }
};
OptionGroupComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [MDB_OPTION_PARENT,] }] }
];
__decorate([
    HostBinding('class.mdb-option-group'),
    __metadata("design:type", Object)
], OptionGroupComponent.prototype, "optionGroup", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], OptionGroupComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], OptionGroupComponent.prototype, "disabled", null);
OptionGroupComponent = OptionGroupComponent_1 = __decorate([
    Component({
        selector: 'mdb-option-group',
        template: "<label\n  class=\"mdb-option-group-label\"\n  [style.height.px]=\"_optionHeight\"\n  [style.line-height.px]=\"_optionHeight\"\n  >{{ label }}</label\n>\n<ng-content select=\"mdb-select-option\"></ng-content>\n",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [{ provide: MDB_OPTION_GROUP, useExisting: OptionGroupComponent_1 }],
        styles: [".mdb-option-group{display:flex;flex-direction:column}.mdb-option-group-label{white-space:nowrap;text-overflow:ellipsis;color:#9e9e9e;padding-left:16px;padding-right:16px;margin:0;border-top:1px solid #eee}.mdb-option-group:first-child .mdb-option-group-label{border-top:0}"]
    }),
    __param(0, Optional()), __param(0, Inject(MDB_OPTION_PARENT)),
    __metadata("design:paramtypes", [Object])
], OptionGroupComponent);
export { OptionGroupComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vb3B0aW9uL29wdGlvbi1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULGlCQUFpQixFQUNqQix1QkFBdUIsRUFFdkIsS0FBSyxFQUNMLFdBQVcsRUFDWCxRQUFRLEVBQ1IsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBbUIsTUFBTSxvQkFBb0IsQ0FBQztBQVUxRixJQUFhLG9CQUFvQiw0QkFBakMsTUFBYSxvQkFBb0I7SUFnQi9CLFlBQTJELE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBZG5GLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBV1gsY0FBUyxHQUFHLEtBQUssQ0FBQztJQUU0RCxDQUFDO0lBUnZGLElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDO0lBS0QsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtZQUM1RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1NBQ2hEO0lBQ0gsQ0FBQztJQUVELGtCQUFrQixLQUFJLENBQUM7Q0FDeEIsQ0FBQTs7NENBVGMsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQkFBaUI7O0FBZGpEO0lBREMsV0FBVyxDQUFDLHdCQUF3QixDQUFDOzt5REFDbkI7QUFHVjtJQUFSLEtBQUssRUFBRTs7bURBQWU7QUFHdkI7SUFEQyxLQUFLLEVBQUU7OztvREFHUDtBQVZVLG9CQUFvQjtJQVJoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLDZOQUEwQztRQUUxQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsc0JBQW9CLEVBQUUsQ0FBQzs7S0FDOUUsQ0FBQztJQWlCYSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQTs7R0FoQnZDLG9CQUFvQixDQXlCaEM7U0F6Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBPcHRpb25hbCxcbiAgSW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1EQl9PUFRJT05fR1JPVVAsIE1EQl9PUFRJT05fUEFSRU5ULCBNZGJPcHRpb25QYXJlbnQgfSBmcm9tICcuL29wdGlvbi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItb3B0aW9uLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICdvcHRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9vcHRpb24tZ3JvdXAuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTURCX09QVElPTl9HUk9VUCwgdXNlRXhpc3Rpbmc6IE9wdGlvbkdyb3VwQ29tcG9uZW50IH1dLFxufSlcbmV4cG9ydCBjbGFzcyBPcHRpb25Hcm91cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubWRiLW9wdGlvbi1ncm91cCcpXG4gIG9wdGlvbkdyb3VwID0gdHJ1ZTtcbiAgX29wdGlvbkhlaWdodCA9IDQ4O1xuXG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChNREJfT1BUSU9OX1BBUkVOVCkgcHJpdmF0ZSBfcGFyZW50OiBNZGJPcHRpb25QYXJlbnQpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuX3BhcmVudCAmJiB0aGlzLl9wYXJlbnQudmlzaWJsZU9wdGlvbnMgJiYgdGhpcy5fcGFyZW50Lm9wdGlvbkhlaWdodCkge1xuICAgICAgdGhpcy5fb3B0aW9uSGVpZ2h0ID0gdGhpcy5fcGFyZW50Lm9wdGlvbkhlaWdodDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7fVxufVxuIl19