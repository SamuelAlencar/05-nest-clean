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
exports.CommentWithAuthor = void 0;
var value_object_1 = require("@/core/entities/value-object");
var CommentWithAuthor = /** @class */ (function (_super) {
    __extends(CommentWithAuthor, _super);
    function CommentWithAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CommentWithAuthor.prototype, "commentId", {
        get: function () {
            return this.props.commentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommentWithAuthor.prototype, "content", {
        get: function () {
            return this.props.content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommentWithAuthor.prototype, "authorId", {
        get: function () {
            return this.props.authorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommentWithAuthor.prototype, "author", {
        get: function () {
            return this.props.author;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommentWithAuthor.prototype, "createdAt", {
        get: function () {
            return this.props.createdAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CommentWithAuthor.prototype, "updatedAt", {
        get: function () {
            return this.props.updatedAt;
        },
        enumerable: false,
        configurable: true
    });
    CommentWithAuthor.create = function (props) {
        return new CommentWithAuthor(props);
    };
    return CommentWithAuthor;
}(value_object_1.ValueObject));
exports.CommentWithAuthor = CommentWithAuthor;
