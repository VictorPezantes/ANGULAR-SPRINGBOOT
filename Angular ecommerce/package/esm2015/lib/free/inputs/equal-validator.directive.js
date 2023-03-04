var EqualValidatorDirective_1;
import { __decorate, __metadata, __param } from "tslib";
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
let EqualValidatorDirective = EqualValidatorDirective_1 = class EqualValidatorDirective {
    constructor(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    get isReverse() {
        if (!this.reverse) {
            return false;
        }
        return this.reverse === 'true' ? true : false;
    }
    validate(c) {
        // self value (e.g. retype password)
        const v = c.value;
        // control value (e.g. password)
        const e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false,
            });
        }
        // return null;
        return null;
    }
};
EqualValidatorDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: Attribute, args: ['validateEqual',] }] },
    { type: String, decorators: [{ type: Attribute, args: ['reverse',] }] }
];
EqualValidatorDirective = EqualValidatorDirective_1 = __decorate([
    Directive({
        selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
        providers: [
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective_1), multi: true },
        ],
    }),
    __param(0, Attribute('validateEqual')),
    __param(1, Attribute('reverse')),
    __metadata("design:paramtypes", [String, String])
], EqualValidatorDirective);
export { EqualValidatorDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1YWwtdmFsaWRhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL2lucHV0cy9lcXVhbC12YWxpZGF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBOEIsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTM0UsSUFBYSx1QkFBdUIsK0JBQXBDLE1BQWEsdUJBQXVCO0lBQ2xDLFlBQ3FDLGFBQXFCLEVBQzNCLE9BQWU7UUFEVCxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUMzQixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQzNDLENBQUM7SUFFSixJQUFZLFNBQVM7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2hELENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBa0I7UUFDekIsb0NBQW9DO1FBQ3BDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFbEIsZ0NBQWdDO1FBQ2hDLE1BQU0sQ0FBQyxHQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUU5QyxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUU7WUFDdEIsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUNqQztRQUVELDBCQUEwQjtRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3hDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNqQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25CO1NBQ0Y7UUFFRCw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN4QyxDQUFDLENBQUMsU0FBUyxDQUFDO2dCQUNWLGFBQWEsRUFBRSxLQUFLO2FBQ3JCLENBQUMsQ0FBQztTQUNKO1FBRUQsZUFBZTtRQUNmLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7O3lDQXpDSSxTQUFTLFNBQUMsZUFBZTt5Q0FDekIsU0FBUyxTQUFDLFNBQVM7O0FBSFgsdUJBQXVCO0lBUG5DLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFDTiw0RkFBNEY7UUFDOUYsU0FBUyxFQUFFO1lBQ1QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXVCLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1NBQ2hHO0tBQ0YsQ0FBQztJQUdHLFdBQUEsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFBO0lBQzFCLFdBQUEsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBOztHQUhaLHVCQUF1QixDQTJDbkM7U0EzQ1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmLCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sLCBOR19WQUxJREFUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6XG4gICAgJ1ttZGItdmFsaWRhdGVFcXVhbF1bZm9ybUNvbnRyb2xOYW1lXSxbdmFsaWRhdGVFcXVhbF1bZm9ybUNvbnRyb2xdLFt2YWxpZGF0ZUVxdWFsXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogTkdfVkFMSURBVE9SUywgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXF1YWxWYWxpZGF0b3JEaXJlY3RpdmUpLCBtdWx0aTogdHJ1ZSB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBFcXVhbFZhbGlkYXRvckRpcmVjdGl2ZSBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBBdHRyaWJ1dGUoJ3ZhbGlkYXRlRXF1YWwnKSBwdWJsaWMgdmFsaWRhdGVFcXVhbDogc3RyaW5nLFxuICAgIEBBdHRyaWJ1dGUoJ3JldmVyc2UnKSBwdWJsaWMgcmV2ZXJzZTogc3RyaW5nXG4gICkge31cblxuICBwcml2YXRlIGdldCBpc1JldmVyc2UoKSB7XG4gICAgaWYgKCF0aGlzLnJldmVyc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmV2ZXJzZSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IG51bGwge1xuICAgIC8vIHNlbGYgdmFsdWUgKGUuZy4gcmV0eXBlIHBhc3N3b3JkKVxuICAgIGNvbnN0IHYgPSBjLnZhbHVlO1xuXG4gICAgLy8gY29udHJvbCB2YWx1ZSAoZS5nLiBwYXNzd29yZClcbiAgICBjb25zdCBlOiBhbnkgPSBjLnJvb3QuZ2V0KHRoaXMudmFsaWRhdGVFcXVhbCk7XG5cbiAgICAvLyB2YWx1ZSBub3QgZXF1YWxcbiAgICBpZiAoZSAmJiB2ICE9PSBlLnZhbHVlKSB7XG4gICAgICByZXR1cm4geyB2YWxpZGF0ZUVxdWFsOiBmYWxzZSB9O1xuICAgIH1cblxuICAgIC8vIHZhbHVlIGVxdWFsIGFuZCByZXZlcnNlXG4gICAgaWYgKGUgJiYgdiA9PT0gZS52YWx1ZSAmJiB0aGlzLmlzUmV2ZXJzZSkge1xuICAgICAgZGVsZXRlIGUuZXJyb3JzWyd2YWxpZGF0ZUVxdWFsJ107XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKGUuZXJyb3JzKS5sZW5ndGgpIHtcbiAgICAgICAgZS5zZXRFcnJvcnMobnVsbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdmFsdWUgbm90IGVxdWFsIGFuZCByZXZlcnNlXG4gICAgaWYgKGUgJiYgdiAhPT0gZS52YWx1ZSAmJiB0aGlzLmlzUmV2ZXJzZSkge1xuICAgICAgZS5zZXRFcnJvcnMoe1xuICAgICAgICB2YWxpZGF0ZUVxdWFsOiBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHJldHVybiBudWxsO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=