import { __decorate, __metadata } from "tslib";
import { Directive, HostListener, HostBinding } from '@angular/core';
let MdbCvvDirective = class MdbCvvDirective {
    constructor() {
        this.maxLength = '4';
    }
    onInput(event) {
        this.formatInput(event);
    }
    formatInput(event) {
        const input = event.target.value;
        const newValue = this.getFormattedValue(input);
        event.target.value = newValue;
    }
    getFormattedValue(value) {
        value = this.removeNonDigits(value);
        return value;
    }
    removeNonDigits(value) {
        return value.replace(/\D/g, '');
    }
};
__decorate([
    HostBinding('attr.maxLength'),
    __metadata("design:type", Object)
], MdbCvvDirective.prototype, "maxLength", void 0);
__decorate([
    HostListener('input', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MdbCvvDirective.prototype, "onInput", null);
MdbCvvDirective = __decorate([
    Directive({
        selector: '[mdbCvv]',
    })
], MdbCvvDirective);
export { MdbCvvDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWN2di5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2F1dG8tZm9ybWF0L21kYi1jdnYuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLckUsSUFBYSxlQUFlLEdBQTVCLE1BQWEsZUFBZTtJQUE1QjtRQUVpQyxjQUFTLEdBQUcsR0FBRyxDQUFDO0lBcUJqRCxDQUFDO0lBbEJDLE9BQU8sQ0FBQyxLQUFVO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxLQUFVO1FBQ3BCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7SUFDaEMsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQWE7UUFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWE7UUFDM0IsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBQ0YsQ0FBQTtBQXJCZ0M7SUFBOUIsV0FBVyxDQUFDLGdCQUFnQixDQUFDOztrREFBaUI7QUFHL0M7SUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7OENBR2pDO0FBUFUsZUFBZTtJQUgzQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsVUFBVTtLQUNyQixDQUFDO0dBQ1csZUFBZSxDQXVCM0I7U0F2QlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiQ3Z2XScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYkN2dkRpcmVjdGl2ZSB7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1heExlbmd0aCcpIG1heExlbmd0aCA9ICc0JztcblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50J10pXG4gIG9uSW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuZm9ybWF0SW5wdXQoZXZlbnQpO1xuICB9XG5cbiAgZm9ybWF0SW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5nZXRGb3JtYXR0ZWRWYWx1ZShpbnB1dCk7XG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gbmV3VmFsdWU7XG4gIH1cblxuICBnZXRGb3JtYXR0ZWRWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdmFsdWUgPSB0aGlzLnJlbW92ZU5vbkRpZ2l0cyh2YWx1ZSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmVtb3ZlTm9uRGlnaXRzKHZhbHVlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgfVxufVxuIl19