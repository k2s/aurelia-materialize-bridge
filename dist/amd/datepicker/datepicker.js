define(["require", "exports", "tslib", "../aurelia"], function (require, exports, tslib_1, au) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MdDatePicker = /** @class */ (function () {
        function MdDatePicker(element) {
            var _this = this;
            this.element = element;
            this.controlId = "md-datepicker-" + MdDatePicker_1.id++;
            this.label = "";
            this.placeholder = "";
            this.showErrortext = true;
            this.disabled = false;
            this.validateResults = [];
            this.calendarIcon = null;
            this.done = function (e) {
                // we're only interested in events generated by the widget
                if (e.firedBy !== _this.instance) {
                    return;
                }
                // stop propagation for widget triggered change to retrigger it later on an the element
                e.stopPropagation();
                if (_this.suppressDone) {
                    _this.suppressDone = false;
                    return;
                }
                _this.setValue(_this.instance.date);
                au.fireEvent(_this.element, "blur");
                au.fireEvent(_this.element, "change");
            };
            this.mdUnrenderValidateResults = function (results, renderer) {
                _this.validateResults = _this.validateResults.filter(function (x) { return !results.find(function (y) { return y.id === x.id; }); });
                _this.validationClass = undefined;
            };
            this.mdRenderValidateResults = function (results, renderer) {
                var _a;
                if (_this.showErrortext) {
                    (_a = _this.validateResults).push.apply(_a, tslib_1.__spread(results.filter(function (x) { return !x.valid; })));
                }
                _this.validationClass = results.find(function (x) { return !x.valid; }) ? "invalid" : "valid";
            };
        }
        MdDatePicker_1 = MdDatePicker;
        MdDatePicker.prototype.valueChanged = function () {
            if (this.valueChangedSuppress) {
                this.valueChangedSuppress = false;
                au.updateLabel(this.input, this.labelElement);
                return;
            }
            if (!this.instance) {
                return;
            }
            this.instance.setDate(this.value);
            // suppress done handler because setInputValue will trigger it, change value and possibly cause an infinite loop when a date has time components
            this.suppressDone = true;
            this.instance.setInputValue();
            au.updateLabel(this.input, this.labelElement);
        };
        MdDatePicker.prototype.setValue = function (newValue) {
            if (this.value !== newValue) {
                this.valueChangedSuppress = true;
                this.value = newValue;
            }
        };
        MdDatePicker.prototype.attached = function () {
            var _this = this;
            if (this.placeholder) {
                this.input.setAttribute("placeholder", this.placeholder);
            }
            var container = typeof this.container === "string" ? document.querySelector(this.container) : this.container;
            var options = {
                autoClose: this.autoClose,
                format: this.format,
                parse: this.parse,
                defaultDate: this.defaultDate,
                setDefaultDate: this.setDefaultDate,
                disableWeekends: this.disableWeekends,
                disableDayFn: this.disableDayFn,
                firstDay: this.firstDay,
                minDate: this.minDate,
                maxDate: this.maxDate,
                yearRange: this.yearRange,
                isRTL: this.isRtl,
                showMonthAfterYear: this.showMonthAfterYear,
                showDaysInNextAndPreviousMonths: this.showDaysInNextAndPreviousMonths,
                container: container,
                showClearBtn: this.showClearBtn,
                i18n: this.i18n,
                events: this.events,
                onSelect: function (selectedDate) { return au.fireMaterializeEvent(_this.element, "select", { selectedDate: selectedDate }); },
                onOpen: function () { return au.fireMaterializeEvent(_this.element, "open"); },
                onClose: function () { return au.fireMaterializeEvent(_this.element, "close"); },
                onDraw: function () { return au.fireMaterializeEvent(_this.element, "draw"); }
            };
            au.cleanOptions(options);
            this.instance = new M.Datepicker(this.input, options);
            this.instance.el.addEventListener("change", this.done);
            this.element.mdUnrenderValidateResults = this.mdUnrenderValidateResults;
            this.element.mdRenderValidateResults = this.mdRenderValidateResults;
            this.valueChanged();
        };
        MdDatePicker.prototype.bind = function () {
            //
        };
        MdDatePicker.prototype.detached = function () {
            this.instance.destroy();
            this.element.mdUnrenderValidateResults = undefined;
            this.element.mdRenderValidateResults = undefined;
        };
        MdDatePicker.prototype.open = function () {
            this.instance.open();
        };
        MdDatePicker.prototype.close = function () {
            this.instance.close();
        };
        var MdDatePicker_1;
        MdDatePicker.id = 0;
        tslib_1.__decorate([
            au.ato.bindable.stringMd,
            tslib_1.__metadata("design:type", String)
        ], MdDatePicker.prototype, "label", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], MdDatePicker.prototype, "inline", void 0);
        tslib_1.__decorate([
            au.ato.bindable.stringMd,
            tslib_1.__metadata("design:type", String)
        ], MdDatePicker.prototype, "placeholder", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdDatePicker.prototype, "autoClose", void 0);
        tslib_1.__decorate([
            au.ato.bindable.stringMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", String)
        ], MdDatePicker.prototype, "format", void 0);
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Function)
        ], MdDatePicker.prototype, "parse", void 0);
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Date)
        ], MdDatePicker.prototype, "defaultDate", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdDatePicker.prototype, "setDefaultDate", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdDatePicker.prototype, "disableWeekends", void 0);
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Function)
        ], MdDatePicker.prototype, "disableDayFn", void 0);
        tslib_1.__decorate([
            au.ato.bindable.numberMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Number)
        ], MdDatePicker.prototype, "firstDay", void 0);
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Date)
        ], MdDatePicker.prototype, "minDate", void 0);
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Date)
        ], MdDatePicker.prototype, "maxDate", void 0);
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Object)
        ], MdDatePicker.prototype, "yearRange", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdDatePicker.prototype, "isRtl", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdDatePicker.prototype, "showMonthAfterYear", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdDatePicker.prototype, "showDaysInNextAndPreviousMonths", void 0);
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Object)
        ], MdDatePicker.prototype, "container", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Boolean)
        ], MdDatePicker.prototype, "showClearBtn", void 0);
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Object)
        ], MdDatePicker.prototype, "i18n", void 0);
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.oneTime }),
            tslib_1.__metadata("design:type", Array)
        ], MdDatePicker.prototype, "events", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], MdDatePicker.prototype, "showErrortext", void 0);
        tslib_1.__decorate([
            au.ato.bindable.booleanMd,
            tslib_1.__metadata("design:type", Boolean)
        ], MdDatePicker.prototype, "disabled", void 0);
        tslib_1.__decorate([
            au.bindable({ defaultBindingMode: au.bindingMode.twoWay }),
            tslib_1.__metadata("design:type", Date)
        ], MdDatePicker.prototype, "value", void 0);
        MdDatePicker = MdDatePicker_1 = tslib_1.__decorate([
            au.autoinject,
            au.customElement("md-datepicker"),
            tslib_1.__metadata("design:paramtypes", [Element])
        ], MdDatePicker);
        return MdDatePicker;
    }());
    exports.MdDatePicker = MdDatePicker;
});
//# sourceMappingURL=datepicker.js.map