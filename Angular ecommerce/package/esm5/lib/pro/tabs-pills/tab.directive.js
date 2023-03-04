import { __decorate, __metadata, __param } from "tslib";
import { Directive, EventEmitter, HostBinding, Input, Output, TemplateRef, ElementRef, OnInit, Inject, PLATFORM_ID, OnDestroy, Renderer2, } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import { isPlatformBrowser } from '@angular/common';
var TabDirective = /** @class */ (function () {
    function TabDirective(platformId, tabset, el, renderer) {
        this.tabset = tabset;
        this.el = el;
        this.renderer = renderer;
        this._disabled = false;
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.select = new EventEmitter();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new EventEmitter();
        /** fired before tab will be removed */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.test = true;
        this._active = false;
        this.isBrowser = null;
        this.isBrowser = isPlatformBrowser(platformId);
        this.tabset = tabset;
    }
    Object.defineProperty(TabDirective.prototype, "disabled", {
        /** if true tab can not be activated */
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = value;
            if (this._disabled && this._active) {
                this.tabset.initActiveTab();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: function () {
            return this._active;
        },
        set: function (active) {
            var _this = this;
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.renderer.removeClass(this.el.nativeElement, 'show');
                    this.renderer.removeClass(this.el.nativeElement, 'active');
                    this._active = active;
                    this.deselect.emit(this);
                }
                return;
            }
            this.renderer.addClass(this.el.nativeElement, 'show');
            this.renderer.addClass(this.el.nativeElement, 'active');
            this._active = active;
            this.select.emit(this);
            this.tabset.tabs.forEach(function (mdbTab) {
                if (mdbTab !== _this) {
                    mdbTab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    TabDirective.prototype.ngOnInit = function () {
        this.removable = this.removable;
        this.tabset.addTab(this);
    };
    TabDirective.prototype.ngOnDestroy = function () {
        this.tabset.removeTab(this);
    };
    TabDirective.ctorParameters = function () { return [
        { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: TabsetComponent },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TabDirective.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TabDirective.prototype, "heading", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TabDirective.prototype, "disabled", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], TabDirective.prototype, "removable", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TabDirective.prototype, "customClass", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Number)
    ], TabDirective.prototype, "tabOrder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], TabDirective.prototype, "active", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TabDirective.prototype, "select", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TabDirective.prototype, "deselect", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], TabDirective.prototype, "removed", void 0);
    __decorate([
        HostBinding('class.tab-pane'),
        __metadata("design:type", Object)
    ], TabDirective.prototype, "addClass", void 0);
    __decorate([
        HostBinding('class.fade'),
        __metadata("design:type", Object)
    ], TabDirective.prototype, "test", void 0);
    TabDirective = __decorate([
        Directive({ selector: 'mdb-tab, [mdbTab]' }),
        __param(0, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [String, TabsetComponent,
            ElementRef,
            Renderer2])
    ], TabDirective);
    return TabDirective;
}());
export { TabDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdGFicy1waWxscy90YWIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3BEO0lBbUVFLHNCQUN1QixVQUFrQixFQUNoQyxNQUF1QixFQUN2QixFQUFjLEVBQ2IsUUFBbUI7UUFGcEIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFDdkIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNiLGFBQVEsR0FBUixRQUFRLENBQVc7UUF2RHJCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFvQzFCLDRGQUE0RjtRQUMzRSxXQUFNLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekUsZ0dBQWdHO1FBQy9FLGFBQVEsR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRSx1Q0FBdUM7UUFDdEIsWUFBTyxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXBDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFDcEIsU0FBSSxHQUFHLElBQUksQ0FBQztRQUd0QyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRXhCLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFRcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FB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QjtRQUExQixXQUFXLENBQUMsWUFBWSxDQUFDOzs4Q0FBb0I7SUE1RG5DLFlBQVk7UUFEeEIsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLENBQUM7UUFxRXhDLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2lEQUNMLGVBQWU7WUFDbkIsVUFBVTtZQUNILFNBQVM7T0F2RWxCLFlBQVksQ0FxRnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXJGRCxJQXFGQztTQXJGWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lELFxuICBPbkRlc3Ryb3ksXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJzZXRDb21wb25lbnQgfSBmcm9tICcuL3RhYnNldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdtZGItdGFiLCBbbWRiVGFiXScgfSlcbmV4cG9ydCBjbGFzcyBUYWJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gIC8qKiB0YWIgaGVhZGVyIHRleHQgKi9cbiAgQElucHV0KCkgcHVibGljIGhlYWRpbmc6IHN0cmluZztcbiAgLyoqIGlmIHRydWUgdGFiIGNhbiBub3QgYmUgYWN0aXZhdGVkICovXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZTtcblxuICAgIGlmICh0aGlzLl9kaXNhYmxlZCAmJiB0aGlzLl9hY3RpdmUpIHtcbiAgICAgIHRoaXMudGFic2V0LmluaXRBY3RpdmVUYWIoKTtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgLyoqIGlmIHRydWUgdGFiIGNhbiBiZSByZW1vdmFibGUsIGFkZGl0aW9uYWwgYnV0dG9uIHdpbGwgYXBwZWFyICovXG4gIEBJbnB1dCgpIHB1YmxpYyByZW1vdmFibGU6IGJvb2xlYW47XG4gIC8qKiBpZiBzZXQsIHdpbGwgYmUgYWRkZWQgdG8gdGhlIHRhYidzIGNsYXNzIGF0cmlidXRlICovXG4gIEBJbnB1dCgpIHB1YmxpYyBjdXN0b21DbGFzczogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHRhYk9yZGVyOiBudW1iZXI7XG5cbiAgLyoqIHRhYiBhY3RpdmUgc3RhdGUgdG9nZ2xlICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBnZXQgYWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cblxuICBwdWJsaWMgc2V0IGFjdGl2ZShhY3RpdmU6IGJvb2xlYW4pIHtcbiAgICBpZiAoKHRoaXMuZGlzYWJsZWQgJiYgYWN0aXZlKSB8fCAhYWN0aXZlKSB7XG4gICAgICBpZiAodGhpcy5fYWN0aXZlICYmICFhY3RpdmUpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzaG93Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgICAgdGhpcy5kZXNlbGVjdC5lbWl0KHRoaXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3Nob3cnKTtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2FjdGl2ZScpO1xuICAgIHRoaXMuX2FjdGl2ZSA9IGFjdGl2ZTtcbiAgICB0aGlzLnNlbGVjdC5lbWl0KHRoaXMpO1xuXG4gICAgdGhpcy50YWJzZXQudGFicy5mb3JFYWNoKChtZGJUYWI6IFRhYkRpcmVjdGl2ZSkgPT4ge1xuICAgICAgaWYgKG1kYlRhYiAhPT0gdGhpcykge1xuICAgICAgICBtZGJUYWIuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKiogZmlyZWQgd2hlbiB0YWIgYmVjYW1lIGFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xuICBAT3V0cHV0KCkgcHVibGljIHNlbGVjdDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgaW5hY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIGRlc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xuICBAT3V0cHV0KCkgcHVibGljIGRlc2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIGZpcmVkIGJlZm9yZSB0YWIgd2lsbCBiZSByZW1vdmVkICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgcmVtb3ZlZDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItcGFuZScpIHB1YmxpYyBhZGRDbGFzcyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZmFkZScpIHB1YmxpYyB0ZXN0ID0gdHJ1ZTtcblxuICBwdWJsaWMgaGVhZGluZ1JlZjogVGVtcGxhdGVSZWY8YW55PjtcbiAgcHJpdmF0ZSBfYWN0aXZlID0gZmFsc2U7XG5cbiAgaXNCcm93c2VyOiBhbnkgPSBudWxsO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBzdHJpbmcsXG4gICAgcHVibGljIHRhYnNldDogVGFic2V0Q29tcG9uZW50LFxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgICB0aGlzLnRhYnNldCA9IHRhYnNldDtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92YWJsZSA9IHRoaXMucmVtb3ZhYmxlO1xuICAgIHRoaXMudGFic2V0LmFkZFRhYih0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudGFic2V0LnJlbW92ZVRhYih0aGlzKTtcbiAgfVxufVxuIl19