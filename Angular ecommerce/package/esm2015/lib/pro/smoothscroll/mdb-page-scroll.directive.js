import { __decorate, __metadata, __param } from "tslib";
import { Directive, Input, Output, EventEmitter, Inject, Optional, HostListener, } from '@angular/core';
import { Router, NavigationEnd, NavigationError, NavigationCancel, UrlTree } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from './mdb-page-scroll.service';
import { PageScrollInstance } from './mdb-page-scroll.instance';
import { PageScrollUtilService as Util } from './mdb-page-scroll-util.service';
let PageScrollDirective = class PageScrollDirective {
    constructor(pageScrollService, router, document) {
        this.pageScrollService = pageScrollService;
        this.router = router;
        this.pageScrollHorizontal = null;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollSpeed = null;
        this.pageScrollEasing = null;
        this.pageScrollAdjustHash = false;
        this.pageScroll = null;
        this.pageScrollFinish = new EventEmitter();
        this.document = document;
    }
    ngOnChanges() {
        // Some inputs changed, reset the pageScrollInstance
        this.pageScrollInstance = undefined;
    }
    ngOnDestroy() {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    }
    generatePageScrollInstance() {
        if (Util.isUndefinedOrNull(this.pageScrollInstance)) {
            this.pageScrollInstance = PageScrollInstance.newInstance({
                document: this.document,
                scrollTarget: this.href,
                scrollingViews: null,
                namespace: this.pageScroll,
                verticalScrolling: !this.pageScrollHorizontal,
                pageScrollOffset: this.pageScrollOffset,
                pageScrollInterruptible: this.pageScrollInterruptible,
                pageScrollEasingLogic: this.pageScrollEasing,
                pageScrollDuration: this.pageScrollDuration,
                pageScrollSpeed: this.pageScrollSpeed,
                pageScrollFinishListener: this.pageScrollFinish,
            });
        }
        return this.pageScrollInstance;
    }
    pushRouterState() {
        if (this.pageScrollAdjustHash &&
            typeof this.pageScrollInstance.scrollTarget === 'string' &&
            this.pageScrollInstance.scrollTarget.substr(0, 1) === '#') {
            // "Navigate" to the current route again and this time set the fragment/hash
            this.router.navigate([], {
                fragment: this.pageScrollInstance.scrollTarget.substr(1),
                queryParamsHandling: 'preserve',
            });
        }
    }
    scroll() {
        const pageScrollInstance = this.generatePageScrollInstance();
        this.pushRouterState();
        this.pageScrollService.start(pageScrollInstance);
    }
    handleClick() {
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            let urlTree;
            if (typeof this.routerLink === 'string') {
                urlTree = this.router.parseUrl(this.routerLink);
            }
            else {
                urlTree = this.router.createUrlTree(this.routerLink);
            }
            if (!this.router.isActive(urlTree, true)) {
                // We need to navigate their first.
                // Navigation is handled by the routerLink directive
                // so we only need to listen for route change
                const subscription = this.router.events.subscribe(routerEvent => {
                    if (routerEvent instanceof NavigationEnd) {
                        subscription.unsubscribe();
                        this.scroll();
                    }
                    else if (routerEvent instanceof NavigationError ||
                        routerEvent instanceof NavigationCancel) {
                        subscription.unsubscribe();
                    }
                });
                return false; // to preventDefault()
            }
        }
        this.scroll();
        return false; // to preventDefault()
    }
};
PageScrollDirective.ctorParameters = () => [
    { type: PageScrollService },
    { type: Router, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], PageScrollDirective.prototype, "routerLink", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PageScrollDirective.prototype, "href", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PageScrollDirective.prototype, "pageScrollHorizontal", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PageScrollDirective.prototype, "pageScrollOffset", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PageScrollDirective.prototype, "pageScrollDuration", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PageScrollDirective.prototype, "pageScrollSpeed", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PageScrollDirective.prototype, "pageScrollEasing", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], PageScrollDirective.prototype, "pageScrollInterruptible", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PageScrollDirective.prototype, "pageScrollAdjustHash", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], PageScrollDirective.prototype, "pageScroll", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], PageScrollDirective.prototype, "pageScrollFinish", void 0);
