var CardsModule_1;
import { __decorate } from "tslib";
import { MdbCardFooterComponent } from './mdb-card-footer.component';
import { MdbCardTitleComponent } from './mdb-card-title.component';
import { MdbCardTextComponent } from './mdb-card-text.component';
import { MdbCardBodyComponent } from './mdb-card-body.component';
import { MdbCardComponent } from './mdb-card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdbCardImageComponent } from './mdb-card-image.component';
import { MdbCardHeaderComponent } from './mdb-card-header.component';
let CardsModule = CardsModule_1 = class CardsModule {
    static forRoot() {
        return { ngModule: CardsModule_1, providers: [] };
    }
};
CardsModule = CardsModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [
            MdbCardComponent,
            MdbCardBodyComponent,
            MdbCardImageComponent,
            MdbCardTextComponent,
            MdbCardTitleComponent,
            MdbCardFooterComponent,
            MdbCardHeaderComponent,
        ],
        exports: [
            MdbCardComponent,
            MdbCardBodyComponent,
            MdbCardImageComponent,
            MdbCardTextComponent,
            MdbCardTitleComponent,
            MdbCardFooterComponent,
            MdbCardHeaderComponent,
        ],
    })
], CardsModule);
export { CardsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvY2FyZHMvY2FyZHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBdUJyRSxJQUFhLFdBQVcsbUJBQXhCLE1BQWEsV0FBVztJQUNmLE1BQU0sQ0FBQyxPQUFPO1FBQ25CLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBVyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0NBQ0YsQ0FBQTtBQUpZLFdBQVc7SUFyQnZCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztRQUN2QixZQUFZLEVBQUU7WUFDWixnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFDcEIscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0QixzQkFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUCxnQkFBZ0I7WUFDaEIsb0JBQW9CO1lBQ3BCLHFCQUFxQjtZQUNyQixvQkFBb0I7WUFDcEIscUJBQXFCO1lBQ3JCLHNCQUFzQjtZQUN0QixzQkFBc0I7U0FDdkI7S0FDRixDQUFDO0dBQ1csV0FBVyxDQUl2QjtTQUpZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZGJDYXJkRm9vdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9tZGItY2FyZC1mb290ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE1kYkNhcmRUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vbWRiLWNhcmQtdGl0bGUuY29tcG9uZW50JztcbmltcG9ydCB7IE1kYkNhcmRUZXh0Q29tcG9uZW50IH0gZnJvbSAnLi9tZGItY2FyZC10ZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNZGJDYXJkQm9keUNvbXBvbmVudCB9IGZyb20gJy4vbWRiLWNhcmQtYm9keS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWRiQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vbWRiLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWRiQ2FyZEltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9tZGItY2FyZC1pbWFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWRiQ2FyZEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vbWRiLWNhcmQtaGVhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBNZGJDYXJkQ29tcG9uZW50LFxuICAgIE1kYkNhcmRCb2R5Q29tcG9uZW50LFxuICAgIE1kYkNhcmRJbWFnZUNvbXBvbmVudCxcbiAgICBNZGJDYXJkVGV4dENvbXBvbmVudCxcbiAgICBNZGJDYXJkVGl0bGVDb21wb25lbnQsXG4gICAgTWRiQ2FyZEZvb3RlckNvbXBvbmVudCxcbiAgICBNZGJDYXJkSGVhZGVyQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTWRiQ2FyZENvbXBvbmVudCxcbiAgICBNZGJDYXJkQm9keUNvbXBvbmVudCxcbiAgICBNZGJDYXJkSW1hZ2VDb21wb25lbnQsXG4gICAgTWRiQ2FyZFRleHRDb21wb25lbnQsXG4gICAgTWRiQ2FyZFRpdGxlQ29tcG9uZW50LFxuICAgIE1kYkNhcmRGb290ZXJDb21wb25lbnQsXG4gICAgTWRiQ2FyZEhlYWRlckNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZHNNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYXJkc01vZHVsZT4ge1xuICAgIHJldHVybiB7IG5nTW9kdWxlOiBDYXJkc01vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xuICB9XG59XG4iXX0=