import { __decorate, __metadata } from "tslib";
import * as au from "../aurelia";
import { ConfigBuilder } from "../config-builder";
var MdButton = /** @class */ (function () {
    function MdButton(element, configBuilder) {
        this.element = element;
        this.configBuilder = configBuilder;
        this.disabled = false;
        this.flat = false;
        this.floating = false;
        this.large = false;
        this.small = false;
        this.pulse = false;
        this.attributeManager = new au.AttributeManager(this.element);
    }
    MdButton.prototype.disabledChanged = function () {
        if (this.disabled) {
            this.attributeManager.addClasses("disabled");
        }
        else {
            this.attributeManager.removeClasses("disabled");
        }
    };
    MdButton.prototype.flatChanged = function () {
        if (this.flat) {
            this.attributeManager.addClasses("btn-flat");
            this.attributeManager.removeClasses("btn");
        }
        else {
            this.attributeManager.removeClasses("btn-flat");
            this.attributeManager.addClasses("btn");
        }
    };
    MdButton.prototype.pulseChanged = function () {
        if (this.pulse) {
            this.attributeManager.addClasses("pulse");
        }
        else {
            this.attributeManager.removeClasses("pulse");
        }
    };
    MdButton.prototype.attached = function () {
        var classes = [];
        if (this.configBuilder.autoButtonWaves && !this.element.hasAttribute("md-waves")) {
            classes.push("waves-effect");
            if (this.flat) {
                classes.push("waves-secondary");
            }
            else {
                classes.push("waves-light");
            }
            Waves.attach(this.element);
        }
        this.flatChanged();
        if (this.floating) {
            classes.push("btn-floating");
        }
        if (this.large) {
            classes.push("btn-large");
        }
        if (this.small) {
            classes.push("btn-small");
        }
        this.disabledChanged();
        this.pulseChanged();
        this.flatChanged();
        this.attributeManager.addClasses(classes);
    };
    MdButton.prototype.detached = function () {
        this.attributeManager.removeClasses(["btn", "btn-flat", "btn-large", "disabled", "pulse", "waves-secondary", "waves-light", "waves-effect", "waves-block"]);
    };
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], MdButton.prototype, "disabled", void 0);
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], MdButton.prototype, "flat", void 0);
    __decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdButton.prototype, "floating", void 0);
    __decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdButton.prototype, "large", void 0);
    __decorate([
        au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
        __metadata("design:type", Boolean)
    ], MdButton.prototype, "small", void 0);
    __decorate([
        au.ato.bindable.booleanMd,
        __metadata("design:type", Boolean)
    ], MdButton.prototype, "pulse", void 0);
    MdButton = __decorate([
        au.customAttribute("md-button"),
        au.autoinject,
        __metadata("design:paramtypes", [Element, ConfigBuilder])
    ], MdButton);
    return MdButton;
}());
export { MdButton };
//# sourceMappingURL=button.js.map