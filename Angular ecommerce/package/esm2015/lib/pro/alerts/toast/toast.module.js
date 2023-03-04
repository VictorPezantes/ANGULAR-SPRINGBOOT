var ToastModule_1;
import { __decorate, __metadata, __param } from "tslib";
import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast.component';
import { TOAST_CONFIG } from './toast.token';
import { ToastService } from './toast.service';
import { OverlayContainer } from '../overlay/overlay-container';
import { Overlay } from '../overlay/overlay';
let ToastModule = ToastModule_1 = class ToastModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error(
            // tslint:disable-next-line: quotemark
            "ToastModule is already loaded. It should only be imported in your application's main module.");
        }
    }
    static forRoot(config) {
        return {
            ngModule: ToastModule_1,
            providers: [
                { provide: TOAST_CONFIG, useValue: config },
                OverlayContainer,
                Overlay,
                ToastService,
            ],
        };
    }
};
ToastModule.ctorParameters = () => [
    { type: ToastModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
ToastModule = ToastModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        exports: [ToastComponent],
        declarations: [ToastComponent],
        entryComponents: [ToastComponent],
    }),
    __param(0, Optional()), __param(0, SkipSelf()),
    __metadata("design:paramtypes", [ToastModule])
], ToastModule);
export { ToastModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVE3QyxJQUFhLFdBQVcsbUJBQXhCLE1BQWEsV0FBVztJQVl0QixZQUFvQyxZQUF5QjtRQUMzRCxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSztZQUNiLHNDQUFzQztZQUN0Qyw4RkFBOEYsQ0FDL0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQWxCRCxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXFCO1FBQ2xDLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQzNDLGdCQUFnQjtnQkFDaEIsT0FBTztnQkFDUCxZQUFZO2FBQ2I7U0FDRixDQUFDO0lBQ0osQ0FBQztDQVNGLENBQUE7O1lBUm1ELFdBQVcsdUJBQWhELFFBQVEsWUFBSSxRQUFROztBQVp0QixXQUFXO0lBTnZCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7UUFDekIsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQzlCLGVBQWUsRUFBRSxDQUFDLGNBQWMsQ0FBQztLQUNsQyxDQUFDO0lBYWEsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7cUNBQWUsV0FBVztHQVpsRCxXQUFXLENBb0J2QjtTQXBCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQgfSBmcm9tICcuL3RvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUT0FTVF9DT05GSUcgfSBmcm9tICcuL3RvYXN0LnRva2VuJztcbmltcG9ydCB7IFRvYXN0U2VydmljZSB9IGZyb20gJy4vdG9hc3Quc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxDb25maWcgfSBmcm9tICcuL3RvYXN0LmNvbmZpZyc7XG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5LWNvbnRhaW5lcic7XG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi4vb3ZlcmxheS9vdmVybGF5JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtUb2FzdENvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW1RvYXN0Q29tcG9uZW50XSxcbiAgZW50cnlDb21wb25lbnRzOiBbVG9hc3RDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBUb2FzdE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IEdsb2JhbENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VG9hc3RNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRvYXN0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogVE9BU1RfQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXG4gICAgICAgIE92ZXJsYXlDb250YWluZXIsXG4gICAgICAgIE92ZXJsYXksXG4gICAgICAgIFRvYXN0U2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFRvYXN0TW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHF1b3RlbWFya1xuICAgICAgICBcIlRvYXN0TW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJdCBzaG91bGQgb25seSBiZSBpbXBvcnRlZCBpbiB5b3VyIGFwcGxpY2F0aW9uJ3MgbWFpbiBtb2R1bGUuXCJcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=