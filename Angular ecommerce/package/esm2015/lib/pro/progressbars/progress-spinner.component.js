import { __decorate, __metadata, __param } from "tslib";
import { AfterViewInit, Component, ElementRef, Inject, Input, PLATFORM_ID, ViewEncapsulation, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
let ProgressSpinnerComponent = class ProgressSpinnerComponent {
    constructor(el, platformId) {
        this.el = el;
        this.addClass = 'spinner-blue-only';
        this.isBrowser = false;
        this.spinnerType = '';
        this.spinnerColor = 'rainbow';
        this.isBrowser = isPlatformBrowser(platformId);
    }
    ngAfterViewInit() {
        const hostElem = this.el.nativeElement;
        const colorClass = this.spinnerColor;
        this.addClass = 'spinner-rainbow';
        switch (colorClass) {
            case 'green':
                this.addClass = 'spinner-green-only';
                break;
            case 'blue':
                this.addClass = 'spinner-blue-only';
                break;
            case 'yellow':
                this.addClass = 'spinner-yellow-only';
                break;
            case 'red':
                this.addClass = 'spinner-red-only';
                break;
            case 'rainbow':
                this.addClass = 'spinner-rainbow spinner-blue-only mat-progress-spinner';
                this.spinerRun();
                break;
        }
        hostElem.children[0].children[0].className += ' ' + this.addClass;
    }
    spinerRun() {
        let counter = 0;
        const hostElem = this.el.nativeElement;
        if (this.isBrowser) {
            setInterval(() => {
                switch (counter) {
                    case 0:
                        this.addClass = 'spinner-red-only mat-progress-spinner ';
                        break;
                    case 1:
                        this.addClass = 'spinner-yellow-only mat-progress-spinner';
                        break;
                    case 2:
                        this.addClass = 'spinner-blue-only mat-progress-spinner';
                        break;
                    case 3:
                        this.addClass = 'spinner-green-only mat-progress-spinner';
                        break;
                }
                hostElem.children[0].children[0].className = ' ' + this.addClass;
                if (counter < 3) {
                    counter++;
                }
                else {
                    counter = 0;
                }
            }, 1333);
        }
    }
};
ProgressSpinnerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
__decorate([
    Input(),
    __metadata("design:type", Object)
], ProgressSpinnerComponent.prototype, "spinnerType", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ProgressSpinnerComponent.prototype, "spinnerColor", void 0);
ProgressSpinnerComponent = __decorate([
    Component({
        selector: 'mdb-spinner',
        template: "<div class=\"preloader-wrapper active  {{spinnerType}}\">\n    <mdb-Spinners mdbSpinners mode=\"indeterminate\"></mdb-Spinners>\n</div>",
        encapsulation: ViewEncapsulation.None,
        styles: [""]
    }),
    __param(1, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [ElementRef, String])
], ProgressSpinnerComponent);
export { ProgressSpinnerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvcHJvL3Byb2dyZXNzYmFycy9wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLGFBQWEsRUFDYixTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNYLGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQVFwRCxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQU1uQyxZQUFtQixFQUFjLEVBQXVCLFVBQWtCO1FBQXZELE9BQUUsR0FBRixFQUFFLENBQVk7UUFMakMsYUFBUSxHQUFXLG1CQUFtQixDQUFDO1FBQ3ZDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDVCxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixpQkFBWSxHQUFHLFNBQVMsQ0FBQztRQUdoQyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7UUFDdkMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLGlCQUFpQixDQUFDO1FBRWxDLFFBQVEsVUFBVSxFQUFFO1lBQ2xCLEtBQUssT0FBTztnQkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFvQixDQUFDO2dCQUNyQyxNQUFNO1lBQ1IsS0FBSyxNQUFNO2dCQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUM7Z0JBQ3BDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztnQkFDdEMsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixJQUFJLENBQUMsUUFBUSxHQUFHLGtCQUFrQixDQUFDO2dCQUNuQyxNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxRQUFRLEdBQUcsd0RBQXdELENBQUM7Z0JBQ3pFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsTUFBTTtTQUNUO1FBQ0QsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3BFLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixXQUFXLENBQUMsR0FBRyxFQUFFO2dCQUNmLFFBQVEsT0FBTyxFQUFFO29CQUNmLEtBQUssQ0FBQzt3QkFDSixJQUFJLENBQUMsUUFBUSxHQUFHLHdDQUF3QyxDQUFDO3dCQUN6RCxNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixJQUFJLENBQUMsUUFBUSxHQUFHLDBDQUEwQyxDQUFDO3dCQUMzRCxNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixJQUFJLENBQUMsUUFBUSxHQUFHLHdDQUF3QyxDQUFDO3dCQUN6RCxNQUFNO29CQUNSLEtBQUssQ0FBQzt3QkFDSixJQUFJLENBQUMsUUFBUSxHQUFHLHlDQUF5QyxDQUFDO3dCQUMxRCxNQUFNO2lCQUNUO2dCQUVELFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDakUsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO29CQUNmLE9BQU8sRUFBRSxDQUFDO2lCQUNYO3FCQUFNO29CQUNMLE9BQU8sR0FBRyxDQUFDLENBQUM7aUJBQ2I7WUFDSCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDVjtJQUNILENBQUM7Q0FDRixDQUFBOztZQTNEd0IsVUFBVTt5Q0FBRyxNQUFNLFNBQUMsV0FBVzs7QUFIN0M7SUFBUixLQUFLLEVBQUU7OzZEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTs7OERBQTBCO0FBSnZCLHdCQUF3QjtJQU5wQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixtSkFBOEM7UUFFOUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O0tBQ3RDLENBQUM7SUFPb0MsV0FBQSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7cUNBQWhDLFVBQVU7R0FOdEIsd0JBQXdCLENBaUVwQztTQWpFWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIFBMQVRGT1JNX0lELFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zcGlubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICdwcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZ3Jlc3NiYXJzLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBhZGRDbGFzczogU3RyaW5nID0gJ3NwaW5uZXItYmx1ZS1vbmx5JztcbiAgaXNCcm93c2VyID0gZmFsc2U7XG4gIEBJbnB1dCgpIHNwaW5uZXJUeXBlID0gJyc7XG4gIEBJbnB1dCgpIHNwaW5uZXJDb2xvciA9ICdyYWluYm93JztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IHN0cmluZykge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgY29uc3QgaG9zdEVsZW0gPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY29sb3JDbGFzcyA9IHRoaXMuc3Bpbm5lckNvbG9yO1xuICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1yYWluYm93JztcblxuICAgIHN3aXRjaCAoY29sb3JDbGFzcykge1xuICAgICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItZ3JlZW4tb25seSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYmx1ZSc6XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1ibHVlLW9ubHknO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3llbGxvdyc6XG4gICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci15ZWxsb3ctb25seSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmVkJzpcbiAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXJlZC1vbmx5JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyYWluYm93JzpcbiAgICAgICAgdGhpcy5hZGRDbGFzcyA9ICdzcGlubmVyLXJhaW5ib3cgc3Bpbm5lci1ibHVlLW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXInO1xuICAgICAgICB0aGlzLnNwaW5lclJ1bigpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaG9zdEVsZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2xhc3NOYW1lICs9ICcgJyArIHRoaXMuYWRkQ2xhc3M7XG4gIH1cblxuICBzcGluZXJSdW4oKSB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGNvbnN0IGhvc3RFbGVtID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGNvdW50ZXIpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItcmVkLW9ubHkgbWF0LXByb2dyZXNzLXNwaW5uZXIgJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci15ZWxsb3ctb25seSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lcic7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICB0aGlzLmFkZENsYXNzID0gJ3NwaW5uZXItYmx1ZS1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MgPSAnc3Bpbm5lci1ncmVlbi1vbmx5IG1hdC1wcm9ncmVzcy1zcGlubmVyJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaG9zdEVsZW0uY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0uY2xhc3NOYW1lID0gJyAnICsgdGhpcy5hZGRDbGFzcztcbiAgICAgICAgaWYgKGNvdW50ZXIgPCAzKSB7XG4gICAgICAgICAgY291bnRlcisrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvdW50ZXIgPSAwO1xuICAgICAgICB9XG4gICAgICB9LCAxMzMzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==