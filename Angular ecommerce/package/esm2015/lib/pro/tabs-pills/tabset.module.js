var TabsModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgTranscludeDirective } from './transclude.directive';
import { TabHeadingDirective } from './tab-heading.directive';
import { TabDirective } from './tab.directive';
import { TabsetComponent } from './tabset.component';
import { TabsetConfig } from './tabset.config';
let TabsModule = TabsModule_1 = class TabsModule {
    static forRoot() {
        return {
            ngModule: TabsModule_1,
            providers: [TabsetConfig],
        };
    }
};
TabsModule = TabsModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective],
        exports: [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective],
    })
], TabsModule);
export { TabsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdGFicy1waWxscy90YWJzZXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DLElBQWEsVUFBVSxrQkFBdkIsTUFBYSxVQUFVO0lBQ2QsTUFBTSxDQUFDLE9BQU87UUFDbkIsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQztTQUMxQixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFQWSxVQUFVO0lBTHRCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixZQUFZLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLG1CQUFtQixDQUFDO1FBQ3pGLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUscUJBQXFCLENBQUM7S0FDckYsQ0FBQztHQUNXLFVBQVUsQ0FPdEI7U0FQWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nVHJhbnNjbHVkZURpcmVjdGl2ZSB9IGZyb20gJy4vdHJhbnNjbHVkZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVGFiSGVhZGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLWhlYWRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IFRhYkRpcmVjdGl2ZSB9IGZyb20gJy4vdGFiLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUYWJzZXRDb21wb25lbnQgfSBmcm9tICcuL3RhYnNldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGFic2V0Q29uZmlnIH0gZnJvbSAnLi90YWJzZXQuY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05nVHJhbnNjbHVkZURpcmVjdGl2ZSwgVGFiRGlyZWN0aXZlLCBUYWJzZXRDb21wb25lbnQsIFRhYkhlYWRpbmdEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbVGFiRGlyZWN0aXZlLCBUYWJzZXRDb21wb25lbnQsIFRhYkhlYWRpbmdEaXJlY3RpdmUsIE5nVHJhbnNjbHVkZURpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYnNNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUYWJzTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUYWJzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbVGFic2V0Q29uZmlnXSxcbiAgICB9O1xuICB9XG59XG4iXX0=