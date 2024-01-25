"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.InMemoryQuestionsRepository = void 0;
var domain_events_1 = require("@/core/events/domain-events");
var InMemoryQuestionsRepository = /** @class */ (function () {
    function InMemoryQuestionsRepository(questionAttachmentsRepository) {
        this.questionAttachmentsRepository = questionAttachmentsRepository;
        this.items = [];
    }
    InMemoryQuestionsRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var question;
            return __generator(this, function (_a) {
                question = this.items.find(function (item) { return item.id.toString() === id; });
                if (!question) {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/, question];
            });
        });
    };
    InMemoryQuestionsRepository.prototype.findBySlug = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var question;
            return __generator(this, function (_a) {
                question = this.items.find(function (item) { return item.slug.value === slug; });
                if (!question) {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/, question];
            });
        });
    };
    InMemoryQuestionsRepository.prototype.findManyRecent = function (_a) {
        var page = _a.page;
        return __awaiter(this, void 0, void 0, function () {
            var questions;
            return __generator(this, function (_b) {
                questions = this.items
                    .sort(function (a, b) { return b.createdAt.getTime() - a.createdAt.getTime(); })
                    .slice((page - 1) * 20, page * 20);
                return [2 /*return*/, questions];
            });
        });
    };
    InMemoryQuestionsRepository.prototype.create = function (question) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.items.push(question);
                        return [4 /*yield*/, this.questionAttachmentsRepository.createMany(question.attachments.getItems())];
                    case 1:
                        _a.sent();
                        domain_events_1.DomainEvents.dispatchEventsForAggregate(question.id);
                        return [2 /*return*/];
                }
            });
        });
    };
    InMemoryQuestionsRepository.prototype.save = function (question) {
        return __awaiter(this, void 0, void 0, function () {
            var itemIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        itemIndex = this.items.findIndex(function (item) { return item.id === question.id; });
                        this.items[itemIndex] = question;
                        return [4 /*yield*/, this.questionAttachmentsRepository.createMany(question.attachments.getNewItems())];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.questionAttachmentsRepository.deleteMany(question.attachments.getRemovedItems())];
                    case 2:
                        _a.sent();
                        domain_events_1.DomainEvents.dispatchEventsForAggregate(question.id);
                        return [2 /*return*/];
                }
            });
        });
    };
    InMemoryQuestionsRepository.prototype["delete"] = function (question) {
        return __awaiter(this, void 0, void 0, function () {
            var itemIndex;
            return __generator(this, function (_a) {
                itemIndex = this.items.findIndex(function (item) { return item.id === question.id; });
                this.items.splice(itemIndex, 1);
                this.questionAttachmentsRepository.deleteManyByQuestionId(question.id.toString());
                return [2 /*return*/];
            });
        });
    };
    return InMemoryQuestionsRepository;
}());
exports.InMemoryQuestionsRepository = InMemoryQuestionsRepository;
