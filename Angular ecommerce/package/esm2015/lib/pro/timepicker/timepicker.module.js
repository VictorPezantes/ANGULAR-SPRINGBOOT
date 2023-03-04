import { __decorate } from "tslib";
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { ButtonsModule } from '../../free/buttons/buttons.module';
import { WavesModule } from '../../free/waves/waves.module';
import { MdbTimepickerToggleComponent } from './timepicker-toggle.component';
import { MdbTimePickerDirective } from './timepicker.directive';
import { MdbTimePickerComponent } from './timepicker.component';
import { MdbTimePickerContentComponent } from './timepicker.content';
let MdbTimePickerModule = class MdbTimePickerModule {
};
MdbTimePickerModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            OverlayModule,
            A11yModule,
            ButtonsModule.forRoot(),
            WavesModule.forRoot(),
        ],
        declarations: [
            MdbTimePickerComponent,
            MdbTimepickerToggleComponent,
            MdbTimePickerDirective,
            MdbTimePickerContentComponent,
        ],
        exports: [MdbTimePickerComponent, MdbTimepickerToggleComponent, MdbTimePickerDirective],
        bootstrap: [MdbTimePickerContentComponent],
        entryComponents: [MdbTimePickerContentComponent],
    })
], MdbTimePickerModule);
export { MdbTimePickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3RpbWVwaWNrZXIvdGltZXBpY2tlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQW9CckUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7Q0FBRyxDQUFBO0FBQXRCLG1CQUFtQjtJQWxCL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGFBQWE7WUFDYixVQUFVO1lBQ1YsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN2QixXQUFXLENBQUMsT0FBTyxFQUFFO1NBQ3RCO1FBQ0QsWUFBWSxFQUFFO1lBQ1osc0JBQXNCO1lBQ3RCLDRCQUE0QjtZQUM1QixzQkFBc0I7WUFDdEIsNkJBQTZCO1NBQzlCO1FBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsNEJBQTRCLEVBQUUsc0JBQXNCLENBQUM7UUFDdkYsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7UUFDMUMsZUFBZSxFQUFFLENBQUMsNkJBQTZCLENBQUM7S0FDakQsQ0FBQztHQUNXLG1CQUFtQixDQUFHO1NBQXRCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEExMXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBCdXR0b25zTW9kdWxlIH0gZnJvbSAnLi4vLi4vZnJlZS9idXR0b25zL2J1dHRvbnMubW9kdWxlJztcbmltcG9ydCB7IFdhdmVzTW9kdWxlIH0gZnJvbSAnLi4vLi4vZnJlZS93YXZlcy93YXZlcy5tb2R1bGUnO1xuaW1wb3J0IHsgTWRiVGltZXBpY2tlclRvZ2dsZUNvbXBvbmVudCB9IGZyb20gJy4vdGltZXBpY2tlci10b2dnbGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1kYlRpbWVQaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL3RpbWVwaWNrZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1kYlRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3RpbWVwaWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1kYlRpbWVQaWNrZXJDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi90aW1lcGlja2VyLmNvbnRlbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgQTExeU1vZHVsZSxcbiAgICBCdXR0b25zTW9kdWxlLmZvclJvb3QoKSxcbiAgICBXYXZlc01vZHVsZS5mb3JSb290KCksXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1kYlRpbWVQaWNrZXJDb21wb25lbnQsXG4gICAgTWRiVGltZXBpY2tlclRvZ2dsZUNvbXBvbmVudCxcbiAgICBNZGJUaW1lUGlja2VyRGlyZWN0aXZlLFxuICAgIE1kYlRpbWVQaWNrZXJDb250ZW50Q29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbTWRiVGltZVBpY2tlckNvbXBvbmVudCwgTWRiVGltZXBpY2tlclRvZ2dsZUNvbXBvbmVudCwgTWRiVGltZVBpY2tlckRpcmVjdGl2ZV0sXG4gIGJvb3RzdHJhcDogW01kYlRpbWVQaWNrZXJDb250ZW50Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbTWRiVGltZVBpY2tlckNvbnRlbnRDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBNZGJUaW1lUGlja2VyTW9kdWxlIHt9XG4iXX0=