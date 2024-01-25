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
exports.Attachment = void 0;
var entity_1 = require("@/core/entities/entity");
var Attachment = /** @class */ (function (_super) {
    __extends(Attachment, _super);
    function Attachment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Attachment.prototype, "title", {
        get: function () {
            return this.props.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Attachment.prototype, "url", {
        get: function () {
            return this.props.url;
        },
        enumerable: false,
        configurable: true
    });
    Attachment.create = function (props, id) {
        var attachment = new Attachment(props, id);
        return attachment;
    };
    return Attachment;
}(entity_1.Entity));
exports.Attachment = Attachment;
