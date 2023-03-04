/**
 * Created by sebastianfuss on 03.09.16.
 */
var SmoothscrollModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageScrollService } from './mdb-page-scroll.service';
import { PageScrollDirective } from './mdb-page-scroll.directive';
let SmoothscrollModule = SmoothscrollModule_1 = class SmoothscrollModule {
    static forRoot() {
        return {
            ngModule: SmoothscrollModule_1,
            providers: [{ provide: PageScrollService, useClass: PageScrollService }],
        };
    }
};
SmoothscrollModule = SmoothscrollModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [PageScrollDirective],
        exports: [PageScrollDirective],
    })
], SmoothscrollModule);
export { SmoothscrollModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7OztBQUVILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU9sRSxJQUFhLGtCQUFrQiwwQkFBL0IsTUFBYSxrQkFBa0I7SUFDN0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQztTQUN6RSxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFQWSxrQkFBa0I7SUFMOUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO0tBQy9CLENBQUM7R0FDVyxrQkFBa0IsQ0FPOUI7U0FQWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgc2ViYXN0aWFuZnVzcyBvbiAwMy4wOS4xNi5cbiAqL1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnZVNjcm9sbFNlcnZpY2UgfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VTY3JvbGxEaXJlY3RpdmUgfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbUGFnZVNjcm9sbERpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtQYWdlU2Nyb2xsRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgU21vb3Roc2Nyb2xsTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTbW9vdGhzY3JvbGxNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNtb290aHNjcm9sbE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3sgcHJvdmlkZTogUGFnZVNjcm9sbFNlcnZpY2UsIHVzZUNsYXNzOiBQYWdlU2Nyb2xsU2VydmljZSB9XSxcbiAgICB9O1xuICB9XG59XG4iXX0=