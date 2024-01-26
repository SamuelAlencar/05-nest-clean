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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.Notification = void 0;
var entity_1 = require("@/core/entities/entity");
var Notification = /** @class */ (function (_super) {
    __extends(Notification, _super);
    function Notification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Notification.prototype, "recipientId", {
        get: function () {
            return this.props.recipientId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "title", {
        get: function () {
            return this.props.title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "content", {
        get: function () {
            return this.props.content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "readAt", {
        get: function () {
            return this.props.readAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Notification.prototype, "createdAt", {
        get: function () {
            return this.props.createdAt;
        },
        enumerable: false,
        configurable: true
    });
    Notification.prototype.read = function () {
        this.props.readAt = new Date();
    };
    Notification.create = function (props, id) {
        var _a;
        var notification = new Notification(__assign(__assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() }), id);
        return notification;
    };
    return Notification;
}(entity_1.Entity));
exports.Notification = Notification;
