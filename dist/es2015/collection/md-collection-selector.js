import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
let MdCollectionSelector = class MdCollectionSelector {
    constructor(element) {
        this.element = element;
        this.mdDisabled = false;
        this.isSelected = false;
    }
    isSelectedChanged(newValue) {
        au.fireMaterializeEvent(this.element, "selection-changed", { item: this.item, isSelected: this.isSelected });
    }
};
__decorate([
    au.bindable,
    __metadata("design:type", Object)
], MdCollectionSelector.prototype, "item", void 0);
__decorate([
    au.ato.bindable.booleanMd,
    __metadata("design:type", Boolean)
], MdCollectionSelector.prototype, "mdDisabled", void 0);
__decorate([
    au.ato.bindable.booleanMd,
    __metadata("design:type", Boolean)
], MdCollectionSelector.prototype, "isSelected", void 0);
MdCollectionSelector = __decorate([
    au.customElement("md-collection-selector"),
    au.autoinject,
    __metadata("design:paramtypes", [Element])
], MdCollectionSelector);
export { MdCollectionSelector };
//# sourceMappingURL=md-collection-selector.js.map