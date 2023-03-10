import { trigger, state, style, transition, animate } from '@angular/animations';
export const dropdownAnimation = trigger('dropdownAnimation', [
    state('void', style({
        transform: 'scaleY(0.8)',
        opacity: 0,
    })),
    state('visible', style({
        opacity: 1,
        transform: 'scaleY(1)',
    })),
    transition('void => *', animate('200ms ease')),
    transition('* => void', animate('200ms ease')),
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWFuaW1hdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3NlbGVjdC9zZWxlY3QtYW5pbWF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWpGLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRTtJQUM1RCxLQUFLLENBQ0gsTUFBTSxFQUNOLEtBQUssQ0FBQztRQUNKLFNBQVMsRUFBRSxhQUFhO1FBQ3hCLE9BQU8sRUFBRSxDQUFDO0tBQ1gsQ0FBQyxDQUNIO0lBQ0QsS0FBSyxDQUNILFNBQVMsRUFDVCxLQUFLLENBQUM7UUFDSixPQUFPLEVBQUUsQ0FBQztRQUNWLFNBQVMsRUFBRSxXQUFXO0tBQ3ZCLENBQUMsQ0FDSDtJQUNELFVBQVUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0NBQy9DLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25BbmltYXRpb24gPSB0cmlnZ2VyKCdkcm9wZG93bkFuaW1hdGlvbicsIFtcbiAgc3RhdGUoXG4gICAgJ3ZvaWQnLFxuICAgIHN0eWxlKHtcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwLjgpJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSlcbiAgKSxcbiAgc3RhdGUoXG4gICAgJ3Zpc2libGUnLFxuICAgIHN0eWxlKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxuICAgIH0pXG4gICksXG4gIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIGFuaW1hdGUoJzIwMG1zIGVhc2UnKSksXG4gIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIGFuaW1hdGUoJzIwMG1zIGVhc2UnKSksXG5dKTtcbiJdfQ==