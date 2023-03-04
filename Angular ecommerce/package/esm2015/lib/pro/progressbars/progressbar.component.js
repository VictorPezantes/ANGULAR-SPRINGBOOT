import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { ProgressbarConfigComponent } from './progressbar.config.component';
let ProgressbarComponent = class ProgressbarComponent {
    constructor(config) {
        Object.assign(this, config);
    }
};
ProgressbarComponent.ctorParameters = () => [
    { type: ProgressbarConfigComponent }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ProgressbarComponent.prototype, "animate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ProgressbarComponent.prototype, "max", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ProgressbarComponent.prototype, "type", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], ProgressbarComponent.prototype, "value", void 0);
ProgressbarComponent = __decorate([
    Component({
        selector: 'mdb-progressbar, mdb-progress',
        template: "<div mdbProgress [animate]=\"animate\" [max]=\"max\">\n  <mdb-bar [type]=\"type\" [value]=\"value\">\n    <ng-content></ng-content>\n  </mdb-bar>\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [""]
    }),
    __metadata("design:paramtypes", [ProgressbarConfigComponent])
], ProgressbarComponent);
export { ProgressbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQVM1RSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQVUvQixZQUFtQixNQUFrQztRQUNuRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0YsQ0FBQTs7WUFINEIsMEJBQTBCOztBQVI1QztJQUFSLEtBQUssRUFBRTs7cURBQXlCO0FBRXhCO0lBQVIsS0FBSyxFQUFFOztpREFBb0I7QUFFbkI7SUFBUixLQUFLLEVBQUU7O2tEQUFxQjtBQUVwQjtJQUFSLEtBQUssRUFBRTs7bURBQXNCO0FBUm5CLG9CQUFvQjtJQVBoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsK0JBQStCO1FBQ3pDLHVLQUEyQztRQUUzQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztxQ0FXMkIsMEJBQTBCO0dBVjFDLG9CQUFvQixDQWFoQztTQWJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDb25maWdDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbmZpZy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItcHJvZ3Jlc3NiYXIsIG1kYi1wcm9ncmVzcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzYmFycy1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQge1xuICAvKiogaWYgYHRydWVgIGNoYW5naW5nIHZhbHVlIG9mIHByb2dyZXNzIGJhciB3aWxsIGJlIGFuaW1hdGVkIChub3RlOiBub3Qgc3VwcG9ydGVkIGJ5IEJvb3RzdHJhcCA0KSAqL1xuICBASW5wdXQoKSBwdWJsaWMgYW5pbWF0ZTogYm9vbGVhbjtcbiAgLyoqIG1heGltdW0gdG90YWwgdmFsdWUgb2YgcHJvZ3Jlc3MgZWxlbWVudCAqL1xuICBASW5wdXQoKSBwdWJsaWMgbWF4OiBudW1iZXI7XG4gIC8qKiBwcm92aWRlIG9uZSBvZiB0aGUgZm91ciBzdXBwb3J0ZWQgY29udGV4dHVhbCBjbGFzc2VzOiBgc3VjY2Vzc2AsIGBpbmZvYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCAqL1xuICBASW5wdXQoKSBwdWJsaWMgdHlwZTogc3RyaW5nO1xuICAvKiogY3VycmVudCB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIgKi9cbiAgQElucHV0KCkgcHVibGljIHZhbHVlOiBudW1iZXI7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbmZpZzogUHJvZ3Jlc3NiYXJDb25maWdDb21wb25lbnQpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XG4gIH1cbn1cbiJdfQ==