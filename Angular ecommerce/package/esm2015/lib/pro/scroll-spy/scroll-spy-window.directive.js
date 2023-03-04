import { __decorate, __metadata, __param } from "tslib";
import { Directive, ElementRef, OnInit, Inject, Renderer2, NgZone, Input, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollSpyService } from './scroll-spy.service';
let ScrollSpyWindowDirective = class ScrollSpyWindowDirective {
    constructor(document, el, renderer, ngZone, scrollSpyService) {
        this.document = document;
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
        const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;
        const elHeight = this.el.nativeElement.offsetHeight;
        const elTop = this.el.nativeElement.offsetTop - this.offset;
        const elBottom = elTop + elHeight;
        return (scrollTop >= elTop && scrollTop <= elBottom);
    }
    updateActiveState(scrollSpyId, id) {
        if (this.isElementInViewport()) {
            this.scrollSpyService.updateActiveState(scrollSpyId, id);
        }
        else {
            this.scrollSpyService.removeActiveState(scrollSpyId, id);
        }
    }
    onScroll() {
        this.updateActiveState(this.scrollSpyId, this.id);
    }
    listenToScroll() {
        this.renderer.listen(window, 'scroll', () => {
            this.onScroll();
        });
    }
    ngOnInit() {
        this.id = this.el.nativeElement.id;
        this.ngZone.runOutsideAngular(this.listenToScroll.bind(this));
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.updateActiveState(this.scrollSpyId, this.id);
        }, 0);
    }
};
ScrollSpyWindowDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef },
    { type: Renderer2 },
    { type: NgZone },
    { type: ScrollSpyService }
];
__decorate([
    Input('mdbScrollSpyWindow'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ScrollSpyWindowDirective.prototype, "scrollSpyId", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScrollSpyWindowDirective.prototype, "offset", void 0);
ScrollSpyWindowDirective = __decorate([
    Directive({
        selector: '[mdbScrollSpyWindow]'
    }),
    __param(0, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [Object, ElementRef,
        Renderer2,
        NgZone,
        ScrollSpyService])
], ScrollSpyWindowDirective);
export { ScrollSpyWindowDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS13aW5kb3cuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zY3JvbGwtc3B5L3Njcm9sbC1zcHktd2luZG93LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxFQUNOLEtBQUssRUFDTCxhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBS3hELElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBY25DLFlBQzRCLFFBQWEsRUFDL0IsRUFBYyxFQUNkLFFBQW1CLEVBQ25CLE1BQWMsRUFDZCxnQkFBa0M7UUFKaEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2QsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVBuQyxXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBUWpCLENBQUM7SUFoQkosSUFBSSxXQUFXLEtBQWEsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN2RCxJQUFJLFdBQVcsQ0FBQyxLQUFhO1FBQzNCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBYUQsbUJBQW1CO1FBQ2pCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUYsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDO1FBQ3BELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVELE1BQU0sUUFBUSxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUM7UUFFbEMsT0FBTyxDQUFDLFNBQVMsSUFBSSxLQUFLLElBQUksU0FBUyxJQUFJLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQixFQUFFLEVBQVU7UUFDL0MsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRTtZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzFEO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztDQUNGLENBQUE7OzRDQTdDSSxNQUFNLFNBQUMsUUFBUTtZQUNKLFVBQVU7WUFDSixTQUFTO1lBQ1gsTUFBTTtZQUNJLGdCQUFnQjs7QUFmNUM7SUFEQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7OzsyREFDMkI7QUFROUM7SUFBUixLQUFLLEVBQUU7O3dEQUFZO0FBWlQsd0JBQXdCO0lBSHBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxzQkFBc0I7S0FDakMsQ0FBQztJQWdCRyxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTs2Q0FDTCxVQUFVO1FBQ0osU0FBUztRQUNYLE1BQU07UUFDSSxnQkFBZ0I7R0FuQmpDLHdCQUF3QixDQTREcEM7U0E1RFksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBOZ1pvbmUsXG4gIElucHV0LFxuICBBZnRlclZpZXdJbml0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU2Nyb2xsU3B5U2VydmljZSB9IGZyb20gJy4vc2Nyb2xsLXNweS5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlNjcm9sbFNweVdpbmRvd10nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNweVdpbmRvd0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgaWQ6IHN0cmluZztcblxuICBASW5wdXQoJ21kYlNjcm9sbFNweVdpbmRvdycpXG4gIGdldCBzY3JvbGxTcHlJZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc2Nyb2xsU3B5SWQ7IH1cbiAgc2V0IHNjcm9sbFNweUlkKG5ld0lkOiBzdHJpbmcpIHtcbiAgICBpZiAobmV3SWQpIHtcbiAgICAgIHRoaXMuX3Njcm9sbFNweUlkID0gbmV3SWQ7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3Njcm9sbFNweUlkOiBzdHJpbmc7XG5cbiAgQElucHV0KCkgb2Zmc2V0ID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHNjcm9sbFNweVNlcnZpY2U6IFNjcm9sbFNweVNlcnZpY2VcbiAgKSB7fVxuXG4gIGlzRWxlbWVudEluVmlld3BvcnQoKSB7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IHRoaXMuZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgY29uc3QgZWxIZWlnaHQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgIGNvbnN0IGVsVG9wID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFRvcCAtIHRoaXMub2Zmc2V0O1xuICAgIGNvbnN0IGVsQm90dG9tID0gZWxUb3AgKyBlbEhlaWdodDtcblxuICAgIHJldHVybiAoc2Nyb2xsVG9wID49IGVsVG9wICYmIHNjcm9sbFRvcCA8PSBlbEJvdHRvbSk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmVTdGF0ZShzY3JvbGxTcHlJZDogc3RyaW5nLCBpZDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuaXNFbGVtZW50SW5WaWV3cG9ydCgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFNweVNlcnZpY2UudXBkYXRlQWN0aXZlU3RhdGUoc2Nyb2xsU3B5SWQsIGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zY3JvbGxTcHlTZXJ2aWNlLnJlbW92ZUFjdGl2ZVN0YXRlKHNjcm9sbFNweUlkLCBpZCk7XG4gICAgfVxuICB9XG5cbiAgb25TY3JvbGwoKSB7XG4gICAgdGhpcy51cGRhdGVBY3RpdmVTdGF0ZSh0aGlzLnNjcm9sbFNweUlkLCB0aGlzLmlkKTtcbiAgfVxuXG4gIGxpc3RlblRvU2Nyb2xsKCkge1xuICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHdpbmRvdywgJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgIHRoaXMub25TY3JvbGwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaWQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaWQ7XG5cbiAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcih0aGlzLmxpc3RlblRvU2Nyb2xsLmJpbmQodGhpcykpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVBY3RpdmVTdGF0ZSh0aGlzLnNjcm9sbFNweUlkLCB0aGlzLmlkKTtcbiAgICB9LCAwKTtcbiAgfVxufVxuIl19