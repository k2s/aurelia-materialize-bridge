"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var au = require("../aurelia");
var MdAutoComplete = /** @class */ (function () {
    function MdAutoComplete(element) {
        this.element = element;
        this.input = null;
        this.values = {};
    }
    MdAutoComplete.prototype.valuesChanged = function () {
        this.instance.updateData(this.values);
    };
    MdAutoComplete.prototype.bind = function () {
        // suppress initial change handler calls
    };
    MdAutoComplete.prototype.attached = function () {
        var _this = this;
        if (this.element.tagName.toLowerCase() === "input") {
            this.input = this.element;
        }
        else if (this.element.tagName.toLowerCase() === "md-input") {
            this.input = this.element.au["md-input"].viewModel.input;
        }
        else {
            throw new Error("md-autocomplete must be attached to either an input or md-input element");
        }
        var options = {
            data: this.values,
            limit: this.limit,
            minLength: this.minLength,
            onAutocomplete: function (text) {
                au.fireMaterializeEvent(_this.element, "autocomplete", { text: text });
            }
        };
        au.cleanOptions(options);
        this.instance = new M.Autocomplete(this.input, options);
    };
    MdAutoComplete.prototype.detached = function () {
        this.instance.destroy();
    };
    tslib_1.__decorate([
        au.ato.bindable.numberMd,
        tslib_1.__metadata("design:type", Number)
    ], MdAutoComplete.prototype, "limit", void 0);
    tslib_1.__decorate([
        au.ato.bindable.numberMd,
        tslib_1.__metadata("design:type", Number)
    ], MdAutoComplete.prototype, "minLength", void 0);
    tslib_1.__decorate([
        au.bindable,
        tslib_1.__metadata("design:type", Object)
    ], MdAutoComplete.prototype, "values", void 0);
    MdAutoComplete = tslib_1.__decorate([
        au.customAttribute("md-autocomplete"),
        au.autoinject,
        tslib_1.__metadata("design:paramtypes", [Element])
    ], MdAutoComplete);
    return MdAutoComplete;
}());
exports.MdAutoComplete = MdAutoComplete;
//# sourceMappingURL=autocomplete.js.map