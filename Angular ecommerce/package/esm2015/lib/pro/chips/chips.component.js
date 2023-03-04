import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BACKSPACE, DELETE } from '../../free/utils/keyboard-navigation';
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    // tslint:disable-next-line: no-use-before-declare
    useExisting: forwardRef(() => MaterialChipsComponent),
    multi: true,
};
let MaterialChipsComponent = class MaterialChipsComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.placeholder = '';
        this.isTagsFocused = false;
        this.keyCodes = {
            backspace: BACKSPACE,
            delete: DELETE,
        };
        this.tagsfocusedChange = new EventEmitter();
        this.labelsChange = new EventEmitter();
        this.onTouchedCallback = this.noop;
        this.onChangeCallback = this.noop;
        this.onTouchedCallback =
            this.onTouchedCallback === undefined ? this.noop : this.onTouchedCallback;
        this.onChangeCallback = this.onChangeCallback === undefined ? this.noop : this.onChangeCallback;
    }
    get tagsfocused() {
        return this.isTagsFocused;
    }
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    removeValue(value) {
        const index = this.values.indexOf(value, 0);
        if (index !== undefined) {
            this.values.splice(index, 1);
            this.labelsChange.emit(this.values);
        }
    }
    handleKeydown(event) {
        if (event.keyCode === this.keyCodes.backspace || event.keyCode === this.keyCodes.delete) {
            if (event.target.value === '') {
                this._removeLast();
                event.preventDefault();
            }
        }
    }
    _removeLast() {
        const lastChip = this.values[this.values.length];
        const index = this.values.indexOf(lastChip);
        this.values.splice(index, 1);
        this.labelsChange.emit(this.values);
        if (this.values.length === 0) {
            setTimeout(() => {
                this.initialInput.nativeElement.focus();
            }, 0);
        }
    }
    addValue(value, event) {
        event.preventDefault();
        if (!value || value.trim() === '') {
            return;
        }
        this.values.push(value);
        this.labelsChange.emit(this.values);
        this.labelToAdd = '';
        if (this.values.length === 1) {
            setTimeout(() => {
                this.chipsInput.nativeElement.focus();
            }, 0);
        }
    }
    writeValue(value) {
        if (value !== this.values) {
            this.values = value;
        }
        this._cdRef.markForCheck();
    }
    onFocus() {
        this.focused = 'md-focused';
        this.isTagsFocused = true;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    }
    focusOutFunction() {
        this.focused = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    }
};
MaterialChipsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
__decorate([
    ViewChild('box'),
    __metadata("design:type", ElementRef)
], MaterialChipsComponent.prototype, "chipsInput", void 0);
__decorate([
    ViewChild('tbox'),
    __metadata("design:type", ElementRef)
], MaterialChipsComponent.prototype, "initialInput", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MaterialChipsComponent.prototype, "placeholder", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MaterialChipsComponent.prototype, "tagsfocusedChange", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], MaterialChipsComponent.prototype, "labelsChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MaterialChipsComponent.prototype, "tagsfocused", null);
MaterialChipsComponent = __decorate([
    Component({
        selector: 'mdb-material-chips',
        template: "<div *ngIf=\"values && values.length\" class=\"md-chip-list\" [ngClass]=\"focused\" #chipComponent>\n  <span *ngFor=\"let value of values\" class=\"md-chip\" selected>\n    {{ value }} <i class=\"close fas fa-times\" aria-hidden=\"true\" (click)=\"removeValue(value)\"></i>\n  </span>\n\n  <span>\n    <input\n      (blur)=\"addValue(box.value, $event)\"\n      [(ngModel)]=\"labelToAdd\"\n      (keyup.enter)=\"addValue(box.value, $event)\"\n      (focus)=\"onFocus()\"\n      (focusout)=\"focusOutFunction()\"\n      (keydown)=\"handleKeydown($event)\"\n      #box\n    />\n  </span>\n</div>\n<div *ngIf=\"!values || !values.length\">\n  <input\n    (blur)=\"addValue(tbox.value, $event)\"\n    class=\"md-chips-input\"\n    placeholder=\"{{ placeholder }}\"\n    #tbox\n    (keyup.enter)=\"addValue(tbox.value, $event)\"\n  />\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], MaterialChipsComponent);
export { MaterialChipsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9jaGlwcy9jaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV6RSxNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FBUTtJQUN0RCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLGtEQUFrRDtJQUNsRCxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDO0lBQ3JELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQVNGLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBa0NqQyxZQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQS9CcEMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFHMUIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFPdEIsYUFBUSxHQUFHO1lBQ1QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO1FBRVEsc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2QyxpQkFBWSxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO1FBT3RFLHNCQUFpQixHQUFlLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDMUMscUJBQWdCLEdBQXFCLElBQUksQ0FBQyxJQUFJLENBQUM7UUFRckQsSUFBSSxDQUFDLGlCQUFpQjtZQUNwQixJQUFJLENBQUMsaUJBQWlCLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUM7UUFDNUUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNsRyxDQUFDO0lBaEJELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBSUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFPO1FBQ3ZCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQU9ELFdBQVcsQ0FBQyxLQUFhO1FBQ3ZCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsS0FBVTtRQUN0QixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUN2RixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDeEI7U0FDRjtJQUNILENBQUM7SUFFTyxXQUFXO1FBQ2pCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWEsRUFBRSxLQUFVO1FBQ2hDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDakMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXJCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzVCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDeEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1A7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWU7UUFDeEIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBQ0QsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNGLENBQUE7O1lBdkU2QixpQkFBaUI7O0FBakMzQjtJQUFqQixTQUFTLENBQUMsS0FBSyxDQUFDOzhCQUFhLFVBQVU7MERBQUM7QUFDdEI7SUFBbEIsU0FBUyxDQUFDLE1BQU0sQ0FBQzs4QkFBZSxVQUFVOzREQUFDO0FBQ25DO0lBQVIsS0FBSyxFQUFFOzsyREFBa0I7QUFlaEI7SUFBVCxNQUFNLEVBQUU7O2lFQUF3QztBQUN2QztJQUFULE1BQU0sRUFBRTs4QkFBZSxZQUFZOzREQUEwQztBQUc5RTtJQURDLEtBQUssRUFBRTs7O3lEQUdQO0FBeEJVLHNCQUFzQjtJQVBsQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLG0xQkFBbUM7UUFDbkMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7UUFDaEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztxQ0FtQzRCLGlCQUFpQjtHQWxDbEMsc0JBQXNCLENBeUdsQztTQXpHWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgZm9yd2FyZFJlZixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCQUNLU1BBQ0UsIERFTEVURSB9IGZyb20gJy4uLy4uL2ZyZWUvdXRpbHMva2V5Ym9hcmQtbmF2aWdhdGlvbic7XG5cbmV4cG9ydCBjb25zdCBDVVNUT01fSU5QVVRfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmVcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWF0ZXJpYWxDaGlwc0NvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLW1hdGVyaWFsLWNoaXBzJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVyczogW0NVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQ2hpcHNDb21wb25lbnQge1xuICBAVmlld0NoaWxkKCdib3gnKSBjaGlwc0lucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0Ym94JykgaW5pdGlhbElucHV0OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xuXG4gIGFkZEFyZWFEaXNwbGF5ZWQ6IGJvb2xlYW47XG4gIGlzVGFnc0ZvY3VzZWQgPSBmYWxzZTtcbiAgdmFsdWVzOiBzdHJpbmdbXTtcbiAgbGFiZWxUb0FkZDogc3RyaW5nO1xuICBmb2N1c2VkOiBzdHJpbmc7XG4gIHNlbGVjdGVkOiBzdHJpbmc7XG4gIG5vb3A6IGFueTtcblxuICBrZXlDb2RlcyA9IHtcbiAgICBiYWNrc3BhY2U6IEJBQ0tTUEFDRSxcbiAgICBkZWxldGU6IERFTEVURSxcbiAgfTtcblxuICBAT3V0cHV0KCkgdGFnc2ZvY3VzZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsYWJlbHNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB0YWdzZm9jdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1RhZ3NGb2N1c2VkO1xuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKCkgPT4gdm9pZCA9IHRoaXMubm9vcDtcbiAgcHJpdmF0ZSBvbkNoYW5nZUNhbGxiYWNrOiAoXzogYW55KSA9PiB2b2lkID0gdGhpcy5ub29wO1xuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpIHtcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSBmbjtcbiAgfVxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KSB7XG4gICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9IGZuO1xuICB9XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sgPVxuICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayA9PT0gdW5kZWZpbmVkID8gdGhpcy5ub29wIDogdGhpcy5vblRvdWNoZWRDYWxsYmFjaztcbiAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPSB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sgPT09IHVuZGVmaW5lZCA/IHRoaXMubm9vcCA6IHRoaXMub25DaGFuZ2VDYWxsYmFjaztcbiAgfVxuXG4gIHJlbW92ZVZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudmFsdWVzLmluZGV4T2YodmFsdWUsIDApO1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5sYWJlbHNDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlcyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5ZG93bihldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IHRoaXMua2V5Q29kZXMuYmFja3NwYWNlIHx8IGV2ZW50LmtleUNvZGUgPT09IHRoaXMua2V5Q29kZXMuZGVsZXRlKSB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSAnJykge1xuICAgICAgICB0aGlzLl9yZW1vdmVMYXN0KCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlTGFzdCgpIHtcbiAgICBjb25zdCBsYXN0Q2hpcCA9IHRoaXMudmFsdWVzW3RoaXMudmFsdWVzLmxlbmd0aF07XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnZhbHVlcy5pbmRleE9mKGxhc3RDaGlwKTtcblxuICAgIHRoaXMudmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5sYWJlbHNDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlcyk7XG5cbiAgICBpZiAodGhpcy52YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5pbml0aWFsSW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVmFsdWUodmFsdWU6IHN0cmluZywgZXZlbnQ6IGFueSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudmFsdWVzLnB1c2godmFsdWUpO1xuICAgIHRoaXMubGFiZWxzQ2hhbmdlLmVtaXQodGhpcy52YWx1ZXMpO1xuICAgIHRoaXMubGFiZWxUb0FkZCA9ICcnO1xuXG4gICAgaWYgKHRoaXMudmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hpcHNJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmdbXSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZXMpIHtcbiAgICAgIHRoaXMudmFsdWVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBvbkZvY3VzKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9ICdtZC1mb2N1c2VkJztcbiAgICB0aGlzLmlzVGFnc0ZvY3VzZWQgPSB0cnVlO1xuICAgIHRoaXMudGFnc2ZvY3VzZWRDaGFuZ2UuZW1pdCh0aGlzLmlzVGFnc0ZvY3VzZWQpO1xuICB9XG4gIGZvY3VzT3V0RnVuY3Rpb24oKSB7XG4gICAgdGhpcy5mb2N1c2VkID0gJyc7XG4gICAgdGhpcy5pc1RhZ3NGb2N1c2VkID0gZmFsc2U7XG4gICAgdGhpcy50YWdzZm9jdXNlZENoYW5nZS5lbWl0KHRoaXMuaXNUYWdzRm9jdXNlZCk7XG4gIH1cbn1cbiJdfQ==