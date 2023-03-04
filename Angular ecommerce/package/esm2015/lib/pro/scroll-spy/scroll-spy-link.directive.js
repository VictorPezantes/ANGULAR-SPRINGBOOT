import { __decorate, __metadata, __param } from "tslib";
import { Directive, OnInit, Input, HostListener, HostBinding, ChangeDetectorRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let ScrollSpyLinkDirective = class ScrollSpyLinkDirective {
    constructor(cdRef, document) {
        this.cdRef = cdRef;
        this.document = document;
        this._scrollIntoView = true;
        this.active = false;
    }
    get scrollIntoView() { return this._scrollIntoView; }
    set scrollIntoView(value) {
        this._scrollIntoView = value;
    }
    get section() { return this._section; }
    set section(value) {
        if (value) {
            this._section = value;
        }
    }
    get id() {
        return this._id;
    }
    set id(newId) {
        if (newId) {
            this._id = newId;
        }
    }
    onClick() {
        if (this.section && this.scrollIntoView === true) {
            this.section.scrollIntoView();
        }
    }
    detectChanges() {
        this.cdRef.detectChanges();
    }
    assignSectionToId() {
        this.section = this.document.documentElement.querySelector(`#${this.id}`);
    }
    ngOnInit() {
        this.assignSectionToId();
    }
};
ScrollSpyLinkDirective.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], ScrollSpyLinkDirective.prototype, "scrollIntoView", null);
__decorate([
    Input('mdbScrollSpyLink'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ScrollSpyLinkDirective.prototype, "id", null);
__decorate([
    HostBinding('class.active'),
    __metadata("design:type", Object)
], ScrollSpyLinkDirective.prototype, "active", void 0);
__decorate([
    HostListener('click', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScrollSpyLinkDirective.prototype, "onClick", null);
ScrollSpyLinkDirective = __decorate([
    Directive({
        selector: '[mdbScrollSpyLink]'
    }),
    __param(1, Inject(DOCUMENT)),
    __metadata("design:paramtypes", [ChangeDetectorRef, Object])
], ScrollSpyLinkDirective);
export { ScrollSpyLinkDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS1saW5rLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vc2Nyb2xsLXNweS9zY3JvbGwtc3B5LWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixLQUFLLEVBQ0wsWUFBWSxFQUNaLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUszQyxJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQWlCakMsWUFDVSxLQUF3QixFQUNOLFFBQWE7UUFEL0IsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDTixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBYmpDLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBMkIvQixXQUFNLEdBQUcsS0FBSyxDQUFDO0lBYlosQ0FBQztJQWxCSixJQUFJLGNBQWMsS0FBSyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3JELElBQUksY0FBYyxDQUFDLEtBQWM7UUFDL0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUdELElBQUksT0FBTyxLQUFLLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDdkMsSUFBSSxPQUFPLENBQUMsS0FBa0I7UUFDNUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjtJQUNILENBQUM7SUFVRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztTQUNsQjtJQUNILENBQUM7SUFNRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxFQUFFO1lBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0NBQ0YsQ0FBQTs7WUFuQ2tCLGlCQUFpQjs0Q0FDL0IsTUFBTSxTQUFDLFFBQVE7O0FBakJsQjtJQURDLEtBQUssRUFBRTs7OzREQUM2QztBQXFCckQ7SUFEQyxLQUFLLENBQUMsa0JBQWtCLENBQUM7OztnREFHekI7QUFRRDtJQURDLFdBQVcsQ0FBQyxjQUFjLENBQUM7O3NEQUNiO0FBR2Y7SUFEQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQzs7OztxREFLekI7QUF4Q1Usc0JBQXNCO0lBSGxDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7S0FDL0IsQ0FBQztJQW9CRyxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtxQ0FERixpQkFBaUI7R0FsQnZCLHNCQUFzQixDQXFEbEM7U0FyRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBPbkluaXQsXG4gIElucHV0LFxuICBIb3N0TGlzdGVuZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgSW5qZWN0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWRiU2Nyb2xsU3B5TGlua10nXG59KVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNweUxpbmtEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBnZXQgc2Nyb2xsSW50b1ZpZXcoKSB7IHJldHVybiB0aGlzLl9zY3JvbGxJbnRvVmlldzsgfVxuICBzZXQgc2Nyb2xsSW50b1ZpZXcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zY3JvbGxJbnRvVmlldyA9IHZhbHVlO1xuICB9XG4gIHByaXZhdGUgX3Njcm9sbEludG9WaWV3ID0gdHJ1ZTtcblxuICBnZXQgc2VjdGlvbigpIHsgcmV0dXJuIHRoaXMuX3NlY3Rpb247IH1cbiAgc2V0IHNlY3Rpb24odmFsdWU6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9zZWN0aW9uID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX3NlY3Rpb246IEhUTUxFbGVtZW50O1xuICBwcml2YXRlIF9pZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueVxuICApIHt9XG5cbiAgQElucHV0KCdtZGJTY3JvbGxTcHlMaW5rJylcbiAgZ2V0IGlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG4gIHNldCBpZChuZXdJZDogc3RyaW5nKSB7XG4gICAgaWYgKG5ld0lkKSB7XG4gICAgICB0aGlzLl9pZCA9IG5ld0lkO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcbiAgYWN0aXZlID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbXSlcbiAgb25DbGljaygpIHtcbiAgICBpZiAodGhpcy5zZWN0aW9uICYmIHRoaXMuc2Nyb2xsSW50b1ZpZXcgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuc2VjdGlvbi5zY3JvbGxJbnRvVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIGRldGVjdENoYW5nZXMoKSB7XG4gICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBhc3NpZ25TZWN0aW9uVG9JZCgpIHtcbiAgICB0aGlzLnNlY3Rpb24gPSB0aGlzLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmlkfWApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hc3NpZ25TZWN0aW9uVG9JZCgpO1xuICB9XG59XG4iXX0=