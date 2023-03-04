import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, OnInit, Renderer2, NgZone, Input, AfterViewInit } from '@angular/core';
import { ScrollSpyService } from './scroll-spy.service';
let ScrollSpyElementDirective = class ScrollSpyElementDirective {
    constructor(el, renderer, ngZone, scrollSpyService) {
        this.el = el;
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.scrollSpyService = scrollSpyService;
        this.offset = 0;
    }
    get scrollSpyId() { return this._scrollSpyId; }
    set scrollSpyId(newId) {
        if (newId) {
            this._scrollSpyId = newId;
        }
    }
    isElementInViewport() {
        const scrollTop = this.el.nativeElement.parentElement.scrollTop;
        const elTop = this.el.nativeElement.offsetTop - this.offset;
        const elHeight = this.el.nativeElement.offsetHeight;
        return (scrollTop >= elTop && scrollTop < elTop + elHeight);
    }
    updateActiveState(scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.removeActiveLinks(scrollSpyId);
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
        }
    }
    onScroll() {
        this.updateActiveState(this.scrollSpyId, this.id);
    }
    listenToScroll() {
        this.renderer.listen(this.el.nativeElement.parentElement, 'scroll', () => {
            this.onScroll();
        });
    }
    ngOnInit() {
        this.id = this.el.nativeElement.id;
        this.renderer.setStyle(this.el.nativeElement.parentElement, 'position', 'relative');
        this.ngZone.runOutsideAngular(this.listenToScroll.bind(this));
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.updateActiveState(this.scrollSpyId, this.id);
        }, 0);
    }
};
ScrollSpyElementDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ScrollSpyService }
];
__decorate([
    Input('mdbScrollSpyElement'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ScrollSpyElementDirective.prototype, "scrollSpyId", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScrollSpyElementDirective.prototype, "offset", void 0);
ScrollSpyElementDirective = __decorate([
    Directive({
        selector: '[mdbScrollSpyElement]'
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        NgZone,
        ScrollSpyService])
], ScrollSpyElementDirective);
export { ScrollSpyElementDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS1lbGVtZW50LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc2Nyb2xsLXNweS9zY3JvbGwtc3B5LWVsZW1lbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBS3hELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBY3BDLFlBQ1UsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLE1BQWMsRUFDZCxnQkFBa0M7UUFIbEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFObkMsV0FBTSxHQUFHLENBQUMsQ0FBQztJQU9qQixDQUFDO0lBZkosSUFBSSxXQUFXLEtBQWEsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2RCxJQUFJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBWUQsbUJBQW1CO1FBQ2pCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDaEUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO1FBRXBELE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSyxJQUFJLFNBQVMsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELGlCQUFpQixDQUFDLFdBQW1CLEVBQUUsRUFBVTtRQUMvQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUN2RSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFFcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxlQUFlO1FBQ2IsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwRCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDO0NBQ0YsQ0FBQTs7WUEzQ2UsVUFBVTtZQUNKLFNBQVM7WUFDWCxNQUFNO1lBQ0ksZ0JBQWdCOztBQWQ1QztJQURDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzs7OzREQUMwQjtBQVE5QztJQUFSLEtBQUssRUFBRTs7eURBQVk7QUFaVCx5QkFBeUI7SUFIckMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHVCQUF1QjtLQUNsQyxDQUFDO3FDQWdCYyxVQUFVO1FBQ0osU0FBUztRQUNYLE1BQU07UUFDSSxnQkFBZ0I7R0FsQmpDLHlCQUF5QixDQTBEckM7U0ExRFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMixcbiAgTmdab25lLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNjcm9sbFNweVNlcnZpY2UgfSBmcm9tICcuL3Njcm9sbC1zcHkuc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJTY3JvbGxTcHlFbGVtZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsU3B5RWxlbWVudERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgaWQ6IHN0cmluZztcblxuICBASW5wdXQoJ21kYlNjcm9sbFNweUVsZW1lbnQnKVxuICBnZXQgc2Nyb2xsU3B5SWQoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3Njcm9sbFNweUlkOyB9XG4gIHNldCBzY3JvbGxTcHlJZChuZXdJZDogc3RyaW5nKSB7XG4gICAgaWYgKG5ld0lkKSB7XG4gICAgICB0aGlzLl9zY3JvbGxTcHlJZCA9IG5ld0lkO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9zY3JvbGxTcHlJZDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIG9mZnNldCA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHNjcm9sbFNweVNlcnZpY2U6IFNjcm9sbFNweVNlcnZpY2VcbiAgKSB7fVxuXG4gIGlzRWxlbWVudEluVmlld3BvcnQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIGNvbnN0IGVsVG9wID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIHRoaXMub2Zmc2V0O1xuICAgIGNvbnN0IGVsSGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgIHJldHVybiAoc2Nyb2xsVG9wID49IGVsVG9wICYmIHNjcm9sbFRvcCA8IGVsVG9wICsgZWxIZWlnaHQpO1xuICB9XG5cbiAgdXBkYXRlQWN0aXZlU3RhdGUoc2Nyb2xsU3B5SWQ6IHN0cmluZywgaWQ6IHN0cmluZykge1xuICAgIGlmICh0aGlzLmlzRWxlbWVudEluVmlld3BvcnQoKSkge1xuICAgICAgdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLnJlbW92ZUFjdGl2ZUxpbmtzKHNjcm9sbFNweUlkKTtcbiAgICAgIHRoaXMuc2Nyb2xsU3B5U2VydmljZS51cGRhdGVBY3RpdmVTdGF0ZShzY3JvbGxTcHlJZCwgaWQpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2Nyb2xsKCkge1xuICAgIHRoaXMudXBkYXRlQWN0aXZlU3RhdGUodGhpcy5zY3JvbGxTcHlJZCwgdGhpcy5pZCk7XG4gIH1cblxuICBsaXN0ZW5Ub1Njcm9sbCgpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmxpc3Rlbih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCwgJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIHRoaXMub25TY3JvbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaWQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaWQ7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCwgJ3Bvc2l0aW9uJywgJ3JlbGF0aXZlJyk7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcih0aGlzLmxpc3RlblRvU2Nyb2xsLmJpbmQodGhpcykpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVTdGF0ZSh0aGlzLnNjcm9sbFNweUlkLCB0aGlzLmlkKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuIl19