import { __decorate } from "tslib";
import { MdbIconComponent } from './icon.component';
import { NgModule } from '@angular/core';
import { FabDirective } from './directives/fab.directive';
import { FarDirective } from './directives/far.directive';
import { FasDirective } from './directives/fas.directive';
import { FalDirective } from './directives/fal.directive';
import { CommonModule } from '@angular/common';
import { FadDirective } from './directives/fad.directive';
let IconsModule = class IconsModule {
};
IconsModule = __decorate([
    NgModule({
        declarations: [
            MdbIconComponent,
            FabDirective,
            FarDirective,
            FasDirective,
            FalDirective,
            FadDirective,
        ],
        imports: [CommonModule],
        exports: [MdbIconComponent, FabDirective, FarDirective, FasDirective, FalDirective, FadDirective],
    })
], IconsModule);
export { IconsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS9pY29ucy9pY29uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWMxRCxJQUFhLFdBQVcsR0FBeEIsTUFBYSxXQUFXO0NBQUcsQ0FBQTtBQUFkLFdBQVc7SUFadkIsUUFBUSxDQUFDO1FBQ1IsWUFBWSxFQUFFO1lBQ1osZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1NBQ2I7UUFDRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdkIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQztLQUNsRyxDQUFDO0dBQ1csV0FBVyxDQUFHO1NBQWQsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1kYkljb25Db21wb25lbnQgfSBmcm9tICcuL2ljb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmFiLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGYXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmFyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGYXNEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmFzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGYWxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmFsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRmFkRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZhZC5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNZGJJY29uQ29tcG9uZW50LFxuICAgIEZhYkRpcmVjdGl2ZSxcbiAgICBGYXJEaXJlY3RpdmUsXG4gICAgRmFzRGlyZWN0aXZlLFxuICAgIEZhbERpcmVjdGl2ZSxcbiAgICBGYWREaXJlY3RpdmUsXG4gIF0sXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTWRiSWNvbkNvbXBvbmVudCwgRmFiRGlyZWN0aXZlLCBGYXJEaXJlY3RpdmUsIEZhc0RpcmVjdGl2ZSwgRmFsRGlyZWN0aXZlLCBGYWREaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uc01vZHVsZSB7fVxuIl19