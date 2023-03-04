import { __decorate, __metadata } from "tslib";
import { Component, OnInit, HostBinding, Input, Output, EventEmitter, HostListener, ContentChildren, QueryList, ChangeDetectionStrategy, ChangeDetectorRef, } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { FixedButtonCaptionDirective } from '../buttons/fixed-caption.directive';
let CollapseComponent = class CollapseComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.isCollapsed = true;
        this.showBsCollapse = new EventEmitter();
        this.shownBsCollapse = new EventEmitter();
        this.hideBsCollapse = new EventEmitter();
        this.hiddenBsCollapse = new EventEmitter();
        this.collapsed = new EventEmitter();
        this.expanded = new EventEmitter();
        this.overflow = 'hidden';
    }
    onExpandBodyDone(event) {
        setTimeout(() => {
            if (event.toState === 'expanded') {
                this.shownBsCollapse.emit(this);
                this.expanded.emit(this);
                this.overflow = 'visible';
                this.showCaptions();
            }
            else {
                this.hiddenBsCollapse.emit(this);
                this.collapsed.emit(this);
            }
        }, 0);
    }
    showCaptions() {
        this.captions.forEach((caption) => caption.showCaption());
    }
    toggle() {
        this.isCollapsed ? this.show() : this.hide();
    }
    show() {
        this.expandAnimationState = 'expanded';
        this.isCollapsed = false;
        this.showBsCollapse.emit(this);
        this._cdRef.markForCheck();
    }
    hide() {
        this.overflow = 'hidden';
        this.expandAnimationState = 'collapsed';
        this.isCollapsed = true;
        this.hideBsCollapse.emit(this);
        this._cdRef.markForCheck();
    }
    initializeCollapseState() {
        this.isCollapsed ? this.hide() : this.show();
    }
    ngOnInit() {
        this.initializeCollapseState();
    }
};
CollapseComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
__decorate([
    ContentChildren(FixedButtonCaptionDirective),
    __metadata("design:type", QueryList)
], CollapseComponent.prototype, "captions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], CollapseComponent.prototype, "isCollapsed", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CollapseComponent.prototype, "showBsCollapse", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CollapseComponent.prototype, "shownBsCollapse", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CollapseComponent.prototype, "hideBsCollapse", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CollapseComponent.prototype, "hiddenBsCollapse", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CollapseComponent.prototype, "collapsed", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], CollapseComponent.prototype, "expanded", void 0);
__decorate([
    HostBinding('@expandBody'),
    __metadata("design:type", String)
], CollapseComponent.prototype, "expandAnimationState", void 0);
__decorate([
    HostBinding('style.overflow'),
    __metadata("design:type", Object)
], CollapseComponent.prototype, "overflow", void 0);
__decorate([
    HostListener('@expandBody.done', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CollapseComponent.prototype, "onExpandBodyDone", null);
CollapseComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: '[mdbCollapse]',
        exportAs: 'bs-collapse',
        template: '<ng-content></ng-content>',
        animations: [
            trigger('expandBody', [
                state('collapsed', style({ height: '0px' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('500ms ease')),
            ]),
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], CollapseComponent);
export { CollapseComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY29sbGFwc2UvY29sbGFwc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixXQUFXLEVBQ1gsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBZ0JqRixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQVc1QixZQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQVRwQyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVsQixtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3ZELG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDeEQsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN2RCxxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RCxjQUFTLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSzVCLGFBQVEsR0FBRyxRQUFRLENBQUM7SUFISCxDQUFDO0lBTWpELGdCQUFnQixDQUFDLEtBQVU7UUFDekIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxVQUFVLEVBQUU7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VyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQzVELENBQUM7U0FDSDtRQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7cUNBWTRCLGlCQUFpQjtHQVhsQyxpQkFBaUIsQ0ErRDdCO1NBL0RZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc3RhdGUsIHN0eWxlLCB0cmlnZ2VyLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmUgfSBmcm9tICcuLi9idXR0b25zL2ZpeGVkLWNhcHRpb24uZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdbbWRiQ29sbGFwc2VdJyxcbiAgZXhwb3J0QXM6ICdicy1jb2xsYXBzZScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdleHBhbmRCb2R5JywgW1xuICAgICAgc3RhdGUoJ2NvbGxhcHNlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnMHB4JyB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCc1MDBtcyBlYXNlJykpLFxuICAgIF0pLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAQ29udGVudENoaWxkcmVuKEZpeGVkQnV0dG9uQ2FwdGlvbkRpcmVjdGl2ZSkgY2FwdGlvbnM6IFF1ZXJ5TGlzdDxGaXhlZEJ1dHRvbkNhcHRpb25EaXJlY3RpdmU+O1xuICBASW5wdXQoKSBpc0NvbGxhcHNlZCA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHNob3dCc0NvbGxhcHNlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHNob3duQnNDb2xsYXBzZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoaWRlQnNDb2xsYXBzZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBoaWRkZW5Cc0NvbGxhcHNlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBleHBhbmRlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIEBIb3N0QmluZGluZygnQGV4cGFuZEJvZHknKSBleHBhbmRBbmltYXRpb25TdGF0ZTogc3RyaW5nO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm92ZXJmbG93Jykgb3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICBASG9zdExpc3RlbmVyKCdAZXhwYW5kQm9keS5kb25lJywgWyckZXZlbnQnXSlcbiAgb25FeHBhbmRCb2R5RG9uZShldmVudDogYW55KSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoZXZlbnQudG9TdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xuICAgICAgICB0aGlzLnNob3duQnNDb2xsYXBzZS5lbWl0KHRoaXMpO1xuICAgICAgICB0aGlzLmV4cGFuZGVkLmVtaXQodGhpcyk7XG4gICAgICAgIHRoaXMub3ZlcmZsb3cgPSAndmlzaWJsZSc7XG4gICAgICAgIHRoaXMuc2hvd0NhcHRpb25zKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGRlbkJzQ29sbGFwc2UuZW1pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQuZW1pdCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIHNob3dDYXB0aW9ucygpIHtcbiAgICB0aGlzLmNhcHRpb25zLmZvckVhY2goKGNhcHRpb246IEZpeGVkQnV0dG9uQ2FwdGlvbkRpcmVjdGl2ZSkgPT4gY2FwdGlvbi5zaG93Q2FwdGlvbigpKTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQ29sbGFwc2VkID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5zaG93QnNDb2xsYXBzZS5lbWl0KHRoaXMpO1xuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICAgIHRoaXMuaXNDb2xsYXBzZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5oaWRlQnNDb2xsYXBzZS5lbWl0KHRoaXMpO1xuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUNvbGxhcHNlU3RhdGUoKSB7XG4gICAgdGhpcy5pc0NvbGxhcHNlZCA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmluaXRpYWxpemVDb2xsYXBzZVN0YXRlKCk7XG4gIH1cbn1cbiJdfQ==