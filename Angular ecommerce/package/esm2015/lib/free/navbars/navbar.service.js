import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let NavbarService = class NavbarService {
    constructor() {
        this.navbarLinkClicks = new Subject();
    }
    getNavbarLinkClicks() {
        return this.navbarLinkClicks.asObservable();
    }
    setNavbarLinkClicks() {
        this.navbarLinkClicks.next();
    }
};
NavbarService = __decorate([
    Injectable()
], NavbarService);
export { NavbarService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9uYXZiYXJzL25hdmJhci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFHM0MsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUExQjtRQUNVLHFCQUFnQixHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFTaEQsQ0FBQztJQVBDLG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvQixDQUFDO0NBQ0YsQ0FBQTtBQVZZLGFBQWE7SUFEekIsVUFBVSxFQUFFO0dBQ0EsYUFBYSxDQVV6QjtTQVZZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZiYXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBuYXZiYXJMaW5rQ2xpY2tzID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIGdldE5hdmJhckxpbmtDbGlja3MoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5uYXZiYXJMaW5rQ2xpY2tzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgc2V0TmF2YmFyTGlua0NsaWNrcygpIHtcbiAgICB0aGlzLm5hdmJhckxpbmtDbGlja3MubmV4dCgpO1xuICB9XG59XG4iXX0=