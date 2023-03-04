import { __decorate, __metadata, __param } from "tslib";
import { Component, ElementRef, ViewChild, Input, ContentChildren, QueryList, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, AfterContentInit, Optional, OnDestroy, } from '@angular/core';
import { state, style, trigger, transition, animate } from '@angular/animations';
import { RouterLinkWithHref, Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
let SBItemBodyComponent = class SBItemBodyComponent {
    constructor(el, _cdRef, router) {
        this.el = el;
        this._cdRef = _cdRef;
        this.router = router;
        this.animationStateChange = new EventEmitter();
        this.id = `mdb-accordion-`;
        this.height = '0';
        this._destroy$ = new Subject();
        this.expandAnimationState = 'collapsed';
        this.ariaLabelledBy = '';
    }
    toggle(collapsed) {
        setTimeout(() => {
            collapsed
                ? (this.expandAnimationState = 'collapsed')
                : (this.expandAnimationState = 'expanded');
            this._cdRef.markForCheck();
        }, 0);
    }
    animationCallback() {
        this.animationStateChange.emit({
            state: this.expandAnimationState,
            accordionEl: this.el.nativeElement.parentElement.parentElement,
        });
    }
    openSidenavOnActiveLink() {
        if (typeof window !== 'undefined' && window) {
            const pathStrategyUrl = window.location.pathname;
            const hashStrategyUrl = window.location.hash;
            const activeLink = this.routerLinks.find((link) => {
                const params = link.href.split('?')[1];
                if (params) {
                    return (link.href.split('?')[0] === pathStrategyUrl ||
                        link.href.split('?')[0] === hashStrategyUrl);
                }
                else {
                    return link.href === pathStrategyUrl || link.href === hashStrategyUrl;
                }
            });
            const sbItem = this.el.nativeElement.parentNode;
            if (activeLink) {
                setTimeout(() => {
                    this.expandAnimationState = 'expanded';
                    if (sbItem) {
                        sbItem.classList.add('active');
                        sbItem.classList.remove('is-collapsed');
                    }
                    this._cdRef.markForCheck();
                }, 10);
            }
            else if (this.expandAnimationState !== 'collapsed' && activeLink) {
                setTimeout(() => {
                    this.expandAnimationState = 'collapsed';
                    if (sbItem) {
                        sbItem.classList.remove('active');
                        sbItem.classList.add('is-collapsed');
                    }
                    this._cdRef.markForCheck();
                }, 10);
            }
        }
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.collapsed
                ? (this.expandAnimationState = 'collapsed')
                : (this.expandAnimationState = 'expanded');
            if (this.router && this.autoExpand) {
                this.router.events
                    .pipe(takeUntil(this._destroy$), filter(event => event instanceof NavigationEnd))
                    .subscribe(() => {
                    this.openSidenavOnActiveLink();
                });
            }
        }, 0);
    }
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.unsubscribe();
    }
};
SBItemBodyComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Router, decorators: [{ type: Optional }] }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], SBItemBodyComponent.prototype, "customClass", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], SBItemBodyComponent.prototype, "animationStateChange", void 0);
__decorate([
    ContentChildren(RouterLinkWithHref),
    __metadata("design:type", QueryList)
], SBItemBodyComponent.prototype, "routerLinks", void 0);
__decorate([
    ViewChild('body', { static: true }),
    __metadata("design:type", ElementRef)
], SBItemBodyComponent.prototype, "bodyEl", void 0);
SBItemBodyComponent = __decorate([
    Component({
        exportAs: 'sbItemBody',
        selector: 'mdb-item-body, mdb-accordion-item-body',
        template: "<div #body class=\"sb-item-body\"\n     [style.height]=\"height\"\n     (@expandBody.done)=\"animationCallback()\"\n     [@expandBody]=\"expandAnimationState\"\n     [id]=\"id\"\n     role=\"region\"\n     [attr.aria-labelledby]=\"ariaLabelledBy\">\n    <div class=\"card-body {{ customClass }}\">\n    \t<ng-content></ng-content>\n    </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [
            trigger('expandBody', [
                state('collapsed', style({ height: '0px', visibility: 'hidden' })),
                state('expanded', style({ height: '*', visibility: 'visible' })),
                transition('expanded <=> collapsed', animate('500ms ease')),
            ]),
        ]
    }),
    __param(2, Optional()),
    __metadata("design:paramtypes", [ElementRef,
        ChangeDetectorRef,
        Router])
], SBItemBodyComponent);
export { SBItemBodyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5ib2R5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vY29tcG9uZW50cy9zYi1pdGVtLmJvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFNBQVMsRUFDVCxLQUFLLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQW9CL0IsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFvQjlCLFlBQ1MsRUFBYyxFQUNiLE1BQXlCLEVBQ2IsTUFBYztRQUYzQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2IsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDYixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBcEIxQix5QkFBb0IsR0FBMkMsSUFBSSxZQUFZLEVBRXRGLENBQUM7UUFPRyxPQUFFLEdBQUcsZ0JBQWdCLENBQUM7UUFDdEIsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUVaLGNBQVMsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUVqRCx5QkFBb0IsR0FBRyxXQUFXLENBQUM7UUFDbkMsbUJBQWMsR0FB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QXVCLENBQUMsTUFBTTtRQUMvQyxVQUFVLEVBQUU7WUFDVixPQUFPLENBQUMsWUFBWSxFQUFFO2dCQUNwQixLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQ2xFLEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDaEUsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM1RCxDQUFDO1NBQ0g7S0FDRixDQUFDO0lBd0JHLFdBQUEsUUFBUSxFQUFFLENBQUE7cUNBRkEsVUFBVTtRQUNMLGlCQUFpQjtRQUNMLE1BQU07R0F2QnpCLG1CQUFtQixDQXlHL0I7U0F6R1ksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBWaWV3Q2hpbGQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT3B0aW9uYWwsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzdGF0ZSwgc3R5bGUsIHRyaWdnZXIsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IFJvdXRlckxpbmtXaXRoSHJlZiwgUm91dGVyLCBOYXZpZ2F0aW9uRW5kIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElBY2NvcmRpb25BbmltYXRpb25TdGF0ZSB7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGFjY29yZGlvbkVsOiBFbGVtZW50UmVmO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgZXhwb3J0QXM6ICdzYkl0ZW1Cb2R5JyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbS1ib2R5LCBtZGItYWNjb3JkaW9uLWl0ZW0tYm9keScsXG4gIHRlbXBsYXRlVXJsOiAnc2ItaXRlbS5ib2R5Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9uczogW1xuICAgIHRyaWdnZXIoJ2V4cGFuZEJvZHknLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCB2aXNpYmlsaXR5OiAnaGlkZGVuJyB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonLCB2aXNpYmlsaXR5OiAndmlzaWJsZScgfSkpLFxuICAgICAgdHJhbnNpdGlvbignZXhwYW5kZWQgPD0+IGNvbGxhcHNlZCcsIGFuaW1hdGUoJzUwMG1zIGVhc2UnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNCSXRlbUJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBjdXN0b21DbGFzczogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKSBhbmltYXRpb25TdGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPElBY2NvcmRpb25BbmltYXRpb25TdGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPFxuICAgIElBY2NvcmRpb25BbmltYXRpb25TdGF0ZVxuICA+KCk7XG4gIEBDb250ZW50Q2hpbGRyZW4oUm91dGVyTGlua1dpdGhIcmVmKSByb3V0ZXJMaW5rczogUXVlcnlMaXN0PFJvdXRlckxpbmtXaXRoSHJlZj47XG5cbiAgQFZpZXdDaGlsZCgnYm9keScsIHsgc3RhdGljOiB0cnVlIH0pIGJvZHlFbDogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgYXV0b0V4cGFuZDogYm9vbGVhbjtcbiAgcHVibGljIGNvbGxhcHNlZDogYm9vbGVhbjtcbiAgcHVibGljIGlkID0gYG1kYi1hY2NvcmRpb24tYDtcbiAgcHVibGljIGhlaWdodCA9ICcwJztcblxuICBwcml2YXRlIF9kZXN0cm95JDogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgYXJpYUxhYmVsbGVkQnkgPSAnJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWw6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIHRvZ2dsZShjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbGxhcHNlZFxuICAgICAgICA/ICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2NvbGxhcHNlZCcpXG4gICAgICAgIDogKHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnZXhwYW5kZWQnKTtcblxuICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBhbmltYXRpb25DYWxsYmFjaygpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlLmVtaXQoe1xuICAgICAgc3RhdGU6IHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUsXG4gICAgICBhY2NvcmRpb25FbDogdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCxcbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cpIHtcbiAgICAgIGNvbnN0IHBhdGhTdHJhdGVneVVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgIGNvbnN0IGhhc2hTdHJhdGVneVVybCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgY29uc3QgYWN0aXZlTGluayA9IHRoaXMucm91dGVyTGlua3MuZmluZCgobGluazogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IGxpbmsuaHJlZi5zcGxpdCgnPycpWzFdO1xuXG4gICAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgbGluay5ocmVmLnNwbGl0KCc/JylbMF0gPT09IHBhdGhTdHJhdGVneVVybCB8fFxuICAgICAgICAgICAgbGluay5ocmVmLnNwbGl0KCc/JylbMF0gPT09IGhhc2hTdHJhdGVneVVybFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGxpbmsuaHJlZiA9PT0gcGF0aFN0cmF0ZWd5VXJsIHx8IGxpbmsuaHJlZiA9PT0gaGFzaFN0cmF0ZWd5VXJsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHNiSXRlbSA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgICAgaWYgKGFjdGl2ZUxpbmspIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCc7XG4gICAgICAgICAgaWYgKHNiSXRlbSkge1xuICAgICAgICAgICAgc2JJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgc2JJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWNvbGxhcHNlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgMTApO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlICE9PSAnY29sbGFwc2VkJyAmJiBhY3RpdmVMaW5rKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZXhwYW5kQW5pbWF0aW9uU3RhdGUgPSAnY29sbGFwc2VkJztcbiAgICAgICAgICBpZiAoc2JJdGVtKSB7XG4gICAgICAgICAgICBzYkl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBzYkl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtY29sbGFwc2VkJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jb2xsYXBzZWRcbiAgICAgICAgPyAodGhpcy5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnKVxuICAgICAgICA6ICh0aGlzLmV4cGFuZEFuaW1hdGlvblN0YXRlID0gJ2V4cGFuZGVkJyk7XG5cbiAgICAgIGlmICh0aGlzLnJvdXRlciAmJiB0aGlzLmF1dG9FeHBhbmQpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpLFxuICAgICAgICAgICAgZmlsdGVyKGV2ZW50ID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW5TaWRlbmF2T25BY3RpdmVMaW5rKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5fZGVzdHJveSQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19