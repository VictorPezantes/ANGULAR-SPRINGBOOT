import { __decorate, __metadata } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
let ProgressDirective = class ProgressDirective {
    constructor() {
        this.addClass = true;
        this.bars = [];
        this._max = 100;
    }
    /** maximum total value of progress element */
    get max() {
        return this._max;
    }
    set max(v) {
        this._max = v;
        this.bars.forEach((bar) => {
            bar.recalculatePercentage();
        });
    }
    addBar(bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    }
    removeBar(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ProgressDirective.prototype, "animate", void 0);
__decorate([
    HostBinding('attr.max'),
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ProgressDirective.prototype, "max", null);
__decorate([
    HostBinding('class.progress'),
    __metadata("design:type", Object)
], ProgressDirective.prototype, "addClass", void 0);
ProgressDirective = __decorate([
    Directive({ selector: 'mdbProgress, [mdbProgress]' })
], ProgressDirective);
export { ProgressDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9wcm9ncmVzc2JhcnMvcHJvZ3Jlc3MuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLOUQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFBOUI7UUFrQndDLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFFL0MsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUVkLFNBQUksR0FBRyxHQUFHLENBQUM7SUFZdkIsQ0FBQztJQTlCQyw4Q0FBOEM7SUFHOUMsSUFBVyxHQUFHO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxJQUFXLEdBQUcsQ0FBQyxDQUFTO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFpQixFQUFFLEVBQUU7WUFDdEMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBUU0sTUFBTSxDQUFDLEdBQWlCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVNLFNBQVMsQ0FBQyxHQUFpQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0YsQ0FBQTtBQWhDVTtJQUFSLEtBQUssRUFBRTs7a0RBQXlCO0FBS2pDO0lBRkMsV0FBVyxDQUFDLFVBQVUsQ0FBQztJQUN2QixLQUFLLEVBQUU7Ozs0Q0FHUDtBQVM4QjtJQUE5QixXQUFXLENBQUMsZ0JBQWdCLENBQUM7O21EQUF3QjtBQWxCM0MsaUJBQWlCO0lBRDdCLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRSxDQUFDO0dBQ3pDLGlCQUFpQixDQWtDN0I7U0FsQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbWRiUHJvZ3Jlc3MsIFttZGJQcm9ncmVzc10nIH0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NEaXJlY3RpdmUge1xuICAvKiogaWYgYHRydWVgIGNoYW5naW5nIHZhbHVlIG9mIHByb2dyZXNzIGJhciB3aWxsIGJlIGFuaW1hdGVkIChub3RlOiBub3Qgc3VwcG9ydGVkIGJ5IEJvb3RzdHJhcCA0KSAqL1xuICBASW5wdXQoKSBwdWJsaWMgYW5pbWF0ZTogYm9vbGVhbjtcblxuICAvKiogbWF4aW11bSB0b3RhbCB2YWx1ZSBvZiBwcm9ncmVzcyBlbGVtZW50ICovXG4gIEBIb3N0QmluZGluZygnYXR0ci5tYXgnKVxuICBASW5wdXQoKVxuICBwdWJsaWMgZ2V0IG1heCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tYXg7XG4gIH1cblxuICBwdWJsaWMgc2V0IG1heCh2OiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXggPSB2O1xuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiYXI6IEJhckNvbXBvbmVudCkgPT4ge1xuICAgICAgYmFyLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5wcm9ncmVzcycpIHB1YmxpYyBhZGRDbGFzcyA9IHRydWU7XG5cbiAgcHVibGljIGJhcnM6IGFueVtdID0gW107XG5cbiAgcHJvdGVjdGVkIF9tYXggPSAxMDA7XG5cbiAgcHVibGljIGFkZEJhcihiYXI6IEJhckNvbXBvbmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hbmltYXRlKSB7XG4gICAgICBiYXIudHJhbnNpdGlvbiA9ICdub25lJztcbiAgICB9XG4gICAgdGhpcy5iYXJzLnB1c2goYmFyKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVCYXIoYmFyOiBCYXJDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmJhcnMuc3BsaWNlKHRoaXMuYmFycy5pbmRleE9mKGJhciksIDEpO1xuICB9XG59XG4iXX0=