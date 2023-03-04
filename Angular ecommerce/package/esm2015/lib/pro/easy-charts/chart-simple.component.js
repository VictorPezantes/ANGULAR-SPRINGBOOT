import { __decorate, __metadata } from "tslib";
import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
let SimpleChartComponent = class SimpleChartComponent {
    constructor() {
        this.options = {
            barColor: null,
            trackColor: null,
            scaleColor: null,
            scaleLength: '',
            lineCap: null,
            lineWidth: null,
            trackWidth: null,
            size: null,
            rotate: null,
            duration: null,
            enableAnimation: null,
            animate: {
                duration: 1000,
                enabled: true,
            },
        };
    }
    ngOnInit() {
        this.options.barColor = '#' + this.barColor;
        this.options.trackColor = '#' + this.trackColor;
        this.options.scaleColor = '#' + this.scaleColor;
        this.options.scaleLength = this.scaleLength;
        this.options.lineCap = this.lineCap;
        this.options.lineWidth = this.lineWidth;
        this.options.trackWidth = this.trackWidth;
        this.options.size = this.size;
        this.options.rotate = this.rotate;
        this.options.animate.duration = this.animate.duration;
        this.options.animate.enabled = this.animate.enabled;
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], SimpleChartComponent.prototype, "customText", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SimpleChartComponent.prototype, "percent", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SimpleChartComponent.prototype, "barColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SimpleChartComponent.prototype, "trackColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SimpleChartComponent.prototype, "scaleColor", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SimpleChartComponent.prototype, "scaleLength", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], SimpleChartComponent.prototype, "lineCap", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SimpleChartComponent.prototype, "lineWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SimpleChartComponent.prototype, "trackWidth", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SimpleChartComponent.prototype, "size", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], SimpleChartComponent.prototype, "rotate", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SimpleChartComponent.prototype, "animate", void 0);
SimpleChartComponent = __decorate([
    Component({
        selector: 'mdb-simple-chart',
        template: "<span class=\"min-chart\">\n  <span \n  *ngIf=\"customText\"  \n  class=\"chart-custom-text\"\n  [ngStyle]=\"{\n  'line-height': size + 'px',\n  'width': size + 'px',\n  'height': size + 'px'}\">{{ customText }}</span>\n  <span \n  *ngIf=\"!customText\" \n  class=\"percent\">{{ percent }}</span>\n  <mdb-easy-pie-chart [percent]=\"percent\" [options]=\"options\"></mdb-easy-pie-chart>\n</span>",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".min-chart{position:relative;display:inline-block;width:110px;height:110px;margin-top:50px;margin-bottom:50px;text-align:center}.min-chart canvas{position:absolute;top:0;left:0}.min-chart .percent{display:inline-block;line-height:110px;z-index:2}.min-chart .percent:after{content:\"%\";margin-left:.1em;font-size:.8rem}.chart-custom-text{display:inline-block;overflow:hidden;z-index:2}"]
    }),
    __metadata("design:paramtypes", [])
], SimpleChartComponent);
export { SimpleChartComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtc2ltcGxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vZWFzeS1jaGFydHMvY2hhcnQtc2ltcGxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsaUJBQWlCLEVBQ2pCLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQVN2QixJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQStCL0I7UUFsQk8sWUFBTyxHQUFRO1lBQ3BCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLElBQUk7WUFDaEIsVUFBVSxFQUFFLElBQUk7WUFDaEIsV0FBVyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsSUFBSTtZQUNiLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLElBQUk7WUFDaEIsSUFBSSxFQUFFLElBQUk7WUFDVixNQUFNLEVBQUUsSUFBSTtZQUNaLFFBQVEsRUFBRSxJQUFJO1lBQ2QsZUFBZSxFQUFFLElBQUk7WUFDckIsT0FBTyxFQUFFO2dCQUNQLFFBQVEsRUFBRSxJQUFJO2dCQUNkLE9BQU8sRUFBRSxJQUFJO2FBQ2Q7U0FDRixDQUFDO0lBRWEsQ0FBQztJQUVoQixRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUN0RCxDQUFDO0NBQ0YsQ0FBQTtBQTdDVTtJQUFSLEtBQUssRUFBRTs7d0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOztxREFBaUI7QUFDaEI7SUFBUixLQUFLLEVBQUU7O3NEQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTs7d0RBQW9CO0FBQ25CO0lBQVIsS0FBSyxFQUFFOzt3REFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7O3lEQUFxQjtBQUNwQjtJQUFSLEtBQUssRUFBRTs7cURBQWlCO0FBQ2hCO0lBQVIsS0FBSyxFQUFFOzt1REFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7O3dEQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTs7a0RBQWM7QUFDYjtJQUFSLEtBQUssRUFBRTs7b0RBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7O3FEQUFpRDtBQVo5QyxvQkFBb0I7SUFQaEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixzWkFBNEM7UUFFNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7O0dBQ1csb0JBQW9CLENBOENoQztTQTlDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21kYi1zaW1wbGUtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hhcnQtc2ltcGxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZWFzeS1jaGFydHMtbW9kdWxlLnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFNpbXBsZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY3VzdG9tVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSBwZXJjZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGJhckNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRyYWNrQ29sb3I6IHN0cmluZztcbiAgQElucHV0KCkgc2NhbGVDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBzY2FsZUxlbmd0aDogbnVtYmVyO1xuICBASW5wdXQoKSBsaW5lQ2FwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxpbmVXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoKSB0cmFja1dpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgcm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgpIGFuaW1hdGU6IHsgZHVyYXRpb246IHN0cmluZzsgZW5hYmxlZDogYm9vbGVhbiB9O1xuICBwdWJsaWMgb3B0aW9uczogYW55ID0ge1xuICAgIGJhckNvbG9yOiBudWxsLFxuICAgIHRyYWNrQ29sb3I6IG51bGwsXG4gICAgc2NhbGVDb2xvcjogbnVsbCxcbiAgICBzY2FsZUxlbmd0aDogJycsXG4gICAgbGluZUNhcDogbnVsbCxcbiAgICBsaW5lV2lkdGg6IG51bGwsXG4gICAgdHJhY2tXaWR0aDogbnVsbCxcbiAgICBzaXplOiBudWxsLFxuICAgIHJvdGF0ZTogbnVsbCxcbiAgICBkdXJhdGlvbjogbnVsbCxcbiAgICBlbmFibGVBbmltYXRpb246IG51bGwsXG4gICAgYW5pbWF0ZToge1xuICAgICAgZHVyYXRpb246IDEwMDAsXG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgIH0sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3B0aW9ucy5iYXJDb2xvciA9ICcjJyArIHRoaXMuYmFyQ29sb3I7XG4gICAgdGhpcy5vcHRpb25zLnRyYWNrQ29sb3IgPSAnIycgKyB0aGlzLnRyYWNrQ29sb3I7XG4gICAgdGhpcy5vcHRpb25zLnNjYWxlQ29sb3IgPSAnIycgKyB0aGlzLnNjYWxlQ29sb3I7XG4gICAgdGhpcy5vcHRpb25zLnNjYWxlTGVuZ3RoID0gdGhpcy5zY2FsZUxlbmd0aDtcbiAgICB0aGlzLm9wdGlvbnMubGluZUNhcCA9IHRoaXMubGluZUNhcDtcbiAgICB0aGlzLm9wdGlvbnMubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgdGhpcy5vcHRpb25zLnRyYWNrV2lkdGggPSB0aGlzLnRyYWNrV2lkdGg7XG4gICAgdGhpcy5vcHRpb25zLnNpemUgPSB0aGlzLnNpemU7XG4gICAgdGhpcy5vcHRpb25zLnJvdGF0ZSA9IHRoaXMucm90YXRlO1xuICAgIHRoaXMub3B0aW9ucy5hbmltYXRlLmR1cmF0aW9uID0gdGhpcy5hbmltYXRlLmR1cmF0aW9uO1xuICAgIHRoaXMub3B0aW9ucy5hbmltYXRlLmVuYWJsZWQgPSB0aGlzLmFuaW1hdGUuZW5hYmxlZDtcbiAgfVxufVxuIl19