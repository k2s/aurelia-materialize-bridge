import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
let MdCard = class MdCard {
    constructor(element) {
        this.element = element;
        this.image = null;
        this.size = "";
    }
};
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdCard.prototype, "horizontal", void 0);
__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", String)
], MdCard.prototype, "image", void 0);
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdCard.prototype, "reveal", void 0);
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdCard.prototype, "action", void 0);
__decorate([
    au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", Boolean)
], MdCard.prototype, "stickyAction", void 0);
__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneWay }),
    __metadata("design:type", String)
], MdCard.prototype, "size", void 0);
__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", String)
], MdCard.prototype, "title", void 0);
__decorate([
    au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
    __metadata("design:type", String)
], MdCard.prototype, "mdClass", void 0);
MdCard = __decorate([
    au.customElement("md-card"),
    au.autoinject,
    __metadata("design:paramtypes", [Element])
], MdCard);
export { MdCard };
//# sourceMappingURL=card.js.map