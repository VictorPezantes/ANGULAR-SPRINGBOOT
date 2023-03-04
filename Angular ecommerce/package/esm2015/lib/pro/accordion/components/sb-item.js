import { __decorate, __metadata } from "tslib";
import { Component, ContentChild, Input, AfterContentInit, AfterViewInit, ChangeDetectorRef, } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
import { MdbAccordionService } from '../mdb-accordion.service';
let SBItemComponent = class SBItemComponent {
    constructor(accordionService, _cdRef) {
        this.accordionService = accordionService;
        this._cdRef = _cdRef;
        this.collapsed = true;
        this.autoExpand = true;
        this.idModifier = Math.floor(Math.random() * 1000);
    }
    ngAfterViewInit() {
        if (this.body !== undefined) {
            setTimeout(() => {
                this.collapsed
                    ? (this.body.expandAnimationState = 'collapsed')
                    : (this.body.expandAnimationState = 'expanded');
            }, 0);
            this.body.toggle(this.collapsed);
            if (this.autoExpand !== false) {
                this.body.openSidenavOnActiveLink();
            }
        }
        if (this.body) {
            this.body.autoExpand = this.autoExpand;
            this.body.collapsed = this.collapsed;
        }
    }
    ngAfterContentInit() {
        setTimeout(() => {
            if (this.body && this.body.expandAnimationState === 'expanded') {
                this.collapsed = false;
            }
        }, 40);
        if (this.body) {
            this.body.id = `mdb-accordion-body-${this.idModifier}`;
        }
    }
    toggle(collapsed) {
        this.accordionService.didItemToggled(this);
        this.applyToggle(collapsed);
    }
    applyToggle(collapsed) {
        if (this.body !== undefined) {
            this.collapsed = collapsed;
            this.body.toggle(collapsed);
            this._cdRef.markForCheck();
        }
    }
};
SBItemComponent.ctorParameters = () => [
    { type: MdbAccordionService },
    { type: ChangeDetectorRef }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], SBItemComponent.prototype, "collapsed", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SBItemComponent.prototype, "customClass", void 0);
__decorate([
    ContentChild(SBItemBodyComponent),
    __metadata("design:type", SBItemBodyComponent)
], SBItemComponent.prototype, "body", void 0);
SBItemComponent = __decorate([
    Component({
        exportAs: 'sbItem',
        selector: 'mdb-item, mdb-accordion-item',
        template: "<div class=\"card {{ customClass }}\" [ngClass]=\"{'is-collapsed': collapsed, 'active': !collapsed}\">\n  <ng-content></ng-content>\n</div>"
    }),
    __metadata("design:paramtypes", [MdbAccordionService, ChangeDetectorRef])
], SBItemComponent);
export { SBItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ItaXRlbS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc2ItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBTy9ELElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFRMUIsWUFBb0IsZ0JBQXFDLEVBQVUsTUFBeUI7UUFBeEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFxQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBUDVFLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFFakMsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQixlQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFJaUQsQ0FBQztJQUVoRyxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUMzQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxTQUFTO29CQUNaLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsV0FBVyxDQUFDO29CQUNoRCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQ3BELENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNqQyxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssS0FBSyxFQUFFO2dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7YUFDckM7U0FDRjtRQUNELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixLQUFLLFVBQVUsRUFBRTtnQkFDOUQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDUCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxzQkFBc0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxTQUFrQjtRQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFdBQVcsQ0FBQyxTQUFrQjtRQUM1QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDNUI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUEzQ3VDLG1CQUFtQjtZQUFrQixpQkFBaUI7O0FBUG5GO0lBQVIsS0FBSyxFQUFFOztrREFBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7O29EQUFxQjtBQUlNO0lBQWxDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQzs4QkFBTyxtQkFBbUI7NkNBQUM7QUFObEQsZUFBZTtJQUwzQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsOEJBQThCO1FBQ3hDLHVKQUEyQjtLQUM1QixDQUFDO3FDQVNzQyxtQkFBbUIsRUFBa0IsaUJBQWlCO0dBUmpGLGVBQWUsQ0FtRDNCO1NBbkRZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgSW5wdXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNCSXRlbUJvZHlDb21wb25lbnQgfSBmcm9tICcuL3NiLWl0ZW0uYm9keSc7XG5pbXBvcnQgeyBNZGJBY2NvcmRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vbWRiLWFjY29yZGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc2JJdGVtJyxcbiAgc2VsZWN0b3I6ICdtZGItaXRlbSwgbWRiLWFjY29yZGlvbi1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICdzYi1pdGVtLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTQkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgQElucHV0KCkgcHVibGljIGNvbGxhcHNlZCA9IHRydWU7XG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiBzdHJpbmc7XG4gIGF1dG9FeHBhbmQgPSB0cnVlO1xuICBpZE1vZGlmaWVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCk7XG5cbiAgQENvbnRlbnRDaGlsZChTQkl0ZW1Cb2R5Q29tcG9uZW50KSBib2R5OiBTQkl0ZW1Cb2R5Q29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3JkaW9uU2VydmljZTogTWRiQWNjb3JkaW9uU2VydmljZSwgcHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAodGhpcy5ib2R5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbGxhcHNlZFxuICAgICAgICAgID8gKHRoaXMuYm9keS5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdjb2xsYXBzZWQnKVxuICAgICAgICAgIDogKHRoaXMuYm9keS5leHBhbmRBbmltYXRpb25TdGF0ZSA9ICdleHBhbmRlZCcpO1xuICAgICAgfSwgMCk7XG4gICAgICB0aGlzLmJvZHkudG9nZ2xlKHRoaXMuY29sbGFwc2VkKTtcbiAgICAgIGlmICh0aGlzLmF1dG9FeHBhbmQgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuYm9keS5vcGVuU2lkZW5hdk9uQWN0aXZlTGluaygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5ib2R5KSB7XG4gICAgICB0aGlzLmJvZHkuYXV0b0V4cGFuZCA9IHRoaXMuYXV0b0V4cGFuZDtcbiAgICAgIHRoaXMuYm9keS5jb2xsYXBzZWQgPSB0aGlzLmNvbGxhcHNlZDtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5ib2R5ICYmIHRoaXMuYm9keS5leHBhbmRBbmltYXRpb25TdGF0ZSA9PT0gJ2V4cGFuZGVkJykge1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sIDQwKTtcbiAgICBpZiAodGhpcy5ib2R5KSB7XG4gICAgICB0aGlzLmJvZHkuaWQgPSBgbWRiLWFjY29yZGlvbi1ib2R5LSR7dGhpcy5pZE1vZGlmaWVyfWA7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlKGNvbGxhcHNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuYWNjb3JkaW9uU2VydmljZS5kaWRJdGVtVG9nZ2xlZCh0aGlzKTtcbiAgICB0aGlzLmFwcGx5VG9nZ2xlKGNvbGxhcHNlZCk7XG4gIH1cblxuICBhcHBseVRvZ2dsZShjb2xsYXBzZWQ6IGJvb2xlYW4pIHtcbiAgICBpZiAodGhpcy5ib2R5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuY29sbGFwc2VkID0gY29sbGFwc2VkO1xuICAgICAgdGhpcy5ib2R5LnRvZ2dsZShjb2xsYXBzZWQpO1xuICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG59XG4iXX0=