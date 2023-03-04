import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewChild, TemplateRef, ElementRef, OnInit, ChangeDetectionStrategy, } from '@angular/core';
import { FormGroup } from '@angular/forms';
let MdbStepComponent = class MdbStepComponent {
    constructor(el) {
        this.el = el;
        this.editable = true;
        this._isActive = false;
    }
    get isDone() {
        return this._isDone;
    }
    set isDone(value) {
        this._isDone = value;
    }
    get isWrong() {
        return this._isWrong;
    }
    set isWrong(value) {
        this._isWrong = value;
    }
    get isActive() {
        return this._isActive;
    }
    set isActive(value) {
        this._isActive = value;
    }
    _removeClasses() {
        this.isActive = false;
        this.isDone = false;
        this.isWrong = false;
    }
    reset() {
        if (this.stepForm) {
            this.stepForm.reset();
        }
        this._removeClasses();
    }
    ngOnInit() { }
};
MdbStepComponent.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    ViewChild(TemplateRef, { static: true }),
    __metadata("design:type", TemplateRef)
], MdbStepComponent.prototype, "content", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbStepComponent.prototype, "editable", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdbStepComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdbStepComponent.prototype, "label", void 0);
__decorate([
    Input(),
    __metadata("design:type", FormGroup)
], MdbStepComponent.prototype, "stepForm", void 0);
MdbStepComponent = __decorate([
    Component({
        selector: 'mdb-step',
        exportAs: 'mdbStep',
        template: '<ng-template><ng-content></ng-content></ng-template>',
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ElementRef])
], MdbStepComponent);
export { MdbStepComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3N0ZXBwZXIvc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsVUFBVSxFQUNWLE1BQU0sRUFDTix1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBUTNDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBTzNCLFlBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBTHhCLGFBQVEsR0FBRyxJQUFJLENBQUM7UUE2QmpCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUF4QlUsQ0FBQztJQUVyQyxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUdELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBYztRQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBR0QsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFHTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDdkI7UUFDRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFFBQVEsS0FBSSxDQUFDO0NBQ2QsQ0FBQTs7WUF4Q3dCLFVBQVU7O0FBTlM7SUFBekMsU0FBUyxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs4QkFBVSxXQUFXO2lEQUFNO0FBQzNEO0lBQVIsS0FBSyxFQUFFOztrREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7OzhDQUFjO0FBQ2I7SUFBUixLQUFLLEVBQUU7OytDQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7OEJBQVcsU0FBUztrREFBQztBQUxsQixnQkFBZ0I7SUFONUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLHNEQUFzRDtRQUNoRSxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO3FDQVF1QixVQUFVO0dBUHRCLGdCQUFnQixDQStDNUI7U0EvQ1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zdGVwJyxcbiAgZXhwb3J0QXM6ICdtZGJTdGVwJyxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvbmctdGVtcGxhdGU+JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlN0ZXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSBjb250ZW50OiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBASW5wdXQoKSBlZGl0YWJsZSA9IHRydWU7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcbiAgQElucHV0KCkgc3RlcEZvcm06IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgZ2V0IGlzRG9uZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNEb25lO1xuICB9XG4gIHNldCBpc0RvbmUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc0RvbmUgPSB2YWx1ZTtcbiAgfVxuICBwcml2YXRlIF9pc0RvbmU6IGJvb2xlYW47XG5cbiAgZ2V0IGlzV3JvbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzV3Jvbmc7XG4gIH1cbiAgc2V0IGlzV3JvbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pc1dyb25nID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfaXNXcm9uZzogYm9vbGVhbjtcblxuICBnZXQgaXNBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzQWN0aXZlO1xuICB9XG4gIHNldCBpc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzQWN0aXZlID0gdmFsdWU7XG4gIH1cbiAgcHJpdmF0ZSBfaXNBY3RpdmUgPSBmYWxzZTtcblxuICBwcml2YXRlIF9yZW1vdmVDbGFzc2VzKCkge1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmlzRG9uZSA9IGZhbHNlO1xuICAgIHRoaXMuaXNXcm9uZyA9IGZhbHNlO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgaWYgKHRoaXMuc3RlcEZvcm0pIHtcbiAgICAgIHRoaXMuc3RlcEZvcm0ucmVzZXQoKTtcbiAgICB9XG4gICAgdGhpcy5fcmVtb3ZlQ2xhc3NlcygpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19