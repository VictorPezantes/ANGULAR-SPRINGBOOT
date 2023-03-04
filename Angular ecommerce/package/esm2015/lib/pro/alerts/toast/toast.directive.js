var ToastContainerModule_1;
import { __decorate, __metadata } from "tslib";
import { NgModule, ModuleWithProviders, Directive, ElementRef } from '@angular/core';
let ToastContainerDirective = class ToastContainerDirective {
    constructor(el) {
        this.el = el;
    }
    getContainerElement() {
        return this.el.nativeElement;
    }
};
ToastContainerDirective.ctorParameters = () => [
    { type: ElementRef }
];
ToastContainerDirective = __decorate([
    Directive({
        selector: '[mdbToastContainer]',
        exportAs: 'mdb-toast-container',
    }),
    __metadata("design:paramtypes", [ElementRef])
], ToastContainerDirective);
export { ToastContainerDirective };
let ToastContainerModule = ToastContainerModule_1 = class ToastContainerModule {
    static forRoot() {
        return {
            ngModule: ToastContainerModule_1,
            providers: [],
        };
    }
};
ToastContainerModule = ToastContainerModule_1 = __decorate([
    NgModule({
        exports: [ToastContainerDirective],
        declarations: [ToastContainerDirective],
    })
], ToastContainerModule);
export { ToastContainerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hbGVydHMvdG9hc3QvdG9hc3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTXJGLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBQ2xDLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUN0QyxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUMvQixDQUFDO0NBQ0YsQ0FBQTs7WUFKeUIsVUFBVTs7QUFEdkIsdUJBQXVCO0lBSm5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFLHFCQUFxQjtLQUNoQyxDQUFDO3FDQUV3QixVQUFVO0dBRHZCLHVCQUF1QixDQUtuQztTQUxZLHVCQUF1QjtBQVdwQyxJQUFhLG9CQUFvQiw0QkFBakMsTUFBYSxvQkFBb0I7SUFDL0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHNCQUFvQjtZQUM5QixTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVBZLG9CQUFvQjtJQUpoQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztRQUNsQyxZQUFZLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztLQUN4QyxDQUFDO0dBQ1csb0JBQW9CLENBT2hDO1NBUFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiVG9hc3RDb250YWluZXJdJyxcbiAgZXhwb3J0QXM6ICdtZGItdG9hc3QtY29udGFpbmVyJyxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb250YWluZXJEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuICBnZXRDb250YWluZXJFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IFtUb2FzdENvbnRhaW5lckRpcmVjdGl2ZV0sXG4gIGRlY2xhcmF0aW9uczogW1RvYXN0Q29udGFpbmVyRGlyZWN0aXZlXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9hc3RDb250YWluZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRvYXN0Q29udGFpbmVyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUb2FzdENvbnRhaW5lck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW10sXG4gICAgfTtcbiAgfVxufVxuIl19