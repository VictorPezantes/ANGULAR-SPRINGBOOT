import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { BsDropdownState } from './dropdown.state';
let BsDropdownContainerComponent = class BsDropdownContainerComponent {
    constructor(_state) {
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe((value) => {
            this.isOpen = value;
        });
    }
    get direction() {
        return this._state.direction;
    }
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
};
BsDropdownContainerComponent.ctorParameters = () => [
    { type: BsDropdownState }
];
__decorate([
    HostBinding('style.display'),
    __metadata("design:type", Object)
], BsDropdownContainerComponent.prototype, "display", void 0);
__decorate([
    HostBinding('style.position'),
    __metadata("design:type", Object)
], BsDropdownContainerComponent.prototype, "position", void 0);
BsDropdownContainerComponent = __decorate([
    Component({
        selector: 'mdb-dropdown-container',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <div
      [class.dropup]="direction === 'up'"
      [class.dropdown]="direction === 'down'"
      [class.show]="isOpen"
      [class.open]="isOpen"
    >
      <ng-content></ng-content>
    </div>
  `
    }),
    __metadata("design:paramtypes", [BsDropdownState])
], BsDropdownContainerComponent);
export { BsDropdownContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2Ryb3Bkb3duL2Ryb3Bkb3duLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWEsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQWdCbkQsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFZdkMsWUFBb0IsTUFBdUI7UUFBdkIsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFYM0MsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVlLFlBQU8sR0FBRyxPQUFPLENBQUM7UUFDakIsYUFBUSxHQUFHLFVBQVUsQ0FBQztRQVNuRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBYyxFQUFFLEVBQUU7WUFDcEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBVkQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBVUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbkMsQ0FBQztDQUNGLENBQUE7O1lBVDZCLGVBQWU7O0FBVGI7SUFBN0IsV0FBVyxDQUFDLGVBQWUsQ0FBQzs7NkRBQW1CO0FBQ2pCO0lBQTlCLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQzs7OERBQXVCO0FBSjFDLDRCQUE0QjtJQWR4QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7S0FDRixDQUFDO3FDQWE0QixlQUFlO0dBWmhDLDRCQUE0QixDQXFCeEM7U0FyQlksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25EZXN0cm95LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnNEcm9wZG93blN0YXRlIH0gZnJvbSAnLi9kcm9wZG93bi5zdGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1kcm9wZG93bi1jb250YWluZXInLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2XG4gICAgICBbY2xhc3MuZHJvcHVwXT1cImRpcmVjdGlvbiA9PT0gJ3VwJ1wiXG4gICAgICBbY2xhc3MuZHJvcGRvd25dPVwiZGlyZWN0aW9uID09PSAnZG93bidcIlxuICAgICAgW2NsYXNzLnNob3ddPVwiaXNPcGVuXCJcbiAgICAgIFtjbGFzcy5vcGVuXT1cImlzT3BlblwiXG4gICAgPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgaXNPcGVuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheSA9ICdibG9jayc7XG4gIEBIb3N0QmluZGluZygnc3R5bGUucG9zaXRpb24nKSBwb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG5cbiAgZ2V0IGRpcmVjdGlvbigpOiAnZG93bicgfCAndXAnIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdGUuZGlyZWN0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3Vic2NyaXB0aW9uOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RhdGU6IEJzRHJvcGRvd25TdGF0ZSkge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IF9zdGF0ZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=