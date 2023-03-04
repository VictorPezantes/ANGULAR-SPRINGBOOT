import { __decorate, __metadata } from "tslib";
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { BsDropdownState } from './dropdown.state';
let BsDropdownMenuDirective = class BsDropdownMenuDirective {
    constructor(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
};
BsDropdownMenuDirective.ctorParameters = () => [
    { type: BsDropdownState },
    { type: ViewContainerRef },
    { type: TemplateRef }
];
BsDropdownMenuDirective = __decorate([
    Directive({
        selector: '[mdbDropdownMenu],[dropdownMenu]',
        exportAs: 'bs-dropdown-menu'
    }),
    __metadata("design:paramtypes", [BsDropdownState,
        ViewContainerRef,
        TemplateRef])
], BsDropdownMenuDirective);
export { BsDropdownMenuDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9kcm9wZG93bi9kcm9wZG93bi1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTW5ELElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBQ2xDLFlBQVksTUFBdUIsRUFDakMsY0FBZ0MsRUFDaEMsWUFBOEI7UUFDOUIsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1lBQ3pCLFdBQVcsRUFBRSxZQUFZO1lBQ3pCLGFBQWEsRUFBRSxjQUFjO1NBQzlCLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztZQVJxQixlQUFlO1lBQ2pCLGdCQUFnQjtZQUNsQixXQUFXOztBQUhoQix1QkFBdUI7SUFKbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtDQUFrQztRQUM1QyxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCLENBQUM7cUNBRW9CLGVBQWU7UUFDakIsZ0JBQWdCO1FBQ2xCLFdBQVc7R0FIaEIsdUJBQXVCLENBU25DO1NBVFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9kcm9wZG93bi5zdGF0ZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJEcm9wZG93bk1lbnVdLFtkcm9wZG93bk1lbnVdJyxcbiAgZXhwb3J0QXM6ICdicy1kcm9wZG93bi1tZW51J1xufSlcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKF9zdGF0ZTogQnNEcm9wZG93blN0YXRlLFxuICAgIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55Pikge1xuICAgIF9zdGF0ZS5yZXNvbHZlRHJvcGRvd25NZW51KHtcbiAgICAgIHRlbXBsYXRlUmVmOiBfdGVtcGxhdGVSZWYsXG4gICAgICB2aWV3Q29udGFpbmVyOiBfdmlld0NvbnRhaW5lclxuICAgIH0pO1xuICB9XG59XG4iXX0=