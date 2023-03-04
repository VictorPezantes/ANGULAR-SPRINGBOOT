import { __decorate, __metadata } from "tslib";
import { OnInit, Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core';
let CharCounterDirective = class CharCounterDirective {
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.length = 20;
    }
    ngOnInit() {
        // Inititalise a new <span> element for the count display and render it below the host component.
        this.textContainer = this._renderer.createElement('p');
        this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.textContainer);
        this._renderer.addClass(this.textContainer, 'chars');
        this.textContainer.innerHTML = '0/' + this.length;
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    }
    onKeyUp() {
        this.textContainer.innerHTML = this._elRef.nativeElement.value.length + '/' + this.length;
        if (this._elRef.nativeElement.value.length > this.length) {
            this._renderer.addClass(this._elRef.nativeElement, 'invalid');
        }
        else {
            this._renderer.removeClass(this._elRef.nativeElement, 'invalid');
        }
    }
    hide() {
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    }
    show() {
        this.onKeyUp();
        this._renderer.setStyle(this.textContainer, 'display', 'block');
    }
};
CharCounterDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], CharCounterDirective.prototype, "length", void 0);
__decorate([
    HostListener('input'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CharCounterDirective.prototype, "onKeyUp", null);
__decorate([
    HostListener('blur'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CharCounterDirective.prototype, "hide", null);
__decorate([
    HostListener('focus'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CharCounterDirective.prototype, "show", null);
CharCounterDirective = __decorate([
    Directive({
        selector: '[mdbCharCounter]',
    }),
    __metadata("design:paramtypes", [ElementRef, Renderer2])
], CharCounterDirective);
export { CharCounterDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhci1jb3VudGVyLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vaW5wdXRzL2NoYXItY291bnRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUs5RixJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUkvQixZQUFvQixNQUFrQixFQUFVLFNBQW9CO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBSHBELFdBQU0sR0FBRyxFQUFFLENBQUM7SUFHMkMsQ0FBQztJQUV4RSxRQUFRO1FBQ04saUdBQWlHO1FBQ2pHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFc0IsT0FBTztRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRTFGLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3hELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7SUFFcUIsSUFBSTtRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRXNCLElBQUk7UUFDekIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDbEUsQ0FBQztDQUNGLENBQUE7O1lBN0I2QixVQUFVO1lBQXFCLFNBQVM7O0FBSDNEO0lBQVIsS0FBSyxFQUFFOztvREFBb0I7QUFjTDtJQUF0QixZQUFZLENBQUMsT0FBTyxDQUFDOzs7O21EQVFyQjtBQUVxQjtJQUFyQixZQUFZLENBQUMsTUFBTSxDQUFDOzs7O2dEQUVwQjtBQUVzQjtJQUF0QixZQUFZLENBQUMsT0FBTyxDQUFDOzs7O2dEQUdyQjtBQWhDVSxvQkFBb0I7SUFIaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtLQUM3QixDQUFDO3FDQUs0QixVQUFVLEVBQXFCLFNBQVM7R0FKekQsb0JBQW9CLENBaUNoQztTQWpDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1ttZGJDaGFyQ291bnRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFyQ291bnRlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBsZW5ndGggPSAyMDtcbiAgcHVibGljIHRleHRDb250YWluZXI6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICAvLyBJbml0aXRhbGlzZSBhIG5ldyA8c3Bhbj4gZWxlbWVudCBmb3IgdGhlIGNvdW50IGRpc3BsYXkgYW5kIHJlbmRlciBpdCBiZWxvdyB0aGUgaG9zdCBjb21wb25lbnQuXG4gICAgdGhpcy50ZXh0Q29udGFpbmVyID0gdGhpcy5fcmVuZGVyZXIuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCwgdGhpcy50ZXh0Q29udGFpbmVyKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRleHRDb250YWluZXIsICdjaGFycycpO1xuICAgIHRoaXMudGV4dENvbnRhaW5lci5pbm5lckhUTUwgPSAnMC8nICsgdGhpcy5sZW5ndGg7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy50ZXh0Q29udGFpbmVyLCAnZGlzcGxheScsICdub25lJyk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIG9uS2V5VXAoKSB7XG4gICAgdGhpcy50ZXh0Q29udGFpbmVyLmlubmVySFRNTCA9IHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoICsgJy8nICsgdGhpcy5sZW5ndGg7XG5cbiAgICBpZiAodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC52YWx1ZS5sZW5ndGggPiB0aGlzLmxlbmd0aCkge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2ludmFsaWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2ludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgaGlkZSgpIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRleHRDb250YWluZXIsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgc2hvdygpIHtcbiAgICB0aGlzLm9uS2V5VXAoKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnRleHRDb250YWluZXIsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH1cbn1cbiJdfQ==