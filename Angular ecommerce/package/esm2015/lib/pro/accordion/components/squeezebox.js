import { __decorate, __metadata } from "tslib";
import { Component, ContentChildren, Input, QueryList, ViewEncapsulation, ChangeDetectionStrategy, } from '@angular/core';
import { SBItemComponent } from './sb-item';
import { MdbAccordionService } from '../mdb-accordion.service';
let SqueezeBoxComponent = class SqueezeBoxComponent {
    constructor(accordionService) {
        this.accordionService = accordionService;
        this.autoExpand = true;
        this._multiple = true;
    }
    get multiple() {
        return this._multiple;
    }
    set multiple(value) {
        this._multiple = value;
        this.accordionService.updateMultipleState(value);
    }
    ngOnInit() {
        this.accordionService.updateMultipleState(this.multiple);
    }
    ngAfterContentInit() {
        if (!this.multiple) {
            this.items.forEach((el) => {
                const collapsed = el.collapsed ? true : false;
                el.applyToggle(collapsed);
                el.autoExpand = this.autoExpand;
            });
        }
        this.itemsChanges = this.items.changes.subscribe((accordionItems) => {
            this.items = accordionItems;
            const accordionItemsArray = accordionItems.toArray();
            this.accordionService.updateItemsArray(accordionItemsArray);
        });
        this.items.forEach((item) => this.accordionService.addItem(item));
    }
    ngOnDestroy() {
        if (this.itemsChanges) {
            this.itemsChanges.unsubscribe();
        }
    }
};
SqueezeBoxComponent.ctorParameters = () => [
    { type: MdbAccordionService }
];
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SqueezeBoxComponent.prototype, "multiple", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], SqueezeBoxComponent.prototype, "autoExpand", void 0);
__decorate([
    ContentChildren(SBItemComponent),
    __metadata("design:type", QueryList)
], SqueezeBoxComponent.prototype, "items", void 0);
SqueezeBoxComponent = __decorate([
    Component({
        exportAs: 'squeezebox',
        selector: 'mdb-squeezebox, mdb-accordion',
        template: "<div class=\"accordion md-accordion\">\n  <ng-content></ng-content>\n</div>",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [MdbAccordionService],
        styles: [".md-accordion .card{overflow:visible;box-shadow:none;border-bottom:1px solid #e0e0e0;border-radius:0}.md-accordion .card:first-of-type,.md-accordion .card:not(:first-of-type):not(:last-of-type){border-bottom:1px solid #e0e0e0}.md-accordion .card .card-header{border-bottom:0;padding:1rem 1.5rem;background:0 0}.md-accordion .card .card-header .card-title{font-weight:400}.md-accordion .card .card-header a{transition:.3s ease-in-out}.md-accordion .card .card-header a:not(.collapsed) .rotate-icon{transform:rotate(180deg)}.md-accordion .card .fa-angle-down{float:right}.md-accordion .card .card-body{font-size:.9rem;line-height:1.7;font-weight:300;color:#626262}.accordion-gradient-bcg{background:linear-gradient(45deg,rgba(234,21,129,.6),rgba(10,23,187,.6) 100%)}.accordion.md-accordion.accordion-1 p,.accordion.md-accordion.accordion-2 p,.accordion.md-accordion.accordion-3 p,.accordion.md-accordion.accordion-4 p,.accordion.md-accordion.accordion-5 p{font-size:1rem}.accordion.md-accordion.accordion-1 .card,.accordion.md-accordion.accordion-1 .card .card-header,.accordion.md-accordion.accordion-2 .card,.accordion.md-accordion.accordion-2 .card .card-header,.accordion.md-accordion.accordion-4 .card,.accordion.md-accordion.accordion-4 .card .card-header,.accordion.md-accordion.accordion-5 .card,.accordion.md-accordion.accordion-5 .card .card-header{border:0}.accordion.md-accordion.accordion-1 .card .card-body{line-height:1.4}.accordion.md-accordion.accordion-2 .card{background-color:transparent}.accordion.md-accordion.accordion-2 .card .card-body{border:0;border-radius:3px}.accordion.md-accordion.accordion-3{border-radius:3px}.accordion.md-accordion.accordion-3 .fab.fa-angle-down,.accordion.md-accordion.accordion-3 .far.fa-angle-down,.accordion.md-accordion.accordion-3 .fas.fa-angle-down{margin-top:-10px}.accordion.md-accordion.accordion-4 .card:last-of-type .card-body{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.accordion.md-accordion.accordion-5 .card{background-color:transparent}.accordion.md-accordion.accordion-5 .card .card-header{background-color:#f44336;transition:.3s}.accordion.md-accordion.accordion-5 .card .card-header:hover{transition:.3s;background-color:#455a64}.accordion.md-accordion.accordion-5 .card .card-header .fab,.accordion.md-accordion.accordion-5 .card .card-header .far,.accordion.md-accordion.accordion-5 .card .card-header .fas{background-color:#fff;border-top-left-radius:3px}.accordion.md-accordion.accordion-5 .card .card-body{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.accordion.md-accordion.accordion-blocks .card{margin-bottom:1.2rem;box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)}.accordion.md-accordion.accordion-blocks .card .card-body{border-top:1px solid #eee}.accordion .waves-effect,.accordion .waves-light{z-index:unset}.accordion .sb-item-body{transition:.5s;overflow:hidden}.accordion .card{border-bottom:1px solid #eee;box-shadow:none}.accordion .card .card-header{color:#0275d8;padding:1rem 1.5rem;background:0 0;border-bottom:0;cursor:pointer}.accordion .card .card-header a .rotate-icon{transform:rotate(180deg)}.accordion .card .fa-angle-down{float:right}.accordion .card .card-body{padding-top:.25rem}.accordion .card.is-collapsed .card-header a .rotate-icon{transform:rotate(0)}.collapsible-body{display:none}.card{position:relative}.card .card-body{flex:1 1 auto;padding:1.25rem}mdb-accordion-item>.card,mdb-item>.card{border:0}.mdb-accordion-indicator.rotate-icon{transition:150ms ease-in}.item-disabled,.item-disabled a>h5{color:#bdbdbd!important;cursor:default!important}mdb-accordion-item-head{outline:0!important}mdb-accordion-item-head .card-header a{color:inherit}.mdb-accordion-indicator{position:absolute;right:0;transform-origin:50% 65%;margin-right:24px;top:22px}.mdb-accordion-indicator::after{content:\"\";display:block;border-style:solid;border-width:0 3px 3px 0;padding:3.5px;transform:rotate(45deg)}mdb-side-nav .mdb-accordion-indicator{margin-right:1.25rem;margin-top:.25rem;top:.8rem}mdb-side-nav .mdb-accordion-indicator::after{border-width:0 2.2px 2.2px 0;padding:2px}"]
    }),
    __metadata("design:paramtypes", [MdbAccordionService])
], SqueezeBoxComponent);
export { SqueezeBoxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1ZWV6ZWJveC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vYWNjb3JkaW9uL2NvbXBvbmVudHMvc3F1ZWV6ZWJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUdMLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFZL0QsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFpQjlCLFlBQW9CLGdCQUFxQztRQUFyQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXFCO1FBTGhELGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbkIsY0FBUyxHQUFHLElBQUksQ0FBQztJQUltQyxDQUFDO0lBYjdELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQVNELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFPLEVBQUUsRUFBRTtnQkFDN0IsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7Z0JBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFCLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFtQixFQUFFLEVBQUU7WUFDdkUsSUFBSSxDQUFDLEtBQUssR0FBRyxjQUFjLENBQUM7WUFDNUIsTUFBTSxtQkFBbUIsR0FBRyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUE3QnVDLG1CQUFtQjs7QUFiekQ7SUFEQyxLQUFLLEVBQUU7OzttREFHUDtBQU1RO0lBQVIsS0FBSyxFQUFFOzt1REFBbUI7QUFHTztJQUFqQyxlQUFlLENBQUMsZUFBZSxDQUFDOzhCQUFRLFNBQVM7a0RBQWtCO0FBZnpELG1CQUFtQjtJQVQvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsK0JBQStCO1FBQ3pDLHVGQUE4QjtRQUU5QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtRQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzs7S0FDakMsQ0FBQztxQ0FrQnNDLG1CQUFtQjtHQWpCOUMsbUJBQW1CLENBOEMvQjtTQTlDWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTQkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL3NiLWl0ZW0nO1xuaW1wb3J0IHsgTWRiQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uL21kYi1hY2NvcmRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIGV4cG9ydEFzOiAnc3F1ZWV6ZWJveCcsXG4gIHNlbGVjdG9yOiAnbWRiLXNxdWVlemVib3gsIG1kYi1hY2NvcmRpb24nLFxuICB0ZW1wbGF0ZVVybDogJ3NxdWVlemVib3guaHRtbCcsXG4gIHN0eWxlVXJsczogWycuLy4uL2FjY29yZGlvbi1tb2R1bGUuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbTWRiQWNjb3JkaW9uU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNxdWVlemVCb3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgaXRlbXNDaGFuZ2VzOiBTdWJzY3JpcHRpb247XG5cbiAgQElucHV0KClcbiAgZ2V0IG11bHRpcGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9tdWx0aXBsZTtcbiAgfVxuICBzZXQgbXVsdGlwbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9tdWx0aXBsZSA9IHZhbHVlO1xuICAgIHRoaXMuYWNjb3JkaW9uU2VydmljZS51cGRhdGVNdWx0aXBsZVN0YXRlKHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgpIGF1dG9FeHBhbmQgPSB0cnVlO1xuICBwcml2YXRlIF9tdWx0aXBsZSA9IHRydWU7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihTQkl0ZW1Db21wb25lbnQpIGl0ZW1zOiBRdWVyeUxpc3Q8U0JJdGVtQ29tcG9uZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY29yZGlvblNlcnZpY2U6IE1kYkFjY29yZGlvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY2NvcmRpb25TZXJ2aWNlLnVwZGF0ZU11bHRpcGxlU3RhdGUodGhpcy5tdWx0aXBsZSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICB0aGlzLml0ZW1zLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgY29sbGFwc2VkID0gZWwuY29sbGFwc2VkID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICBlbC5hcHBseVRvZ2dsZShjb2xsYXBzZWQpO1xuICAgICAgICBlbC5hdXRvRXhwYW5kID0gdGhpcy5hdXRvRXhwYW5kO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pdGVtc0NoYW5nZXMgPSB0aGlzLml0ZW1zLmNoYW5nZXMuc3Vic2NyaWJlKChhY2NvcmRpb25JdGVtczogYW55KSA9PiB7XG4gICAgICB0aGlzLml0ZW1zID0gYWNjb3JkaW9uSXRlbXM7XG4gICAgICBjb25zdCBhY2NvcmRpb25JdGVtc0FycmF5ID0gYWNjb3JkaW9uSXRlbXMudG9BcnJheSgpO1xuICAgICAgdGhpcy5hY2NvcmRpb25TZXJ2aWNlLnVwZGF0ZUl0ZW1zQXJyYXkoYWNjb3JkaW9uSXRlbXNBcnJheSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goKGl0ZW06IGFueSkgPT4gdGhpcy5hY2NvcmRpb25TZXJ2aWNlLmFkZEl0ZW0oaXRlbSkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuaXRlbXNDaGFuZ2VzKSB7XG4gICAgICB0aGlzLml0ZW1zQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19