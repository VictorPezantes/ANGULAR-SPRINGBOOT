import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
/**
 * <md-progress-bar> component.
 */
let ProgressBarComponent = class ProgressBarComponent {
    constructor() {
        /** Color of the progress bar. */
        this.color = 'primary';
        this._value = 0;
        this._bufferValue = 0;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        this.mode = 'determinate';
    }
    /** Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow. */
    get value() {
        return this._value;
    }
    set value(v) {
        this._value = clamp(v || 0);
    }
    /** Buffer value of the progress bar. Defaults to zero. */
    get bufferValue() {
        return this._bufferValue;
    }
    set bufferValue(v) {
        this._bufferValue = clamp(v || 0);
    }
    /** Gets the current transform value for the progress bar's primary indicator. */
    _primaryTransform() {
        const scale = this.value / 100;
        return { transform: `scaleX(${scale})` };
    }
    /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     */
    _bufferTransform() {
        if (this.mode === 'buffer') {
            const scale = this.bufferValue / 100;
            return { transform: `scaleX(${scale})` };
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ProgressBarComponent.prototype, "color", void 0);
__decorate([
    Input(),
    HostBinding('attr.aria-valuenow'),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ProgressBarComponent.prototype, "value", null);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ProgressBarComponent.prototype, "bufferValue", null);
__decorate([
    Input(),
    HostBinding('attr.mode'),
    __metadata("design:type", String)
], ProgressBarComponent.prototype, "mode", void 0);
ProgressBarComponent = __decorate([
    Component({
        selector: 'mdb-progress-bar',
        template: "<!-- The background div is named as such because it appears below the other divs and is not sized based on values. -->\n<div class=\"mat-progress-bar-background mat-progress-bar-element\"></div>\n<div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div>\n<div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\"></div>\n<div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host{display:block;height:5px;overflow:hidden;position:relative;transform:translateZ(0);transition:opacity 250ms linear;width:100%}:host .mat-progress-bar-element,:host .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}:host .mat-progress-bar-background{background-repeat:repeat-x;background-size:10px 4px;display:none}:host .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms,stroke .3s cubic-bezier(.35,0,.25,1)}:host .mat-progress-bar-secondary{display:none}:host .mat-progress-bar-fill{-webkit-animation:none;animation:none;transform-origin:top left;transition:transform 250ms,stroke .3s cubic-bezier(.35,0,.25,1)}:host .mat-progress-bar-fill::after{-webkit-animation:none;animation:none;content:\"\";display:inline-block;left:0}:host[mode=query]{transform:rotateZ(180deg)}:host[mode=indeterminate] .mat-progress-bar-fill,:host[mode=query] .mat-progress-bar-fill{transition:none}:host[mode=indeterminate] .mat-progress-bar-primary,:host[mode=query] .mat-progress-bar-primary{-webkit-animation:2s linear infinite mat-progress-bar-primary-indeterminate-translate;animation:2s linear infinite mat-progress-bar-primary-indeterminate-translate;left:-145.166611%}:host[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,:host[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-animation:2s linear infinite mat-progress-bar-primary-indeterminate-scale;animation:2s linear infinite mat-progress-bar-primary-indeterminate-scale}:host[mode=indeterminate] .mat-progress-bar-secondary,:host[mode=query] .mat-progress-bar-secondary{-webkit-animation:2s linear infinite mat-progress-bar-secondary-indeterminate-translate;animation:2s linear infinite mat-progress-bar-secondary-indeterminate-translate;left:-54.888891%;display:block}:host[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,:host[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-animation:2s linear infinite mat-progress-bar-secondary-indeterminate-scale;animation:2s linear infinite mat-progress-bar-secondary-indeterminate-scale}:host[mode=buffer] .mat-progress-bar-background{-webkit-animation:250ms linear infinite mat-progress-bar-background-scroll;animation:250ms linear infinite mat-progress-bar-background-scroll;display:block}:host-context([dir=rtl]){transform:rotateY(180deg)}@-webkit-keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@-webkit-keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);transform:scaleX(.66148)}100%{transform:scaleX(.08)}}@-webkit-keyframes mat-progress-bar-secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@-webkit-keyframes mat-progress-bar-secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);transform:scaleX(.72796)}100%{transform:scaleX(.08)}}@-webkit-keyframes mat-progress-bar-background-scroll{to{transform:translateX(-10px)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-10px)}}"]
    })
], ProgressBarComponent);
export { ProgressBarComponent };
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3MtYmFycy1tb2R1bGUvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkY7O0dBRUc7QUFPSCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUFqQztRQUNFLGlDQUFpQztRQUN4QixVQUFLLEdBQWtDLFNBQVMsQ0FBQztRQUVsRCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBYVgsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFZekI7Ozs7OztXQU1HO1FBR0gsU0FBSSxHQUF5RCxhQUFhLENBQUM7SUFrQjdFLENBQUM7SUFsREMsNkVBQTZFO0lBRzdFLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsSUFBSSxLQUFLLENBQUMsQ0FBUztRQUNqQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUlELDBEQUEwRDtJQUUxRCxJQUFJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksV0FBVyxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFhRCxpRkFBaUY7SUFDakYsaUJBQWlCO1FBQ2YsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7T0FHRztJQUNILGdCQUFnQjtRQUNkLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDMUIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDMUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQXREVTtJQUFSLEtBQUssRUFBRTs7bURBQWtEO0FBTzFEO0lBRkMsS0FBSyxFQUFFO0lBQ1AsV0FBVyxDQUFDLG9CQUFvQixDQUFDOzs7aURBR2pDO0FBVUQ7SUFEQyxLQUFLLEVBQUU7Ozt1REFHUDtBQWVEO0lBRkMsS0FBSyxFQUFFO0lBQ1AsV0FBVyxDQUFDLFdBQVcsQ0FBQzs7a0RBQ2tEO0FBdENoRSxvQkFBb0I7SUFOaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QiwyaEJBQTJDO1FBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDO0dBQ1csb0JBQW9CLENBd0RoQztTQXhEWSxvQkFBb0I7QUEwRGpDLHNFQUFzRTtBQUN0RSxTQUFTLEtBQUssQ0FBQyxDQUFTLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRztJQUMxQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIDxtZC1wcm9ncmVzcy1iYXI+IGNvbXBvbmVudC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXByb2dyZXNzLWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Byb2dyZXNzYmFyLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckNvbXBvbmVudCB7XG4gIC8qKiBDb2xvciBvZiB0aGUgcHJvZ3Jlc3MgYmFyLiAqL1xuICBASW5wdXQoKSBjb2xvcjogJ3ByaW1hcnknIHwgJ2FjY2VudCcgfCAnd2FybicgPSAncHJpbWFyeSc7XG5cbiAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xuXG4gIC8qKiBWYWx1ZSBvZiB0aGUgcHJvZ3Jlc3NiYXIuIERlZmF1bHRzIHRvIHplcm8uIE1pcnJvcmVkIHRvIGFyaWEtdmFsdWVub3cuICovXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXZhbHVlbm93JylcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl92YWx1ZSA9IGNsYW1wKHYgfHwgMCk7XG4gIH1cblxuICBwcml2YXRlIF9idWZmZXJWYWx1ZSA9IDA7XG5cbiAgLyoqIEJ1ZmZlciB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLiBEZWZhdWx0cyB0byB6ZXJvLiAqL1xuICBASW5wdXQoKVxuICBnZXQgYnVmZmVyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2J1ZmZlclZhbHVlO1xuICB9XG5cbiAgc2V0IGJ1ZmZlclZhbHVlKHY6IG51bWJlcikge1xuICAgIHRoaXMuX2J1ZmZlclZhbHVlID0gY2xhbXAodiB8fCAwKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2RlIG9mIHRoZSBwcm9ncmVzcyBiYXIuXG4gICAqXG4gICAqIElucHV0IG11c3QgYmUgb25lIG9mIHRoZXNlIHZhbHVlczogZGV0ZXJtaW5hdGUsIGluZGV0ZXJtaW5hdGUsIGJ1ZmZlciwgcXVlcnksIGRlZmF1bHRzIHRvXG4gICAqICdkZXRlcm1pbmF0ZScuXG4gICAqIE1pcnJvcmVkIHRvIG1vZGUgYXR0cmlidXRlLlxuICAgKi9cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1vZGUnKVxuICBtb2RlOiAnZGV0ZXJtaW5hdGUnIHwgJ2luZGV0ZXJtaW5hdGUnIHwgJ2J1ZmZlcicgfCAncXVlcnknID0gJ2RldGVybWluYXRlJztcblxuICAvKiogR2V0cyB0aGUgY3VycmVudCB0cmFuc2Zvcm0gdmFsdWUgZm9yIHRoZSBwcm9ncmVzcyBiYXIncyBwcmltYXJ5IGluZGljYXRvci4gKi9cbiAgX3ByaW1hcnlUcmFuc2Zvcm0oKSB7XG4gICAgY29uc3Qgc2NhbGUgPSB0aGlzLnZhbHVlIC8gMTAwO1xuICAgIHJldHVybiB7IHRyYW5zZm9ybTogYHNjYWxlWCgke3NjYWxlfSlgIH07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCB0cmFuc2Zvcm0gdmFsdWUgZm9yIHRoZSBwcm9ncmVzcyBiYXIncyBidWZmZXIgaW5kaWNhdG9yLiAgT25seSB1c2VkIGlmIHRoZVxuICAgKiBwcm9ncmVzcyBtb2RlIGlzIHNldCB0byBidWZmZXIsIG90aGVyd2lzZSByZXR1cm5zIGFuIHVuZGVmaW5lZCwgY2F1c2luZyBubyB0cmFuc2Zvcm1hdGlvbi5cbiAgICovXG4gIF9idWZmZXJUcmFuc2Zvcm0oKSB7XG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ2J1ZmZlcicpIHtcbiAgICAgIGNvbnN0IHNjYWxlID0gdGhpcy5idWZmZXJWYWx1ZSAvIDEwMDtcbiAgICAgIHJldHVybiB7IHRyYW5zZm9ybTogYHNjYWxlWCgke3NjYWxlfSlgIH07XG4gICAgfVxuICB9XG59XG5cbi8qKiBDbGFtcHMgYSB2YWx1ZSB0byBiZSBiZXR3ZWVuIHR3byBudW1iZXJzLCBieSBkZWZhdWx0IDAgYW5kIDEwMC4gKi9cbmZ1bmN0aW9uIGNsYW1wKHY6IG51bWJlciwgbWluID0gMCwgbWF4ID0gMTAwKSB7XG4gIHJldHVybiBNYXRoLm1heChtaW4sIE1hdGgubWluKG1heCwgdikpO1xufVxuIl19