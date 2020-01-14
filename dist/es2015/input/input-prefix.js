import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
let MdPrefix = class MdPrefix {
    constructor(element) {
        this.element = element;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    bind() {
        this.attributeManager.addClasses("prefix");
    }
    unbind() {
        this.attributeManager.removeClasses("prefix");
    }
};
MdPrefix = __decorate([
    au.customAttribute("md-prefix"),
    au.autoinject,
    __metadata("design:paramtypes", [Element])
], MdPrefix);
export { MdPrefix };
//# sourceMappingURL=input-prefix.js.map