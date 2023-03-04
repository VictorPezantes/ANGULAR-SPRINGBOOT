import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { ScrollSpyLinkDirective } from './scroll-spy-link.directive';
import { ScrollSpyWindowDirective } from './scroll-spy-window.directive';
import { ScrollSpyElementDirective } from './scroll-spy-element.directive';
import { ScrollSpyService } from './scroll-spy.service';
let ScrollSpyModule = class ScrollSpyModule {
};
ScrollSpyModule = __decorate([
    NgModule({
        declarations: [
            ScrollSpyDirective,
            ScrollSpyLinkDirective,
            ScrollSpyWindowDirective,
            ScrollSpyElementDirective
        ],
        exports: [
            ScrollSpyDirective,
            ScrollSpyLinkDirective,
            ScrollSpyWindowDirective,
            ScrollSpyElementDirective
        ],
        providers: [ScrollSpyService]
    })
], ScrollSpyModule);
export { ScrollSpyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Njcm9sbC1zcHkvc2Nyb2xsLXNweS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFrQnhELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7Q0FBSSxDQUFBO0FBQW5CLGVBQWU7SUFmM0IsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osa0JBQWtCO1lBQ2xCLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIseUJBQXlCO1NBQzFCO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCO1lBQ2xCLHNCQUFzQjtZQUN0Qix3QkFBd0I7WUFDeEIseUJBQXlCO1NBQzFCO1FBQ0QsU0FBUyxFQUFFLENBQUUsZ0JBQWdCLENBQUU7S0FDaEMsQ0FBQztHQUNXLGVBQWUsQ0FBSTtTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2Nyb2xsU3B5RGlyZWN0aXZlIH0gZnJvbSAnLi9zY3JvbGwtc3B5LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTY3JvbGxTcHlMaW5rRGlyZWN0aXZlIH0gZnJvbSAnLi9zY3JvbGwtc3B5LWxpbmsuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNjcm9sbFNweVdpbmRvd0RpcmVjdGl2ZSB9IGZyb20gJy4vc2Nyb2xsLXNweS13aW5kb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNjcm9sbFNweUVsZW1lbnREaXJlY3RpdmUgfSBmcm9tICcuL3Njcm9sbC1zcHktZWxlbWVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2Nyb2xsU3B5U2VydmljZSB9IGZyb20gJy4vc2Nyb2xsLXNweS5zZXJ2aWNlJztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTY3JvbGxTcHlEaXJlY3RpdmUsXG4gICAgU2Nyb2xsU3B5TGlua0RpcmVjdGl2ZSxcbiAgICBTY3JvbGxTcHlXaW5kb3dEaXJlY3RpdmUsXG4gICAgU2Nyb2xsU3B5RWxlbWVudERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2Nyb2xsU3B5RGlyZWN0aXZlLFxuICAgIFNjcm9sbFNweUxpbmtEaXJlY3RpdmUsXG4gICAgU2Nyb2xsU3B5V2luZG93RGlyZWN0aXZlLFxuICAgIFNjcm9sbFNweUVsZW1lbnREaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbIFNjcm9sbFNweVNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBTY3JvbGxTcHlNb2R1bGUgeyB9XG4iXX0=