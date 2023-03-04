import { __decorate, __metadata } from "tslib";
import { Component, Input, Output, EventEmitter, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, HostBinding, } from '@angular/core';
import { SPACE, ENTER } from '../../free/utils/keyboard-navigation';
let MdbTreeComponent = class MdbTreeComponent {
    constructor(_cdRef) {
        this._cdRef = _cdRef;
        this.checked = new EventEmitter();
        this.checkedKeys = new EventEmitter();
        this.nodesChanged = new EventEmitter();
        this.checkboxes = false;
        this.toggleOnTitleClick = false;
        this._expandAll = false;
        this.checkedValues = [];
        this.toggle = {};
    }
    set expandAll(value) {
        if (this.nodes && this.nodes.entries()) {
            this._expandAll = value;
            this.toggleExpandAll();
        }
    }
    ngOnInit() {
        if (this.nodes && this.nodes.entries()) {
            this._setInitialCheckedKeys();
        }
    }
    toggleExpandAll() {
        if (this._expandAll) {
            this.expandAllNodes();
        }
        else if (!this._expandAll) {
            this.closeAllNodes();
        }
    }
    expandAllNodes() {
        for (const [index, node] of this.nodes.entries()) {
            const idx = index;
            this.toggle[idx] = true;
            if (node[this.childrenField] && node[this.childrenField].length > 0) {
                this._expandAllChildren(node, idx);
            }
        }
    }
    closeAllNodes() {
        for (const [index, node] of this.nodes.entries()) {
            const idx = index;
            this.toggle[idx] = false;
            if (node[this.childrenField] && node[this.childrenField].length > 0) {
                this._closeAllChildren(node, idx);
            }
        }
    }
    _expandAllChildren(node, idx) {
        for (const [childIndex, childNode] of node[this.childrenField].entries()) {
            const childIdx = idx + '_' + childIndex;
            this.toggle[childIdx] = true;
            if (childNode[this.childrenField] && childNode[this.childrenField].length > 0) {
                this._expandAllChildren(childNode, childIdx);
            }
        }
    }
    _closeAllChildren(node, idx) {
        for (const [childIndex, childNode] of node[this.childrenField].entries()) {
            const childIdx = idx + '_' + childIndex;
            this.toggle[childIdx] = false;
            if (childNode[this.childrenField] && childNode[this.childrenField].length > 0) {
                this._closeAllChildren(childNode, childIdx);
            }
        }
    }
    _setInitialCheckedKeys() {
        for (const [index, node] of this.nodes.entries()) {
            if (node[this.checkboxesField]) {
                const idx = index;
                this.checkedValues.push(idx);
                if (node[this.childrenField] && node[this.childrenField].length > 0) {
                    this._hasInitialCheckedKeysChildren(node[this.childrenField], idx);
                }
            }
        }
    }
    _hasInitialCheckedKeysChildren(childrenNode, i) {
        for (const [childrenIdx, node] of childrenNode.entries()) {
            const idx = childrenIdx + '_' + i;
            if (node[this.checkboxesField]) {
                this.checkedValues.push(idx);
            }
            if (node[this.childrenField] && node[this.childrenField].length > 0) {
                this._hasInitialCheckedKeysChildren(node[this.childrenField], idx);
            }
        }
    }
    toggleByNode(i) {
        for (const [index, node] of this.nodes.entries()) {
            if (node[this.childrenField] && node[this.childrenField].length > 0) {
                const idx = index;
                const toggleIdx = i;
                if (idx === toggleIdx) {
                    this.toggle[idx] = !this.toggle[idx];
                    this._cdRef.markForCheck();
                }
                else {
                    this._childrenToggleByNode(node, idx, toggleIdx);
                }
            }
        }
    }
    _childrenToggleByNode(node, i, toggleIdx) {
        for (const [childIndex, childNode] of node[this.childrenField].entries()) {
            const nodeHasChildren = childNode[this.childrenField] && childNode[this.childrenField].length > 0;
            if (nodeHasChildren) {
                const idx = i + '_' + childIndex;
                if (idx === toggleIdx) {
                    this.toggle[idx] = !this.toggle[idx];
                    this._cdRef.markForCheck();
                }
                else {
                    this._childrenToggleByNode(childNode, idx, toggleIdx);
                }
            }
            else {
                return;
            }
        }
    }
    onKeydownCheckbox(e, node, i) {
        // tslint:disable-next-line: deprecation
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            e.preventDefault();
            this.checkNodes(node);
            this.updateNodesCheckedValues(node, i);
        }
    }
    onKeydown(e, i) {
        // tslint:disable-next-line: deprecation
        if (e.keyCode === SPACE || e.keyCode === ENTER) {
            e.preventDefault();
            this.toggle[i] = !this.toggle[i];
        }
    }
    checkNodes(node) {
        setTimeout(() => {
            node[this.checkboxesField] = !node[this.checkboxesField];
            this.checked.emit(node);
            this.nodesChanged.emit(this.nodes);
        }, 0);
        const nodeHasChildren = node[this.childrenField] && node[this.childrenField].length > 0;
        if (nodeHasChildren) {
            this._checkChildNodes(node[this.childrenField], !node[this.checkboxesField]);
        }
        this._cdRef.markForCheck();
    }
    _checkChildNodes(children, checked) {
        children.forEach((childNode) => {
            if (childNode[this.checkboxesField] !== undefined) {
                childNode[this.checkboxesField] = checked;
                const nodeHasChildren = childNode[this.childrenField] && childNode[this.childrenField].length > 0;
                if (nodeHasChildren) {
                    this._checkChildNodes(childNode[this.childrenField], checked);
                }
            }
        });
    }
    updateNodesCheckedValues(node, idx) {
        setTimeout(() => {
            if (node[this.checkboxesField] && !this.checkedValues.includes(idx)) {
                this.checkedValues.push(idx);
            }
            else if (!node[this.checkboxesField] && this.checkedValues.includes(idx)) {
                const removeIndex = this.checkedValues.findIndex(e => e === idx);
                if (removeIndex !== -1) {
                    this.checkedValues.splice(removeIndex, 1);
                }
            }
            const nodeHasChildren = node[this.childrenField] && node[this.childrenField].length > 0;
            if (nodeHasChildren) {
                this._updateChildNodesCheckedValues(node[this.childrenField], idx);
            }
            this.checkedKeys.emit(this.checkedValues);
        }, 0);
    }
    _updateChildNodesCheckedValues(childrenNode, childrenIdx) {
        for (const [index, node] of childrenNode.entries()) {
            const idx = childrenIdx + '_' + index;
            if (node[this.checkboxesField] && !this.checkedValues.includes(idx)) {
                this.checkedValues.push(idx);
            }
            else if (!node[this.checkboxesField] && this.checkedValues.includes(idx)) {
                const removeIndex = this.checkedValues.findIndex(e => e === idx);
                if (removeIndex !== -1) {
                    this.checkedValues.splice(removeIndex, 1);
                }
            }
            const nodeHasChildren = node[this.childrenField] && node[this.childrenField].length > 0;
            if (nodeHasChildren) {
                this._updateChildNodesCheckedValues(node[this.childrenField], idx);
            }
        }
    }
};
MdbTreeComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
__decorate([
    HostBinding('class.mdb-tree'),
    Output(),
    __metadata("design:type", Object)
], MdbTreeComponent.prototype, "checked", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MdbTreeComponent.prototype, "checkedKeys", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MdbTreeComponent.prototype, "nodesChanged", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbTreeComponent.prototype, "nodes", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdbTreeComponent.prototype, "textField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdbTreeComponent.prototype, "childrenField", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MdbTreeComponent.prototype, "checkboxesField", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MdbTreeComponent.prototype, "expandAll", null);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbTreeComponent.prototype, "checkboxes", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], MdbTreeComponent.prototype, "toggleOnTitleClick", void 0);
MdbTreeComponent = __decorate([
    Component({
        // tslint:disable-next-line: component-selector
        selector: 'mdb-tree',
        template: "<!-- child nodes -->\n<ng-template #tree let-nodeChildren let-idx=\"idx\">\n  <ul class=\"mdb-tree-list\">\n    <li *ngFor=\"let node of nodeChildren; let n = index\" class=\"mdb-tree-list-node\">\n      <div class=\"mdb-tree-container\">\n        <div *ngIf=\"node[childrenField] && node[childrenField].length > 0; else emptyIcon\">\n          <span class=\"mdb-tree-icon-container\">\n            <i\n              tabindex=\"1\"\n              aria-hidden=\"true\"\n              [ngClass]=\"\n                toggle[idx + '_' + n] ? 'mdb-tree-rotate-icon-open' : 'mdb-tree-rotate-icon-closed'\n              \"\n              (keydown)=\"onKeydown($event, idx + '_' + n)\"\n              (click)=\"toggle[idx + '_' + n] = !toggle[idx + '_' + n]\"\n              class=\"mdb-tree-indicator \"\n            ></i>\n          </span>\n        </div>\n        <ng-template #emptyIcon\n          ><span class=\"mdb-tree-icon-container\"\n            ><i class=\"mdb-tree-empty-icon\" style=\"display: block\" aria-hidden=\"true\"></i\n          ></span>\n        </ng-template>\n        <div\n          class=\"mdb-tree-checkbox-container\"\n          *ngIf=\"checkboxes && node[checkboxesField] !== undefined\"\n        >\n          <mdb-checkbox\n            class=\"checkbox-filled\"\n            [filledIn]=\"true\"\n            [tabIndex]=\"1\"\n            [attr.id]=\"node[textField]\"\n            (keydown)=\"onKeydownCheckbox($event, node, idx + '_' + n)\"\n            (click)=\"checkNodes(node); updateNodesCheckedValues(node, idx + '_' + n)\"\n            [checked]=\"node[checkboxesField]\"\n          ></mdb-checkbox>\n        </div>\n        <div *ngIf=\"checkboxes && node[checkboxesField] === undefined\">\n          <div class=\"mdb-tree-checkbox-null-container\"></div>\n        </div>\n\n        <div\n          *ngIf=\"toggleOnTitleClick\"\n          class=\"mdb-tree-text-field\"\n          [ngStyle]=\"{\n            cursor: node[childrenField] && node[childrenField].length > 0 ? 'pointer' : 'default'\n          }\"\n          (click)=\"toggle[idx + '_' + n] = !toggle[idx + '_' + n]\"\n        >\n          {{ node[textField] }}\n        </div>\n\n        <div *ngIf=\"!toggleOnTitleClick\" class=\"mdb-tree-text-field mdb-tree-text-ellipsis\">\n          {{ node[textField] }}\n        </div>\n      </div>\n      <div *ngIf=\"node[childrenField] && toggle[idx + '_' + n]\">\n        <ng-container\n          *ngTemplateOutlet=\"tree; context: { $implicit: node[childrenField], idx: idx + '_' + n }\"\n        ></ng-container>\n      </div>\n    </li>\n  </ul>\n</ng-template>\n<!-- first nodes -->\n<ul class=\"mdb-tree-list\">\n  <li *ngFor=\"let node of nodes; let i = index\" class=\"mdb-tree-list-node\">\n    <div class=\"mdb-tree-container\">\n      <div *ngIf=\"node[childrenField] && node[childrenField].length > 0; else emptyIcon\">\n        <span class=\"mdb-tree-icon-container\">\n          <i\n            tabindex=\"1\"\n            aria-hidden=\"true\"\n            [ngClass]=\"toggle[i] ? 'mdb-tree-rotate-icon-open' : 'mdb-tree-rotate-icon-closed'\"\n            (keydown)=\"onKeydown($event, i)\"\n            (click)=\"toggle[i] = !toggle[i]\"\n            class=\"mdb-tree-indicator\"\n          ></i>\n        </span>\n      </div>\n      <ng-template #emptyIcon\n        ><span class=\"mdb-tree-icon-container\"\n          ><i class=\"mdb-tree-empty-icon\" style=\"display: block\" aria-hidden=\"true\"></i\n        ></span>\n      </ng-template>\n      <div\n        class=\"mdb-tree-checkbox-container\"\n        *ngIf=\"checkboxes && node[checkboxesField] !== undefined\"\n      >\n        <mdb-checkbox\n          class=\"checkbox-filled\"\n          [checked]=\"node[checkboxesField]\"\n          [filledIn]=\"true\"\n          [tabIndex]=\"1\"\n          [attr.id]=\"node[textField]\"\n          (keydown)=\"onKeydownCheckbox($event, node, i)\"\n          (click)=\"checkNodes(node); updateNodesCheckedValues(node, i)\"\n        ></mdb-checkbox>\n      </div>\n      <div *ngIf=\"checkboxes && node[checkboxesField] === undefined\">\n        <div class=\"mdb-tree-checkbox-null-container\"></div>\n      </div>\n\n      <div\n        *ngIf=\"toggleOnTitleClick\"\n        class=\"mdb-tree-text-field\"\n        [ngStyle]=\"{\n          cursor: node[childrenField] && node[childrenField].length > 0 ? 'pointer' : 'default'\n        }\"\n        (click)=\"toggle[i] = !toggle[i]\"\n      >\n        {{ node[textField] }}\n      </div>\n\n      <div *ngIf=\"!toggleOnTitleClick\" class=\"mdb-tree-text-field mdb-tree-text-ellipsis\">\n        {{ node[textField] }}\n      </div>\n    </div>\n    <div *ngIf=\"node[childrenField] && toggle[i]\">\n      <ng-container\n        *ngTemplateOutlet=\"tree; context: { $implicit: node[childrenField], idx: i }\"\n      ></ng-container>\n    </div>\n  </li>\n</ul>\n",
        encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [".mdb-tree-list{list-style-type:none;margin:0;padding:0}.mdb-tree-list-node{list-style-type:none;margin:.8rem .8rem .8rem .95rem}.mdb-tree-container{display:flex;min-width:230px}.mdb-tree-icon-container{display:inline-block;width:2rem;height:auto}.mdb-tree-empty-icon{cursor:default}.mdb-tree-text-field{margin-top:.15rem;max-width:90%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdb-tree-checkbox-null-container{min-width:2.2rem}.mdb-tree-indicator{position:relative;right:0;transform-origin:50% 79%;display:inline-block;margin-right:0;margin-top:.025rem;cursor:pointer;font-size:1.3rem}.mdb-tree-indicator::after{content:\"\";display:block;border-style:solid;padding:5px;margin-top:.15rem;border-width:0 3px 3px 0;font-size:1.3rem;transform:rotate(45deg)}.mdb-tree-indicator:focus{color:#4285f4;outline:0}.mdb-tree-rotate-icon-open{transform:rotate(0)}.mdb-tree-rotate-icon-closed{transform:rotate(270deg)}.mdb-tree-checkbox-container{margin-top:.25rem}.mdb-tree-checkbox-container mdb-checkbox.checkbox-filled [type=checkbox][class*=filled-in]:checked+label:after{border-color:#4285f4;background-color:#4285f4}"]
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef])
], MdbTreeComponent);
export { MdbTreeComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9wcm8vdHJlZS12aWV3L3RyZWUtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osTUFBTSxFQUNOLGlCQUFpQixFQUNqQix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFdBQVcsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBU3BFLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBdUIzQixZQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQXBCN0MsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVduQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUU1QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzNCLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBQzdCLFdBQU0sR0FBUSxFQUFFLENBQUM7SUFFK0IsQ0FBQztJQWJ4QyxJQUFJLFNBQVMsQ0FBQyxLQUFjO1FBQ25DLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7SUFVRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJ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O0lBQVIsS0FBSyxFQUFFOzt5REFBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7OztpREFLUDtBQUNRO0lBQVIsS0FBSyxFQUFFOztvREFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7OzREQUE0QjtBQWpCekIsZ0JBQWdCO0lBUjVCLFNBQVMsQ0FBQztRQUNULCtDQUErQztRQUMvQyxRQUFRLEVBQUUsVUFBVTtRQUNwQix3d0pBQXlDO1FBRXpDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1FBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztLQUNoRCxDQUFDO3FDQXdCNEIsaUJBQWlCO0dBdkJsQyxnQkFBZ0IsQ0F5TjVCO1NBek5ZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEhvc3RCaW5kaW5nLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU1BBQ0UsIEVOVEVSIH0gZnJvbSAnLi4vLi4vZnJlZS91dGlscy9rZXlib2FyZC1uYXZpZ2F0aW9uJztcbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21kYi10cmVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RyZWUtdmlldy5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWRiVHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MubWRiLXRyZWUnKVxuICBAT3V0cHV0KClcbiAgY2hlY2tlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGNoZWNrZWRLZXlzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbm9kZXNDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBub2RlczogYW55O1xuICBASW5wdXQoKSB0ZXh0RmllbGQ6IHN0cmluZztcbiAgQElucHV0KCkgY2hpbGRyZW5GaWVsZDogc3RyaW5nO1xuICBASW5wdXQoKSBjaGVja2JveGVzRmllbGQ6IHN0cmluZztcbiAgQElucHV0KCkgc2V0IGV4cGFuZEFsbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICh0aGlzLm5vZGVzICYmIHRoaXMubm9kZXMuZW50cmllcygpKSB7XG4gICAgICB0aGlzLl9leHBhbmRBbGwgPSB2YWx1ZTtcbiAgICAgIHRoaXMudG9nZ2xlRXhwYW5kQWxsKCk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIGNoZWNrYm94ZXMgPSBmYWxzZTtcbiAgQElucHV0KCkgdG9nZ2xlT25UaXRsZUNsaWNrID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfZXhwYW5kQWxsID0gZmFsc2U7XG4gIGNoZWNrZWRWYWx1ZXM6IHN0cmluZ1tdID0gW107XG4gIHRvZ2dsZTogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLm5vZGVzICYmIHRoaXMubm9kZXMuZW50cmllcygpKSB7XG4gICAgICB0aGlzLl9zZXRJbml0aWFsQ2hlY2tlZEtleXMoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVFeHBhbmRBbGwoKSB7XG4gICAgaWYgKHRoaXMuX2V4cGFuZEFsbCkge1xuICAgICAgdGhpcy5leHBhbmRBbGxOb2RlcygpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuX2V4cGFuZEFsbCkge1xuICAgICAgdGhpcy5jbG9zZUFsbE5vZGVzKCk7XG4gICAgfVxuICB9XG5cbiAgZXhwYW5kQWxsTm9kZXMoKSB7XG4gICAgZm9yIChjb25zdCBbaW5kZXgsIG5vZGVdIG9mIHRoaXMubm9kZXMuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBpZHggPSBpbmRleDtcbiAgICAgIHRoaXMudG9nZ2xlW2lkeF0gPSB0cnVlO1xuICAgICAgaWYgKG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSAmJiBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9leHBhbmRBbGxDaGlsZHJlbihub2RlLCBpZHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlQWxsTm9kZXMoKSB7XG4gICAgZm9yIChjb25zdCBbaW5kZXgsIG5vZGVdIG9mIHRoaXMubm9kZXMuZW50cmllcygpKSB7XG4gICAgICBjb25zdCBpZHggPSBpbmRleDtcbiAgICAgIHRoaXMudG9nZ2xlW2lkeF0gPSBmYWxzZTtcbiAgICAgIGlmIChub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fY2xvc2VBbGxDaGlsZHJlbihub2RlLCBpZHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2V4cGFuZEFsbENoaWxkcmVuKG5vZGU6IGFueSwgaWR4OiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IFtjaGlsZEluZGV4LCBjaGlsZE5vZGVdIG9mIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGNoaWxkSWR4ID0gaWR4ICsgJ18nICsgY2hpbGRJbmRleDtcbiAgICAgIHRoaXMudG9nZ2xlW2NoaWxkSWR4XSA9IHRydWU7XG4gICAgICBpZiAoY2hpbGROb2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgY2hpbGROb2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLl9leHBhbmRBbGxDaGlsZHJlbihjaGlsZE5vZGUsIGNoaWxkSWR4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9jbG9zZUFsbENoaWxkcmVuKG5vZGU6IGFueSwgaWR4OiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IFtjaGlsZEluZGV4LCBjaGlsZE5vZGVdIG9mIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGNoaWxkSWR4ID0gaWR4ICsgJ18nICsgY2hpbGRJbmRleDtcbiAgICAgIHRoaXMudG9nZ2xlW2NoaWxkSWR4XSA9IGZhbHNlO1xuICAgICAgaWYgKGNoaWxkTm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdICYmIGNoaWxkTm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5fY2xvc2VBbGxDaGlsZHJlbihjaGlsZE5vZGUsIGNoaWxkSWR4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRJbml0aWFsQ2hlY2tlZEtleXMoKSB7XG4gICAgZm9yIChjb25zdCBbaW5kZXgsIG5vZGVdIG9mIHRoaXMubm9kZXMuZW50cmllcygpKSB7XG4gICAgICBpZiAobm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF0pIHtcbiAgICAgICAgY29uc3QgaWR4ID0gaW5kZXg7XG4gICAgICAgIHRoaXMuY2hlY2tlZFZhbHVlcy5wdXNoKGlkeCk7XG4gICAgICAgIGlmIChub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLl9oYXNJbml0aWFsQ2hlY2tlZEtleXNDaGlsZHJlbihub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0sIGlkeCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYXNJbml0aWFsQ2hlY2tlZEtleXNDaGlsZHJlbihjaGlsZHJlbk5vZGU6IGFueSwgaTogc3RyaW5nKSB7XG4gICAgZm9yIChjb25zdCBbY2hpbGRyZW5JZHgsIG5vZGVdIG9mIGNoaWxkcmVuTm9kZS5lbnRyaWVzKCkpIHtcbiAgICAgIGNvbnN0IGlkeCA9IGNoaWxkcmVuSWR4ICsgJ18nICsgaTtcblxuICAgICAgaWYgKG5vZGVbdGhpcy5jaGVja2JveGVzRmllbGRdKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZFZhbHVlcy5wdXNoKGlkeCk7XG4gICAgICB9XG4gICAgICBpZiAobm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdICYmIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX2hhc0luaXRpYWxDaGVja2VkS2V5c0NoaWxkcmVuKG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSwgaWR4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB0b2dnbGVCeU5vZGUoaTogc3RyaW5nKSB7XG4gICAgZm9yIChjb25zdCBbaW5kZXgsIG5vZGVdIG9mIHRoaXMubm9kZXMuZW50cmllcygpKSB7XG4gICAgICBpZiAobm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdICYmIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IGluZGV4O1xuICAgICAgICBjb25zdCB0b2dnbGVJZHggPSBpO1xuICAgICAgICBpZiAoaWR4ID09PSB0b2dnbGVJZHgpIHtcbiAgICAgICAgICB0aGlzLnRvZ2dsZVtpZHhdID0gIXRoaXMudG9nZ2xlW2lkeF07XG4gICAgICAgICAgdGhpcy5fY2RSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fY2hpbGRyZW5Ub2dnbGVCeU5vZGUobm9kZSwgaWR4LCB0b2dnbGVJZHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2hpbGRyZW5Ub2dnbGVCeU5vZGUobm9kZTogYW55LCBpOiBzdHJpbmcsIHRvZ2dsZUlkeDogc3RyaW5nKSB7XG4gICAgZm9yIChjb25zdCBbY2hpbGRJbmRleCwgY2hpbGROb2RlXSBvZiBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0uZW50cmllcygpKSB7XG4gICAgICBjb25zdCBub2RlSGFzQ2hpbGRyZW4gPVxuICAgICAgICBjaGlsZE5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSAmJiBjaGlsZE5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGggPiAwO1xuICAgICAgaWYgKG5vZGVIYXNDaGlsZHJlbikge1xuICAgICAgICBjb25zdCBpZHggPSBpICsgJ18nICsgY2hpbGRJbmRleDtcbiAgICAgICAgaWYgKGlkeCA9PT0gdG9nZ2xlSWR4KSB7XG4gICAgICAgICAgdGhpcy50b2dnbGVbaWR4XSA9ICF0aGlzLnRvZ2dsZVtpZHhdO1xuICAgICAgICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX2NoaWxkcmVuVG9nZ2xlQnlOb2RlKGNoaWxkTm9kZSwgaWR4LCB0b2dnbGVJZHgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25LZXlkb3duQ2hlY2tib3goZTogS2V5Ym9hcmRFdmVudCwgbm9kZTogYW55LCBpOiBzdHJpbmcpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gU1BBQ0UgfHwgZS5rZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jaGVja05vZGVzKG5vZGUpO1xuICAgICAgdGhpcy51cGRhdGVOb2Rlc0NoZWNrZWRWYWx1ZXMobm9kZSwgaSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlkb3duKGU6IEtleWJvYXJkRXZlbnQsIGk6IHN0cmluZykge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICBpZiAoZS5rZXlDb2RlID09PSBTUEFDRSB8fCBlLmtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnRvZ2dsZVtpXSA9ICF0aGlzLnRvZ2dsZVtpXTtcbiAgICB9XG4gIH1cblxuICBjaGVja05vZGVzKG5vZGU6IGFueSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF0gPSAhbm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF07XG4gICAgICB0aGlzLmNoZWNrZWQuZW1pdChub2RlKTtcbiAgICAgIHRoaXMubm9kZXNDaGFuZ2VkLmVtaXQodGhpcy5ub2Rlcyk7XG4gICAgfSwgMCk7XG4gICAgY29uc3Qgbm9kZUhhc0NoaWxkcmVuID0gbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdICYmIG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGggPiAwO1xuICAgIGlmIChub2RlSGFzQ2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuX2NoZWNrQ2hpbGROb2Rlcyhub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0sICFub2RlW3RoaXMuY2hlY2tib3hlc0ZpZWxkXSk7XG4gICAgfVxuICAgIHRoaXMuX2NkUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hlY2tDaGlsZE5vZGVzKGNoaWxkcmVuOiBhbnksIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGU6IGFueSkgPT4ge1xuICAgICAgaWYgKGNoaWxkTm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjaGlsZE5vZGVbdGhpcy5jaGVja2JveGVzRmllbGRdID0gY2hlY2tlZDtcbiAgICAgICAgY29uc3Qgbm9kZUhhc0NoaWxkcmVuID1cbiAgICAgICAgICBjaGlsZE5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSAmJiBjaGlsZE5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXS5sZW5ndGggPiAwO1xuICAgICAgICBpZiAobm9kZUhhc0NoaWxkcmVuKSB7XG4gICAgICAgICAgdGhpcy5fY2hlY2tDaGlsZE5vZGVzKGNoaWxkTm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLCBjaGVja2VkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlTm9kZXNDaGVja2VkVmFsdWVzKG5vZGU6IGFueSwgaWR4OiBzdHJpbmcpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChub2RlW3RoaXMuY2hlY2tib3hlc0ZpZWxkXSAmJiAhdGhpcy5jaGVja2VkVmFsdWVzLmluY2x1ZGVzKGlkeCkpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkVmFsdWVzLnB1c2goaWR4KTtcbiAgICAgIH0gZWxzZSBpZiAoIW5vZGVbdGhpcy5jaGVja2JveGVzRmllbGRdICYmIHRoaXMuY2hlY2tlZFZhbHVlcy5pbmNsdWRlcyhpZHgpKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gdGhpcy5jaGVja2VkVmFsdWVzLmZpbmRJbmRleChlID0+IGUgPT09IGlkeCk7XG5cbiAgICAgICAgaWYgKHJlbW92ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuY2hlY2tlZFZhbHVlcy5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBub2RlSGFzQ2hpbGRyZW4gPSBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDA7XG4gICAgICBpZiAobm9kZUhhc0NoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNoaWxkTm9kZXNDaGVja2VkVmFsdWVzKG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSwgaWR4KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hlY2tlZEtleXMuZW1pdCh0aGlzLmNoZWNrZWRWYWx1ZXMpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQ2hpbGROb2Rlc0NoZWNrZWRWYWx1ZXMoY2hpbGRyZW5Ob2RlOiBhbnksIGNoaWxkcmVuSWR4OiBzdHJpbmcpIHtcbiAgICBmb3IgKGNvbnN0IFtpbmRleCwgbm9kZV0gb2YgY2hpbGRyZW5Ob2RlLmVudHJpZXMoKSkge1xuICAgICAgY29uc3QgaWR4ID0gY2hpbGRyZW5JZHggKyAnXycgKyBpbmRleDtcblxuICAgICAgaWYgKG5vZGVbdGhpcy5jaGVja2JveGVzRmllbGRdICYmICF0aGlzLmNoZWNrZWRWYWx1ZXMuaW5jbHVkZXMoaWR4KSkge1xuICAgICAgICB0aGlzLmNoZWNrZWRWYWx1ZXMucHVzaChpZHgpO1xuICAgICAgfSBlbHNlIGlmICghbm9kZVt0aGlzLmNoZWNrYm94ZXNGaWVsZF0gJiYgdGhpcy5jaGVja2VkVmFsdWVzLmluY2x1ZGVzKGlkeCkpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSB0aGlzLmNoZWNrZWRWYWx1ZXMuZmluZEluZGV4KGUgPT4gZSA9PT0gaWR4KTtcbiAgICAgICAgaWYgKHJlbW92ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIHRoaXMuY2hlY2tlZFZhbHVlcy5zcGxpY2UocmVtb3ZlSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBub2RlSGFzQ2hpbGRyZW4gPSBub2RlW3RoaXMuY2hpbGRyZW5GaWVsZF0gJiYgbm9kZVt0aGlzLmNoaWxkcmVuRmllbGRdLmxlbmd0aCA+IDA7XG4gICAgICBpZiAobm9kZUhhc0NoaWxkcmVuKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNoaWxkTm9kZXNDaGVja2VkVmFsdWVzKG5vZGVbdGhpcy5jaGlsZHJlbkZpZWxkXSwgaWR4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==