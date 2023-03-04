import { __decorate, __metadata, __param } from "tslib";
import { Component, HostBinding, ChangeDetectionStrategy, OnDestroy, Input, ElementRef, NgZone, Renderer2, Directive, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
/** A single degree in radians. */
const DEGREE_IN_RADIANS = Math.PI / 180;
/** Duration of the indeterminate animation. */
const DURATION_INDETERMINATE = 667;
/** Duration of the indeterminate animation. */
const DURATION_DETERMINATE = 225;
/** Start animation value of the indeterminate animation */
const startIndeterminate = 3;
/** End animation value of the indeterminate animation */
const endIndeterminate = 80;
/* Maximum angle for the arc. The angle can't be exactly 360, because the arc becomes hidden. */
const MAX_ANGLE = 359.99 / 100;
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MdProgressSpinnerCssMatStylerDirective = class MdProgressSpinnerCssMatStylerDirective {
};
__decorate([
    HostBinding('class.mat-progress-spinner'),
    __metadata("design:type", Object)
], MdProgressSpinnerCssMatStylerDirective.prototype, "true", void 0);
MdProgressSpinnerCssMatStylerDirective = __decorate([
    Directive({
        selector: '[mdbSpinners], mat-progress-spinner',
    })
], MdProgressSpinnerCssMatStylerDirective);
export { MdProgressSpinnerCssMatStylerDirective };
/**
 * <md-progress-spinner> component.
 */
let MdProgressSpinnerComponent = class MdProgressSpinnerComponent {
    constructor(_ngZone, _elementRef, _renderer, platformId) {
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /** The id of the last requested animation. */
        this._lastAnimationId = 0;
        this._mode = 'determinate';
        this._color = 'primary';
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
     * because voiceover does not report the progress indicator as indeterminate if the aria min
     * and/or max value are number values.
     */
    get _ariaValueMin() {
        return this.mode === 'determinate' ? 0 : null;
    }
    get _ariaValueMax() {
        return this.mode === 'determinate' ? 100 : null;
    }
    /** @docs-private */
    get interdeterminateInterval() {
        return this._interdeterminateInterval;
    }
    /** @docs-private */
    set interdeterminateInterval(interval) {
        clearInterval(this._interdeterminateInterval);
        this._interdeterminateInterval = interval;
    }
    /**
     * Clean up any animations that were running.
     */
    ngOnDestroy() {
        this._cleanupIndeterminateAnimation();
    }
    /** The color of the progress-spinner. Can be primary, accent, or warn. */
    get color() {
        return this._color;
    }
    set color(value) {
        this._updateColor(value);
    }
    /** Value of the progress circle. It is bound to the host as the attribute aria-valuenow. */
    get value() {
        if (this.mode === 'determinate') {
            return this._value;
        }
        return;
    }
    set value(v) {
        if (v != null && this.mode === 'determinate') {
            const newValue = clamp(v);
            this._animateCircle(this.value || 0, newValue);
            this._value = newValue;
        }
    }
    /**
     * Mode of the progress circle
     *
     * Input must be one of the values from ProgressMode, defaults to 'determinate'.
     * mode is bound to the host as the attribute host.
     */
    get mode() {
        return this._mode;
    }
    set mode(mode) {
        if (mode !== this._mode) {
            if (mode === 'indeterminate') {
                this._startIndeterminateAnimation();
            }
            else {
                this._cleanupIndeterminateAnimation();
                this._animateCircle(0, this._value);
            }
            this._mode = mode;
        }
    }
    /**
     * Animates the circle from one percentage value to another.
     *
     * @param animateFrom The percentage of the circle filled starting the animation.
     * @param animateTo The percentage of the circle filled ending the animation.
     * @param ease The easing function to manage the pace of change in the animation.
     * @param duration The length of time to show the animation, in milliseconds.
     * @param rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     */
    _animateCircle(animateFrom, animateTo, ease = linearEase, duration = DURATION_DETERMINATE, rotation = 0) {
        const id = ++this._lastAnimationId;
        const startTime = Date.now();
        const changeInValue = animateTo - animateFrom;
        // No need to animate it if the values are the same
        if (animateTo === animateFrom) {
            this._renderArc(animateTo, rotation);
        }
        else {
            const animation = () => {
                const elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
                this._renderArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
                // Prevent overlapping animations by checking if a new animation has been called for and
                // if the animation has lasted longer than the animation duration.
                if (id === this._lastAnimationId && elapsedTime < duration) {
                    requestAnimationFrame(animation);
                }
            };
            // Run the animation outside of Angular's zone, in order to avoid
            // hitting ZoneJS and change detection on each frame.
            this._ngZone.runOutsideAngular(animation);
        }
    }
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     */
    _startIndeterminateAnimation() {
        let rotationStartPoint = 0;
        let start = startIndeterminate;
        let end = endIndeterminate;
        const duration = DURATION_INDETERMINATE;
        const animate = () => {
            this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
            // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
            rotationStartPoint = (rotationStartPoint + end) % 100;
            const temp = start;
            start = -end;
            end = -temp;
        };
        if (this.isBrowser) {
            if (!this.interdeterminateInterval) {
                this._ngZone.runOutsideAngular(() => {
                    this.interdeterminateInterval = setInterval(animate, duration + 50, 0, false);
                    animate();
                });
            }
        }
    }
    /**
     * Removes interval, ending the animation.
     */
    _cleanupIndeterminateAnimation() {
        this.interdeterminateInterval = null;
    }
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     */
    _renderArc(currentValue, rotation = 0) {
        // Caches the path reference so it doesn't have to be looked up every time.
        const path = (this._path = this._path || this._elementRef.nativeElement.querySelector('path'));
        // Ensure that the path was found. This may not be the case if the
        // animation function fires too early.
        if (path) {
            path.setAttribute('d', getSvgArc(currentValue, rotation));
        }
    }
    /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     */
    _updateColor(newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    }
    /** Sets the given palette class on the component element. */
    _setElementColor(color, isAdd) {
        if (color != null && color !== '') {
            if (isAdd) {
                this._renderer.addClass(this._elementRef.nativeElement, `mat-${color}`);
            }
        }
    }
};
MdProgressSpinnerComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    Inject(PLATFORM_ID),
    __metadata("design:type", String)
], MdProgressSpinnerComponent.prototype, "platformId", void 0);
__decorate([
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MdProgressSpinnerComponent.prototype, "color", null);
__decorate([
    Input(),
    HostBinding('attr.aria-valuenow'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdProgressSpinnerComponent.prototype, "value", null);
__decorate([
    HostBinding('attr.mode'),
    Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MdProgressSpinnerComponent.prototype, "mode", null);
MdProgressSpinnerComponent = __decorate([
    Component({
        selector: 'mdb-Spinners, mat-progress-spinner',
        template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
        changeDetection: ChangeDetectionStrategy.OnPush
    }),
    __param(3, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [NgZone,
        ElementRef,
        Renderer2, Object])
], MdProgressSpinnerComponent);
export { MdProgressSpinnerComponent };
/**
 * <md-spinner> component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate <md-progress-spinner> instance.
 */
let MdSpinnerComponent = class MdSpinnerComponent extends MdProgressSpinnerComponent {
    constructor(elementRef, ngZone, renderer) {
        super(ngZone, elementRef, renderer);
        this.mode = 'indeterminate';
    }
    ngOnDestroy() {
        // The `ngOnDestroy` from `MdProgressSpinner` should be called explicitly, because
        // in certain cases Angular won't call it (e.g. when using AoT and in unit tests).
        super.ngOnDestroy();
    }
};
MdSpinnerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NgZone },
    { type: Renderer2 }
];
__decorate([
    HostBinding('class.mat-spinner'),
    __metadata("design:type", Object)
], MdSpinnerComponent.prototype, "true", void 0);
MdSpinnerComponent = __decorate([
    Component({
        selector: 'mdb-spinners, mat-spinner, mdb-progress-spinner',
        template: "<!--\n  preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's\n  center. The center of the circle will remain at the center of the md-progress-spinner\n  element containing the SVG.\n-->\n<svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\">\n  <path></path>\n</svg>",
        styles: [":host{display:block;height:100px;width:100px;overflow:hidden}:host svg{height:100%;width:100%;transform-origin:center}:host path{fill:transparent;stroke-width:10px;transition:stroke .3s cubic-bezier(.35,0,.25,1)}:host[mode=indeterminate] svg{-webkit-animation-duration:5.25s,2.887s;animation-duration:5.25s,2.887s;-webkit-animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;animation-name:mat-progress-spinner-sporadic-rotate,mat-progress-spinner-linear-rotate;-webkit-animation-timing-function:cubic-bezier(.35,0,.25,1),linear;animation-timing-function:cubic-bezier(.35,0,.25,1),linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;transition:none}@-webkit-keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@-webkit-keyframes mat-progress-spinner-sporadic-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mat-progress-spinner-sporadic-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}"]
    }),
    __metadata("design:paramtypes", [ElementRef, NgZone, Renderer2])
], MdSpinnerComponent);
export { MdSpinnerComponent };
/**
 * Module functions.
 */
/** Clamps a value to be between 0 and 100. */
function clamp(v) {
    return Math.max(0, Math.min(100, v));
}
/**
 * Converts Polar coordinates to Cartesian.
 */
function polarToCartesian(radius, pathRadius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    return (radius +
        pathRadius * Math.cos(angleInRadians) +
        ',' +
        (radius + pathRadius * Math.sin(angleInRadians)));
}
/**
 * Easing function for linear animation.
 */
function linearEase(currentTime, startValue, changeInValue, duration) {
    return (changeInValue * currentTime) / duration + startValue;
}
/**
 * Easing function to match material design indeterminate animation.
 */
function materialEase(currentTime, startValue, changeInValue, duration) {
    const time = currentTime / duration;
    const timeCubed = Math.pow(time, 3);
    const timeQuad = Math.pow(time, 4);
    const timeQuint = Math.pow(time, 5);
    return startValue + changeInValue * (6 * timeQuint + -15 * timeQuad + 10 * timeCubed);
}
/**
 * Determines the path value to define the arc.  Converting percentage values to to polar
 * coordinates on the circle, and then to cartesian coordinates in the viewport.
 *
 * @param currentValue The current percentage value of the progress circle, the percentage of the
 *    circle to fill.
 * @param rotation The starting point of the circle with 0 being the 0 degree point.
 * @return A string for an SVG path representing a circle filled from the starting point to the
 *    percentage value provided.
 */
function getSvgArc(currentValue, rotation) {
    const startPoint = rotation || 0;
    const radius = 50;
    const pathRadius = 40;
    const startAngle = startPoint * MAX_ANGLE;
    const endAngle = currentValue * MAX_ANGLE;
    const start = polarToCartesian(radius, pathRadius, startAngle);
    const end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
    const arcSweep = endAngle < 0 ? 0 : 1;
    let largeArcFlag;
    if (endAngle < 0) {
        largeArcFlag = endAngle >= -180 ? 0 : 1;
    }
    else {
        largeArcFlag = endAngle <= 180 ? 0 : 1;
    }
    return `M${start}A${pathRadius},${pathRadius} 0 ${largeArcFlag},${arcSweep} ${end}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLW1vZHVsZS9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBELGtDQUFrQztBQUNsQyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO0FBQ3hDLCtDQUErQztBQUMvQyxNQUFNLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztBQUNuQywrQ0FBK0M7QUFDL0MsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLENBQUM7QUFDakMsMkRBQTJEO0FBQzNELE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLHlEQUF5RDtBQUN6RCxNQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztBQUM1QixnR0FBZ0c7QUFDaEcsTUFBTSxTQUFTLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQVcvQjs7O0dBR0c7QUFJSCxJQUFhLHNDQUFzQyxHQUFuRCxNQUFhLHNDQUFzQztDQUVsRCxDQUFBO0FBRDRDO0lBQTFDLFdBQVcsQ0FBQyw0QkFBNEIsQ0FBQzs7b0VBQVc7QUFEMUMsc0NBQXNDO0lBSGxELFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxxQ0FBcUM7S0FDaEQsQ0FBQztHQUNXLHND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QUV0QixNQUFNLFVBQVUsR0FBRyxVQUFVLEdBQUcsU0FBUyxDQUFDO0lBQzFDLE1BQU0sUUFBUSxHQUFHLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDMUMsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUMvRCxNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztJQUN4RSxNQUFNLFFBQVEsR0FBRyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxJQUFJLFlBQW9CLENBQUM7SUFFekIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxFQUFFO1FBQ2hCLFlBQVksR0FBRyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pDO1NBQU07UUFDTCxZQUFZLEdBQUcsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDeEM7SUFFRCxPQUFPLElBQUksS0FBSyxJQUFJLFVBQVUsSUFBSSxVQUFVLE1BQU0sWUFBWSxJQUFJLFFBQVEsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUN0RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIE5nWm9uZSxcbiAgUmVuZGVyZXIyLFxuICBEaXJlY3RpdmUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUExBVEZPUk1fSUQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQSBzaW5nbGUgZGVncmVlIGluIHJhZGlhbnMuICovXG5jb25zdCBERUdSRUVfSU5fUkFESUFOUyA9IE1hdGguUEkgLyAxODA7XG4vKiogRHVyYXRpb24gb2YgdGhlIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uLiAqL1xuY29uc3QgRFVSQVRJT05fSU5ERVRFUk1JTkFURSA9IDY2Nztcbi8qKiBEdXJhdGlvbiBvZiB0aGUgaW5kZXRlcm1pbmF0ZSBhbmltYXRpb24uICovXG5jb25zdCBEVVJBVElPTl9ERVRFUk1JTkFURSA9IDIyNTtcbi8qKiBTdGFydCBhbmltYXRpb24gdmFsdWUgb2YgdGhlIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uICovXG5jb25zdCBzdGFydEluZGV0ZXJtaW5hdGUgPSAzO1xuLyoqIEVuZCBhbmltYXRpb24gdmFsdWUgb2YgdGhlIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uICovXG5jb25zdCBlbmRJbmRldGVybWluYXRlID0gODA7XG4vKiBNYXhpbXVtIGFuZ2xlIGZvciB0aGUgYXJjLiBUaGUgYW5nbGUgY2FuJ3QgYmUgZXhhY3RseSAzNjAsIGJlY2F1c2UgdGhlIGFyYyBiZWNvbWVzIGhpZGRlbi4gKi9cbmNvbnN0IE1BWF9BTkdMRSA9IDM1OS45OSAvIDEwMDtcblxuZXhwb3J0IHR5cGUgUHJvZ3Jlc3NTcGlubmVyTW9kZSA9ICdkZXRlcm1pbmF0ZScgfCAnaW5kZXRlcm1pbmF0ZSc7XG5cbnR5cGUgRWFzaW5nRm4gPSAoXG4gIGN1cnJlbnRUaW1lOiBudW1iZXIsXG4gIHN0YXJ0VmFsdWU6IG51bWJlcixcbiAgY2hhbmdlSW5WYWx1ZTogbnVtYmVyLFxuICBkdXJhdGlvbjogbnVtYmVyXG4pID0+IG51bWJlcjtcblxuLyoqXG4gKiBEaXJlY3RpdmUgd2hvc2UgcHVycG9zZSBpcyB0byBhZGQgdGhlIG1hdC0gQ1NTIHN0eWxpbmcgdG8gdGhpcyBzZWxlY3Rvci5cbiAqIEBkb2NzLXByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW21kYlNwaW5uZXJzXSwgbWF0LXByb2dyZXNzLXNwaW5uZXInLFxufSlcbmV4cG9ydCBjbGFzcyBNZFByb2dyZXNzU3Bpbm5lckNzc01hdFN0eWxlckRpcmVjdGl2ZSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LXByb2dyZXNzLXNwaW5uZXInKSB0cnVlOiBhbnk7XG59XG5cbi8qKlxuICogPG1kLXByb2dyZXNzLXNwaW5uZXI+IGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLVNwaW5uZXJzLCBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKiBUaGUgaWQgb2YgdGhlIGxhc3QgcmVxdWVzdGVkIGFuaW1hdGlvbi4gKi9cbiAgcHJpdmF0ZSBfbGFzdEFuaW1hdGlvbklkID0gMDtcblxuICAvKiogVGhlIGlkIG9mIHRoZSBpbmRldGVybWluYXRlIGludGVydmFsLiAqL1xuICBwcml2YXRlIF9pbnRlcmRldGVybWluYXRlSW50ZXJ2YWw6IGFueTtcblxuICAvKiogVGhlIFNWRyA8cGF0aD4gbm9kZSB0aGF0IGlzIHVzZWQgdG8gZHJhdyB0aGUgY2lyY2xlLiAqL1xuICBwcml2YXRlIF9wYXRoOiBTVkdQYXRoRWxlbWVudDtcblxuICBwcml2YXRlIF9tb2RlOiBQcm9ncmVzc1NwaW5uZXJNb2RlID0gJ2RldGVybWluYXRlJztcbiAgcHJpdmF0ZSBfdmFsdWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBfY29sb3IgPSAncHJpbWFyeSc7XG5cbiAgaXNCcm93c2VyOiBhbnkgPSBmYWxzZTtcbiAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogc3RyaW5nO1xuICAvKipcbiAgICogVmFsdWVzIGZvciBhcmlhIG1heCBhbmQgbWluIGFyZSBvbmx5IGRlZmluZWQgYXMgbnVtYmVycyB3aGVuIGluIGEgZGV0ZXJtaW5hdGUgbW9kZS4gIFdlIGRvIHRoaXNcbiAgICogYmVjYXVzZSB2b2ljZW92ZXIgZG9lcyBub3QgcmVwb3J0IHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IgYXMgaW5kZXRlcm1pbmF0ZSBpZiB0aGUgYXJpYSBtaW5cbiAgICogYW5kL29yIG1heCB2YWx1ZSBhcmUgbnVtYmVyIHZhbHVlcy5cbiAgICovXG4gIGdldCBfYXJpYVZhbHVlTWluKCkge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScgPyAwIDogbnVsbDtcbiAgfVxuXG4gIGdldCBfYXJpYVZhbHVlTWF4KCkge1xuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScgPyAxMDAgOiBudWxsO1xuICB9XG5cbiAgLyoqIEBkb2NzLXByaXZhdGUgKi9cbiAgZ2V0IGludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW50ZXJkZXRlcm1pbmF0ZUludGVydmFsO1xuICB9XG4gIC8qKiBAZG9jcy1wcml2YXRlICovXG4gIHNldCBpbnRlcmRldGVybWluYXRlSW50ZXJ2YWwoaW50ZXJ2YWwpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCk7XG4gICAgdGhpcy5faW50ZXJkZXRlcm1pbmF0ZUludGVydmFsID0gaW50ZXJ2YWw7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYW4gdXAgYW55IGFuaW1hdGlvbnMgdGhhdCB3ZXJlIHJ1bm5pbmcuXG4gICAqL1xuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9jbGVhbnVwSW5kZXRlcm1pbmF0ZUFuaW1hdGlvbigpO1xuICB9XG5cbiAgLyoqIFRoZSBjb2xvciBvZiB0aGUgcHJvZ3Jlc3Mtc3Bpbm5lci4gQ2FuIGJlIHByaW1hcnksIGFjY2VudCwgb3Igd2Fybi4gKi9cbiAgQElucHV0KClcbiAgZ2V0IGNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbG9yO1xuICB9XG4gIHNldCBjb2xvcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fdXBkYXRlQ29sb3IodmFsdWUpO1xuICB9XG5cbiAgLyoqIFZhbHVlIG9mIHRoZSBwcm9ncmVzcyBjaXJjbGUuIEl0IGlzIGJvdW5kIHRvIHRoZSBob3N0IGFzIHRoZSBhdHRyaWJ1dGUgYXJpYS12YWx1ZW5vdy4gKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtdmFsdWVub3cnKVxuICBnZXQgdmFsdWUoKTogYW55IHtcbiAgICBpZiAodGhpcy5tb2RlID09PSAnZGV0ZXJtaW5hdGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBzZXQgdmFsdWUodjogbnVtYmVyIHwgYW55KSB7XG4gICAgaWYgKHYgIT0gbnVsbCAmJiB0aGlzLm1vZGUgPT09ICdkZXRlcm1pbmF0ZScpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY2xhbXAodik7XG4gICAgICB0aGlzLl9hbmltYXRlQ2lyY2xlKHRoaXMudmFsdWUgfHwgMCwgbmV3VmFsdWUpO1xuICAgICAgdGhpcy5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTW9kZSBvZiB0aGUgcHJvZ3Jlc3MgY2lyY2xlXG4gICAqXG4gICAqIElucHV0IG11c3QgYmUgb25lIG9mIHRoZSB2YWx1ZXMgZnJvbSBQcm9ncmVzc01vZGUsIGRlZmF1bHRzIHRvICdkZXRlcm1pbmF0ZScuXG4gICAqIG1vZGUgaXMgYm91bmQgdG8gdGhlIGhvc3QgYXMgdGhlIGF0dHJpYnV0ZSBob3N0LlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1vZGUnKVxuICBASW5wdXQoKVxuICBnZXQgbW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9kZTtcbiAgfVxuICBzZXQgbW9kZShtb2RlOiBQcm9ncmVzc1NwaW5uZXJNb2RlKSB7XG4gICAgaWYgKG1vZGUgIT09IHRoaXMuX21vZGUpIHtcbiAgICAgIGlmIChtb2RlID09PSAnaW5kZXRlcm1pbmF0ZScpIHtcbiAgICAgICAgdGhpcy5fc3RhcnRJbmRldGVybWluYXRlQW5pbWF0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jbGVhbnVwSW5kZXRlcm1pbmF0ZUFuaW1hdGlvbigpO1xuICAgICAgICB0aGlzLl9hbmltYXRlQ2lyY2xlKDAsIHRoaXMuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX21vZGUgPSBtb2RlO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkPzogc3RyaW5nIHwgYW55XG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICAvKipcbiAgICogQW5pbWF0ZXMgdGhlIGNpcmNsZSBmcm9tIG9uZSBwZXJjZW50YWdlIHZhbHVlIHRvIGFub3RoZXIuXG4gICAqXG4gICAqIEBwYXJhbSBhbmltYXRlRnJvbSBUaGUgcGVyY2VudGFnZSBvZiB0aGUgY2lyY2xlIGZpbGxlZCBzdGFydGluZyB0aGUgYW5pbWF0aW9uLlxuICAgKiBAcGFyYW0gYW5pbWF0ZVRvIFRoZSBwZXJjZW50YWdlIG9mIHRoZSBjaXJjbGUgZmlsbGVkIGVuZGluZyB0aGUgYW5pbWF0aW9uLlxuICAgKiBAcGFyYW0gZWFzZSBUaGUgZWFzaW5nIGZ1bmN0aW9uIHRvIG1hbmFnZSB0aGUgcGFjZSBvZiBjaGFuZ2UgaW4gdGhlIGFuaW1hdGlvbi5cbiAgICogQHBhcmFtIGR1cmF0aW9uIFRoZSBsZW5ndGggb2YgdGltZSB0byBzaG93IHRoZSBhbmltYXRpb24sIGluIG1pbGxpc2Vjb25kcy5cbiAgICogQHBhcmFtIHJvdGF0aW9uIFRoZSBzdGFydGluZyBhbmdsZSBvZiB0aGUgY2lyY2xlIGZpbGwsIHdpdGggMMKwIHJlcHJlc2VudGVkIGF0IHRoZSB0b3AgY2VudGVyXG4gICAqICAgIG9mIHRoZSBjaXJjbGUuXG4gICAqL1xuICBwcml2YXRlIF9hbmltYXRlQ2lyY2xlKFxuICAgIGFuaW1hdGVGcm9tOiBudW1iZXIsXG4gICAgYW5pbWF0ZVRvOiBudW1iZXIsXG4gICAgZWFzZTogRWFzaW5nRm4gPSBsaW5lYXJFYXNlLFxuICAgIGR1cmF0aW9uID0gRFVSQVRJT05fREVURVJNSU5BVEUsXG4gICAgcm90YXRpb24gPSAwXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGlkID0gKyt0aGlzLl9sYXN0QW5pbWF0aW9uSWQ7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBjb25zdCBjaGFuZ2VJblZhbHVlID0gYW5pbWF0ZVRvIC0gYW5pbWF0ZUZyb207XG5cbiAgICAvLyBObyBuZWVkIHRvIGFuaW1hdGUgaXQgaWYgdGhlIHZhbHVlcyBhcmUgdGhlIHNhbWVcbiAgICBpZiAoYW5pbWF0ZVRvID09PSBhbmltYXRlRnJvbSkge1xuICAgICAgdGhpcy5fcmVuZGVyQXJjKGFuaW1hdGVUbywgcm90YXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhbmltYXRpb24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsYXBzZWRUaW1lID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSwgZHVyYXRpb24pKTtcblxuICAgICAgICB0aGlzLl9yZW5kZXJBcmMoZWFzZShlbGFwc2VkVGltZSwgYW5pbWF0ZUZyb20sIGNoYW5nZUluVmFsdWUsIGR1cmF0aW9uKSwgcm90YXRpb24pO1xuXG4gICAgICAgIC8vIFByZXZlbnQgb3ZlcmxhcHBpbmcgYW5pbWF0aW9ucyBieSBjaGVja2luZyBpZiBhIG5ldyBhbmltYXRpb24gaGFzIGJlZW4gY2FsbGVkIGZvciBhbmRcbiAgICAgICAgLy8gaWYgdGhlIGFuaW1hdGlvbiBoYXMgbGFzdGVkIGxvbmdlciB0aGFuIHRoZSBhbmltYXRpb24gZHVyYXRpb24uXG4gICAgICAgIGlmIChpZCA9PT0gdGhpcy5fbGFzdEFuaW1hdGlvbklkICYmIGVsYXBzZWRUaW1lIDwgZHVyYXRpb24pIHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gUnVuIHRoZSBhbmltYXRpb24gb3V0c2lkZSBvZiBBbmd1bGFyJ3Mgem9uZSwgaW4gb3JkZXIgdG8gYXZvaWRcbiAgICAgIC8vIGhpdHRpbmcgWm9uZUpTIGFuZCBjaGFuZ2UgZGV0ZWN0aW9uIG9uIGVhY2ggZnJhbWUuXG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoYW5pbWF0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIHRoZSBpbmRldGVybWluYXRlIGFuaW1hdGlvbiBpbnRlcnZhbCwgaWYgaXQgaXMgbm90IGFscmVhZHkgcnVubmluZy5cbiAgICovXG4gIHByaXZhdGUgX3N0YXJ0SW5kZXRlcm1pbmF0ZUFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICBsZXQgcm90YXRpb25TdGFydFBvaW50ID0gMDtcbiAgICBsZXQgc3RhcnQgPSBzdGFydEluZGV0ZXJtaW5hdGU7XG4gICAgbGV0IGVuZCA9IGVuZEluZGV0ZXJtaW5hdGU7XG4gICAgY29uc3QgZHVyYXRpb24gPSBEVVJBVElPTl9JTkRFVEVSTUlOQVRFO1xuICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9hbmltYXRlQ2lyY2xlKHN0YXJ0LCBlbmQsIG1hdGVyaWFsRWFzZSwgZHVyYXRpb24sIHJvdGF0aW9uU3RhcnRQb2ludCk7XG4gICAgICAvLyBQcmV2ZW50IHJvdGF0aW9uIGZyb20gcmVhY2hpbmcgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIuXG4gICAgICByb3RhdGlvblN0YXJ0UG9pbnQgPSAocm90YXRpb25TdGFydFBvaW50ICsgZW5kKSAlIDEwMDtcbiAgICAgIGNvbnN0IHRlbXAgPSBzdGFydDtcbiAgICAgIHN0YXJ0ID0gLWVuZDtcbiAgICAgIGVuZCA9IC10ZW1wO1xuICAgIH07XG5cbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIGlmICghdGhpcy5pbnRlcmRldGVybWluYXRlSW50ZXJ2YWwpIHtcbiAgICAgICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmludGVyZGV0ZXJtaW5hdGVJbnRlcnZhbCA9IHNldEludGVydmFsKGFuaW1hdGUsIGR1cmF0aW9uICsgNTAsIDAsIGZhbHNlKTtcbiAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGludGVydmFsLCBlbmRpbmcgdGhlIGFuaW1hdGlvbi5cbiAgICovXG4gIHByaXZhdGUgX2NsZWFudXBJbmRldGVybWluYXRlQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuaW50ZXJkZXRlcm1pbmF0ZUludGVydmFsID0gbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBhcmMgb250byB0aGUgU1ZHIGVsZW1lbnQuIFByb3hpZXMgYGdldEFyY2Agd2hpbGUgc2V0dGluZyB0aGUgcHJvcGVyXG4gICAqIERPTSBhdHRyaWJ1dGUgb24gdGhlIGA8cGF0aD5gLlxuICAgKi9cbiAgcHJpdmF0ZSBfcmVuZGVyQXJjKGN1cnJlbnRWYWx1ZTogbnVtYmVyLCByb3RhdGlvbiA9IDApOiB2b2lkIHtcbiAgICAvLyBDYWNoZXMgdGhlIHBhdGggcmVmZXJlbmNlIHNvIGl0IGRvZXNuJ3QgaGF2ZSB0byBiZSBsb29rZWQgdXAgZXZlcnkgdGltZS5cbiAgICBjb25zdCBwYXRoID0gKHRoaXMuX3BhdGggPSB0aGlzLl9wYXRoIHx8IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdwYXRoJykpO1xuXG4gICAgLy8gRW5zdXJlIHRoYXQgdGhlIHBhdGggd2FzIGZvdW5kLiBUaGlzIG1heSBub3QgYmUgdGhlIGNhc2UgaWYgdGhlXG4gICAgLy8gYW5pbWF0aW9uIGZ1bmN0aW9uIGZpcmVzIHRvbyBlYXJseS5cbiAgICBpZiAocGF0aCkge1xuICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBnZXRTdmdBcmMoY3VycmVudFZhbHVlLCByb3RhdGlvbikpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBjb2xvciBvZiB0aGUgcHJvZ3Jlc3Mtc3Bpbm5lciBieSBhZGRpbmcgdGhlIG5ldyBwYWxldHRlIGNsYXNzIHRvIHRoZSBlbGVtZW50XG4gICAqIGFuZCByZW1vdmluZyB0aGUgb2xkIG9uZS5cbiAgICovXG4gIHByaXZhdGUgX3VwZGF0ZUNvbG9yKG5ld0NvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRFbGVtZW50Q29sb3IodGhpcy5fY29sb3IsIGZhbHNlKTtcbiAgICB0aGlzLl9zZXRFbGVtZW50Q29sb3IobmV3Q29sb3IsIHRydWUpO1xuICAgIHRoaXMuX2NvbG9yID0gbmV3Q29sb3I7XG4gIH1cblxuICAvKiogU2V0cyB0aGUgZ2l2ZW4gcGFsZXR0ZSBjbGFzcyBvbiB0aGUgY29tcG9uZW50IGVsZW1lbnQuICovXG4gIHByaXZhdGUgX3NldEVsZW1lbnRDb2xvcihjb2xvcjogc3RyaW5nLCBpc0FkZDogYm9vbGVhbikge1xuICAgIGlmIChjb2xvciAhPSBudWxsICYmIGNvbG9yICE9PSAnJykge1xuICAgICAgaWYgKGlzQWRkKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgYG1hdC0ke2NvbG9yfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIDxtZC1zcGlubmVyPiBjb21wb25lbnQuXG4gKlxuICogVGhpcyBpcyBhIGNvbXBvbmVudCBkZWZpbml0aW9uIHRvIGJlIHVzZWQgYXMgYSBjb252ZW5pZW5jZSByZWZlcmVuY2UgdG8gY3JlYXRlIGFuXG4gKiBpbmRldGVybWluYXRlIDxtZC1wcm9ncmVzcy1zcGlubmVyPiBpbnN0YW5jZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNwaW5uZXJzLCBtYXQtc3Bpbm5lciwgbWRiLXByb2dyZXNzLXNwaW5uZXInLFxuICB0ZW1wbGF0ZVVybDogJ3Byb2dyZXNzLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsncHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBNZFNwaW5uZXJDb21wb25lbnQgZXh0ZW5kcyBNZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LXNwaW5uZXInKSB0cnVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudFJlZjogRWxlbWVudFJlZiwgbmdab25lOiBOZ1pvbmUsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihuZ1pvbmUsIGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcbiAgICB0aGlzLm1vZGUgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBUaGUgYG5nT25EZXN0cm95YCBmcm9tIGBNZFByb2dyZXNzU3Bpbm5lcmAgc2hvdWxkIGJlIGNhbGxlZCBleHBsaWNpdGx5LCBiZWNhdXNlXG4gICAgLy8gaW4gY2VydGFpbiBjYXNlcyBBbmd1bGFyIHdvbid0IGNhbGwgaXQgKGUuZy4gd2hlbiB1c2luZyBBb1QgYW5kIGluIHVuaXQgdGVzdHMpLlxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBNb2R1bGUgZnVuY3Rpb25zLlxuICovXG5cbi8qKiBDbGFtcHMgYSB2YWx1ZSB0byBiZSBiZXR3ZWVuIDAgYW5kIDEwMC4gKi9cbmZ1bmN0aW9uIGNsYW1wKHY6IG51bWJlcikge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCB2KSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgUG9sYXIgY29vcmRpbmF0ZXMgdG8gQ2FydGVzaWFuLlxuICovXG5mdW5jdGlvbiBwb2xhclRvQ2FydGVzaWFuKHJhZGl1czogbnVtYmVyLCBwYXRoUmFkaXVzOiBudW1iZXIsIGFuZ2xlSW5EZWdyZWVzOiBudW1iZXIpIHtcbiAgY29uc3QgYW5nbGVJblJhZGlhbnMgPSAoYW5nbGVJbkRlZ3JlZXMgLSA5MCkgKiBERUdSRUVfSU5fUkFESUFOUztcblxuICByZXR1cm4gKFxuICAgIHJhZGl1cyArXG4gICAgcGF0aFJhZGl1cyAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSArXG4gICAgJywnICtcbiAgICAocmFkaXVzICsgcGF0aFJhZGl1cyAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKSlcbiAgKTtcbn1cblxuLyoqXG4gKiBFYXNpbmcgZnVuY3Rpb24gZm9yIGxpbmVhciBhbmltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGxpbmVhckVhc2UoXG4gIGN1cnJlbnRUaW1lOiBudW1iZXIsXG4gIHN0YXJ0VmFsdWU6IG51bWJlcixcbiAgY2hhbmdlSW5WYWx1ZTogbnVtYmVyLFxuICBkdXJhdGlvbjogbnVtYmVyXG4pIHtcbiAgcmV0dXJuIChjaGFuZ2VJblZhbHVlICogY3VycmVudFRpbWUpIC8gZHVyYXRpb24gKyBzdGFydFZhbHVlO1xufVxuXG4vKipcbiAqIEVhc2luZyBmdW5jdGlvbiB0byBtYXRjaCBtYXRlcmlhbCBkZXNpZ24gaW5kZXRlcm1pbmF0ZSBhbmltYXRpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGVyaWFsRWFzZShcbiAgY3VycmVudFRpbWU6IG51bWJlcixcbiAgc3RhcnRWYWx1ZTogbnVtYmVyLFxuICBjaGFuZ2VJblZhbHVlOiBudW1iZXIsXG4gIGR1cmF0aW9uOiBudW1iZXJcbikge1xuICBjb25zdCB0aW1lID0gY3VycmVudFRpbWUgLyBkdXJhdGlvbjtcbiAgY29uc3QgdGltZUN1YmVkID0gTWF0aC5wb3codGltZSwgMyk7XG4gIGNvbnN0IHRpbWVRdWFkID0gTWF0aC5wb3codGltZSwgNCk7XG4gIGNvbnN0IHRpbWVRdWludCA9IE1hdGgucG93KHRpbWUsIDUpO1xuICByZXR1cm4gc3RhcnRWYWx1ZSArIGNoYW5nZUluVmFsdWUgKiAoNiAqIHRpbWVRdWludCArIC0xNSAqIHRpbWVRdWFkICsgMTAgKiB0aW1lQ3ViZWQpO1xufVxuXG4vKipcbiAqIERldGVybWluZXMgdGhlIHBhdGggdmFsdWUgdG8gZGVmaW5lIHRoZSBhcmMuICBDb252ZXJ0aW5nIHBlcmNlbnRhZ2UgdmFsdWVzIHRvIHRvIHBvbGFyXG4gKiBjb29yZGluYXRlcyBvbiB0aGUgY2lyY2xlLCBhbmQgdGhlbiB0byBjYXJ0ZXNpYW4gY29vcmRpbmF0ZXMgaW4gdGhlIHZpZXdwb3J0LlxuICpcbiAqIEBwYXJhbSBjdXJyZW50VmFsdWUgVGhlIGN1cnJlbnQgcGVyY2VudGFnZSB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgY2lyY2xlLCB0aGUgcGVyY2VudGFnZSBvZiB0aGVcbiAqICAgIGNpcmNsZSB0byBmaWxsLlxuICogQHBhcmFtIHJvdGF0aW9uIFRoZSBzdGFydGluZyBwb2ludCBvZiB0aGUgY2lyY2xlIHdpdGggMCBiZWluZyB0aGUgMCBkZWdyZWUgcG9pbnQuXG4gKiBAcmV0dXJuIEEgc3RyaW5nIGZvciBhbiBTVkcgcGF0aCByZXByZXNlbnRpbmcgYSBjaXJjbGUgZmlsbGVkIGZyb20gdGhlIHN0YXJ0aW5nIHBvaW50IHRvIHRoZVxuICogICAgcGVyY2VudGFnZSB2YWx1ZSBwcm92aWRlZC5cbiAqL1xuZnVuY3Rpb24gZ2V0U3ZnQXJjKGN1cnJlbnRWYWx1ZTogbnVtYmVyLCByb3RhdGlvbjogbnVtYmVyKSB7XG4gIGNvbnN0IHN0YXJ0UG9pbnQgPSByb3RhdGlvbiB8fCAwO1xuICBjb25zdCByYWRpdXMgPSA1MDtcbiAgY29uc3QgcGF0aFJhZGl1cyA9IDQwO1xuXG4gIGNvbnN0IHN0YXJ0QW5nbGUgPSBzdGFydFBvaW50ICogTUFYX0FOR0xFO1xuICBjb25zdCBlbmRBbmdsZSA9IGN1cnJlbnRWYWx1ZSAqIE1BWF9BTkdMRTtcbiAgY29uc3Qgc3RhcnQgPSBwb2xhclRvQ2FydGVzaWFuKHJhZGl1cywgcGF0aFJhZGl1cywgc3RhcnRBbmdsZSk7XG4gIGNvbnN0IGVuZCA9IHBvbGFyVG9DYXJ0ZXNpYW4ocmFkaXVzLCBwYXRoUmFkaXVzLCBlbmRBbmdsZSArIHN0YXJ0QW5nbGUpO1xuICBjb25zdCBhcmNTd2VlcCA9IGVuZEFuZ2xlIDwgMCA/IDAgOiAxO1xuICBsZXQgbGFyZ2VBcmNGbGFnOiBudW1iZXI7XG5cbiAgaWYgKGVuZEFuZ2xlIDwgMCkge1xuICAgIGxhcmdlQXJjRmxhZyA9IGVuZEFuZ2xlID49IC0xODAgPyAwIDogMTtcbiAgfSBlbHNlIHtcbiAgICBsYXJnZUFyY0ZsYWcgPSBlbmRBbmdsZSA8PSAxODAgPyAwIDogMTtcbiAgfVxuXG4gIHJldHVybiBgTSR7c3RhcnR9QSR7cGF0aFJhZGl1c30sJHtwYXRoUmFkaXVzfSAwICR7bGFyZ2VBcmNGbGFnfSwke2FyY1N3ZWVwfSAke2VuZH1gO1xufVxuIl19