import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation, } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { isBs3 } from '../utils/ng2-bootstrap-config';
let PopoverContainerComponent = class PopoverContainerComponent {
    constructor(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    get isBs3() {
        return isBs3();
    }
    ngOnInit() {
        this.class =
            'popover-fadeIn popover in popover-' +
                this.placement +
                ' ' +
                this.placement +
                ' bs-popover-' +
                this.placement +
                ' ' +
                this.containerClass;
    }
};
PopoverContainerComponent.ctorParameters = () => [
    { type: PopoverConfig }
];
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverContainerComponent.prototype, "placement", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], PopoverContainerComponent.prototype, "title", void 0);
__decorate([
    HostBinding('class.show'),
    __metadata("design:type", Object)
], PopoverContainerComponent.prototype, "show", void 0);
__decorate([
    HostBinding('attr.role'),
    __metadata("design:type", Object)
], PopoverContainerComponent.prototype, "role", void 0);
__decorate([
    HostBinding('class'),
    __metadata("design:type", Object)
], PopoverContainerComponent.prototype, "class", void 0);
PopoverContainerComponent = __decorate([
    Component({
        selector: 'mdb-popover-container',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: `
    <h3 class="popover-header" [ngClass]="headerClass" *ngIf="title">{{ title }}</h3>
    <div class="popover-body" [ngClass]="bodyClass">
      <ng-content></ng-content>
    </div>
  `,
        encapsulation: ViewEncapsulation.None,
        styles: [".popover.bs-tether-element-attached-bottom,.popover.popover-top{margin-top:-10px}.popover.bs-tether-element-attached-bottom::after,.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::after,.popover.popover-top::before{left:50%;border-bottom-width:0}.popover.bs-tether-element-attached-bottom::before,.popover.popover-top::before{bottom:-11px;margin-left:-11px;border-top-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-bottom::after,.popover.popover-top::after{bottom:-10px;margin-left:-10px;border-top-color:#fff}.popover.bs-tether-element-attached-left,.popover.popover-right{margin-left:10px}.popover.bs-tether-element-attached-left::after,.popover.bs-tether-element-attached-left::before,.popover.popover-right::after,.popover.popover-right::before{top:50%;border-left-width:0}.popover.bs-tether-element-attached-left::before,.popover.popover-right::before{left:-11px;margin-top:-11px;border-right-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-left::after,.popover.popover-right::after{left:-10px;margin-top:-10px;border-right-color:#fff}.popover.bs-tether-element-attached-top,.popover.popover-bottom{margin-top:10px}.popover.bs-tether-element-attached-top::after,.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::after,.popover.popover-bottom::before{left:50%;border-top-width:0}.popover.bs-tether-element-attached-top::before,.popover.popover-bottom::before{top:-11px;margin-left:-11px;border-bottom-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-top::after,.popover.popover-bottom::after{top:-10px;margin-left:-10px;border-bottom-color:#f7f7f7}.popover.bs-tether-element-attached-top .popover-title::before,.popover.popover-bottom .popover-title::before{position:absolute;top:0;left:50%;display:block;width:20px;margin-left:-10px;content:\"\";border-bottom:1px solid #f7f7f7}.popover.bs-tether-element-attached-right,.popover.popover-left{margin-left:-10px}.popover.bs-tether-element-attached-right::after,.popover.bs-tether-element-attached-right::before,.popover.popover-left::after,.popover.popover-left::before{top:50%;border-right-width:0}.popover.bs-tether-element-attached-right::before,.popover.popover-left::before{right:-11px;margin-top:-11px;border-left-color:rgba(0,0,0,.25)}.popover.bs-tether-element-attached-right::after,.popover.popover-left::after{right:-10px;margin-top:-10px;border-left-color:#fff}.popover::after,.popover::before{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover::before{content:\"\";border-width:11px}.popover::after{content:\"\";border-width:10px}@-webkit-keyframes fadeInPopover{from{opacity:0}to{opacity:1}}@keyframes fadeInPopover{from{opacity:0}to{opacity:1}}.popover-fadeIn{-webkit-animation-name:fadeInPopover;animation-name:fadeInPopover;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}"]
    }),
    __metadata("design:paramtypes", [PopoverConfig])
], PopoverContainerComponent);
export { PopoverContainerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvcG9wb3Zlci9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFjdEQsSUFBYSx5QkFBeUIsR0FBdEMsTUFBYSx5QkFBeUI7SUFjcEMsWUFBbUIsTUFBcUI7UUFSYixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ2pCLFNBQUksR0FBRyxTQUFTLENBQUM7UUFRekMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQU5ELElBQVcsS0FBSztRQUNkLE9BQU8sS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQU1ELFFBQVE7UUFDTixJQUFJLENBQUMsS0FBSztZQUNSLG9DQUFvQztnQkFDcEMsSUFBSSxDQUFDLFNBQVM7Z0JBQ2QsR0FBRztnQkFDSCxJQUFJLENBQUMsU0FBUztnQkFDZCxjQUFjO2dCQUNkLElBQUksQ0FBQyxTQUFTO2dCQUNkLEdBQUc7Z0JBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQTs7WUFmNEIsYUFBYTs7QUFiL0I7SUFBUixLQUFLLEVBQUU7OzREQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTs7d0RBQXNCO0FBSUg7SUFBMUIsV0FBVyxDQUFDLFlBQVksQ0FBQzs7dURBQWlCO0FBQ2pCO0lBQXpCLFdBQVcsQ0FBQyxXQUFXLENBQUM7O3VEQUFrQjtBQUVyQjtJQUFyQixXQUFXLENBQUMsT0FBTyxDQUFDOzt3REFBWTtBQVR0Qix5QkFBeUI7SUFackMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxRQUFRLEVBQUU7Ozs7O0dBS1Q7UUFFRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7S0FDdEMsQ0FBQztxQ0FlMkIsYUFBYTtHQWQ3Qix5QkFBeUIsQ0E2QnJDO1NBN0JZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb3BvdmVyQ29uZmlnIH0gZnJvbSAnLi9wb3BvdmVyLmNvbmZpZyc7XG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJy4uL3V0aWxzL25nMi1ib290c3RyYXAtY29uZmlnJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWRiLXBvcG92ZXItY29udGFpbmVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGgzIGNsYXNzPVwicG9wb3Zlci1oZWFkZXJcIiBbbmdDbGFzc109XCJoZWFkZXJDbGFzc1wiICpuZ0lmPVwidGl0bGVcIj57eyB0aXRsZSB9fTwvaDM+XG4gICAgPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiIFtuZ0NsYXNzXT1cImJvZHlDbGFzc1wiPlxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZVVybHM6IFsnLi9wb3BvdmVyLW1vZHVsZS5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwdWJsaWMgcGxhY2VtZW50OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICBwdWJsaWMgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcbiAgcHVibGljIGJvZHlDbGFzczogc3RyaW5nO1xuICBwdWJsaWMgaGVhZGVyQ2xhc3M6IHN0cmluZztcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaG93Jykgc2hvdyA9ICchaXNCczMnO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAndG9vbHRpcCc7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIGNsYXNzOiBhbnk7XG4gIHB1YmxpYyBnZXQgaXNCczMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGlzQnMzKCk7XG4gIH1cblxuICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBQb3BvdmVyQ29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jbGFzcyA9XG4gICAgICAncG9wb3Zlci1mYWRlSW4gcG9wb3ZlciBpbiBwb3BvdmVyLScgK1xuICAgICAgdGhpcy5wbGFjZW1lbnQgK1xuICAgICAgJyAnICtcbiAgICAgIHRoaXMucGxhY2VtZW50ICtcbiAgICAgICcgYnMtcG9wb3Zlci0nICtcbiAgICAgIHRoaXMucGxhY2VtZW50ICtcbiAgICAgICcgJyArXG4gICAgICB0aGlzLmNvbnRhaW5lckNsYXNzO1xuICB9XG59XG4iXX0=