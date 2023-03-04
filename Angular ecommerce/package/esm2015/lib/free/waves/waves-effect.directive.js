import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, HostListener } from '@angular/core';
let WavesDirective = class WavesDirective {
    constructor(el) {
        this.el = el;
    }
    click(event) {
        if (!this.el.nativeElement.classList.contains('disabled')) {
            const button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            const xPos = event.clientX - button.getBoundingClientRect().left;
            const yPos = event.clientY - button.getBoundingClientRect().top;
            const tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            const ripple = button.appendChild(tmp);
            const top = yPos + 'px';
            const left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            const scale = 'scale(' + (button.clientWidth / 100) * 3 + ') translate(0,0)';
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            const duration = 750;
            // tslint:disable-next-line: deprecation
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    }
    removeRipple(button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(() => {
            ripple.style.opacity = '0';
            setTimeout(() => {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    }
};
WavesDirective.ctorParameters = () => [
    { type: ElementRef }
];
__decorate([
    HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], WavesDirective.prototype, "click", null);
WavesDirective = __decorate([
    Directive({
        selector: '[mdbWavesEffect]',
    }),
    __metadata("design:paramtypes", [ElementRef])
], WavesDirective);
export { WavesDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2F2ZXMtZWZmZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3dhdmVzL3dhdmVzLWVmZmVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUlwRSxJQUFhLGNBQWMsR0FBM0IsTUFBYSxjQUFjO0lBQ3pCLFlBQW1CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQUcsQ0FBQztJQUc5QixLQUFLLENBQUMsS0FBVTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQzlDLE1BQU0sQ0FBQyxTQUFTLElBQUksZUFBZSxDQUFDO2FBQ3JDO1lBRUQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDakUsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFFaEUsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxHQUFHLENBQUMsU0FBUyxJQUFJLDZCQUE2QixDQUFDO1lBQy9DLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFdkMsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRXpCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNwQixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFFdEIsTUFBTSxLQUFLLEdBQUcsUUFBUSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUM7WUFFN0Usd0NBQXdDO1lBQ3hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUNsQyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDNUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBRXhCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQztZQUVyQix3Q0FBd0M7WUFDeEMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQztZQUUvQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsTUFBVyxFQUFFLE1BQVc7UUFDbkMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUUxQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBRTNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsTUFBTSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDVixDQUFDO0NBQ0YsQ0FBQTs7WUFuRHdCLFVBQVU7O0FBR2pDO0lBREMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzJDQW9DakM7QUF2Q1UsY0FBYztJQUgxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCLENBQUM7cUNBRXVCLFVBQVU7R0FEdEIsY0FBYyxDQW9EMUI7U0FwRFksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiV2F2ZXNFZmZlY3RdJyxcbn0pXG5leHBvcnQgY2xhc3MgV2F2ZXNEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBwdWJsaWMgY2xpY2soZXZlbnQ6IGFueSkge1xuICAgIGlmICghdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgICAgaWYgKCFidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCd3YXZlcy1lZmZlY3QnKSkge1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lICs9ICcgd2F2ZXMtZWZmZWN0JztcbiAgICAgIH1cblxuICAgICAgY29uc3QgeFBvcyA9IGV2ZW50LmNsaWVudFggLSBidXR0b24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgIGNvbnN0IHlQb3MgPSBldmVudC5jbGllbnRZIC0gYnV0dG9uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcblxuICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0bXAuY2xhc3NOYW1lICs9ICd3YXZlcy1yaXBwbGUgd2F2ZXMtcmlwcGxpbmcnO1xuICAgICAgY29uc3QgcmlwcGxlID0gYnV0dG9uLmFwcGVuZENoaWxkKHRtcCk7XG5cbiAgICAgIGNvbnN0IHRvcCA9IHlQb3MgKyAncHgnO1xuICAgICAgY29uc3QgbGVmdCA9IHhQb3MgKyAncHgnO1xuXG4gICAgICB0bXAuc3R5bGUudG9wID0gdG9wO1xuICAgICAgdG1wLnN0eWxlLmxlZnQgPSBsZWZ0O1xuXG4gICAgICBjb25zdCBzY2FsZSA9ICdzY2FsZSgnICsgKGJ1dHRvbi5jbGllbnRXaWR0aCAvIDEwMCkgKiAzICsgJykgdHJhbnNsYXRlKDAsMCknO1xuXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgICB0bXAuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gc2NhbGU7XG4gICAgICB0bXAuc3R5bGUudHJhbnNmb3JtID0gc2NhbGU7XG4gICAgICB0bXAuc3R5bGUub3BhY2l0eSA9ICcxJztcblxuICAgICAgY29uc3QgZHVyYXRpb24gPSA3NTA7XG5cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgIHRtcC5zdHlsZS53ZWJraXRUcmFuc2l0aW9uRHVyYXRpb24gPSBkdXJhdGlvbiArICdtcyc7XG4gICAgICB0bXAuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuXG4gICAgICB0aGlzLnJlbW92ZVJpcHBsZShidXR0b24sIHJpcHBsZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlUmlwcGxlKGJ1dHRvbjogYW55LCByaXBwbGU6IGFueSkge1xuICAgIHJpcHBsZS5jbGFzc0xpc3QucmVtb3ZlKCd3YXZlcy1yaXBwbGluZycpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByaXBwbGUuc3R5bGUub3BhY2l0eSA9ICcwJztcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5yZW1vdmVDaGlsZChyaXBwbGUpO1xuICAgICAgfSwgNzUwKTtcbiAgICB9LCAyMDApO1xuICB9XG59XG4iXX0=