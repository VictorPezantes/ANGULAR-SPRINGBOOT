var MdProgressSpinnerModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { MdProgressSpinnerComponent, MdSpinnerComponent, MdProgressSpinnerCssMatStylerDirective, } from './progress-spinner.component';
import { ProgressSpinnerComponent } from '../progress-spinner.component';
let MdProgressSpinnerModule = MdProgressSpinnerModule_1 = class MdProgressSpinnerModule {
    static forRoot() {
        return {
            ngModule: MdProgressSpinnerModule_1,
            providers: [],
        };
    }
};
MdProgressSpinnerModule = MdProgressSpinnerModule_1 = __decorate([
    NgModule({
        exports: [
            MdProgressSpinnerComponent,
            MdSpinnerComponent,
            MdProgressSpinnerCssMatStylerDirective,
            ProgressSpinnerComponent,
        ],
        declarations: [
            MdProgressSpinnerComponent,
            MdSpinnerComponent,
            MdProgressSpinnerCssMatStylerDirective,
            ProgressSpinnerComponent,
        ],
    })
], MdProgressSpinnerModule);
export { MdProgressSpinnerModule };
export { MdProgressSpinnerCssMatStylerDirective, MdProgressSpinnerComponent, MdSpinnerComponent, } from './progress-spinner.component';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLW1vZHVsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsa0JBQWtCLEVBQ2xCLHNDQUFzQyxHQUN2QyxNQUFNLDhCQUE4QixDQUFDO0FBRXRDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBZ0J6RSxJQUFNLHVCQUF1QiwrQkFBN0IsTUFBTSx1QkFBdUI7SUFDM0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHlCQUF1QjtZQUNqQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVBLLHVCQUF1QjtJQWQ1QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCwwQkFBMEI7WUFDMUIsa0JBQWtCO1lBQ2xCLHNDQUFzQztZQUN0Qyx3QkFBd0I7U0FDekI7UUFDRCxZQUFZLEVBQUU7WUFDWiwwQkFBMEI7WUFDMUIsa0JBQWtCO1lBQ2xCLHNDQUFzQztZQUN0Qyx3QkFBd0I7U0FDekI7S0FDRixDQUFDO0dBQ0ksdUJBQXVCLENBTzVCO0FBRUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLENBQUM7QUFDbkMsT0FBTyxFQUVMLHNDQUFzQyxFQUN0QywwQkFBMEIsRUFDMUIsa0JBQWtCLEdBQ25CLE1BQU0sOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWRQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQsXG4gIE1kU3Bpbm5lckNvbXBvbmVudCxcbiAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG59IGZyb20gJy4vcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQcm9ncmVzc1NwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuLi9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtcbiAgICBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgICBNZFNwaW5uZXJDb21wb25lbnQsXG4gICAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgICBNZFNwaW5uZXJDb21wb25lbnQsXG4gICAgTWRQcm9ncmVzc1NwaW5uZXJDc3NNYXRTdHlsZXJEaXJlY3RpdmUsXG4gICAgUHJvZ3Jlc3NTcGlubmVyQ29tcG9uZW50LFxuICBdLFxufSlcbmNsYXNzIE1kUHJvZ3Jlc3NTcGlubmVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNZFByb2dyZXNzU3Bpbm5lck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtdLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHsgTWRQcm9ncmVzc1NwaW5uZXJNb2R1bGUgfTtcbmV4cG9ydCB7XG4gIFByb2dyZXNzU3Bpbm5lck1vZGUsXG4gIE1kUHJvZ3Jlc3NTcGlubmVyQ3NzTWF0U3R5bGVyRGlyZWN0aXZlLFxuICBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCxcbiAgTWRTcGlubmVyQ29tcG9uZW50LFxufSBmcm9tICcuL3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50JztcbiJdfQ==