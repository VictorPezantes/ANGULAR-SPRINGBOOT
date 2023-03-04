'use strict';
import { __decorate, __metadata, __param } from "tslib";
import { Directive, ElementRef, Input, OnDestroy, AfterViewInit } from '@angular/core';
import { computedStyle } from './computed.style';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
let MdbStickyDirective = class MdbStickyDirective {
    constructor(el, platformId) {
        this.isBrowser = false;
        this.stickyOffsetTop = 0;
        this.scrollHandler = () => {
            const parentRect = this.el.parentElement.getBoundingClientRect();
            const bodyRect = document.body.getBoundingClientRect();
            let dynProps;
            if (this.original.float === 'right') {
                const right = bodyRect.right - parentRect.right + this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (this.original.float === 'left') {
                const left = parentRect.left - bodyRect.left + this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                dynProps = { width: parentRect.width + 'px' };
            }
            if (this.original.marginTop +
                this.original.marginBottom +
                this.original.boundingClientRect.height +
                this.stickyOffsetTop >=
                parentRect.bottom) {
                /**
                 * stikcy element reached to the bottom of the container
                 */
                const floatAdjustment = this.original.float === 'right'
                    ? { right: 0 }
                    : this.original.float === 'left'
                        ? { left: 0 }
                        : {};
                Object.assign(this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0,
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + this.original.marginTop + this.stickyOffsetTop >
                this.original.offsetTop) {
                /**
                 * stikcy element is in the middle of container
                 */
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (this.original.float !== 'left' && this.original.float !== 'right' && !this.fillerEl) {
                    this.fillerEl = document.createElement('div');
                    this.fillerEl.style.height = this.el.offsetHeight + 'px';
                    this.parentEl.insertBefore(this.fillerEl, this.el);
                }
                Object.assign(this.el.style, {
                    position: 'fixed',
                    float: 'none',
                    top: this.stickyOffsetTop + 'px',
                    bottom: 'inherit',
                }, dynProps);
            }
            else {
                /**
                 * stikcy element is in the original position
                 */
                if (this.fillerEl) {
                    this.parentEl.removeChild(this.fillerEl); // IE11 does not work with el.remove()
                    this.fillerEl = undefined;
                }
                Object.assign(this.el.style, {
                    position: this.original.position,
                    float: this.original.float,
                    top: this.original.top,
                    bottom: this.original.bottom,
                    width: this.original.width,
                    left: this.original.left,
                }, dynProps);
            }
        };
        this.el = this.el = el.nativeElement;
        this.parentEl = this.el.parentElement;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    ngAfterViewInit() {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            const cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        if (this.stickyAfterAlias) {
            const cetStickyAfterEl = document.querySelector(this.stickyAfterAlias);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        const allowedPositions = ['absolute', 'fixed', 'relative'];
        const parentElPosition = computedStyle(this.parentEl, 'position');
        if (allowedPositions.indexOf(parentElPosition) === -1) {
            // inherit, initial, unset
            this.parentEl.style.position = 'relative';
        }
        this.diff = {
            top: this.el.offsetTop - this.parentEl.offsetTop,
            left: this.el.offsetLeft - this.parentEl.offsetLeft,
        };
        if (this.isBrowser) {
            const elRect = this.el.getBoundingClientRect();
            this.el.getBoundingClientRect();
            this.original = {
                boundingClientRect: elRect,
                position: computedStyle(this.el, 'position'),
                float: computedStyle(this.el, 'float'),
                top: computedStyle(this.el, 'top'),
                bottom: computedStyle(this.el, 'bottom'),
                width: computedStyle(this.el, 'width'),
                left: '',
                offsetTop: this.el.offsetTop,
                offsetLeft: this.el.offsetLeft,
                marginTop: parseInt(computedStyle(this.el, 'marginTop'), 10),
                marginBottom: parseInt(computedStyle(this.el, 'marginBottom'), 10),
                marginLeft: parseInt(computedStyle(this.el, 'marginLeft'), 10),
                marginRight: parseInt(computedStyle(this.el, 'marginLeft'), 10),
            };
        }
        this.attach();
    }
    ngOnDestroy() {
        this.detach();
    }
    attach() {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    }
    detach() {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    }
};
MdbStickyDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], MdbStickyDirective.prototype, "stickyAfter", void 0);
__decorate([
    Input('sticky-after'),
    __metadata("design:type", String)
], MdbStickyDirective.prototype, "stickyAfterAlias", void 0);
MdbStickyDirective = __decorate([
    Directive({
        selector: '[mdbSticky]',
    }),
    __param(1, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [ElementRef, String])
], MdbStickyDirective);
export { MdbStickyDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RpY2t5LWNvbnRlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zdGlja3ktY29udGVudC9zdGlja3ktY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOztBQUViLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUtwRCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQWM3QixZQUFZLEVBQWMsRUFBdUIsVUFBa0I7UUFWbkUsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUtsQixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQThFcEIsa0JBQWEsR0FBRyxHQUFHLEVBQUU7WUFDbkIsTUFBTSxVQUFVLEdBQWUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3RSxNQUFNLFFBQVEsR0FBZSxRQUFRLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDbkUsSUFBSSxRQUFRLENBQUM7WUFFYixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtnQkFDbkMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2dCQUM1RSxRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxHQUFHLElBQUksRUFBRSxDQUFDO2FBQ3BDO2lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO2dCQUN6QyxNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQ3hFLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxFQUFFLENBQUM7YUFDbEM7aUJBQU07Z0JBQ0wsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxFQUFFLENBQUM7YUFDL0M7WUFFRCxJQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztnQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZO2dCQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLE1BQU07Z0JBQ3ZDLElBQUksQ0FBQyxlQUFlO2dCQUN0QixVQUFVLENBQUMsTUFBTSxFQUNqQjtnQkFDQTs7bUJBRUc7Z0JBQ0gsTUFBTSxlQUFlLEdBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLE9BQU87b0JBQzdCLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7b0JBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLE1BQU07d0JBQ2hDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7d0JBQ2IsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDVCxNQUFNLENBQUMsTUFBTSxDQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUNiO29CQUNFLFFBQVEsRUFBRSxVQUFVO29CQUNwQixLQUFLLEVBQUUsTUFBTTtvQkFDYixHQUFHLEVBQUUsU0FBUztvQkFDZCxNQUFNLEVBQUUsQ0FBQztpQkFDVixFQUNELFFBQVEsRUFDUixlQUFlLENBQ2hCLENBQUM7YUFDSDtpQkFBTSxJQUNMLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWU7Z0JBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUN2QjtnQkFDQTs7bUJBRUc7Z0JBRUgsNEZBQTRGO2dCQUM1RixJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUN2RixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUNwRDtnQkFFRCxNQUFNLENBQUMsTUFBTSxDQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUNiO29CQUNFLFFBQVEsRUFBRSxPQUFPO29CQUNqQixLQUFLLEVBQUUsTUFBTTtvQkFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJO29CQUNoQyxNQUFNLEVBQUUsU0FBUztpQkFDbEIsRUFDRCxRQUFRLENBQ1QsQ0FBQzthQUNIO2lCQUFNO2dCQUNMOzttQkFFRztnQkFDSCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztvQkFDaEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUM7aUJBQzNCO2dCQUNELE1BQU0sQ0FBQyxNQUFNLENBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQ2I7b0JBQ0UsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUTtvQkFDaEMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztvQkFDMUIsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRztvQkFDdEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTTtvQkFDNUIsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSztvQkFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtpQkFDekIsRUFDRCxRQUFRLENBQ1QsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDO1FBaEtBLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7UUFFdkMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDbEUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUN4RTtTQUNGO1FBRUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3ZFLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUM7YUFDeEU7U0FDRjtRQUVELHVDQUF1QztRQUN2QyxNQUFNLGdCQUFnQixHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMzRCxNQUFNLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xFLElBQUksZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDckQsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1YsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztZQUNoRCxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVO1NBQ3BELENBQUM7UUFFRixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQy9DLElBQUksQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLGtCQUFrQixFQUFFLE1BQU07Z0JBQzFCLFFBQVEsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUM7Z0JBQzVDLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUM7Z0JBQ3RDLEdBQUcsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7Z0JBQ2xDLE1BQU0sRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUM7Z0JBQ3hDLEtBQUssRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUM7Z0JBQ3RDLElBQUksRUFBRSxFQUFFO2dCQUNSLFNBQVMsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVM7Z0JBQzVCLFVBQVUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVU7Z0JBQzlCLFNBQVMsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM1RCxZQUFZLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbEUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzlELFdBQVcsRUFBRSxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsWUFBWSxDQUFDLEVBQUUsRUFBRSxDQUFDO2FBQ2hFLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDM0QsQ0FBQztDQTJGRixDQUFBOztZQWxLaUIsVUFBVTt5Q0FBRyxNQUFNLFNBQUMsV0FBVzs7QUFidEM7SUFBUixLQUFLLEVBQUU7O3VEQUFxQjtBQUVOO0lBQXRCLEtBQUssQ0FBQyxjQUFjLENBQUM7OzREQUEwQjtBQUhyQyxrQkFBa0I7SUFIOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7S0FDeEIsQ0FBQztJQWU2QixXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtxQ0FBaEMsVUFBVTtHQWRmLGtCQUFrQixDQWdMOUI7U0FoTFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbXB1dGVkU3R5bGUgfSBmcm9tICcuL2NvbXB1dGVkLnN0eWxlJztcblxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU3RpY2t5XScsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlN0aWNreURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHN0aWNreUFmdGVyOiBzdHJpbmc7IC8vIGNzcyBzZWxlY3RvciB0byBiZSBzdGlja3kgYWZ0ZXJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWlucHV0LXJlbmFtZVxuICBASW5wdXQoJ3N0aWNreS1hZnRlcicpIHN0aWNreUFmdGVyQWxpYXM6IHN0cmluZzsgLy8gY3NzIHNlbGVjdG9yIHRvIGJlIHN0aWNreSBhZnRlclxuICBpc0Jyb3dzZXIgPSBmYWxzZTtcblxuICBlbDogSFRNTEVsZW1lbnQgfCBhbnk7XG4gIHBhcmVudEVsOiBIVE1MRWxlbWVudCB8IGFueTtcbiAgZmlsbGVyRWw6IEhUTUxFbGVtZW50IHwgYW55O1xuICBzdGlja3lPZmZzZXRUb3AgPSAwO1xuXG4gIGRpZmY6IGFueTtcbiAgb3JpZ2luYWw6IGFueTtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nKSB7XG4gICAgdGhpcy5lbCA9IHRoaXMuZWwgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMucGFyZW50RWwgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQ7XG4gICAgdGhpcy5pc0Jyb3dzZXIgPSBpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmVsLnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcblxuICAgIGlmICh0aGlzLnN0aWNreUFmdGVyKSB7XG4gICAgICBjb25zdCBjZXRTdGlja3lBZnRlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnN0aWNreUFmdGVyKTtcbiAgICAgIGlmIChjZXRTdGlja3lBZnRlckVsKSB7XG4gICAgICAgIHRoaXMuc3RpY2t5T2Zmc2V0VG9wID0gY2V0U3RpY2t5QWZ0ZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RpY2t5QWZ0ZXJBbGlhcykge1xuICAgICAgY29uc3QgY2V0U3RpY2t5QWZ0ZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zdGlja3lBZnRlckFsaWFzKTtcbiAgICAgIGlmIChjZXRTdGlja3lBZnRlckVsKSB7XG4gICAgICAgIHRoaXMuc3RpY2t5T2Zmc2V0VG9wID0gY2V0U3RpY2t5QWZ0ZXJFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSBwYXJlbnQgcmVsYXRpdmVseSBwb3NpdGlvbmVkXG4gICAgY29uc3QgYWxsb3dlZFBvc2l0aW9ucyA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnLCAncmVsYXRpdmUnXTtcbiAgICBjb25zdCBwYXJlbnRFbFBvc2l0aW9uID0gY29tcHV0ZWRTdHlsZSh0aGlzLnBhcmVudEVsLCAncG9zaXRpb24nKTtcbiAgICBpZiAoYWxsb3dlZFBvc2l0aW9ucy5pbmRleE9mKHBhcmVudEVsUG9zaXRpb24pID09PSAtMSkge1xuICAgICAgLy8gaW5oZXJpdCwgaW5pdGlhbCwgdW5zZXRcbiAgICAgIHRoaXMucGFyZW50RWwuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgIH1cblxuICAgIHRoaXMuZGlmZiA9IHtcbiAgICAgIHRvcDogdGhpcy5lbC5vZmZzZXRUb3AgLSB0aGlzLnBhcmVudEVsLm9mZnNldFRvcCxcbiAgICAgIGxlZnQ6IHRoaXMuZWwub2Zmc2V0TGVmdCAtIHRoaXMucGFyZW50RWwub2Zmc2V0TGVmdCxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaXNCcm93c2VyKSB7XG4gICAgICBjb25zdCBlbFJlY3QgPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHRoaXMub3JpZ2luYWwgPSB7XG4gICAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdDogZWxSZWN0LFxuICAgICAgICBwb3NpdGlvbjogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAncG9zaXRpb24nKSxcbiAgICAgICAgZmxvYXQ6IGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ2Zsb2F0JyksXG4gICAgICAgIHRvcDogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAndG9wJyksXG4gICAgICAgIGJvdHRvbTogY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnYm90dG9tJyksXG4gICAgICAgIHdpZHRoOiBjb21wdXRlZFN0eWxlKHRoaXMuZWwsICd3aWR0aCcpLFxuICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgb2Zmc2V0VG9wOiB0aGlzLmVsLm9mZnNldFRvcCxcbiAgICAgICAgb2Zmc2V0TGVmdDogdGhpcy5lbC5vZmZzZXRMZWZ0LFxuICAgICAgICBtYXJnaW5Ub3A6IHBhcnNlSW50KGNvbXB1dGVkU3R5bGUodGhpcy5lbCwgJ21hcmdpblRvcCcpLCAxMCksXG4gICAgICAgIG1hcmdpbkJvdHRvbTogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luQm90dG9tJyksIDEwKSxcbiAgICAgICAgbWFyZ2luTGVmdDogcGFyc2VJbnQoY29tcHV0ZWRTdHlsZSh0aGlzLmVsLCAnbWFyZ2luTGVmdCcpLCAxMCksXG4gICAgICAgIG1hcmdpblJpZ2h0OiBwYXJzZUludChjb21wdXRlZFN0eWxlKHRoaXMuZWwsICdtYXJnaW5MZWZ0JyksIDEwKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5hdHRhY2goKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGV0YWNoKCk7XG4gIH1cblxuICBhdHRhY2goKTogdm9pZCB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBkZXRhY2goKTogdm9pZCB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuc2Nyb2xsSGFuZGxlcik7XG4gIH1cblxuICBzY3JvbGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudFJlY3Q6IENsaWVudFJlY3QgPSB0aGlzLmVsLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgYm9keVJlY3Q6IENsaWVudFJlY3QgPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCBkeW5Qcm9wcztcblxuICAgIGlmICh0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAncmlnaHQnKSB7XG4gICAgICBjb25zdCByaWdodCA9IGJvZHlSZWN0LnJpZ2h0IC0gcGFyZW50UmVjdC5yaWdodCArIHRoaXMub3JpZ2luYWwubWFyZ2luUmlnaHQ7XG4gICAgICBkeW5Qcm9wcyA9IHsgcmlnaHQ6IHJpZ2h0ICsgJ3B4JyB9O1xuICAgIH0gZWxzZSBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCA9PT0gJ2xlZnQnKSB7XG4gICAgICBjb25zdCBsZWZ0ID0gcGFyZW50UmVjdC5sZWZ0IC0gYm9keVJlY3QubGVmdCArIHRoaXMub3JpZ2luYWwubWFyZ2luTGVmdDtcbiAgICAgIGR5blByb3BzID0geyBsZWZ0OiBsZWZ0ICsgJ3B4JyB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBkeW5Qcm9wcyA9IHsgd2lkdGg6IHBhcmVudFJlY3Qud2lkdGggKyAncHgnIH07XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgdGhpcy5vcmlnaW5hbC5tYXJnaW5Ub3AgK1xuICAgICAgICB0aGlzLm9yaWdpbmFsLm1hcmdpbkJvdHRvbSArXG4gICAgICAgIHRoaXMub3JpZ2luYWwuYm91bmRpbmdDbGllbnRSZWN0LmhlaWdodCArXG4gICAgICAgIHRoaXMuc3RpY2t5T2Zmc2V0VG9wID49XG4gICAgICBwYXJlbnRSZWN0LmJvdHRvbVxuICAgICkge1xuICAgICAgLyoqXG4gICAgICAgKiBzdGlrY3kgZWxlbWVudCByZWFjaGVkIHRvIHRoZSBib3R0b20gb2YgdGhlIGNvbnRhaW5lclxuICAgICAgICovXG4gICAgICBjb25zdCBmbG9hdEFkanVzdG1lbnQgPVxuICAgICAgICB0aGlzLm9yaWdpbmFsLmZsb2F0ID09PSAncmlnaHQnXG4gICAgICAgICAgPyB7IHJpZ2h0OiAwIH1cbiAgICAgICAgICA6IHRoaXMub3JpZ2luYWwuZmxvYXQgPT09ICdsZWZ0J1xuICAgICAgICAgID8geyBsZWZ0OiAwIH1cbiAgICAgICAgICA6IHt9O1xuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgdGhpcy5lbC5zdHlsZSxcbiAgICAgICAge1xuICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgIGZsb2F0OiAnbm9uZScsXG4gICAgICAgICAgdG9wOiAnaW5oZXJpdCcsXG4gICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICB9LFxuICAgICAgICBkeW5Qcm9wcyxcbiAgICAgICAgZmxvYXRBZGp1c3RtZW50XG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBwYXJlbnRSZWN0LnRvcCAqIC0xICsgdGhpcy5vcmlnaW5hbC5tYXJnaW5Ub3AgKyB0aGlzLnN0aWNreU9mZnNldFRvcCA+XG4gICAgICB0aGlzLm9yaWdpbmFsLm9mZnNldFRvcFxuICAgICkge1xuICAgICAgLyoqXG4gICAgICAgKiBzdGlrY3kgZWxlbWVudCBpcyBpbiB0aGUgbWlkZGxlIG9mIGNvbnRhaW5lclxuICAgICAgICovXG5cbiAgICAgIC8vIGlmIG5vdCBmbG9hdGluZywgYWRkIGFuIGVtcHR5IGZpbGxlciBlbGVtZW50LCBzaW5jZSB0aGUgb3JpZ2luYWwgZWxlbWVudHMgYmVjYW1lcyAnZml4ZWQnXG4gICAgICBpZiAodGhpcy5vcmlnaW5hbC5mbG9hdCAhPT0gJ2xlZnQnICYmIHRoaXMub3JpZ2luYWwuZmxvYXQgIT09ICdyaWdodCcgJiYgIXRoaXMuZmlsbGVyRWwpIHtcbiAgICAgICAgdGhpcy5maWxsZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLmZpbGxlckVsLnN0eWxlLmhlaWdodCA9IHRoaXMuZWwub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5pbnNlcnRCZWZvcmUodGhpcy5maWxsZXJFbCwgdGhpcy5lbCk7XG4gICAgICB9XG5cbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHRoaXMuZWwuc3R5bGUsXG4gICAgICAgIHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJywgLy8gZml4ZWQgaXMgYSBsb3Qgc21vb3RoZXIgdGhhbiBhYnNvbHV0ZVxuICAgICAgICAgIGZsb2F0OiAnbm9uZScsXG4gICAgICAgICAgdG9wOiB0aGlzLnN0aWNreU9mZnNldFRvcCArICdweCcsXG4gICAgICAgICAgYm90dG9tOiAnaW5oZXJpdCcsXG4gICAgICAgIH0sXG4gICAgICAgIGR5blByb3BzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvKipcbiAgICAgICAqIHN0aWtjeSBlbGVtZW50IGlzIGluIHRoZSBvcmlnaW5hbCBwb3NpdGlvblxuICAgICAgICovXG4gICAgICBpZiAodGhpcy5maWxsZXJFbCkge1xuICAgICAgICB0aGlzLnBhcmVudEVsLnJlbW92ZUNoaWxkKHRoaXMuZmlsbGVyRWwpOyAvLyBJRTExIGRvZXMgbm90IHdvcmsgd2l0aCBlbC5yZW1vdmUoKVxuICAgICAgICB0aGlzLmZpbGxlckVsID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgdGhpcy5lbC5zdHlsZSxcbiAgICAgICAge1xuICAgICAgICAgIHBvc2l0aW9uOiB0aGlzLm9yaWdpbmFsLnBvc2l0aW9uLFxuICAgICAgICAgIGZsb2F0OiB0aGlzLm9yaWdpbmFsLmZsb2F0LFxuICAgICAgICAgIHRvcDogdGhpcy5vcmlnaW5hbC50b3AsXG4gICAgICAgICAgYm90dG9tOiB0aGlzLm9yaWdpbmFsLmJvdHRvbSxcbiAgICAgICAgICB3aWR0aDogdGhpcy5vcmlnaW5hbC53aWR0aCxcbiAgICAgICAgICBsZWZ0OiB0aGlzLm9yaWdpbmFsLmxlZnQsXG4gICAgICAgIH0sXG4gICAgICAgIGR5blByb3BzXG4gICAgICApO1xuICAgIH1cbiAgfTtcbn1cbiJdfQ==