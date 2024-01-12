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
exports.Answer = void 0;
var aggregate_root_1 = require("@/core/entities/aggregate-root");
var answer_attachment_list_1 = require("@/domain/forum/enterprise/entities/answer-attachment-list");
var answer_created_event_1 = require("@/domain/forum/enterprise/events/answer-created-event");
var Answer = /** @class */ (function (_super) {
    __extends(Answer, _super);
    function Answer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Answer.prototype, "authorId", {
        get: function () {
            return this.props.authorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "questionId", {
        get: function () {
            return this.props.questionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "content", {
        get: function () {
            return this.props.content;
        },
        set: function (content) {
            this.props.content = content;
            this.touch();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "attachments", {
        get: function () {
            return this.props.attachments;
        },
        set: function (attachments) {
            this.props.attachments = attachments;
            this.touch();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "createdAt", {
        get: function () {
            return this.props.createdAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "updatedAt", {
        get: function () {
            return this.props.updatedAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Answer.prototype, "excerpt", {
        get: function () {
            return this.content.substring(0, 120).trimEnd().concat('...');
        },
        enumerable: false,
        configurable: true
    });
    Answer.prototype.touch = function () {
        this.props.updatedAt = new Date();
    };
    Answer.create = function (props, id) {
        var _a, _b;
        var answer = new Answer(__assign(__assign({}, props), { attachments: (_a = props.attachments) !== null && _a !== void 0 ? _a : new answer_attachment_list_1.AnswerAttachmentList(), createdAt: (_b = props.createdAt) !== null && _b !== void 0 ? _b : new Date() }), id);
        var isNewAnswer = !id;
        if (isNewAnswer) {
            answer.addDomainEvent(new answer_created_event_1.AnswerCreatedEvent(answer));
        }
        return answer;
    };
    return Answer;
}(aggregate_root_1.AggregateRoot));
exports.Answer = Answer;
