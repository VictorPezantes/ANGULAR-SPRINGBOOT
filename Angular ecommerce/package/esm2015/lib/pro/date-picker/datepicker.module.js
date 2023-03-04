import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MDBDatePickerComponent } from './datepicker.component';
import { FocusDirective } from './directives/datepickerFocus.directive';
import { InputAutoFillDirective } from './directives/datepickerAutofill.directive';
import { LocaleService } from './services/datepickerLocale.service';
let DatepickerModule = class DatepickerModule {
};
DatepickerModule = __decorate([
    NgModule({
        imports: [CommonModule, FormsModule],
        declarations: [MDBDatePickerComponent, FocusDirective, InputAutoFillDirective],
        exports: [MDBDatePickerComponent, FocusDirective, InputAutoFillDirective],
        providers: [LocaleService],
    })
], DatepickerModule);
export { DatepickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL2RhdGUtcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQVFwRSxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFHLENBQUE7QUFBbkIsZ0JBQWdCO0lBTjVCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7UUFDcEMsWUFBWSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxFQUFFLHNCQUFzQixDQUFDO1FBQzlFLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixFQUFFLGNBQWMsRUFBRSxzQkFBc0IsQ0FBQztRQUN6RSxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7S0FDM0IsQ0FBQztHQUNXLGdCQUFnQixDQUFHO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNREJEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvY3VzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RhdGVwaWNrZXJGb2N1cy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBJbnB1dEF1dG9GaWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2RhdGVwaWNrZXJBdXRvZmlsbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9kYXRlcGlja2VyTG9jYWxlLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTURCRGF0ZVBpY2tlckNvbXBvbmVudCwgRm9jdXNEaXJlY3RpdmUsIElucHV0QXV0b0ZpbGxEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtNREJEYXRlUGlja2VyQ29tcG9uZW50LCBGb2N1c0RpcmVjdGl2ZSwgSW5wdXRBdXRvRmlsbERpcmVjdGl2ZV0sXHJcbiAgcHJvdmlkZXJzOiBbTG9jYWxlU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyTW9kdWxlIHt9XHJcbiJdfQ==