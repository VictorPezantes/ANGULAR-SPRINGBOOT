import { __decorate, __metadata } from "tslib";
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild, ViewEncapsulation, ElementRef, HostListener, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy, SimpleChanges, OnDestroy, } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OptionList } from './option-list';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil, tap, map } from 'rxjs/operators';
import { A, NINE, Z, ZERO } from '../../free/utils/keyboard-navigation';
let SelectDropdownComponent = class SelectDropdownComponent {
    constructor(_elementRef, _renderer, cdRef) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.cdRef = cdRef;
        this.customClass = '';
        this.visibleOptions = 4;
        this.selectAllLabel = 'Select all';
        this.outline = false;
        this.close = new EventEmitter();
        this.optionClicked = new EventEmitter();
        this.singleFilterClick = new EventEmitter();
        this.singleFilterInput = new EventEmitter();
        this.singleFilterKeydown = new EventEmitter();
        this.animationDone = new EventEmitter();
        this.animationStart = new EventEmitter();
        this.selectAll = new EventEmitter();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
        // Used in sliding-down animation
        this.state = 'invisible';
        this.startHeight = 0;
        this.endHeight = 45;
        this.hasOptionsItems = true;
        this._destroy = new Subject();
        this._pressedKeysStream = new Subject();
        this._pressedKeys = [];
        this.selectAllSelected = false;
        this.searchIndex = 0;
        this.previousKey = '';
    }
    onWindowKeydown(event) {
        if ((event.keyCode >= A && event.keyCode <= Z) ||
            (event.keyCode >= ZERO && event.keyCode <= NINE)) {
            this._pressedKeysStream.next(String.fromCharCode(event.keyCode));
        }
    }
    highlightOptionByTyping() {
        this._pressedKeysStream
            .pipe(tap((key) => this._pressedKeys.push(key)), map(() => this._pressedKeys.join('').toLocaleLowerCase()), debounceTime(200), takeUntil(this._destroy))
            .subscribe((searchKey) => {
            const items = Array.from(this.optionList['_options'])
                .filter((elem) => !elem.group)
                .filter((elem) => !elem.disabled)
                .map((el) => el.wrappedOption.label || el.wrappedOption.value);
            this.navigateThroughArray(searchKey, items);
            this.previousKey = searchKey;
        });
    }
    navigateThroughArray(key, itemSource) {
        const items = itemSource.filter((el) => el
            .toString()
            .toLowerCase()
            .startsWith(key.toString().toLowerCase()));
        if (this.searchIndex > items.length - 1 || key !== this.previousKey) {
            this.searchIndex = 0;
        }
        this.highlightedItem = this.optionList.filtered.find((el) => el.wrappedOption.label === items[this.searchIndex]);
        this.searchIndex++;
        if (this.highlightedItem) {
            this.optionList.highlightOption(this.highlightedItem);
            this.cdRef.markForCheck();
        }
        this.moveHighlightedIntoView();
        this._pressedKeys = [];
    }
    /** Event handlers. **/
    onkeyup() {
        this.hasOptionsItems = this.optionList.filtered.length > 0;
        this.updateSelectAllState();
    }
    onkeydown() {
        this.setOptionHeight();
    }
    ngOnInit() {
        this.updateSelectAllState();
        this.optionsReset();
        this.setDropdownHeight();
        this.setVisibleOptionsNumber();
        this.highlightOptionByTyping();
    }
    setDropdownHeight() {
        this.optionList.options.filter(el => () => {
            if (el.icon) {
                this._renderer.setStyle(this.optionsList.nativeElement, 'height', this.dropdownHeight + 8 + 'px');
            }
            else {
                this._renderer.setStyle(this.optionsList.nativeElement, 'height', this.dropdownHeight + 'px');
            }
        });
    }
    setVisibleOptionsNumber() {
        this._renderer.setStyle(this.optionsList.nativeElement, 'max-height', this.dropdownMaxHeight + 'px');
    }
    setOptionHeight() {
        const optionsItems = Array.from(this.optionsList.nativeElement.firstElementChild.children);
        optionsItems.forEach((el) => {
            const isCustomElement = el.classList.contains('custom-select-content');
            if (el.firstElementChild) {
                if (this.optionHeight && el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    this._renderer.setStyle(el.firstElementChild, 'height', `${this.optionHeight}px`);
                }
                if (el.firstElementChild.tagName !== 'IMG' && !isCustomElement) {
                    this._renderer.setStyle(el.firstElementChild, 'line-height', `${this.optionHeight}px`);
                }
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
        if (changes.hasOwnProperty('dropdownHeight')) {
            this.setDropdownHeight();
        }
        const container = this._elementRef.nativeElement.classList;
        setTimeout(() => {
            container.add('fadeInSelect');
        }, 200);
    }
    ngAfterViewInit() {
        // Sliding-down animation
        this.endHeight = this.dropdownContent.nativeElement.clientHeight;
        this.state = this.state === 'invisible' ? 'visible' : 'invisible';
        this.cdRef.detectChanges();
        if (this.multiple) {
            const disabledElements = this._elementRef.nativeElement.querySelectorAll('.disabled.optgroup');
            for (let i = 0; i < disabledElements.length; i++) {
                this._renderer.setStyle(disabledElements[i].firstElementChild.lastElementChild, 'display', 'none');
            }
        }
        this.setOptionHeight();
        this.moveHighlightedIntoView();
        if (this.filterEnabled) {
            setTimeout(() => {
                this.filterInput.nativeElement.focus();
            }, 0);
        }
    }
    // Filter input (single select).
    onSingleFilterClick() {
        this.singleFilterClick.emit(null);
    }
    onSingleFilterInput(event) {
        this.singleFilterInput.emit(event.target.value);
    }
    onSingleFilterKeydown(event) {
        this.singleFilterKeydown.emit(event);
    }
    // Options list.
    onOptionsWheel(event) {
        this.handleOptionsWheel(event);
    }
    onOptionClick(option) {
        this.optionClicked.emit(option);
        this.updateSelectAllState();
    }
    /** Initialization. **/
    optionsReset() {
        this.optionList.filter('');
        this.optionList.highlight();
    }
    /** View. **/
    getOptionStyle(option) {
        if (option.highlighted || option.hovered) {
            const optionStyle = {};
            optionStyle['height.px'] = this.optionHeight;
            if (typeof this.highlightColor !== 'undefined') {
                optionStyle['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                optionStyle['color'] = this.highlightTextColor;
            }
            return optionStyle;
        }
        else {
            return {};
        }
    }
    onSelectAllClick() {
        this.selectAllSelected = !this.selectAllSelected;
        this.selectAll.emit(this.selectAllSelected);
    }
    updateSelectAllState() {
        const areAllSelected = this.optionList.filtered
            .filter((option) => !option.disabled)
            .every((option) => {
            return option.selected ? true : false;
        });
        areAllSelected ? (this.selectAllSelected = true) : (this.selectAllSelected = false);
        this.cdRef.detectChanges();
    }
    clearFilterInput() {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    }
    onAnimationDone() {
        this.animationDone.emit();
    }
    onAnimationStart() {
        this.animationStart.emit();
    }
    moveHighlightedIntoView() {
        let listHeight;
        const list = this.optionsList.nativeElement;
        listHeight =
            this.multiple && this.enableSelectAll
                ? list.offsetHeight - this.optionHeight
                : list.offsetHeight;
        const itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            const item = list.children[0].children[itemIndex];
            const itemHeight = item.offsetHeight;
            const itemTop = itemIndex * itemHeight;
            const itemBottom = itemTop + itemHeight;
            const viewTop = list.scrollTop;
            const viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    }
    handleOptionsWheel(e) {
        const div = this.optionsList.nativeElement;
        const atTop = div.scrollTop === 0;
        const atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    }
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
    }
};
SelectDropdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SelectDropdownComponent.prototype, "filterEnabled", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SelectDropdownComponent.prototype, "filterAutocomplete", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SelectDropdownComponent.prototype, "highlightColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SelectDropdownComponent.prototype, "highlightTextColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SelectDropdownComponent.prototype, "left", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SelectDropdownComponent.prototype, "multiple", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SelectDropdownComponent.prototype, "notFoundMsg", void 0);
__decorate([
    Input(),
    __metadata("design:type", OptionList)
], SelectDropdownComponent.prototype, "optionList", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SelectDropdownComponent.prototype, "top", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SelectDropdownComponent.prototype, "width", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SelectDropdownComponent.prototype, "placeholder", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "customClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "visibleOptions", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SelectDropdownComponent.prototype, "dropdownHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SelectDropdownComponent.prototype, "dropdownMaxHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SelectDropdownComponent.prototype, "optionHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], SelectDropdownComponent.prototype, "enableSelectAll", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "selectAllLabel", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "outline", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "close", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "optionClicked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "singleFilterClick", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "singleFilterInput", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "singleFilterKeydown", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "animationDone", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "animationStart", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "selectAll", void 0);
__decorate([
    ViewChild('filterInput'),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "filterInput", void 0);
__decorate([
    ViewChild('optionsList', { static: true }),
    __metadata("design:type", Object)
], SelectDropdownComponent.prototype, "optionsList", void 0);
__decorate([
    ViewChild('dropdownContent', { static: true }),
    __metadata("design:type", ElementRef)
], SelectDropdownComponent.prototype, "dropdownContent", void 0);
__decorate([
    ViewChild('customContent', { static: true }),
    __metadata("design:type", ElementRef)
], SelectDropdownComponent.prototype, "customContent", void 0);
__decorate([
    HostListener('window: keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SelectDropdownComponent.prototype, "onWindowKeydown", null);
__decorate([
    HostListener('keyup'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SelectDropdownComponent.prototype, "onkeyup", null);
__decorate([
    HostListener('input'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SelectDropdownComponent.prototype, "onkeydown", null);
SelectDropdownComponent = __decorate([
    Component({
        selector: 'mdb-select-dropdown',
        template: "<div\n  (click)=\"$event.stopPropagation()\"\n  class=\"dropdown-content\"\n  #dropdownContent\n  [ngStyle]=\"{ 'top.px': top, 'left.px': left, 'width.px': width }\"\n  [@dropdownAnimation]=\"{\n    value: state,\n    params: { startHeight: startHeight, endHeight: endHeight }\n  }\"\n  (@dropdownAnimation.done)=\"onAnimationDone()\"\n  (@dropdownAnimation.start)=\"onAnimationStart()\"\n>\n  <div class=\"filter md-form px-2\" *ngIf=\"filterEnabled\">\n    <input\n      type=\"text\"\n      class=\"search form-control w-100 d-block\"\n      #filterInput\n      [attr.autocomplete]=\"filterAutocomplete ? 'on' : 'off'\"\n      [attr.role]=\"'searchbox'\"\n      [placeholder]=\"placeholder\"\n      (input)=\"onSingleFilterInput($event)\"\n      (keydown)=\"onSingleFilterKeydown($event)\"\n    />\n  </div>\n\n  <div class=\"options\" #optionsList>\n    <ul\n      class=\"select-dropdown\"\n      [ngClass]=\"{ 'multiple-select-dropdown': multiple }\"\n      (wheel)=\"onOptionsWheel($event)\"\n    >\n      <li\n        [ngStyle]=\"{ 'height.px': optionHeight }\"\n        *ngIf=\"multiple && enableSelectAll && this.hasOptionsItems\"\n        (click)=\"onSelectAllClick()\"\n      >\n        <span class=\"filtrable\" *ngIf=\"multiple\">\n          <input\n            type=\"checkbox\"\n            [checked]=\"selectAllSelected\"\n            class=\"form-check-input {{ customClass }}\"\n          />\n          <label></label>\n          {{ selectAllLabel }}\n        </span>\n      </li>\n      <li\n        *ngFor=\"let option of optionList.filtered\"\n        [ngClass]=\"{\n          'heavy-rain-gradient': option.highlighted && !highlightColor,\n          active: option.highlighted,\n          selected: option.selected,\n          disabled: option.disabled,\n          optgroup: option.group,\n          'd-flex justify-content-between flex-row-reverse align-items-center': option.icon\n        }\"\n        [ngStyle]=\"{\n          'height.px': optionHeight,\n          'line-height.px': optionHeight,\n          'background-color': getOptionStyle(option)['background-color'],\n          color: getOptionStyle(option)['color']\n        }\"\n        [attr.role]=\"'option'\"\n        [attr.aria-selected]=\"option.selected\"\n        [attr.aria-disabled]=\"option.disabled\"\n        (click)=\"onOptionClick(option)\"\n        (mouseover)=\"option.hovered = true\"\n        (mouseleave)=\"option.hovered = false\"\n      >\n        <img class=\"rounded-circle\" [src]=\"option.icon\" *ngIf=\"option.icon !== ''\" />\n        <span\n          class=\"deselect-option\"\n          *ngIf=\"!multiple\"\n          [ngStyle]=\"{\n            'background-color': getOptionStyle(option)['background-color'],\n            color: getOptionStyle(option)['color']\n          }\"\n          >{{ option.label }}</span\n        >\n        <span\n          class=\"deselect-option\"\n          [ngStyle]=\"{\n            'background-color': getOptionStyle(option)['background-color'],\n            color: getOptionStyle(option)['color']\n          }\"\n          *ngIf=\"multiple\"\n        >\n          <input\n            type=\"checkbox\"\n            [checked]=\"option.selected\"\n            class=\"form-check-input {{ customClass }}\"\n            [disabled]=\"option.disabled\"\n          />\n          <label></label>\n          {{ option.label }}\n        </span>\n      </li>\n      <li\n        *ngIf=\"!this.hasOptionsItems\"\n        class=\"message disabled\"\n        [ngStyle]=\"{ 'height.px': optionHeight }\"\n      >\n        <span>{{ notFoundMsg }}</span>\n      </li>\n      <li #customContent class=\"custom-select-content\">\n        <ng-content></ng-content>\n      </li>\n    </ul>\n  </div>\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [
            trigger('dropdownAnimation', [
                state('invisible', style({ opacity: 0, height: '0px' })),
                state('visible', style({ opacity: 1, height: '*' })),
                transition('invisible => visible', animate('300ms ease')),
                transition('visible => invisible', animate('300ms ease')),
            ]),
        ]
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        ChangeDetectorRef])
], SelectDropdownComponent);
export { SelectDropdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vbWF0ZXJpYWwtc2VsZWN0L3NlbGVjdC1kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxhQUFhLEVBQ2IsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsWUFBWSxFQUNaLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEVBQ3ZCLGFBQWEsRUFDYixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQWdCeEUsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFtRGxDLFlBQ1MsV0FBdUIsRUFDdkIsU0FBb0IsRUFDbkIsS0FBd0I7UUFGekIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQTFDekIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsbUJBQWMsR0FBRyxD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QUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDcEQsVUFBVSxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDekQsVUFBVSxDQUFDLHNCQUFzQixFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUMxRCxDQUFDO1NBQ0g7S0FDRixDQUFDO3FDQXFEc0IsVUFBVTtRQUNaLFNBQVM7UUFDWixpQkFBaUI7R0F0RHZCLHVCQUF1QixDQXdWbkM7U0F4VlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIFJlbmRlcmVyMixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBPcHRpb24gfSBmcm9tICcuL29wdGlvbic7XG5pbXBvcnQgeyBPcHRpb25MaXN0IH0gZnJvbSAnLi9vcHRpb24tbGlzdCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIHRha2VVbnRpbCwgdGFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBLCBOSU5FLCBaLCBaRVJPIH0gZnJvbSAnLi4vLi4vZnJlZS91dGlscy9rZXlib2FyZC1uYXZpZ2F0aW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXNlbGVjdC1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkcm9wZG93bkFuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKCdpbnZpc2libGUnLCBzdHlsZSh7IG9wYWNpdHk6IDAsIGhlaWdodDogJzBweCcgfSkpLFxuICAgICAgc3RhdGUoJ3Zpc2libGUnLCBzdHlsZSh7IG9wYWNpdHk6IDEsIGhlaWdodDogJyonIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2ludmlzaWJsZSA9PiB2aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKSxcbiAgICAgIHRyYW5zaXRpb24oJ3Zpc2libGUgPT4gaW52aXNpYmxlJywgYW5pbWF0ZSgnMzAwbXMgZWFzZScpKSxcbiAgICBdKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZmlsdGVyRW5hYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgZmlsdGVyQXV0b2NvbXBsZXRlOiBib29sZWFuO1xuICBASW5wdXQoKSBoaWdobGlnaHRDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBoaWdobGlnaHRUZXh0Q29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgbGVmdDogbnVtYmVyO1xuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbm90Rm91bmRNc2c6IHN0cmluZztcbiAgQElucHV0KCkgb3B0aW9uTGlzdDogT3B0aW9uTGlzdDtcbiAgQElucHV0KCkgdG9wOiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzID0gJyc7XG4gIEBJbnB1dCgpIHZpc2libGVPcHRpb25zID0gNDtcbiAgQElucHV0KCkgZHJvcGRvd25IZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgZHJvcGRvd25NYXhIZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgb3B0aW9uSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIGVuYWJsZVNlbGVjdEFsbDogYm9vbGVhbjtcbiAgQElucHV0KCkgc2VsZWN0QWxsTGFiZWwgPSAnU2VsZWN0IGFsbCc7XG4gIEBJbnB1dCgpIG91dGxpbmUgPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBPdXRwdXQoKSBvcHRpb25DbGlja2VkID0gbmV3IEV2ZW50RW1pdHRlcjxPcHRpb24+KCk7XG4gIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8bnVsbD4oKTtcbiAgQE91dHB1dCgpIHNpbmdsZUZpbHRlcklucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBzaW5nbGVGaWx0ZXJLZXlkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBhbmltYXRpb25Eb25lID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBhbmltYXRpb25TdGFydCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgc2VsZWN0QWxsID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2ZpbHRlcklucHV0JykgZmlsdGVySW5wdXQ6IGFueTtcbiAgQFZpZXdDaGlsZCgnb3B0aW9uc0xpc3QnLCB7IHN0YXRpYzogdHJ1ZSB9KSBvcHRpb25zTGlzdDogYW55O1xuICBAVmlld0NoaWxkKCdkcm9wZG93bkNvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBkcm9wZG93bkNvbnRlbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2N1c3RvbUNvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBjdXN0b21Db250ZW50OiBFbGVtZW50UmVmO1xuXG4gIGRpc2FibGVkQ29sb3IgPSAnI2ZmZic7XG4gIGRpc2FibGVkVGV4dENvbG9yID0gJzllOWU5ZSc7XG5cbiAgLy8gVXNlZCBpbiBzbGlkaW5nLWRvd24gYW5pbWF0aW9uXG4gIHN0YXRlID0gJ2ludmlzaWJsZSc7XG4gIHN0YXJ0SGVpZ2h0OiBhbnkgPSAwO1xuICBlbmRIZWlnaHQ6IGFueSA9IDQ1O1xuXG4gIHB1YmxpYyBoYXNPcHRpb25zSXRlbXMgPSB0cnVlO1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3kgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIF9wcmVzc2VkS2V5c1N0cmVhbSA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcbiAgcHJpdmF0ZSBfcHJlc3NlZEtleXM6IHN0cmluZ1tdID0gW107XG5cbiAgc2VsZWN0QWxsU2VsZWN0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICBoaWdobGlnaHRlZEl0ZW06IGFueTtcbiAgc2VhcmNoSW5kZXggPSAwO1xuICBwcmV2aW91c0tleSA9ICcnO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzoga2V5ZG93bicsIFsnJGV2ZW50J10pXG4gIG9uV2luZG93S2V5ZG93bihldmVudDogYW55KSB7XG4gICAgaWYgKFxuICAgICAgKGV2ZW50LmtleUNvZGUgPj0gQSAmJiBldmVudC5rZXlDb2RlIDw9IFopIHx8XG4gICAgICAoZXZlbnQua2V5Q29kZSA+PSBaRVJPICYmIGV2ZW50LmtleUNvZGUgPD0gTklORSlcbiAgICApIHtcbiAgICAgIHRoaXMuX3ByZXNzZWRLZXlzU3RyZWFtLm5leHQoU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKSk7XG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0T3B0aW9uQnlUeXBpbmcoKSB7XG4gICAgdGhpcy5fcHJlc3NlZEtleXNTdHJlYW1cbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKGtleTogc3RyaW5nKSA9PiB0aGlzLl9wcmVzc2VkS2V5cy5wdXNoKGtleSkpLFxuICAgICAgICBtYXAoKCkgPT4gdGhpcy5fcHJlc3NlZEtleXMuam9pbignJykudG9Mb2NhbGVMb3dlckNhc2UoKSksXG4gICAgICAgIGRlYm91bmNlVGltZSgyMDApLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHNlYXJjaEtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbSh0aGlzLm9wdGlvbkxpc3RbJ19vcHRpb25zJ10pXG4gICAgICAgICAgLmZpbHRlcigoZWxlbTogYW55KSA9PiAhZWxlbS5ncm91cClcbiAgICAgICAgICAuZmlsdGVyKChlbGVtOiBhbnkpID0+ICFlbGVtLmRpc2FibGVkKVxuICAgICAgICAgIC5tYXAoKGVsOiBhbnkpID0+IGVsLndyYXBwZWRPcHRpb24ubGFiZWwgfHwgZWwud3JhcHBlZE9wdGlvbi52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5uYXZpZ2F0ZVRocm91Z2hBcnJheShzZWFyY2hLZXksIGl0ZW1zKTtcbiAgICAgICAgdGhpcy5wcmV2aW91c0tleSA9IHNlYXJjaEtleTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmF2aWdhdGVUaHJvdWdoQXJyYXkoa2V5OiBzdHJpbmcsIGl0ZW1Tb3VyY2U6IGFueSkge1xuICAgIGNvbnN0IGl0ZW1zID0gaXRlbVNvdXJjZS5maWx0ZXIoKGVsOiBhbnkpID0+XG4gICAgICBlbFxuICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAuc3RhcnRzV2l0aChrZXkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuICAgICk7XG4gICAgaWYgKHRoaXMuc2VhcmNoSW5kZXggPiBpdGVtcy5sZW5ndGggLSAxIHx8IGtleSAhPT0gdGhpcy5wcmV2aW91c0tleSkge1xuICAgICAgdGhpcy5zZWFyY2hJbmRleCA9IDA7XG4gICAgfVxuICAgIHRoaXMuaGlnaGxpZ2h0ZWRJdGVtID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkLmZpbmQoXG4gICAgICAoZWw6IGFueSkgPT4gZWwud3JhcHBlZE9wdGlvbi5sYWJlbCA9PT0gaXRlbXNbdGhpcy5zZWFyY2hJbmRleF1cbiAgICApO1xuXG4gICAgdGhpcy5zZWFyY2hJbmRleCsrO1xuXG4gICAgaWYgKHRoaXMuaGlnaGxpZ2h0ZWRJdGVtKSB7XG4gICAgICB0aGlzLm9wdGlvbkxpc3QuaGlnaGxpZ2h0T3B0aW9uKHRoaXMuaGlnaGxpZ2h0ZWRJdGVtKTtcbiAgICAgIHRoaXMuY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuXG4gICAgdGhpcy5tb3ZlSGlnaGxpZ2h0ZWRJbnRvVmlldygpO1xuICAgIHRoaXMuX3ByZXNzZWRLZXlzID0gW107XG4gIH1cblxuICAvKiogRXZlbnQgaGFuZGxlcnMuICoqL1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwJykgb25rZXl1cCgpIHtcbiAgICB0aGlzLmhhc09wdGlvbnNJdGVtcyA9IHRoaXMub3B0aW9uTGlzdC5maWx0ZXJlZC5sZW5ndGggPiAwO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0Jykgb25rZXlkb3duKCkge1xuICAgIHRoaXMuc2V0T3B0aW9uSGVpZ2h0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdEFsbFN0YXRlKCk7XG4gICAgdGhpcy5vcHRpb25zUmVzZXQoKTtcbiAgICB0aGlzLnNldERyb3Bkb3duSGVpZ2h0KCk7XG4gICAgdGhpcy5zZXRWaXNpYmxlT3B0aW9uc051bWJlcigpO1xuICAgIHRoaXMuaGlnaGxpZ2h0T3B0aW9uQnlUeXBpbmcoKTtcbiAgfVxuXG4gIHNldERyb3Bkb3duSGVpZ2h0KCkge1xuICAgIHRoaXMub3B0aW9uTGlzdC5vcHRpb25zLmZpbHRlcihlbCA9PiAoKSA9PiB7XG4gICAgICBpZiAoZWwuaWNvbikge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCArIDggKyAncHgnXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICB0aGlzLm9wdGlvbnNMaXN0Lm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgJ2hlaWdodCcsXG4gICAgICAgICAgdGhpcy5kcm9wZG93bkhlaWdodCArICdweCdcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFZpc2libGVPcHRpb25zTnVtYmVyKCkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKFxuICAgICAgdGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LFxuICAgICAgJ21heC1oZWlnaHQnLFxuICAgICAgdGhpcy5kcm9wZG93bk1heEhlaWdodCArICdweCdcbiAgICApO1xuICB9XG5cbiAgc2V0T3B0aW9uSGVpZ2h0KCkge1xuICAgIGNvbnN0IG9wdGlvbnNJdGVtcyA9IEFycmF5LmZyb20odGhpcy5vcHRpb25zTGlzdC5uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLmNoaWxkcmVuKTtcbiAgICBvcHRpb25zSXRlbXMuZm9yRWFjaCgoZWw6IGFueSkgPT4ge1xuICAgICAgY29uc3QgaXNDdXN0b21FbGVtZW50ID0gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXN0b20tc2VsZWN0LWNvbnRlbnQnKTtcbiAgICAgIGlmIChlbC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25IZWlnaHQgJiYgZWwuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0lNRycgJiYgIWlzQ3VzdG9tRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLmZpcnN0RWxlbWVudENoaWxkLCAnaGVpZ2h0JywgYCR7dGhpcy5vcHRpb25IZWlnaHR9cHhgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWwuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZSAhPT0gJ0lNRycgJiYgIWlzQ3VzdG9tRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGVsLmZpcnN0RWxlbWVudENoaWxkLCAnbGluZS1oZWlnaHQnLCBgJHt0aGlzLm9wdGlvbkhlaWdodH1weGApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ29wdGlvbkxpc3QnKSkge1xuICAgICAgdGhpcy5vcHRpb25zUmVzZXQoKTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlcy5oYXNPd25Qcm9wZXJ0eSgnZHJvcGRvd25IZWlnaHQnKSkge1xuICAgICAgdGhpcy5zZXREcm9wZG93bkhlaWdodCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb250YWluZXIuYWRkKCdmYWRlSW5TZWxlY3QnKTtcbiAgICB9LCAyMDApO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIC8vIFNsaWRpbmctZG93biBhbmltYXRpb25cbiAgICB0aGlzLmVuZEhlaWdodCA9IHRoaXMuZHJvcGRvd25Db250ZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnN0YXRlID09PSAnaW52aXNpYmxlJyA/ICd2aXNpYmxlJyA6ICdpbnZpc2libGUnO1xuICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkRWxlbWVudHMgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgJy5kaXNhYmxlZC5vcHRncm91cCdcbiAgICAgICk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzYWJsZWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcbiAgICAgICAgICBkaXNhYmxlZEVsZW1lbnRzW2ldLmZpcnN0RWxlbWVudENoaWxkLmxhc3RFbGVtZW50Q2hpbGQsXG4gICAgICAgICAgJ2Rpc3BsYXknLFxuICAgICAgICAgICdub25lJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0T3B0aW9uSGVpZ2h0KCk7XG5cbiAgICB0aGlzLm1vdmVIaWdobGlnaHRlZEludG9WaWV3KCk7XG4gICAgaWYgKHRoaXMuZmlsdGVyRW5hYmxlZCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmlsdGVyIGlucHV0IChzaW5nbGUgc2VsZWN0KS5cblxuICBvblNpbmdsZUZpbHRlckNsaWNrKCkge1xuICAgIHRoaXMuc2luZ2xlRmlsdGVyQ2xpY2suZW1pdChudWxsKTtcbiAgfVxuXG4gIG9uU2luZ2xlRmlsdGVySW5wdXQoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuc2luZ2xlRmlsdGVySW5wdXQuZW1pdChldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgb25TaW5nbGVGaWx0ZXJLZXlkb3duKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlcktleWRvd24uZW1pdChldmVudCk7XG4gIH1cblxuICAvLyBPcHRpb25zIGxpc3QuXG5cbiAgb25PcHRpb25zV2hlZWwoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuaGFuZGxlT3B0aW9uc1doZWVsKGV2ZW50KTtcbiAgfVxuXG4gIG9uT3B0aW9uQ2xpY2sob3B0aW9uOiBPcHRpb24pIHtcbiAgICB0aGlzLm9wdGlvbkNsaWNrZWQuZW1pdChvcHRpb24pO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0QWxsU3RhdGUoKTtcbiAgfVxuXG4gIC8qKiBJbml0aWFsaXphdGlvbi4gKiovXG5cbiAgcHJpdmF0ZSBvcHRpb25zUmVzZXQoKSB7XG4gICAgdGhpcy5vcHRpb25MaXN0LmZpbHRlcignJyk7XG4gICAgdGhpcy5vcHRpb25MaXN0LmhpZ2hsaWdodCgpO1xuICB9XG5cbiAgLyoqIFZpZXcuICoqL1xuXG4gIGdldE9wdGlvblN0eWxlKG9wdGlvbjogT3B0aW9uKTogYW55IHtcbiAgICBpZiAob3B0aW9uLmhpZ2hsaWdodGVkIHx8IG9wdGlvbi5ob3ZlcmVkKSB7XG4gICAgICBjb25zdCBvcHRpb25TdHlsZTogYW55ID0ge307XG4gICAgICBvcHRpb25TdHlsZVsnaGVpZ2h0LnB4J10gPSB0aGlzLm9wdGlvbkhlaWdodDtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5oaWdobGlnaHRDb2xvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9uU3R5bGVbJ2JhY2tncm91bmQtY29sb3InXSA9IHRoaXMuaGlnaGxpZ2h0Q29sb3I7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuaGlnaGxpZ2h0VGV4dENvbG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25TdHlsZVsnY29sb3InXSA9IHRoaXMuaGlnaGxpZ2h0VGV4dENvbG9yO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9wdGlvblN0eWxlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RBbGxDbGljaygpIHtcbiAgICB0aGlzLnNlbGVjdEFsbFNlbGVjdGVkID0gIXRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQ7XG4gICAgdGhpcy5zZWxlY3RBbGwuZW1pdCh0aGlzLnNlbGVjdEFsbFNlbGVjdGVkKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdEFsbFN0YXRlKCkge1xuICAgIGNvbnN0IGFyZUFsbFNlbGVjdGVkID0gdGhpcy5vcHRpb25MaXN0LmZpbHRlcmVkXG4gICAgICAuZmlsdGVyKChvcHRpb246IE9wdGlvbikgPT4gIW9wdGlvbi5kaXNhYmxlZClcbiAgICAgIC5ldmVyeSgob3B0aW9uOiBPcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi5zZWxlY3RlZCA/IHRydWUgOiBmYWxzZTtcbiAgICAgIH0pO1xuXG4gICAgYXJlQWxsU2VsZWN0ZWQgPyAodGhpcy5zZWxlY3RBbGxTZWxlY3RlZCA9IHRydWUpIDogKHRoaXMuc2VsZWN0QWxsU2VsZWN0ZWQgPSBmYWxzZSk7XG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBjbGVhckZpbHRlcklucHV0KCkge1xuICAgIGlmICh0aGlzLmZpbHRlckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZmlsdGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIG9uQW5pbWF0aW9uRG9uZSgpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkRvbmUuZW1pdCgpO1xuICB9XG5cbiAgb25BbmltYXRpb25TdGFydCgpIHtcbiAgICB0aGlzLmFuaW1hdGlvblN0YXJ0LmVtaXQoKTtcbiAgfVxuXG4gIG1vdmVIaWdobGlnaHRlZEludG9WaWV3KCkge1xuICAgIGxldCBsaXN0SGVpZ2h0OiBudW1iZXI7XG4gICAgY29uc3QgbGlzdCA9IHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudDtcbiAgICBsaXN0SGVpZ2h0ID1cbiAgICAgIHRoaXMubXVsdGlwbGUgJiYgdGhpcy5lbmFibGVTZWxlY3RBbGxcbiAgICAgICAgPyBsaXN0Lm9mZnNldEhlaWdodCAtIHRoaXMub3B0aW9uSGVpZ2h0XG4gICAgICAgIDogbGlzdC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBjb25zdCBpdGVtSW5kZXggPSB0aGlzLm9wdGlvbkxpc3QuZ2V0SGlnaGxpZ2h0ZWRJbmRleCgpO1xuXG4gICAgaWYgKGl0ZW1JbmRleCA+IC0xKSB7XG4gICAgICBjb25zdCBpdGVtID0gbGlzdC5jaGlsZHJlblswXS5jaGlsZHJlbltpdGVtSW5kZXhdO1xuICAgICAgY29uc3QgaXRlbUhlaWdodCA9IGl0ZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBjb25zdCBpdGVtVG9wID0gaXRlbUluZGV4ICogaXRlbUhlaWdodDtcbiAgICAgIGNvbnN0IGl0ZW1Cb3R0b20gPSBpdGVtVG9wICsgaXRlbUhlaWdodDtcblxuICAgICAgY29uc3Qgdmlld1RvcCA9IGxpc3Quc2Nyb2xsVG9wO1xuICAgICAgY29uc3Qgdmlld0JvdHRvbSA9IHZpZXdUb3AgKyBsaXN0SGVpZ2h0O1xuXG4gICAgICBpZiAoaXRlbUJvdHRvbSA+IHZpZXdCb3R0b20pIHtcbiAgICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtQm90dG9tIC0gbGlzdEhlaWdodDtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbVRvcCA8IHZpZXdUb3ApIHtcbiAgICAgICAgbGlzdC5zY3JvbGxUb3AgPSBpdGVtVG9wO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlT3B0aW9uc1doZWVsKGU6IGFueSkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMub3B0aW9uc0xpc3QubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBhdFRvcCA9IGRpdi5zY3JvbGxUb3AgPT09IDA7XG4gICAgY29uc3QgYXRCb3R0b20gPSBkaXYub2Zmc2V0SGVpZ2h0ICsgZGl2LnNjcm9sbFRvcCA9PT0gZGl2LnNjcm9sbEhlaWdodDtcblxuICAgIGlmIChhdFRvcCAmJiBlLmRlbHRhWSA8IDApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKGF0Qm90dG9tICYmIGUuZGVsdGFZID4gMCkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCgpO1xuICAgIHRoaXMuX2Rlc3Ryb3kuY29tcGxldGUoKTtcbiAgfVxufVxuIl19