import { __decorate, __metadata } from "tslib";
import { bindable, customAttribute, autoinject } from "aurelia-framework";
import { MdSidenav } from "./sidenav";
var MdSidenavCollapse = /** @class */ (function () {
    function MdSidenavCollapse(element) {
        var _this = this;
        this.element = element;
        this.click = function () {
            if (_this.ref.instance.isOpen) {
                _this.ref.close();
            }
            else {
                _this.ref.open();
            }
        };
    }
    MdSidenavCollapse.prototype.attached = function () {
        this.element.addEventListener("click", this.click);
        if (this.ref) {
            this.element.setAttribute("data-target", this.ref.controlId);
        }
    };
    MdSidenavCollapse.prototype.detached = function () {
        this.element.removeEventListener("click", this.click);
    };
    __decorate([
        bindable,
        __metadata("design:type", MdSidenav)
    ], MdSidenavCollapse.prototype, "ref", void 0);
    MdSidenavCollapse = __decorate([
        customAttribute("md-sidenav-collapse"),
        autoinject,
        __metadata("design:paramtypes", [Element])
    ], MdSidenavCollapse);
    return MdSidenavCollapse;
}());
export { MdSidenavCollapse };
//# sourceMappingURL=sidenav-collapse.js.map