__decorate([
    HostListener('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], PageScrollDirective.prototype, "handleClick", null);
PageScrollDirective = __decorate([
    Directive({
        selector: '[mdbPageScroll]',
    }),
    __param(1, Optional()),
    __param(2, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [PageScrollService,
        Router, Object])
], PageScrollDirective);
export { PageScrollDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLXBhZ2Utc2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc21vb3Roc2Nyb2xsL21kYi1wYWdlLXNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRVosTUFBTSxFQUNOLFFBQVEsRUFFUixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUkzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLElBQUksSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNL0UsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFpQjlCLFlBQ1UsaUJBQW9DLEVBQ3hCLE1BQWMsRUFDaEIsUUFBYTtRQUZ2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFoQnBCLHlCQUFvQixHQUFrQixJQUFJLENBQUM7UUFDM0MscUJBQWdCLEdBQWlCLElBQUksQ0FBQztRQUN0Qyx1QkFBa0IsR0FBaUIsSUFBSSxDQUFDO1FBQ3hDLG9CQUFlLEdBQWlCLElBQUksQ0FBQztRQUNyQyxxQkFBZ0IsR0FBc0IsSUFBSSxDQUFDO1FBRTNDLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUM3QixlQUFVLEdBQWlCLElBQUksQ0FBQztRQUV0QyxxQkFB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QWlCO0tBQzVCLENBQUM7SUFvQkcsV0FBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO3FDQUZVLGlCQUFpQjtRQUNoQixNQUFNO0dBbkJ6QixtQkFBbUIsQ0E0Ry9CO1NBNUdZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIE9uQ2hhbmdlcyxcbiAgSG9zdExpc3RlbmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkVycm9yLCBOYXZpZ2F0aW9uQ2FuY2VsLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFBhZ2VTY3JvbGxTZXJ2aWNlIH0gZnJvbSAnLi9tZGItcGFnZS1zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlU2Nyb2xsSW5zdGFuY2UgfSBmcm9tICcuL21kYi1wYWdlLXNjcm9sbC5pbnN0YW5jZSc7XG5pbXBvcnQgeyBQYWdlU2Nyb2xsVXRpbFNlcnZpY2UgYXMgVXRpbCB9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLXV0aWwuc2VydmljZSc7XG5pbXBvcnQgeyBFYXNpbmdMb2dpYyB9IGZyb20gJy4vbWRiLXBhZ2Utc2Nyb2xsLmNvbmZpZyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJQYWdlU2Nyb2xsXScsXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VTY3JvbGxEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHB1YmxpYyByb3V0ZXJMaW5rOiBhbnk7XG4gIEBJbnB1dCgpIHB1YmxpYyBocmVmOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyBwYWdlU2Nyb2xsSG9yaXpvbnRhbDogYm9vbGVhbiB8IGFueSA9IG51bGw7XG4gIEBJbnB1dCgpIHB1YmxpYyBwYWdlU2Nyb2xsT2Zmc2V0OiBudW1iZXIgfCBhbnkgPSBudWxsO1xuICBASW5wdXQoKSBwdWJsaWMgcGFnZVNjcm9sbER1cmF0aW9uOiBudW1iZXIgfCBhbnkgPSBudWxsO1xuICBASW5wdXQoKSBwdWJsaWMgcGFnZVNjcm9sbFNwZWVkOiBudW1iZXIgfCBhbnkgPSBudWxsO1xuICBASW5wdXQoKSBwdWJsaWMgcGFnZVNjcm9sbEVhc2luZzogRWFzaW5nTG9naWMgfCBhbnkgPSBudWxsO1xuICBASW5wdXQoKSBwdWJsaWMgcGFnZVNjcm9sbEludGVycnVwdGlibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHB1YmxpYyBwYWdlU2Nyb2xsQWRqdXN0SGFzaCA9IGZhbHNlO1xuICBASW5wdXQoKSBwdWJsaWMgcGFnZVNjcm9sbDogc3RyaW5nIHwgYW55ID0gbnVsbDtcblxuICBAT3V0cHV0KCkgcGFnZVNjcm9sbEZpbmlzaDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIHByaXZhdGUgcGFnZVNjcm9sbEluc3RhbmNlOiBQYWdlU2Nyb2xsSW5zdGFuY2UgfCBhbnk7XG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnZVNjcm9sbFNlcnZpY2U6IFBhZ2VTY3JvbGxTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdChET0NVTUVOVCkgZG9jdW1lbnQ6IGFueVxuICApIHtcbiAgICB0aGlzLmRvY3VtZW50ID0gPERvY3VtZW50PmRvY3VtZW50O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgLy8gU29tZSBpbnB1dHMgY2hhbmdlZCwgcmVzZXQgdGhlIHBhZ2VTY3JvbGxJbnN0YW5jZVxuICAgIHRoaXMucGFnZVNjcm9sbEluc3RhbmNlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFnZVNjcm9sbEluc3RhbmNlKSB7XG4gICAgICB0aGlzLnBhZ2VTY3JvbGxTZXJ2aWNlLnN0b3AodGhpcy5wYWdlU2Nyb2xsSW5zdGFuY2UpO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5lcmF0ZVBhZ2VTY3JvbGxJbnN0YW5jZSgpOiBQYWdlU2Nyb2xsSW5zdGFuY2UgfCBhbnkge1xuICAgIGlmIChVdGlsLmlzVW5kZWZpbmVkT3JOdWxsKHRoaXMucGFnZVNjcm9sbEluc3RhbmNlKSkge1xuICAgICAgdGhpcy5wYWdlU2Nyb2xsSW5zdGFuY2UgPSBQYWdlU2Nyb2xsSW5zdGFuY2UubmV3SW5zdGFuY2Uoe1xuICAgICAgICBkb2N1bWVudDogdGhpcy5kb2N1bWVudCxcbiAgICAgICAgc2Nyb2xsVGFyZ2V0OiB0aGlzLmhyZWYsXG4gICAgICAgIHNjcm9sbGluZ1ZpZXdzOiBudWxsLFxuICAgICAgICBuYW1lc3BhY2U6IHRoaXMucGFnZVNjcm9sbCxcbiAgICAgICAgdmVydGljYWxTY3JvbGxpbmc6ICF0aGlzLnBhZ2VTY3JvbGxIb3Jpem9udGFsLFxuICAgICAgICBwYWdlU2Nyb2xsT2Zmc2V0OiB0aGlzLnBhZ2VTY3JvbGxPZmZzZXQsXG4gICAgICAgIHBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlOiB0aGlzLnBhZ2VTY3JvbGxJbnRlcnJ1cHRpYmxlLFxuICAgICAgICBwYWdlU2Nyb2xsRWFzaW5nTG9naWM6IHRoaXMucGFnZVNjcm9sbEVhc2luZyxcbiAgICAgICAgcGFnZVNjcm9sbER1cmF0aW9uOiB0aGlzLnBhZ2VTY3JvbGxEdXJhdGlvbixcbiAgICAgICAgcGFnZVNjcm9sbFNwZWVkOiB0aGlzLnBhZ2VTY3JvbGxTcGVlZCxcbiAgICAgICAgcGFnZVNjcm9sbEZpbmlzaExpc3RlbmVyOiB0aGlzLnBhZ2VTY3JvbGxGaW5pc2gsXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGFnZVNjcm9sbEluc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBwdXNoUm91dGVyU3RhdGUoKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy5wYWdlU2Nyb2xsQWRqdXN0SGFzaCAmJlxuICAgICAgdHlwZW9mIHRoaXMucGFnZVNjcm9sbEluc3RhbmNlLnNjcm9sbFRhcmdldCA9PT0gJ3N0cmluZycgJiZcbiAgICAgIHRoaXMucGFnZVNjcm9sbEluc3RhbmNlLnNjcm9sbFRhcmdldC5zdWJzdHIoMCwgMSkgPT09ICcjJ1xuICAgICkge1xuICAgICAgLy8gXCJOYXZpZ2F0ZVwiIHRvIHRoZSBjdXJyZW50IHJvdXRlIGFnYWluIGFuZCB0aGlzIHRpbWUgc2V0IHRoZSBmcmFnbWVudC9oYXNoXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgICBmcmFnbWVudDogPHN0cmluZz50aGlzLnBhZ2VTY3JvbGxJbnN0YW5jZS5zY3JvbGxUYXJnZXQuc3Vic3RyKDEpLFxuICAgICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAncHJlc2VydmUnLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGwoKTogdm9pZCB7XG4gICAgY29uc3QgcGFnZVNjcm9sbEluc3RhbmNlID0gdGhpcy5nZW5lcmF0ZVBhZ2VTY3JvbGxJbnN0YW5jZSgpO1xuICAgIHRoaXMucHVzaFJvdXRlclN0YXRlKCk7XG4gICAgdGhpcy5wYWdlU2Nyb2xsU2VydmljZS5zdGFydChwYWdlU2Nyb2xsSW5zdGFuY2UpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgaGFuZGxlQ2xpY2soKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMucm91dGVyTGluayAmJiB0aGlzLnJvdXRlciAhPT0gbnVsbCAmJiB0aGlzLnJvdXRlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBsZXQgdXJsVHJlZTogVXJsVHJlZTtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5yb3V0ZXJMaW5rID09PSAnc3RyaW5nJykge1xuICAgICAgICB1cmxUcmVlID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwodGhpcy5yb3V0ZXJMaW5rKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybFRyZWUgPSB0aGlzLnJvdXRlci5jcmVhdGVVcmxUcmVlKHRoaXMucm91dGVyTGluayk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMucm91dGVyLmlzQWN0aXZlKHVybFRyZWUsIHRydWUpKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gbmF2aWdhdGUgdGhlaXIgZmlyc3QuXG4gICAgICAgIC8vIE5hdmlnYXRpb24gaXMgaGFuZGxlZCBieSB0aGUgcm91dGVyTGluayBkaXJlY3RpdmVcbiAgICAgICAgLy8gc28gd2Ugb25seSBuZWVkIHRvIGxpc3RlbiBmb3Igcm91dGUgY2hhbmdlXG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gPFN1YnNjcmlwdGlvbj50aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKFxuICAgICAgICAgIHJvdXRlckV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChyb3V0ZXJFdmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpIHtcbiAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICByb3V0ZXJFdmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvciB8fFxuICAgICAgICAgICAgICByb3V0ZXJFdmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWxcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gdG8gcHJldmVudERlZmF1bHQoKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNjcm9sbCgpO1xuICAgIHJldHVybiBmYWxzZTsgLy8gdG8gcHJldmVudERlZmF1bHQoKVxuICB9XG59XG4iXX0=