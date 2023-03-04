import { __decorate, __metadata, __param } from "tslib";
import { Directive, EventEmitter, HostBinding, Input, Output, TemplateRef, ElementRef, OnInit, Inject, PLATFORM_ID, OnDestroy, Renderer2, } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import { isPlatformBrowser } from '@angular/common';
let TabDirective = class TabDirective {
    constructor(platformId, tabset, el, renderer) {
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
    /** if true tab can not be activated */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
        if (this._disabled && this._active) {
            this.tabset.initActiveTab();
        }
    }
    /** tab active state toggle */
    get active() {
        return this._active;
    }
    set active(active) {
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
        this.tabset.tabs.forEach((mdbTab) => {
            if (mdbTab !== this) {
                mdbTab.active = false;
            }
        });
    }
    ngOnInit() {
        this.removable = this.removable;
        this.tabset.addTab(this);
    }
    ngOnDestroy() {
        this.tabset.removeTab(this);
    }
};
TabDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: TabsetComponent },
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { TabDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdGFicy1waWxscy90YWIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixXQUFXLEVBQ1gsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR3BELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7SUFtRXZCLFlBQ3VCLFVBQWtCLEVBQ2hDLE1BQXVCLEVBQ3ZCLEVBQWMsRUFDYixRQUFtQjtRQUZwQixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUN2QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQXZEckIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQW9DMUIsNEZBQTRGO1FBQzNFLFdBQU0sR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RSxnR0FBZ0c7UUFDL0UsYUFBUSxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzNFLHVDQUF1QztRQUN0QixZQUFPLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFFcEMsYUFBUSxHQUFHLElBQUksQ0FBQztRQUNwQixTQUFJLEdBQUcsSUFBSSxDQUFDO1FBR3RDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFeEIsY0FBUyxHQUFRLElBQUksQ0FBQztRQVFwQixJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLElB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QjtJQUExQixXQUFXLENBQUMsWUFBWSxDQUFDOzswQ0FBb0I7QUE1RG5DLFlBQVk7SUFEeEIsU0FBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLENBQUM7SUFxRXhDLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBOzZDQUNMLGVBQWU7UUFDbkIsVUFBVTtRQUNILFNBQVM7R0F2RWxCLFlBQVksQ0FxRnhCO1NBckZZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRhYnNldENvbXBvbmVudCB9IGZyb20gJy4vdGFic2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ21kYi10YWIsIFttZGJUYWJdJyB9KVxuZXhwb3J0IGNsYXNzIFRhYkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcHVibGljIHR5cGU6IHN0cmluZztcbiAgLyoqIHRhYiBoZWFkZXIgdGV4dCAqL1xuICBASW5wdXQoKSBwdWJsaWMgaGVhZGluZzogc3RyaW5nO1xuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIG5vdCBiZSBhY3RpdmF0ZWQgKi9cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkICYmIHRoaXMuX2FjdGl2ZSkge1xuICAgICAgdGhpcy50YWJzZXQuaW5pdEFjdGl2ZVRhYigpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuICAvKiogaWYgdHJ1ZSB0YWIgY2FuIGJlIHJlbW92YWJsZSwgYWRkaXRpb25hbCBidXR0b24gd2lsbCBhcHBlYXIgKi9cbiAgQElucHV0KCkgcHVibGljIHJlbW92YWJsZTogYm9vbGVhbjtcbiAgLyoqIGlmIHNldCwgd2lsbCBiZSBhZGRlZCB0byB0aGUgdGFiJ3MgY2xhc3MgYXRyaWJ1dGUgKi9cbiAgQElucHV0KCkgcHVibGljIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgdGFiT3JkZXI6IG51bWJlcjtcblxuICAvKiogdGFiIGFjdGl2ZSBzdGF0ZSB0b2dnbGUgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGdldCBhY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQgYWN0aXZlKGFjdGl2ZTogYm9vbGVhbikge1xuICAgIGlmICgodGhpcy5kaXNhYmxlZCAmJiBhY3RpdmUpIHx8ICFhY3RpdmUpIHtcbiAgICAgIGlmICh0aGlzLl9hY3RpdmUgJiYgIWFjdGl2ZSkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3Nob3cnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdhY3RpdmUnKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICAgICAgICB0aGlzLmRlc2VsZWN0LmVtaXQodGhpcyk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc2hvdycpO1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYWN0aXZlJyk7XG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xuICAgIHRoaXMuc2VsZWN0LmVtaXQodGhpcyk7XG5cbiAgICB0aGlzLnRhYnNldC50YWJzLmZvckVhY2goKG1kYlRhYjogVGFiRGlyZWN0aXZlKSA9PiB7XG4gICAgICBpZiAobWRiVGFiICE9PSB0aGlzKSB7XG4gICAgICAgIG1kYlRhYi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgYWN0aXZlLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBzZWxlY3RlZCBpbnN0YW5jZSBvZiBUYWIgY29tcG9uZW50ICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgc2VsZWN0OiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqIGZpcmVkIHdoZW4gdGFiIGJlY2FtZSBpbmFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gZGVzZWxlY3RlZCBpbnN0YW5jZSBvZiBUYWIgY29tcG9uZW50ICovXG4gIEBPdXRwdXQoKSBwdWJsaWMgZGVzZWxlY3Q6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvKiogZmlyZWQgYmVmb3JlIHRhYiB3aWxsIGJlIHJlbW92ZWQgKi9cbiAgQE91dHB1dCgpIHB1YmxpYyByZW1vdmVkOiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnRhYi1wYW5lJykgcHVibGljIGFkZENsYXNzID0gdHJ1ZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mYWRlJykgcHVibGljIHRlc3QgPSB0cnVlO1xuXG4gIHB1YmxpYyBoZWFkaW5nUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBwcml2YXRlIF9hY3RpdmUgPSBmYWxzZTtcblxuICBpc0Jyb3dzZXI6IGFueSA9IG51bGw7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgdGFic2V0OiBUYWJzZXRDb21wb25lbnQsXG4gICAgcHVibGljIGVsOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICB0aGlzLmlzQnJvd3NlciA9IGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpO1xuICAgIHRoaXMudGFic2V0ID0gdGFic2V0O1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZhYmxlID0gdGhpcy5yZW1vdmFibGU7XG4gICAgdGhpcy50YWJzZXQuYWRkVGFiKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy50YWJzZXQucmVtb3ZlVGFiKHRoaXMpO1xuICB9XG59XG4iXX0=