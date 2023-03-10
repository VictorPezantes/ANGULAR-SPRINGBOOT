import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbTableDirective } from './directives/mdb-table.directive';
import { MdbTableSortDirective } from './directives/mdb-table-sort.directive';
import { MdbTableScrollDirective } from './directives/mdb-table-scroll.directive';
import { MdbTableRowDirective } from './directives/mdb-table-row.directive';
import { MdbTableService } from './services/mdb-table.service';
import { MdbTablePaginationComponent } from './components/mdb-table-pagination.component';
let TableModule = class TableModule {
};
TableModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [
            MdbTablePaginationComponent,
            MdbTableRowDirective,
            MdbTableScrollDirective,
            MdbTableSortDirective,
            MdbTableDirective,
        ],
        exports: [
            MdbTablePaginationComponent,
            MdbTableRowDirective,
            MdbTableScrollDirective,
            MdbTableSortDirective,
            MdbTableDirective,
        ],
        entryComponents: [MdbTablePaginationComponent],
        providers: [MdbTableService],
    })
], TableModule);
export { TableModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3RhYmxlcy90YWJsZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFxQjFGLElBQWEsV0FBVyxHQUF4QixNQUFhLFdBQVc7Q0FBRyxDQUFBO0FBQWQsV0FBVztJQW5CdkIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLFlBQVksRUFBRTtZQUNaLDJCQUEyQjtZQUMzQixvQkFBb0I7WUFDcEIsdUJBQXVCO1lBQ3ZCLHFCQUFxQjtZQUNyQixpQkFBaUI7U0FDbEI7UUFDRCxPQUFPLEVBQUU7WUFDUCwyQkFBMkI7WUFDM0Isb0JBQW9CO1lBQ3BCLHVCQUF1QjtZQUN2QixxQkFBcUI7WUFDckIsaUJBQWlCO1NBQ2xCO1FBQ0QsZUFBZSxFQUFFLENBQUMsMkJBQTJCLENBQUM7UUFDOUMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO0tBQzdCLENBQUM7R0FDVyxXQUFXLENBQUc7U0FBZCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNZGJUYWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tZGItdGFibGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1kYlRhYmxlU29ydERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tZGItdGFibGUtc29ydC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWRiVGFibGVTY3JvbGxEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXNjcm9sbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWRiVGFibGVSb3dEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbWRiLXRhYmxlLXJvdy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWRiVGFibGVTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZGItdGFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBNZGJUYWJsZVBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWRiLXRhYmxlLXBhZ2luYXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1kYlRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICBNZGJUYWJsZVJvd0RpcmVjdGl2ZSxcbiAgICBNZGJUYWJsZVNjcm9sbERpcmVjdGl2ZSxcbiAgICBNZGJUYWJsZVNvcnREaXJlY3RpdmUsXG4gICAgTWRiVGFibGVEaXJlY3RpdmUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNZGJUYWJsZVBhZ2luYXRpb25Db21wb25lbnQsXG4gICAgTWRiVGFibGVSb3dEaXJlY3RpdmUsXG4gICAgTWRiVGFibGVTY3JvbGxEaXJlY3RpdmUsXG4gICAgTWRiVGFibGVTb3J0RGlyZWN0aXZlLFxuICAgIE1kYlRhYmxlRGlyZWN0aXZlLFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtNZGJUYWJsZVBhZ2luYXRpb25Db21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtNZGJUYWJsZVNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7fVxuIl19