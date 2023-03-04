import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let MdbAccordionService = class MdbAccordionService {
    constructor() {
        this._items = [];
        this._multiple = false;
    }
    addItem(item) {
        this._items.push(item);
    }
    updateItemsArray(items) {
        this._items = [...items];
    }
    updateMultipleState(value) {
        this._multiple = value;
    }
    didItemToggled(item) {
        // on not multiple, it will collpase the rest of items
        if (!this._multiple) {
            this._items.forEach((el) => {
                if (el !== item) {
                    el.applyToggle(true);
                }
                if (el === item) {
                    const collapsed = el.collapsed ? true : false;
                    setTimeout(() => {
                        el.applyToggle(collapsed);
                    }, 0);
                }
            });
        }
    }
};
MdbAccordionService = __decorate([
    Injectable()
], MdbAccordionService);
export { MdbAccordionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWFjY29yZGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9hY2NvcmRpb24vbWRiLWFjY29yZGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSXpDLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBQWhDO1FBQ1UsV0FBTSxHQUFzQixFQUFFLENBQUM7UUFDL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztJQStCNUIsQ0FBQztJQTdCQyxPQUFPLENBQUMsSUFBcUI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQXdCO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFjO1FBQ2hDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBcUI7UUFDbEMsc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBTyxFQUFFLEVBQUU7Z0JBQzlCLElBQUksRUFBRSxLQUFLLElBQUksRUFBRTtvQkFDZixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLEVBQUUsS0FBSyxJQUFJLEVBQUU7b0JBQ2YsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBQzlDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7d0JBQ2QsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDNUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNQO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Q0FFRixDQUFBO0FBakNZLG1CQUFtQjtJQUQvQixVQUFVLEVBQUU7R0FDQSxtQkFBbUIsQ0FpQy9CO1NBakNZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTQkl0ZW1Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2ItaXRlbSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZGJBY2NvcmRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfaXRlbXM6IFNCSXRlbUNvbXBvbmVudFtdID0gW107XG4gIHByaXZhdGUgX211bHRpcGxlID0gZmFsc2U7XG5cbiAgYWRkSXRlbShpdGVtOiBTQkl0ZW1Db21wb25lbnQpIHtcbiAgICB0aGlzLl9pdGVtcy5wdXNoKGl0ZW0pO1xuICB9XG5cbiAgdXBkYXRlSXRlbXNBcnJheShpdGVtczogU0JJdGVtQ29tcG9uZW50W10pIHtcbiAgICB0aGlzLl9pdGVtcyA9IFsuLi5pdGVtc107XG4gIH1cblxuICB1cGRhdGVNdWx0aXBsZVN0YXRlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbXVsdGlwbGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGRpZEl0ZW1Ub2dnbGVkKGl0ZW06IFNCSXRlbUNvbXBvbmVudCkge1xuICAgIC8vIG9uIG5vdCBtdWx0aXBsZSwgaXQgd2lsbCBjb2xscGFzZSB0aGUgcmVzdCBvZiBpdGVtc1xuICAgIGlmICghdGhpcy5fbXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGVsOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVsICE9PSBpdGVtKSB7XG4gICAgICAgICAgZWwuYXBwbHlUb2dnbGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsID09PSBpdGVtKSB7XG4gICAgICAgICAgY29uc3QgY29sbGFwc2VkID0gZWwuY29sbGFwc2VkID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZWwuYXBwbHlUb2dnbGUoY29sbGFwc2VkKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==