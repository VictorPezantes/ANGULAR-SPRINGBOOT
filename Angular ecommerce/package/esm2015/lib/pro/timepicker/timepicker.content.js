import { __decorate, __metadata, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, NgZone, OnInit, Renderer2, ViewChild, ViewEncapsulation, } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
let MdbTimePickerContentComponent = class MdbTimePickerContentComponent {
    constructor(_cdRef, _ngZone, focusMonitor, elem, renderer, _document) {
        this._cdRef = _cdRef;
        this._ngZone = _ngZone;
        this.focusMonitor = focusMonitor;
        this.elem = elem;
        this.renderer = renderer;
        this._document = _document;
        this._disabledHours = [];
        this._disabledMinutes = [];
        this._isMouseDown = false;
        this._hoursTicks = [];
        this._minuteDigitalDisabled = false;
        this._minutesTicks = [];
        this._okButtonDisabled = false;
        this._showHours = true;
        this._radius = {
            dial: 135,
            inner: 80,
            outer: 110,
            tick: 20,
        };
        this._denominator = {
            1: 30,
            5: 6,
            10: 3,
            15: 2,
            20: 1.5,
        };
        this.touchSupported = 'ontouchstart' in window;
        this._setOkBtnDisabled = () => {
            const hour = Number(this._to24(this._selectedTime).h);
            this._okButtonDisabled = this._disabledHours[hour];
            if (!this._okButtonDisabled) {
                if (this._min &&
                    this._selectedTime.h === this._min.h &&
                    this._selectedTime.ampm === this._min.ampm) {
                    this._okButtonDisabled = this._selectedTime.m < this._min.m;
                }
                if (this._max &&
                    this._selectedTime.h === this._max.h &&
                    this._selectedTime.ampm === this._max.ampm) {
                    this._okButtonDisabled = this._selectedTime.m > this._max.m;
                }
            }
        };
    }
    ngOnInit() {
        this._max = this.max;
        this._min = this.min;
        this._selectedTime = this.value;
        const { ampm } = this._selectedTime;
        // Add disabled hours to array for PM and AM Hours
        if (this.twelveHour) {
            this._selectedTime.ampm = ampm === 'PM' ? 'AM' : 'PM';
            this._generateTick();
            this._selectedTime.ampm = this._selectedTime.ampm === 'PM' ? 'AM' : 'PM';
        }
        this._generateTick();
        this._setOkBtnDisabled();
        this._setMinuteDigitalDisabled();
    }
    ngAfterViewInit() {
        ['mousedown', 'mouseup', 'touchend', 'touchstart'].forEach((event) => {
            this.renderer.listen(this.plate.nativeElement, event, (ev) => {
                if (event === 'mousedown' || event === 'touchstart') {
                    this._mousedown(ev, false);
                }
            });
        });
        this._checkDraw();
        setTimeout(() => {
            this.focusMonitor.focusVia(this.focus, 'keyboard');
        }, 0);
    }
    _checkDraw() {
        const { h, m } = this._selectedTime;
        const value = this._showHours ? parseInt(h, 0) : parseInt(m, 0);
        const unit = Math.PI / (this._showHours ? 6 : 30), radian = value * unit, radius = this._showHours && value > 0 && value < 13 ? this._radius.inner : this._radius.outer, xd = Math.sin(radian) * radius, yd = -Math.cos(radian) * radius;
        this.setClockHand(xd, yd);
    }
    _mousedown(e, space) {
        this._isMouseDown = true;
        const offset = this.plate.nativeElement.getBoundingClientRect(), isTouch = /^touch/.test(e.type), x0 = offset.left + this._radius.dial, y0 = offset.top + this._radius.dial, dx = (isTouch ? e.touches[0] : e).clientX - x0, dy = (isTouch ? e.touches[0] : e).clientY - y0, z = Math.sqrt(dx * dx + dy * dy);
        let moved = false;
        if (space &&
            (z < this._radius.outer - this._radius.tick || z > this._radius.outer + this._radius.tick)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (this._showHours) {
            this.setClockHand(dx, dy);
        }
        else {
            this.setClockHand(dx, dy, this.rounding);
        }
        const mousemoveEventMethod = (event) => {
            if (!this.touchSupported) {
                event.preventDefault();
            }
            event.stopPropagation();
            // tslint:disable-next-line:no-shadowed-variable
            const isTouch = /^touch/.test(event.type), x = (isTouch ? event.touches[0] : event).clientX - x0, y = (isTouch ? event.touches[0] : event).clientY - y0;
            if (!moved && x === dx && y === dy) {
                return;
            }
            moved = true;
            this._ngZone.run(() => {
                this.setClockHand(x, y, this.rounding);
            });
        };
        const mouseupEventMethod = (event) => {
            this._document.removeEventListener('mousemove', mousemoveEventMethod);
            if (this.touchSupported) {
                this._document.removeEventListener('touchmove', mousemoveEventMethod);
            }
            if (!this.touchSupported) {
                event.preventDefault();
            }
            const x = event.clientX - x0, y = event.clientY - y0;
            if ((space || moved) && x === dx && y === dy) {
                this.setClockHand(x, y);
            }
            this._ngZone.run(() => {
                if (this.autoClose && !this._showHours) {
                    this._okBtnClicked();
                }
            });
            this._showMinutesClock();
            this.digitalMinute.nativeElement.focus();
            this._isMouseDown = false;
            this._document.removeEventListener('mouseup', mouseupEventMethod);
            if (this.touchSupported) {
                this._document.removeEventListener('touchend', mouseupEventMethod);
            }
            this.picker._emitTimeChangeEvent(this._selectedTime);
        };
        this._document.addEventListener('mousemove', mousemoveEventMethod);
        if (this.touchSupported) {
            this._document.addEventListener('touchmove', mousemoveEventMethod);
        }
        this._document.addEventListener('mouseup', mouseupEventMethod);
        if (this.touchSupported) {
            this._document.addEventListener('touchend', mouseupEventMethod);
        }
    }
    _closeBtnClicked() {
        // todo this.isOpen = false;
        const { ampm, h, m } = this._selectedTime;
        this._returnHours = this.twelveHour ? `${h}:${m}${ampm}` : `${h}:${m}${ampm}`;
        this.picker.close(false);
    }
    _clearBtnClicked() {
        this._setAmPm('AM');
        this._setHour(12);
        this._setMinute(0);
        this._generateTick();
        this._showHoursClock();
        this.picker._setValue('');
        this.picker._selectionChange$.next('');
    }
    _okBtnClicked() {
        if (!this._okButtonDisabled) {
            const { ampm, h, m } = this._selectedTime;
            this._returnHours = this.twelveHour ? `${h}:${m}${ampm}` : `${h}:${m}${ampm}`;
            this.picker._setValue(this._returnHours);
            this.picker._emitTimeDoneEvent(this._selectedTime);
            this.picker.onChangeCb(this._returnHours);
            this.picker.close(true);
        }
    }
    _arrowChangeHour(key) {
        const { h, ampm } = this._to24(this._selectedTime);
        const selectedHour = Number(h);
        const availableHours = [];
        this._disabledHours.map((hour, index) => !hour && availableHours.push(index));
        let toChange;
        let value = key === 'ArrowUp'
            ? availableHours.indexOf(selectedHour) + 1
            : availableHours.indexOf(selectedHour) - 1;
        value = value < 0 ? availableHours.length - 1 : value;
        value = value > availableHours.length - 1 ? 0 : value;
        toChange = availableHours[value];
        if (this.twelveHour) {
            if (toChange >= 12) {
                toChange = toChange - 12;
                if (ampm === 'AM') {
                    this._setAmPm('PM');
                }
            }
            else if (toChange <= 0 || toChange < 12) {
                if (ampm === 'PM') {
                    this._setAmPm('AM');
                }
            }
        }
        this._showHoursClock();
        this._setHour(toChange);
        this._checkDraw();
    }
    _arrowChangeMinute(key) {
        if (!this._minuteDigitalDisabled) {
            if (this._showHours) {
                this._showMinutesClock();
            }
            const { m } = this._selectedTime;
            const availableMinutes = [];
            this._generateMinutesDisable();
            this._disabledMinutes.map((disabled, i) => {
                if (!disabled) {
                    availableMinutes.push(i);
                }
            });
            let toChange;
            let value = key === 'ArrowUp'
                ? availableMinutes.indexOf(Number(m)) + 1
                : availableMinutes.indexOf(Number(m)) - 1;
            value = value < 0 ? availableMinutes.length - 1 : value;
            value = value > availableMinutes.length - 1 ? 0 : value;
            toChange = availableMinutes[value];
            this._setMinute(toChange);
            this._checkDraw();
        }
    }
    _generateMinutesDisable() {
        for (let i = 0; i < 60; i++) {
            const disableByRounding = this.rounding > 1 && i % this.rounding !== 0;
            const disabled = this._rangeMinute(i, 'min') || this._rangeMinute(i, 'max') || disableByRounding;
            this._disabledMinutes[i] = disabled;
        }
    }
    _setHour(hour) {
        if (Number(this._selectedTime.h) !== hour) {
            if (this.twelveHour) {
                hour = hour <= 0 ? 12 : hour;
                hour = hour > 12 ? 1 : hour;
            }
            else {
                hour = hour >= 24 ? 0 : hour;
                hour = hour <= -1 ? 23 : hour;
            }
            this._selectedTime.h = hour >= 10 ? `${hour}` : `0${hour}`;
            this._setMinuteDigitalDisabled();
        }
    }
    _setMinute(min) {
        if (Number(this._selectedTime.m) !== min) {
            min = min >= 60 ? 0 : min;
            min = min <= -1 ? 59 : min;
            this._selectedTime.m = min >= 10 ? `${min}` : `0${min}`;
            this._setOkBtnDisabled();
        }
    }
    _setAmPm(ampm) {
        this._selectedTime.ampm = ampm;
        this._generateTick();
        this._setOkBtnDisabled();
        this._setMinuteDigitalDisabled();
        this._checkDraw();
        this.picker._emitTimeChangeEvent(this._selectedTime);
    }
    _showHoursClock() {
        this._generateTick();
        this._showHours = true;
        this._setOkBtnDisabled();
        this._checkDraw();
    }
    _showMinutesClock() {
        if (!this._minuteDigitalDisabled) {
            this._showHours = false;
            this._generateTick();
            this._setOkBtnDisabled();
            this._generateMinutesDisable();
            if (this._disabledMinutes[Number(this._selectedTime.m)] === true) {
                this._setMinute(this._disabledMinutes.indexOf(false));
            }
            this._checkDraw();
        }
    }
    _generateTick() {
        if (this.twelveHour) {
            this._hoursTicks = [];
            for (let i = 1; i < 13; i++) {
                const radian = (i / 6) * Math.PI;
                const tick = {
                    hour: i.toString(),
                    left: this._radius.dial + Math.sin(radian) * this._radius.outer - this._radius.tick,
                    top: this._radius.dial - Math.cos(radian) * this._radius.outer - this._radius.tick,
                    disabled: this._rangeHour(i, 'min') || this._rangeHour(i, 'max'),
                };
                this._hoursTicks.push(tick);
            }
        }
        else {
            this._hoursTicks = [];
            for (let i = 0; i < 24; i++) {
                const radian = (i / 6) * Math.PI;
                const inner = i > 0 && i < 13;
                const radius = inner ? this._radius.inner : this._radius.outer;
                const hour = i === 0 ? '0' + i.toString() : i.toString();
                const tick = {
                    hour,
                    left: this._radius.dial + Math.sin(radian) * radius - this._radius.tick,
                    top: this._radius.dial - Math.cos(radian) * radius - this._radius.tick,
                    disabled: this._rangeHour(i, 'min') || this._rangeHour(i, 'max'),
                };
                this._hoursTicks.push(tick);
            }
        }
        this._minutesTicks = [];
        for (let i = 0; i < 60; i += 5) {
            const radian = (i / 30) * Math.PI;
            const disableByRounding = this.rounding > 1 && i % this.rounding !== 0;
            const min = i < 10 ? '0' + i.toString() : i.toString();
            const tick = {
                min,
                left: this._radius.dial + Math.sin(radian) * this._radius.outer - this._radius.tick,
                top: this._radius.dial - Math.cos(radian) * this._radius.outer - this._radius.tick,
                disabled: this._rangeMinute(i, 'min') || this._rangeMinute(i, 'max') || disableByRounding,
            };
            this._minutesTicks.push(tick);
        }
    }
    setClockHand(x, y, roundBy) {
        let radian = Math.atan2(x, -y);
        const isHours = this._showHours;
        const unit = Math.PI / (isHours ? 6 : roundBy ? this._denominator[roundBy] : 30);
        const z = Math.sqrt(x * x + y * y);
        const inner = isHours && z < (this._radius.outer + this._radius.inner) / 2;
        let value = this._showHours
            ? parseInt(this._selectedTime.h, 0)
            : parseInt(this._selectedTime.m, 0);
        const radius = inner && !this.twelveHour ? this._radius.inner : this._radius.outer;
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        value = Math.round(radian / unit);
        radian = value * unit;
        if (this.twelveHour && isHours) {
            if (value === 0) {
                value = 12;
            }
            if (this._isMouseDown) {
                if (isHours && (this._rangeHour(value, 'min') || this._rangeHour(value, 'max'))) {
                    return;
                }
            }
        }
        else if (!this.twelveHour && isHours) {
            value = !inner ? value + 12 : value;
            value = value === 24 ? 0 : value;
            value = inner && value === 0 ? 12 : value;
            value = !inner && value === 12 ? 0 : value;
            if (this._isMouseDown) {
                if (isHours && (this._rangeHour(value, 'min') || this._rangeHour(value, 'max'))) {
                    return;
                }
            }
        }
        else {
            if (roundBy) {
                value *= roundBy;
            }
            if (value === 60) {
                value = 0;
            }
        }
        if (isHours) {
            this.fg.nativeElement.setAttribute('class', 'mdb-timepicker-canvas-fg');
        }
        else {
            if (this._rangeMinute(value, 'min') || this._rangeMinute(value, 'max')) {
                this._cdRef.markForCheck();
                return;
            }
            if (value % 5 === 0) {
                this.fg.nativeElement.setAttribute('class', 'mdb-timepicker-canvas-fg');
            }
            else {
                this.fg.nativeElement.setAttribute('class', 'mdb-timepicker-canvas-fg active');
            }
        }
        const cx1 = Math.sin(radian) * (radius - this._radius.tick), cy1 = -Math.cos(radian) * (radius - this._radius.tick), cx2 = Math.sin(radian) * radius, cy2 = -Math.cos(radian) * radius;
        this.hand.nativeElement.setAttribute('x2', cx1);
        this.hand.nativeElement.setAttribute('y2', cy1);
        this.bg.nativeElement.setAttribute('cx', cx2);
        this.bg.nativeElement.setAttribute('cy', cy2);
        this.fg.nativeElement.setAttribute('cx', cx2);
        this.fg.nativeElement.setAttribute('cy', cy2);
        if (this._showHours) {
            if (value !== Number(this._selectedTime.h)) {
                this._setHour(value);
                this._setMinuteDigitalDisabled();
            }
        }
        else {
            if (value !== Number(this._selectedTime.m)) {
                this._setMinute(value);
            }
        }
        this._cdRef.markForCheck();
    }
    _to24(time) {
        let hour = time.ampm === 'PM' ? Number(time.h) + 12 : Number(time.h);
        hour = hour === 12 ? 0 : hour;
        hour = hour === 24 ? 12 : hour;
        return Object.assign(Object.assign({}, time), { h: `${hour}` });
    }
    _rangeHour(index, range) {
        let status = false;
        const i = Number(this._to24(Object.assign(Object.assign({}, this._selectedTime), { h: `${index}` })).h);
        if (!this.twelveHour) {
            const minH = this.min && Number(this._min.h);
            const maxH = this.max && Number(this._max.h);
            if (range === 'min' && this.min) {
                status = index < minH;
                if (status && this._max && this._max.h < this._min.h) {
                    status = false;
                }
            }
            else if (range === 'max' && this.max) {
                status = index > maxH;
                if (status && this._min && this._min.h > this._max.h && minH <= index) {
                    status = false;
                }
            }
        }
        else {
            const min = this._min && Number(this._to24(this._min).h);
            const max = this._max && Number(this._to24(this._max).h);
            if (range === 'min' && this.min) {
                status = i < min;
            }
            if (range === 'max' && this.max) {
                status = i > max;
            }
            if (min > max) {
                status = false;
                status = min > i && i > max;
            }
        }
        this._disabledHours[i] = status;
        return status;
    }
    _rangeMinute(index, range) {
        let status = false;
        if (!this._showHours) {
            if (range === 'min' && this.min) {
                const isSameHour = this._min.h === this._selectedTime.h;
                const value = index < Number(this._min.m);
                status = value && isSameHour;
            }
            else if (range === 'max' && this.max) {
                const isSameHour = this._max.h === this._selectedTime.h;
                const value = index > Number(this._max.m);
                status = value && isSameHour;
            }
        }
        if (this.twelveHour) {
            const min = this._min && Number(this._to24(this._min).h);
            const max = this._max && Number(this._to24(this._max).h);
            const i = Number(this._to24(this._selectedTime).h);
            if (range === 'min' && min) {
                status = i === min && index < Number(this._min.m);
            }
            else if (range === 'max' && max) {
                status = i === max && index > Number(this._max.m);
            }
            status = status || this._disabledHours[i];
        }
        return status;
    }
    _setMinuteDigitalDisabled() {
        const { h } = this._to24(this._selectedTime);
        this._minuteDigitalDisabled = this._disabledHours[Number(h)];
    }
};
MdbTimePickerContentComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: FocusMonitor },
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
__decorate([
    ViewChild('plate', { static: false }),
    __metadata("design:type", ElementRef)
], MdbTimePickerContentComponent.prototype, "plate", void 0);
__decorate([
    ViewChild('hand', { static: false }),
    __metadata("design:type", ElementRef)
], MdbTimePickerContentComponent.prototype, "hand", void 0);
__decorate([
    ViewChild('fg', { static: false }),
    __metadata("design:type", ElementRef)
], MdbTimePickerContentComponent.prototype, "fg", void 0);
__decorate([
    ViewChild('bg', { static: false }),
    __metadata("design:type", ElementRef)
], MdbTimePickerContentComponent.prototype, "bg", void 0);
__decorate([
    ViewChild('focus', { static: false }),
    __metadata("design:type", ElementRef)
], MdbTimePickerContentComponent.prototype, "focus", void 0);
__decorate([
    ViewChild('digitalMinute', { static: false }),
    __metadata("design:type", ElementRef)
], MdbTimePickerContentComponent.prototype, "digitalMinute", void 0);
MdbTimePickerContentComponent = __decorate([
    Component({
        selector: 'mdb-timepicker-content',
        template: "<div class=\"mdb-timepicker-modal\" cdkTrapFocus>\n  <!-- HEADER -->\n  <div class=\"mdb-timepicker-header\">\n    <!-- TIME -->\n    <div class=\"mdb-timepicker-time\">\n      <span\n        (click)=\"_showHoursClock()\"\n        (keydown.arrowdown)=\"_arrowChangeHour($event.key)\"\n        (keydown.arrowup)=\"_arrowChangeHour($event.key)\"\n        (keydown.enter)=\"_showHoursClock()\"\n        [ngClass]=\"{ active: _showHours }\"\n        class=\"hour-digital\"\n        #focus\n        tabindex=\"0\"\n      >\n        {{ _selectedTime.h }}</span\n      >:<span\n        (click)=\"_showMinutesClock()\"\n        (keydown.arrowdown)=\"_arrowChangeMinute($event.key)\"\n        (keydown.arrowup)=\"_arrowChangeMinute($event.key)\"\n        (keydown.enter)=\"_showMinutesClock()\"\n        [ngClass]=\"{ 'active': !_showHours, 'disabled': _minuteDigitalDisabled }\"\n        class=\"minute-digital\"\n        #digitalMinute\n        tabindex=\"0\"\n        >{{ _selectedTime.m }}</span\n      >\n    </div>\n    <div class=\"mdb-timepicker-ampm\" *ngIf=\"twelveHour\">\n      <span\n        (click)=\"_setAmPm('AM')\"\n        (keydown.enter)=\"_setAmPm('AM')\"\n        [ngClass]=\"{ active: _selectedTime.ampm == 'AM' }\"\n        tabindex=\"0\"\n        >AM</span\n      >\n      <span\n        (click)=\"_setAmPm('PM')\"\n        (keydown.enter)=\"_setAmPm('PM')\"\n        [ngClass]=\"{ active: _selectedTime.ampm == 'PM' }\"\n        tabindex=\"0\"\n        >PM</span\n      >\n    </div>\n  </div>\n  <!-- /Header -->\n  <!-- Body -->\n  <div class=\"mdb-timepicker-body\">\n    <div class=\"mdb-timepicker-plate\" #plate>\n      <div class=\"mdb-timepicker-canvas\">\n        <svg class=\"mdb-timepicker-svg\" width=\"270\" height=\"270\" #svg>\n          <g transform=\"translate(135,135)\" #g>\n            <line x1=\"0\" y1=\"0\" x2=\"0\" y2=\"-90\" #hand></line>\n            <circle class=\"mdb-timepicker-canvas-fg\" r=\"5\" cx=\"0\" cy=\"-110\" #fg></circle>\n            <circle class=\"mdb-timepicker-canvas-bg\" r=\"20\" cx=\"0\" cy=\"-110\" #bg></circle>\n            <circle class=\"mdb-timepicker-canvas-bearing\" cx=\"0\" cy=\"0\" r=\"2\" #bearing></circle>\n          </g>\n        </svg>\n      </div>\n\n      <div\n        [ngClass]=\"{ 'mdb-timepicker-dial-out': !_showHours }\"\n        [ngStyle]=\"{ visibility: !_showHours ? 'hidden' : 'visible' }\"\n        #hoursPlate\n        class=\"mdb-timepicker-dial mdb-timepicker-hours\"\n      >\n        <div\n          [ngClass]=\"{ disabled: tick.disabled }\"\n          [ngStyle]=\"{ left: tick.left + 'px', top: tick.top + 'px' }\"\n          *ngFor=\"let tick of _hoursTicks\"\n          class=\"mdb-timepicker-tick\"\n          id=\"{{ tick.hour }}\"\n          style=\"font-size: 140%;\"\n        >\n          {{ tick.hour }}\n        </div>\n      </div>\n      <div\n        [ngClass]=\"{ 'mdb-timepicker-dial-out': _showHours }\"\n        [ngStyle]=\"{ visibility: _showHours ? 'hidden' : 'visible' }\"\n        #minutesPlate\n        class=\"mdb-timepicker-dial mdb-timepicker-minutes\"\n      >\n        <div\n          [ngClass]=\"{ disabled: tick.disabled }\"\n          [ngStyle]=\"{ left: tick.left + 'px', top: tick.top + 'px' }\"\n          *ngFor=\"let tick of _minutesTicks\"\n          class=\"mdb-timepicker-tick\"\n          style=\"font-size: 120%;\"\n        >\n          {{ tick.min }}\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /Boody -->\n  <!-- Footer -->\n  <div class=\"mdb-timepicker-footer\">\n    <button\n      (click)=\"_clearBtnClicked()\"\n      *ngIf=\"clearButton\"\n      class=\"mdb-timepicker-btn mdb-timepicker-clear\"\n      mdbWavesEffect\n      type=\"button\"\n    >\n      {{ clearButton }}\n    </button>\n    <button\n      (click)=\"_closeBtnClicked()\"\n      *ngIf=\"closeButton\"\n      class=\"mdb-timepicker-btn mdb-timepicker-close\"\n      mdbWavesEffect\n      type=\"button\"\n    >\n      {{ closeButton }}\n    </button>\n    <button\n      (click)=\"_okBtnClicked()\"\n      [ngClass]=\"{ disabled: _okButtonDisabled }\"\n      class=\"mdb-timepicker-btn mdb-timepicker-ok\"\n      mdbWavesEffect\n      type=\"button\"\n    >\n      {{ okButton }}\n    </button>\n  </div>\n  <!-- /Footer -->\n</div>\n",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: ["@-webkit-keyframes pulse{from,to{transform:scale3d(1,1,1)}50%{transform:scale3d(1.1,1.1,1.1)}}@keyframes pulse{from,to{transform:scale3d(1,1,1)}50%{transform:scale3d(1.1,1.1,1.1)}}.disabled{cursor:default;opacity:.5}.mdb-timepicker-modal{min-width:328px;box-shadow:rgba(0,0,0,.2) 0 11px 15px -7px,rgba(0,0,0,.14) 0 24px 38px 3px,rgba(0,0,0,.12) 0 9px 46px 8px;background:#fff;display:table-cell;vertical-align:middle}@media (min-height:28.875em){.mdb-timepicker-modal{display:block;border:1px solid #777;border-top-color:#898989;border-bottom-width:0;border-radius:5px 5px 0 0;box-shadow:0 .75rem 2.25rem 1rem rgba(0,0,0,.24)}}.mdb-timepicker-header{height:120px;box-sizing:border-box;background-color:#4285f4;padding:24px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.55)}.mdb-timepicker-time{font-size:4.375rem;color:rgba(255,255,255,.65)}.mdb-timepicker-ampm{margin-left:15px;font-size:18px;display:flex;flex-direction:column;justify-content:space-around;height:100%}span{cursor:pointer}span.active{color:#fff}.mdb-timepicker-tick{border-radius:50%;color:#666;line-height:2.5rem;text-align:center;width:2.5rem;height:2.5rem;position:absolute;cursor:pointer;transition:.3s;background-color:rgba(0,150,136,0)}.mdb-timepicker-tick:hover{background-color:rgba(0,150,136,.25)}.mdb-timepicker-footer{display:flex;justify-content:flex-end;width:100%;padding:12px}.mdb-timepicker-btn{padding:6px 8px;text-transform:uppercase;background:0 0;border:0;border-radius:4px;min-width:64px;transition:.3s}.mdb-timepicker-btn:not(.mdb-timepicker-btn.mdb-timepicker-clear){margin-left:8px}.mdb-timepicker-btn.mdb-timepicker-clear{margin-right:auto}.mdb-timepicker-btn:hover{background-color:rgba(0,150,136,.25)}.mdb-timepicker-plate{background-color:#eee;border-radius:50%;width:16.875rem;height:16.875rem;overflow:visible;position:relative;margin:1.25rem auto auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdb-timepicker-plate .mdb-timepicker-minutes{visibility:hidden}.mdb-timepicker-plate .mdb-timepicker-dial-out{opacity:0}.mdb-timepicker-plate .mdb-timepicker-hours.mdb-timepicker-dial-out{transform:scale(1.2,1.2)}.mdb-timepicker-plate .mdb-timepicker-minutes.mdb-timepicker-dial-out{transform:scale(.8,.8)}.mdb-timepicker-canvas,.mdb-timepicker-dial{width:16.875rem;height:16.875rem;position:absolute;left:-1px;top:-1px}.mdb-timepicker-dial{transition:transform 350ms,opacity 350ms}.mdb-timepicker-dial .mdb-timepicker-tick{border-radius:50%;color:#666;line-height:2.5rem;text-align:center;width:2.5rem;height:2.5rem;position:absolute;cursor:pointer;transition:background-color .3s;background-color:rgba(0,150,136,0)}.mdb-timepicker-dial .mdb-timepicker-tick.active,.mdb-timepicker-dial .mdb-timepicker-tick:hover{background-color:rgba(0,150,136,.25)}.mdb-timepicker-canvas{transition:opacity .3s}.mdb-timepicker-canvas line{stroke:rgba(0,150,136,.25);stroke-width:1}.mdb-timepicker-canvas-out{opacity:.25}.mdb-timepicker-canvas-bearing{stroke:none;fill:rgba(0,77,64,.75)}.mdb-timepicker-canvas-fg{stroke:none;fill:rgba(0,77,64,0)}.mdb-timepicker-canvas-fg.active{fill:rgba(0,77,64,.5)}.mdb-timepicker-canvas-bg{stroke:none;fill:rgba(0,150,136,.25)}.mdb-timepicker-canvas-bg-trans{fill:rgba(0,150,136,.25)}"]
    }),
    __param(5, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [ChangeDetectorRef,
        NgZone,
        FocusMonitor,
        ElementRef,
        Renderer2, Object])
], MdbTimePickerContentComponent);
export { MdbTimePickerContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb250ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby90aW1lcGlja2VyL3RpbWVwaWNrZXIuY29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFDTCxhQUFhLEVBQ2IsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQW9CakQsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7SUFvRHhDLFlBQ1UsTUFBeUIsRUFDekIsT0FBZSxFQUNoQixZQUEwQixFQUMxQixJQUFnQixFQUNoQixRQUFtQixFQUNBLFNBQWM7UUFMaEMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDQSxjQUFTLEdBQVQsU0FBUyxDQUFLO1FBbkNsQyxtQkFBYyxHQUFjLEVBQUUsQ0FBQztRQUMvQixxQkFBZ0IsR0FBYyxFQUFFLENBQUM7UUFDakMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDdEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsMkJBQXNCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBQzdCLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUUxQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBRWpCLFlBQU8s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LENBQUMsTUFBTTs7S0FDaEQsQ0FBQztJQTJERyxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtxQ0FMRCxpQkFBaUI7UUFDaEIsTUFBTTtRQUNGLFlBQVk7UUFDcEIsVUFBVTtRQUNOLFNBQVM7R0F6RGpCLDZCQUE2QixDQWtsQnpDO1NBbGxCWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5qZWN0LFxuICBOZ1pvbmUsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIEFtUG0sXG4gIENsZWFyQnV0dG9uLFxuICBDbG9zZUJ1dHRvbixcbiAgSG91cixcbiAgTWludXRlLFxuICBSYWRpdXMsXG4gIFJvdW5kaW5nLFxuICBTZWxlY3RlZFRpbWUsXG59IGZyb20gJy4vdGltZXBpY2tlci5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTWRiVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdGltZXBpY2tlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGItdGltZXBpY2tlci1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVwaWNrZXIuY29udGVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGltZS1waWNrZXItbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1kYlRpbWVQaWNrZXJDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgncGxhdGUnLCB7IHN0YXRpYzogZmFsc2UgfSkgcGxhdGU6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2hhbmQnLCB7IHN0YXRpYzogZmFsc2UgfSkgaGFuZDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZmcnLCB7IHN0YXRpYzogZmFsc2UgfSkgZmc6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2JnJywgeyBzdGF0aWM6IGZhbHNlIH0pIGJnOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdmb2N1cycsIHsgc3RhdGljOiBmYWxzZSB9KSBmb2N1czogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnZGlnaXRhbE1pbnV0ZScsIHsgc3RhdGljOiBmYWxzZSB9KSBkaWdpdGFsTWludXRlOiBFbGVtZW50UmVmO1xuXG4gIGF1dG9DbG9zZTogYm9vbGVhbjtcbiAgY2xlYXJCdXR0b246IENsZWFyQnV0dG9uO1xuICBjbG9zZUJ1dHRvbjogQ2xvc2VCdXR0b247XG4gIG1heDogU2VsZWN0ZWRUaW1lO1xuICBtaW46IFNlbGVjdGVkVGltZTtcbiAgb2tCdXR0b246IHN0cmluZztcbiAgcGlja2VyOiBNZGJUaW1lUGlja2VyQ29tcG9uZW50O1xuICByb3VuZGluZzogUm91bmRpbmc7XG4gIHR3ZWx2ZUhvdXI6IGJvb2xlYW47XG4gIHZhbHVlOiBTZWxlY3RlZFRpbWU7XG5cbiAgcHJpdmF0ZSBfbWF4OiBTZWxlY3RlZFRpbWU7XG4gIHByaXZhdGUgX21pbjogU2VsZWN0ZWRUaW1lO1xuICBwcml2YXRlIF9yZXR1cm5Ib3Vyczogc3RyaW5nO1xuXG4gIHByaXZhdGUgX2Rpc2FibGVkSG91cnM6IGJvb2xlYW5bXSA9IFtdO1xuICBwcml2YXRlIF9kaXNhYmxlZE1pbnV0ZXM6IGJvb2xlYW5bXSA9IFtdO1xuICBwcml2YXRlIF9pc01vdXNlRG93biA9IGZhbHNlO1xuICBwdWJsaWMgX2hvdXJzVGlja3M6IEhvdXJbXSA9IFtdO1xuICBwdWJsaWMgX21pbnV0ZURpZ2l0YWxEaXNhYmxlZCA9IGZhbHNlO1xuICBwdWJsaWMgX21pbnV0ZXNUaWNrczogTWludXRlW10gPSBbXTtcbiAgcHVibGljIF9va0J1dHRvbkRpc2FibGVkID0gZmFsc2U7XG4gIHB1YmxpYyBfc2VsZWN0ZWRUaW1lOiBTZWxlY3RlZFRpbWU7XG4gIHB1YmxpYyBfc2hvd0hvdXJzID0gdHJ1ZTtcblxuICBwcml2YXRlIF9yYWRpdXM6IFJhZGl1cyA9IHtcbiAgICBkaWFsOiAxMzUsXG4gICAgaW5uZXI6IDgwLFxuICAgIG91dGVyOiAxMTAsXG4gICAgdGljazogMjAsXG4gIH07XG5cbiAgcHJpdmF0ZSBfZGVub21pbmF0b3I6IHsgW2tleTogbnVtYmVyXTogbnVtYmVyIH0gPSB7XG4gICAgMTogMzAsXG4gICAgNTogNixcbiAgICAxMDogMyxcbiAgICAxNTogMixcbiAgICAyMDogMS41LFxuICAgIC8vIDMwOiAxLFxuICAgIC8vIDYwOiAwLjVcbiAgfTtcblxuICBwcml2YXRlIHRvdWNoU3VwcG9ydGVkOiBib29sZWFuID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcbiAgICBwdWJsaWMgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXG4gICAgcHVibGljIGVsZW06IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBfZG9jdW1lbnQ6IGFueVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fbWF4ID0gdGhpcy5tYXg7XG4gICAgdGhpcy5fbWluID0gdGhpcy5taW47XG4gICAgdGhpcy5fc2VsZWN0ZWRUaW1lID0gdGhpcy52YWx1ZTtcbiAgICBjb25zdCB7IGFtcG0gfSA9IHRoaXMuX3NlbGVjdGVkVGltZTtcblxuICAgIC8vIEFkZCBkaXNhYmxlZCBob3VycyB0byBhcnJheSBmb3IgUE0gYW5kIEFNIEhvdXJzXG4gICAgaWYgKHRoaXMudHdlbHZlSG91cikge1xuICAgICAgdGhpcy5fc2VsZWN0ZWRUaW1lLmFtcG0gPSBhbXBtID09PSAnUE0nID8gJ0FNJyA6ICdQTSc7XG4gICAgICB0aGlzLl9nZW5lcmF0ZVRpY2soKTtcbiAgICAgIHRoaXMuX3NlbGVjdGVkVGltZS5hbXBtID0gdGhpcy5fc2VsZWN0ZWRUaW1lLmFtcG0gPT09ICdQTScgPyAnQU0nIDogJ1BNJztcbiAgICB9XG4gICAgdGhpcy5fZ2VuZXJhdGVUaWNrKCk7XG4gICAgdGhpcy5fc2V0T2tCdG5EaXNhYmxlZCgpO1xuICAgIHRoaXMuX3NldE1pbnV0ZURpZ2l0YWxEaXNhYmxlZCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIFsnbW91c2Vkb3duJywgJ21vdXNldXAnLCAndG91Y2hlbmQnLCAndG91Y2hzdGFydCddLmZvckVhY2goKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMucGxhdGUubmF0aXZlRWxlbWVudCwgZXZlbnQsIChldjogYW55KSA9PiB7XG4gICAgICAgIGlmIChldmVudCA9PT0gJ21vdXNlZG93bicgfHwgZXZlbnQgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICAgIHRoaXMuX21vdXNlZG93bihldiwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICB0aGlzLl9jaGVja0RyYXcoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuZm9jdXMsICdrZXlib2FyZCcpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hlY2tEcmF3KCkge1xuICAgIGNvbnN0IHsgaCwgbSB9ID0gdGhpcy5fc2VsZWN0ZWRUaW1lO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fc2hvd0hvdXJzID8gcGFyc2VJbnQoaCwgMCkgOiBwYXJzZUludChtLCAwKTtcblxuICAgIGNvbnN0IHVuaXQgPSBNYXRoLlBJIC8gKHRoaXMuX3Nob3dIb3VycyA/IDYgOiAzMCksXG4gICAgICByYWRpYW4gPSB2YWx1ZSAqIHVuaXQsXG4gICAgICByYWRpdXMgPSB0aGlzLl9zaG93SG91cnMgJiYgdmFsdWUgPiAwICYmIHZhbHVlIDwgMTMgPyB0aGlzLl9yYWRpdXMuaW5uZXIgOiB0aGlzLl9yYWRpdXMub3V0ZXIsXG4gICAgICB4ZCA9IE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMsXG4gICAgICB5ZCA9IC1NYXRoLmNvcyhyYWRpYW4pICogcmFkaXVzO1xuXG4gICAgdGhpcy5zZXRDbG9ja0hhbmQoeGQsIHlkKTtcbiAgfVxuXG4gIHByaXZhdGUgX21vdXNlZG93bihlOiBhbnksIHNwYWNlPzogYW55KSB7XG4gICAgdGhpcy5faXNNb3VzZURvd24gPSB0cnVlO1xuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMucGxhdGUubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGlzVG91Y2ggPSAvXnRvdWNoLy50ZXN0KGUudHlwZSksXG4gICAgICB4MCA9IG9mZnNldC5sZWZ0ICsgdGhpcy5fcmFkaXVzLmRpYWwsXG4gICAgICB5MCA9IG9mZnNldC50b3AgKyB0aGlzLl9yYWRpdXMuZGlhbCxcbiAgICAgIGR4ID0gKGlzVG91Y2ggPyBlLnRvdWNoZXNbMF0gOiBlKS5jbGllbnRYIC0geDAsXG4gICAgICBkeSA9IChpc1RvdWNoID8gZS50b3VjaGVzWzBdIDogZSkuY2xpZW50WSAtIHkwLFxuICAgICAgeiA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XG4gICAgbGV0IG1vdmVkID0gZmFsc2U7XG5cbiAgICBpZiAoXG4gICAgICBzcGFjZSAmJlxuICAgICAgKHogPCB0aGlzLl9yYWRpdXMub3V0ZXIgLSB0aGlzLl9yYWRpdXMudGljayB8fCB6ID4gdGhpcy5fcmFkaXVzLm91dGVyICsgdGhpcy5fcmFkaXVzLnRpY2spXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHRoaXMuX3Nob3dIb3Vycykge1xuICAgICAgdGhpcy5zZXRDbG9ja0hhbmQoZHgsIGR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRDbG9ja0hhbmQoZHgsIGR5LCB0aGlzLnJvdW5kaW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCBtb3VzZW1vdmVFdmVudE1ldGhvZCA9IChldmVudDogYW55KSA9PiB7XG4gICAgICBpZiAoIXRoaXMudG91Y2hTdXBwb3J0ZWQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXNoYWRvd2VkLXZhcmlhYmxlXG4gICAgICBjb25zdCBpc1RvdWNoID0gL150b3VjaC8udGVzdChldmVudC50eXBlKSxcbiAgICAgICAgeCA9IChpc1RvdWNoID8gZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50KS5jbGllbnRYIC0geDAsXG4gICAgICAgIHkgPSAoaXNUb3VjaCA/IGV2ZW50LnRvdWNoZXNbMF0gOiBldmVudCkuY2xpZW50WSAtIHkwO1xuICAgICAgaWYgKCFtb3ZlZCAmJiB4ID09PSBkeCAmJiB5ID09PSBkeSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBtb3ZlZCA9IHRydWU7XG5cbiAgICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNldENsb2NrSGFuZCh4LCB5LCB0aGlzLnJvdW5kaW5nKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBtb3VzZXVwRXZlbnRNZXRob2QgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgdGhpcy5fZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2Vtb3ZlRXZlbnRNZXRob2QpO1xuICAgICAgaWYgKHRoaXMudG91Y2hTdXBwb3J0ZWQpIHtcbiAgICAgICAgdGhpcy5fZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgbW91c2Vtb3ZlRXZlbnRNZXRob2QpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnRvdWNoU3VwcG9ydGVkKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WCAtIHgwLFxuICAgICAgICB5ID0gZXZlbnQuY2xpZW50WSAtIHkwO1xuXG4gICAgICBpZiAoKHNwYWNlIHx8IG1vdmVkKSAmJiB4ID09PSBkeCAmJiB5ID09PSBkeSkge1xuICAgICAgICB0aGlzLnNldENsb2NrSGFuZCh4LCB5KTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9DbG9zZSAmJiAhdGhpcy5fc2hvd0hvdXJzKSB7XG4gICAgICAgICAgdGhpcy5fb2tCdG5DbGlja2VkKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9zaG93TWludXRlc0Nsb2NrKCk7XG4gICAgICB0aGlzLmRpZ2l0YWxNaW51dGUubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuXG4gICAgICB0aGlzLl9pc01vdXNlRG93biA9IGZhbHNlO1xuXG4gICAgICB0aGlzLl9kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2V1cEV2ZW50TWV0aG9kKTtcbiAgICAgIGlmICh0aGlzLnRvdWNoU3VwcG9ydGVkKSB7XG4gICAgICAgIHRoaXMuX2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgbW91c2V1cEV2ZW50TWV0aG9kKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGlja2VyLl9lbWl0VGltZUNoYW5nZUV2ZW50KHRoaXMuX3NlbGVjdGVkVGltZSk7XG4gICAgfTtcblxuICAgIHRoaXMuX2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlbW92ZUV2ZW50TWV0aG9kKTtcbiAgICBpZiAodGhpcy50b3VjaFN1cHBvcnRlZCkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgbW91c2Vtb3ZlRXZlbnRNZXRob2QpO1xuICAgIH1cbiAgICB0aGlzLl9kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2V1cEV2ZW50TWV0aG9kKTtcbiAgICBpZiAodGhpcy50b3VjaFN1cHBvcnRlZCkge1xuICAgICAgdGhpcy5fZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBtb3VzZXVwRXZlbnRNZXRob2QpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBfY2xvc2VCdG5DbGlja2VkKCkge1xuICAgIC8vIHRvZG8gdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICBjb25zdCB7IGFtcG0sIGgsIG0gfSA9IHRoaXMuX3NlbGVjdGVkVGltZTtcbiAgICB0aGlzLl9yZXR1cm5Ib3VycyA9IHRoaXMudHdlbHZlSG91ciA/IGAke2h9OiR7bX0ke2FtcG19YCA6IGAke2h9OiR7bX0ke2FtcG19YDtcblxuICAgIHRoaXMucGlja2VyLmNsb3NlKGZhbHNlKTtcbiAgfVxuXG4gIHB1YmxpYyBfY2xlYXJCdG5DbGlja2VkKCkge1xuICAgIHRoaXMuX3NldEFtUG0oJ0FNJyk7XG4gICAgdGhpcy5fc2V0SG91cigxMik7XG4gICAgdGhpcy5fc2V0TWludXRlKDApO1xuICAgIHRoaXMuX2dlbmVyYXRlVGljaygpO1xuICAgIHRoaXMuX3Nob3dIb3Vyc0Nsb2NrKCk7XG4gICAgdGhpcy5waWNrZXIuX3NldFZhbHVlKCcnKTtcbiAgICB0aGlzLnBpY2tlci5fc2VsZWN0aW9uQ2hhbmdlJC5uZXh0KCcnKTtcbiAgfVxuXG4gIHB1YmxpYyBfb2tCdG5DbGlja2VkKCkge1xuICAgIGlmICghdGhpcy5fb2tCdXR0b25EaXNhYmxlZCkge1xuICAgICAgY29uc3QgeyBhbXBtLCBoLCBtIH0gPSB0aGlzLl9zZWxlY3RlZFRpbWU7XG4gICAgICB0aGlzLl9yZXR1cm5Ib3VycyA9IHRoaXMudHdlbHZlSG91ciA/IGAke2h9OiR7bX0ke2FtcG19YCA6IGAke2h9OiR7bX0ke2FtcG19YDtcblxuICAgICAgdGhpcy5waWNrZXIuX3NldFZhbHVlKHRoaXMuX3JldHVybkhvdXJzKTtcbiAgICAgIHRoaXMucGlja2VyLl9lbWl0VGltZURvbmVFdmVudCh0aGlzLl9zZWxlY3RlZFRpbWUpO1xuICAgICAgdGhpcy5waWNrZXIub25DaGFuZ2VDYih0aGlzLl9yZXR1cm5Ib3Vycyk7XG4gICAgICB0aGlzLnBpY2tlci5jbG9zZSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgX2Fycm93Q2hhbmdlSG91cihrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IHsgaCwgYW1wbSB9ID0gdGhpcy5fdG8yNCh0aGlzLl9zZWxlY3RlZFRpbWUpO1xuICAgIGNvbnN0IHNlbGVjdGVkSG91ciA9IE51bWJlcihoKTtcbiAgICBjb25zdCBhdmFpbGFibGVIb3VyczogbnVtYmVyW10gPSBbXTtcbiAgICB0aGlzLl9kaXNhYmxlZEhvdXJzLm1hcCgoaG91ciwgaW5kZXgpID0+ICFob3VyICYmIGF2YWlsYWJsZUhvdXJzLnB1c2goaW5kZXgpKTtcblxuICAgIGxldCB0b0NoYW5nZTtcbiAgICBsZXQgdmFsdWUgPVxuICAgICAga2V5ID09PSAnQXJyb3dVcCdcbiAgICAgICAgPyBhdmFpbGFibGVIb3Vycy5pbmRleE9mKHNlbGVjdGVkSG91cikgKyAxXG4gICAgICAgIDogYXZhaWxhYmxlSG91cnMuaW5kZXhPZihzZWxlY3RlZEhvdXIpIC0gMTtcblxuICAgIHZhbHVlID0gdmFsdWUgPCAwID8gYXZhaWxhYmxlSG91cnMubGVuZ3RoIC0gMSA6IHZhbHVlO1xuICAgIHZhbHVlID0gdmFsdWUgPiBhdmFpbGFibGVIb3Vycy5sZW5ndGggLSAxID8gMCA6IHZhbHVlO1xuICAgIHRvQ2hhbmdlID0gYXZhaWxhYmxlSG91cnNbdmFsdWVdO1xuICAgIGlmICh0aGlzLnR3ZWx2ZUhvdXIpIHtcbiAgICAgIGlmICh0b0NoYW5nZSA+PSAxMikge1xuICAgICAgICB0b0NoYW5nZSA9IHRvQ2hhbmdlIC0gMTI7XG4gICAgICAgIGlmIChhbXBtID09PSAnQU0nKSB7XG4gICAgICAgICAgdGhpcy5fc2V0QW1QbSgnUE0nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0b0NoYW5nZSA8PSAwIHx8IHRvQ2hhbmdlIDwgMTIpIHtcbiAgICAgICAgaWYgKGFtcG0gPT09ICdQTScpIHtcbiAgICAgICAgICB0aGlzLl9zZXRBbVBtKCdBTScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3Nob3dIb3Vyc0Nsb2NrKCk7XG4gICAgdGhpcy5fc2V0SG91cih0b0NoYW5nZSk7XG4gICAgdGhpcy5fY2hlY2tEcmF3KCk7XG4gIH1cblxuICBwdWJsaWMgX2Fycm93Q2hhbmdlTWludXRlKGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLl9taW51dGVEaWdpdGFsRGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLl9zaG93SG91cnMpIHtcbiAgICAgICAgdGhpcy5fc2hvd01pbnV0ZXNDbG9jaygpO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBtIH0gPSB0aGlzLl9zZWxlY3RlZFRpbWU7XG4gICAgICBjb25zdCBhdmFpbGFibGVNaW51dGVzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgICB0aGlzLl9nZW5lcmF0ZU1pbnV0ZXNEaXNhYmxlKCk7XG4gICAgICB0aGlzLl9kaXNhYmxlZE1pbnV0ZXMubWFwKChkaXNhYmxlZCwgaSkgPT4ge1xuICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgYXZhaWxhYmxlTWludXRlcy5wdXNoKGkpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbGV0IHRvQ2hhbmdlO1xuICAgICAgbGV0IHZhbHVlID1cbiAgICAgICAga2V5ID09PSAnQXJyb3dVcCdcbiAgICAgICAgICA/IGF2YWlsYWJsZU1pbnV0ZXMuaW5kZXhPZihOdW1iZXIobSkpICsgMVxuICAgICAgICAgIDogYXZhaWxhYmxlTWludXRlcy5pbmRleE9mKE51bWJlcihtKSkgLSAxO1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlIDwgMCA/IGF2YWlsYWJsZU1pbnV0ZXMubGVuZ3RoIC0gMSA6IHZhbHVlO1xuICAgICAgdmFsdWUgPSB2YWx1ZSA+IGF2YWlsYWJsZU1pbnV0ZXMubGVuZ3RoIC0gMSA/IDAgOiB2YWx1ZTtcbiAgICAgIHRvQ2hhbmdlID0gYXZhaWxhYmxlTWludXRlc1t2YWx1ZV07XG4gICAgICB0aGlzLl9zZXRNaW51dGUodG9DaGFuZ2UpO1xuICAgICAgdGhpcy5fY2hlY2tEcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVNaW51dGVzRGlzYWJsZSgpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGNvbnN0IGRpc2FibGVCeVJvdW5kaW5nID0gdGhpcy5yb3VuZGluZyA+IDEgJiYgaSAlIHRoaXMucm91bmRpbmcgIT09IDA7XG4gICAgICBjb25zdCBkaXNhYmxlZCA9XG4gICAgICAgIHRoaXMuX3JhbmdlTWludXRlKGksICdtaW4nKSB8fCB0aGlzLl9yYW5nZU1pbnV0ZShpLCAnbWF4JykgfHwgZGlzYWJsZUJ5Um91bmRpbmc7XG4gICAgICB0aGlzLl9kaXNhYmxlZE1pbnV0ZXNbaV0gPSBkaXNhYmxlZDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgX3NldEhvdXIoaG91cjogbnVtYmVyKSB7XG4gICAgaWYgKE51bWJlcih0aGlzLl9zZWxlY3RlZFRpbWUuaCkgIT09IGhvdXIpIHtcbiAgICAgIGlmICh0aGlzLnR3ZWx2ZUhvdXIpIHtcbiAgICAgICAgaG91ciA9IGhvdXIgPD0gMCA/IDEyIDogaG91cjtcbiAgICAgICAgaG91ciA9IGhvdXIgPiAxMiA/IDEgOiBob3VyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaG91ciA9IGhvdXIgPj0gMjQgPyAwIDogaG91cjtcbiAgICAgICAgaG91ciA9IGhvdXIgPD0gLTEgPyAyMyA6IGhvdXI7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3NlbGVjdGVkVGltZS5oID0gaG91ciA+PSAxMCA/IGAke2hvdXJ9YCA6IGAwJHtob3VyfWA7XG4gICAgICB0aGlzLl9zZXRNaW51dGVEaWdpdGFsRGlzYWJsZWQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRNaW51dGUobWluOiBudW1iZXIpIHtcbiAgICBpZiAoTnVtYmVyKHRoaXMuX3NlbGVjdGVkVGltZS5tKSAhPT0gbWluKSB7XG4gICAgICBtaW4gPSBtaW4gPj0gNjAgPyAwIDogbWluO1xuICAgICAgbWluID0gbWluIDw9IC0xID8gNTkgOiBtaW47XG4gICAgICB0aGlzLl9zZWxlY3RlZFRpbWUubSA9IG1pbiA+PSAxMCA/IGAke21pbn1gIDogYDAke21pbn1gO1xuICAgICAgdGhpcy5fc2V0T2tCdG5EaXNhYmxlZCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBfc2V0QW1QbShhbXBtOiBBbVBtKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRUaW1lLmFtcG0gPSBhbXBtO1xuICAgIHRoaXMuX2dlbmVyYXRlVGljaygpO1xuICAgIHRoaXMuX3NldE9rQnRuRGlzYWJsZWQoKTtcbiAgICB0aGlzLl9zZXRNaW51dGVEaWdpdGFsRGlzYWJsZWQoKTtcbiAgICB0aGlzLl9jaGVja0RyYXcoKTtcbiAgICB0aGlzLnBpY2tlci5fZW1pdFRpbWVDaGFuZ2VFdmVudCh0aGlzLl9zZWxlY3RlZFRpbWUpO1xuICB9XG5cbiAgcHVibGljIF9zaG93SG91cnNDbG9jaygpIHtcbiAgICB0aGlzLl9nZW5lcmF0ZVRpY2soKTtcbiAgICB0aGlzLl9zaG93SG91cnMgPSB0cnVlO1xuICAgIHRoaXMuX3NldE9rQnRuRGlzYWJsZWQoKTtcbiAgICB0aGlzLl9jaGVja0RyYXcoKTtcbiAgfVxuXG4gIHB1YmxpYyBfc2hvd01pbnV0ZXNDbG9jaygpIHtcbiAgICBpZiAoIXRoaXMuX21pbnV0ZURpZ2l0YWxEaXNhYmxlZCkge1xuICAgICAgdGhpcy5fc2hvd0hvdXJzID0gZmFsc2U7XG4gICAgICB0aGlzLl9nZW5lcmF0ZVRpY2soKTtcbiAgICAgIHRoaXMuX3NldE9rQnRuRGlzYWJsZWQoKTtcblxuICAgICAgdGhpcy5fZ2VuZXJhdGVNaW51dGVzRGlzYWJsZSgpO1xuICAgICAgaWYgKHRoaXMuX2Rpc2FibGVkTWludXRlc1tOdW1iZXIodGhpcy5fc2VsZWN0ZWRUaW1lLm0pXSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9zZXRNaW51dGUodGhpcy5fZGlzYWJsZWRNaW51dGVzLmluZGV4T2YoZmFsc2UpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fY2hlY2tEcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVUaWNrKCkge1xuICAgIGlmICh0aGlzLnR3ZWx2ZUhvdXIpIHtcbiAgICAgIHRoaXMuX2hvdXJzVGlja3MgPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTM7IGkrKykge1xuICAgICAgICBjb25zdCByYWRpYW4gPSAoaSAvIDYpICogTWF0aC5QSTtcblxuICAgICAgICBjb25zdCB0aWNrID0ge1xuICAgICAgICAgIGhvdXI6IGkudG9TdHJpbmcoKSxcbiAgICAgICAgICBsZWZ0OiB0aGlzLl9yYWRpdXMuZGlhbCArIE1hdGguc2luKHJhZGlhbikgKiB0aGlzLl9yYWRpdXMub3V0ZXIgLSB0aGlzLl9yYWRpdXMudGljayxcbiAgICAgICAgICB0b3A6IHRoaXMuX3JhZGl1cy5kaWFsIC0gTWF0aC5jb3MocmFkaWFuKSAqIHRoaXMuX3JhZGl1cy5vdXRlciAtIHRoaXMuX3JhZGl1cy50aWNrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLl9yYW5nZUhvdXIoaSwgJ21pbicpIHx8IHRoaXMuX3JhbmdlSG91cihpLCAnbWF4JyksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2hvdXJzVGlja3MucHVzaCh0aWNrKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faG91cnNUaWNrcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJhZGlhbiA9IChpIC8gNikgKiBNYXRoLlBJO1xuICAgICAgICBjb25zdCBpbm5lciA9IGkgPiAwICYmIGkgPCAxMztcbiAgICAgICAgY29uc3QgcmFkaXVzID0gaW5uZXIgPyB0aGlzLl9yYWRpdXMuaW5uZXIgOiB0aGlzLl9yYWRpdXMub3V0ZXI7XG4gICAgICAgIGNvbnN0IGhvdXIgPSBpID09PSAwID8gJzAnICsgaS50b1N0cmluZygpIDogaS50b1N0cmluZygpO1xuXG4gICAgICAgIGNvbnN0IHRpY2sgPSB7XG4gICAgICAgICAgaG91cixcbiAgICAgICAgICBsZWZ0OiB0aGlzLl9yYWRpdXMuZGlhbCArIE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMgLSB0aGlzLl9yYWRpdXMudGljayxcbiAgICAgICAgICB0b3A6IHRoaXMuX3JhZGl1cy5kaWFsIC0gTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cyAtIHRoaXMuX3JhZGl1cy50aWNrLFxuICAgICAgICAgIGRpc2FibGVkOiB0aGlzLl9yYW5nZUhvdXIoaSwgJ21pbicpIHx8IHRoaXMuX3JhbmdlSG91cihpLCAnbWF4JyksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2hvdXJzVGlja3MucHVzaCh0aWNrKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9taW51dGVzVGlja3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpICs9IDUpIHtcbiAgICAgIGNvbnN0IHJhZGlhbiA9IChpIC8gMzApICogTWF0aC5QSTtcbiAgICAgIGNvbnN0IGRpc2FibGVCeVJvdW5kaW5nID0gdGhpcy5yb3VuZGluZyA+IDEgJiYgaSAlIHRoaXMucm91bmRpbmcgIT09IDA7XG4gICAgICBjb25zdCBtaW4gPSBpIDwgMTAgPyAnMCcgKyBpLnRvU3RyaW5nKCkgOiBpLnRvU3RyaW5nKCk7XG5cbiAgICAgIGNvbnN0IHRpY2sgPSB7XG4gICAgICAgIG1pbixcbiAgICAgICAgbGVmdDogdGhpcy5fcmFkaXVzLmRpYWwgKyBNYXRoLnNpbihyYWRpYW4pICogdGhpcy5fcmFkaXVzLm91dGVyIC0gdGhpcy5fcmFkaXVzLnRpY2ssXG4gICAgICAgIHRvcDogdGhpcy5fcmFkaXVzLmRpYWwgLSBNYXRoLmNvcyhyYWRpYW4pICogdGhpcy5fcmFkaXVzLm91dGVyIC0gdGhpcy5fcmFkaXVzLnRpY2ssXG4gICAgICAgIGRpc2FibGVkOiB0aGlzLl9yYW5nZU1pbnV0ZShpLCAnbWluJykgfHwgdGhpcy5fcmFuZ2VNaW51dGUoaSwgJ21heCcpIHx8IGRpc2FibGVCeVJvdW5kaW5nLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX21pbnV0ZXNUaWNrcy5wdXNoKHRpY2spO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xvY2tIYW5kKHg6IGFueSwgeTogYW55LCByb3VuZEJ5PzogbnVtYmVyKSB7XG4gICAgbGV0IHJhZGlhbiA9IE1hdGguYXRhbjIoeCwgLXkpO1xuICAgIGNvbnN0IGlzSG91cnMgPSB0aGlzLl9zaG93SG91cnM7XG4gICAgY29uc3QgdW5pdCA9IE1hdGguUEkgLyAoaXNIb3VycyA/IDYgOiByb3VuZEJ5ID8gdGhpcy5fZGVub21pbmF0b3Jbcm91bmRCeV0gOiAzMCk7XG4gICAgY29uc3QgeiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcbiAgICBjb25zdCBpbm5lciA9IGlzSG91cnMgJiYgeiA8ICh0aGlzLl9yYWRpdXMub3V0ZXIgKyB0aGlzLl9yYWRpdXMuaW5uZXIpIC8gMjtcbiAgICBsZXQgdmFsdWUgPSB0aGlzLl9zaG93SG91cnNcbiAgICAgID8gcGFyc2VJbnQodGhpcy5fc2VsZWN0ZWRUaW1lLmgsIDApXG4gICAgICA6IHBhcnNlSW50KHRoaXMuX3NlbGVjdGVkVGltZS5tLCAwKTtcbiAgICBjb25zdCByYWRpdXMgPSBpbm5lciAmJiAhdGhpcy50d2VsdmVIb3VyID8gdGhpcy5fcmFkaXVzLmlubmVyIDogdGhpcy5fcmFkaXVzLm91dGVyO1xuXG4gICAgaWYgKHJhZGlhbiA8IDApIHtcbiAgICAgIHJhZGlhbiA9IE1hdGguUEkgKiAyICsgcmFkaWFuO1xuICAgIH1cblxuICAgIHZhbHVlID0gTWF0aC5yb3VuZChyYWRpYW4gLyB1bml0KTtcbiAgICByYWRpYW4gPSB2YWx1ZSAqIHVuaXQ7XG5cbiAgICBpZiAodGhpcy50d2VsdmVIb3VyICYmIGlzSG91cnMpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgICAgICB2YWx1ZSA9IDEyO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5faXNNb3VzZURvd24pIHtcbiAgICAgICAgaWYgKGlzSG91cnMgJiYgKHRoaXMuX3JhbmdlSG91cih2YWx1ZSwgJ21pbicpIHx8IHRoaXMuX3JhbmdlSG91cih2YWx1ZSwgJ21heCcpKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIXRoaXMudHdlbHZlSG91ciAmJiBpc0hvdXJzKSB7XG4gICAgICB2YWx1ZSA9ICFpbm5lciA/IHZhbHVlICsgMTIgOiB2YWx1ZTtcbiAgICAgIHZhbHVlID0gdmFsdWUgPT09IDI0ID8gMCA6IHZhbHVlO1xuICAgICAgdmFsdWUgPSBpbm5lciAmJiB2YWx1ZSA9PT0gMCA/IDEyIDogdmFsdWU7XG4gICAgICB2YWx1ZSA9ICFpbm5lciAmJiB2YWx1ZSA9PT0gMTIgPyAwIDogdmFsdWU7XG5cbiAgICAgIGlmICh0aGlzLl9pc01vdXNlRG93bikge1xuICAgICAgICBpZiAoaXNIb3VycyAmJiAodGhpcy5fcmFuZ2VIb3VyKHZhbHVlLCAnbWluJykgfHwgdGhpcy5fcmFuZ2VIb3VyKHZhbHVlLCAnbWF4JykpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChyb3VuZEJ5KSB7XG4gICAgICAgIHZhbHVlICo9IHJvdW5kQnk7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgPT09IDYwKSB7XG4gICAgICAgIHZhbHVlID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaXNIb3Vycykge1xuICAgICAgdGhpcy5mZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWRiLXRpbWVwaWNrZXItY2FudmFzLWZnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9yYW5nZU1pbnV0ZSh2YWx1ZSwgJ21pbicpIHx8IHRoaXMuX3JhbmdlTWludXRlKHZhbHVlLCAnbWF4JykpIHtcbiAgICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbHVlICUgNSA9PT0gMCkge1xuICAgICAgICB0aGlzLmZnLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZGItdGltZXBpY2tlci1jYW52YXMtZmcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmcubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21kYi10aW1lcGlja2VyLWNhbnZhcy1mZyBhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjeDEgPSBNYXRoLnNpbihyYWRpYW4pICogKHJhZGl1cyAtIHRoaXMuX3JhZGl1cy50aWNrKSxcbiAgICAgIGN5MSA9IC1NYXRoLmNvcyhyYWRpYW4pICogKHJhZGl1cyAtIHRoaXMuX3JhZGl1cy50aWNrKSxcbiAgICAgIGN4MiA9IE1hdGguc2luKHJhZGlhbikgKiByYWRpdXMsXG4gICAgICBjeTIgPSAtTWF0aC5jb3MocmFkaWFuKSAqIHJhZGl1cztcblxuICAgIHRoaXMuaGFuZC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgneDInLCBjeDEpO1xuICAgIHRoaXMuaGFuZC5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgneTInLCBjeTEpO1xuICAgIHRoaXMuYmcubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N4JywgY3gyKTtcbiAgICB0aGlzLmJnLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjeScsIGN5Mik7XG4gICAgdGhpcy5mZy5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY3gnLCBjeDIpO1xuICAgIHRoaXMuZmcubmF0aXZlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2N5JywgY3kyKTtcblxuICAgIGlmICh0aGlzLl9zaG93SG91cnMpIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gTnVtYmVyKHRoaXMuX3NlbGVjdGVkVGltZS5oKSkge1xuICAgICAgICB0aGlzLl9zZXRIb3VyKHZhbHVlKTtcbiAgICAgICAgdGhpcy5fc2V0TWludXRlRGlnaXRhbERpc2FibGVkKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gTnVtYmVyKHRoaXMuX3NlbGVjdGVkVGltZS5tKSkge1xuICAgICAgICB0aGlzLl9zZXRNaW51dGUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvMjQodGltZTogU2VsZWN0ZWRUaW1lKTogU2VsZWN0ZWRUaW1lIHtcbiAgICBsZXQgaG91ciA9IHRpbWUuYW1wbSA9PT0gJ1BNJyA/IE51bWJlcih0aW1lLmgpICsgMTIgOiBOdW1iZXIodGltZS5oKTtcbiAgICBob3VyID0gaG91ciA9PT0gMTIgPyAwIDogaG91cjtcbiAgICBob3VyID0gaG91ciA9PT0gMjQgPyAxMiA6IGhvdXI7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRpbWUsXG4gICAgICBoOiBgJHtob3VyfWAsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3JhbmdlSG91cihpbmRleDogbnVtYmVyLCByYW5nZTogJ21pbicgfCAnbWF4Jykge1xuICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcbiAgICBjb25zdCBpID0gTnVtYmVyKHRoaXMuX3RvMjQoeyAuLi50aGlzLl9zZWxlY3RlZFRpbWUsIGg6IGAke2luZGV4fWAgfSkuaCk7XG5cbiAgICBpZiAoIXRoaXMudHdlbHZlSG91cikge1xuICAgICAgY29uc3QgbWluSCA9IHRoaXMubWluICYmIE51bWJlcih0aGlzLl9taW4uaCk7XG4gICAgICBjb25zdCBtYXhIID0gdGhpcy5tYXggJiYgTnVtYmVyKHRoaXMuX21heC5oKTtcblxuICAgICAgaWYgKHJhbmdlID09PSAnbWluJyAmJiB0aGlzLm1pbikge1xuICAgICAgICBzdGF0dXMgPSBpbmRleCA8IG1pbkg7XG5cbiAgICAgICAgaWYgKHN0YXR1cyAmJiB0aGlzLl9tYXggJiYgdGhpcy5fbWF4LmggPCB0aGlzLl9taW4uaCkge1xuICAgICAgICAgIHN0YXR1cyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJhbmdlID09PSAnbWF4JyAmJiB0aGlzLm1heCkge1xuICAgICAgICBzdGF0dXMgPSBpbmRleCA+IG1heEg7XG5cbiAgICAgICAgaWYgKHN0YXR1cyAmJiB0aGlzLl9taW4gJiYgdGhpcy5fbWluLmggPiB0aGlzLl9tYXguaCAmJiBtaW5IIDw9IGluZGV4KSB7XG4gICAgICAgICAgc3RhdHVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWluID0gdGhpcy5fbWluICYmIE51bWJlcih0aGlzLl90bzI0KHRoaXMuX21pbikuaCk7XG4gICAgICBjb25zdCBtYXggPSB0aGlzLl9tYXggJiYgTnVtYmVyKHRoaXMuX3RvMjQodGhpcy5fbWF4KS5oKTtcbiAgICAgIGlmIChyYW5nZSA9PT0gJ21pbicgJiYgdGhpcy5taW4pIHtcbiAgICAgICAgc3RhdHVzID0gaSA8IG1pbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHJhbmdlID09PSAnbWF4JyAmJiB0aGlzLm1heCkge1xuICAgICAgICBzdGF0dXMgPSBpID4gbWF4O1xuICAgICAgfVxuXG4gICAgICBpZiAobWluID4gbWF4KSB7XG4gICAgICAgIHN0YXR1cyA9IGZhbHNlO1xuICAgICAgICBzdGF0dXMgPSBtaW4gPiBpICYmIGkgPiBtYXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZGlzYWJsZWRIb3Vyc1tpXSA9IHN0YXR1cztcblxuICAgIHJldHVybiBzdGF0dXM7XG4gIH1cblxuICBwcml2YXRlIF9yYW5nZU1pbnV0ZShpbmRleDogbnVtYmVyLCByYW5nZTogJ21pbicgfCAnbWF4Jykge1xuICAgIGxldCBzdGF0dXMgPSBmYWxzZTtcbiAgICBpZiAoIXRoaXMuX3Nob3dIb3Vycykge1xuICAgICAgaWYgKHJhbmdlID09PSAnbWluJyAmJiB0aGlzLm1pbikge1xuICAgICAgICBjb25zdCBpc1NhbWVIb3VyID0gdGhpcy5fbWluLmggPT09IHRoaXMuX3NlbGVjdGVkVGltZS5oO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGluZGV4IDwgTnVtYmVyKHRoaXMuX21pbi5tKTtcbiAgICAgICAgc3RhdHVzID0gdmFsdWUgJiYgaXNTYW1lSG91cjtcbiAgICAgIH0gZWxzZSBpZiAocmFuZ2UgPT09ICdtYXgnICYmIHRoaXMubWF4KSB7XG4gICAgICAgIGNvbnN0IGlzU2FtZUhvdXIgPSB0aGlzLl9tYXguaCA9PT0gdGhpcy5fc2VsZWN0ZWRUaW1lLmg7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaW5kZXggPiBOdW1iZXIodGhpcy5fbWF4Lm0pO1xuICAgICAgICBzdGF0dXMgPSB2YWx1ZSAmJiBpc1NhbWVIb3VyO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnR3ZWx2ZUhvdXIpIHtcbiAgICAgIGNvbnN0IG1pbiA9IHRoaXMuX21pbiAmJiBOdW1iZXIodGhpcy5fdG8yNCh0aGlzLl9taW4pLmgpO1xuICAgICAgY29uc3QgbWF4ID0gdGhpcy5fbWF4ICYmIE51bWJlcih0aGlzLl90bzI0KHRoaXMuX21heCkuaCk7XG4gICAgICBjb25zdCBpID0gTnVtYmVyKHRoaXMuX3RvMjQodGhpcy5fc2VsZWN0ZWRUaW1lKS5oKTtcblxuICAgICAgaWYgKHJhbmdlID09PSAnbWluJyAmJiBtaW4pIHtcbiAgICAgICAgc3RhdHVzID0gaSA9PT0gbWluICYmIGluZGV4IDwgTnVtYmVyKHRoaXMuX21pbi5tKTtcbiAgICAgIH0gZWxzZSBpZiAocmFuZ2UgPT09ICdtYXgnICYmIG1heCkge1xuICAgICAgICBzdGF0dXMgPSBpID09PSBtYXggJiYgaW5kZXggPiBOdW1iZXIodGhpcy5fbWF4Lm0pO1xuICAgICAgfVxuICAgICAgc3RhdHVzID0gc3RhdHVzIHx8IHRoaXMuX2Rpc2FibGVkSG91cnNbaV07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXR1cztcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9rQnRuRGlzYWJsZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaG91ciA9IE51bWJlcih0aGlzLl90bzI0KHRoaXMuX3NlbGVjdGVkVGltZSkuaCk7XG4gICAgdGhpcy5fb2tCdXR0b25EaXNhYmxlZCA9IHRoaXMuX2Rpc2FibGVkSG91cnNbaG91cl07XG5cbiAgICBpZiAoIXRoaXMuX29rQnV0dG9uRGlzYWJsZWQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fbWluICYmXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVGltZS5oID09PSB0aGlzLl9taW4uaCAmJlxuICAgICAgICB0aGlzLl9zZWxlY3RlZFRpbWUuYW1wbSA9PT0gdGhpcy5fbWluLmFtcG1cbiAgICAgICkge1xuICAgICAgICB0aGlzLl9va0J1dHRvbkRpc2FibGVkID0gdGhpcy5fc2VsZWN0ZWRUaW1lLm0gPCB0aGlzLl9taW4ubTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl9tYXggJiZcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRUaW1lLmggPT09IHRoaXMuX21heC5oICYmXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkVGltZS5hbXBtID09PSB0aGlzLl9tYXguYW1wbVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX29rQnV0dG9uRGlzYWJsZWQgPSB0aGlzLl9zZWxlY3RlZFRpbWUubSA+IHRoaXMuX21heC5tO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBwcml2YXRlIF9zZXRNaW51dGVEaWdpdGFsRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgeyBoIH0gPSB0aGlzLl90bzI0KHRoaXMuX3NlbGVjdGVkVGltZSk7XG4gICAgdGhpcy5fbWludXRlRGlnaXRhbERpc2FibGVkID0gdGhpcy5fZGlzYWJsZWRIb3Vyc1tOdW1iZXIoaCldO1xuICB9XG59XG4iXX0=