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
exports.Question = void 0;
var aggregate_root_1 = require("@/core/entities/aggregate-root");
var slug_1 = require("./value-objects/slug");
var dayjs_1 = require("dayjs");
var question_attachment_list_1 = require("./question-attachment-list");
var question_best_answer_chosen_event_1 = require("@/domain/forum/enterprise/events/question-best-answer-chosen-event");
var Question = /** @class */ (function (_super) {
    __extends(Question, _super);
    function Question() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Question.prototype, "authorId", {
        get: function () {
            return this.props.authorId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "bestAnswerId", {
        get: function () {
            return this.props.bestAnswerId;
        },
        set: function (bestAnswerId) {
            if (bestAnswerId && bestAnswerId !== this.props.bestAnswerId) {
                this.addDomainEvent(new question_best_answer_chosen_event_1.QuestionBestAnswerChosenEvent(this, bestAnswerId));
            }
            this.props.bestAnswerId = bestAnswerId;
            this.touch();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "title", {
        get: function () {
            return this.props.title;
        },
        set: function (title) {
            this.props.title = title;
            this.props.slug = slug_1.Slug.createFromText(title);
            this.touch();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "content", {
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
    Object.defineProperty(Question.prototype, "slug", {
        get: function () {
            return this.props.slug;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "attachments", {
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
    Object.defineProperty(Question.prototype, "createdAt", {
        get: function () {
            return this.props.createdAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "updatedAt", {
        get: function () {
            return this.props.updatedAt;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "isNew", {
        get: function () {
            return dayjs_1["default"]().diff(this.createdAt, 'days') <= 3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Question.prototype, "excerpt", {
        get: function () {
            return this.content.substring(0, 120).trimEnd().concat('...');
        },
        enumerable: false,
        configurable: true
    });
    Question.prototype.touch = function () {
        this.props.updatedAt = new Date();
    };
    Question.create = function (props, id) {
        var _a, _b, _c;
        var question = new Question(__assign(__assign({}, props), { slug: (_a = props.slug) !== null && _a !== void 0 ? _a : slug_1.Slug.createFromText(props.title), attachments: (_b = props.attachments) !== null && _b !== void 0 ? _b : new question_attachment_list_1.QuestionAttachmentList(), createdAt: (_c = props.createdAt) !== null && _c !== void 0 ? _c : new Date() }), id);
        return question;
    };
    return Question;
}(aggregate_root_1.AggregateRoot));
exports.Question = Question;
