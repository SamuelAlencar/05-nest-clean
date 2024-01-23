"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.InvalidAttachmentTypeError = void 0;
var InvalidAttachmentTypeError = /** @class */ (function (_super) {
    __extends(InvalidAttachmentTypeError, _super);
    function InvalidAttachmentTypeError(type) {
        return _super.call(this, "File type \"" + type + "\" is not valid.") || this;
    }
    return InvalidAttachmentTypeError;
}(Error));
exports.InvalidAttachmentTypeError = InvalidAttachmentTypeError;
