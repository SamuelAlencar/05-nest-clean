"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.PrismaQuestionsRepository = void 0;
var common_1 = require("@nestjs/common");
var prisma_question_mapper_1 = require("../mappers/prisma-question-mapper");
var prisma_question_details_mapper_1 = require("../mappers/prisma-question-details-mapper");
var domain_events_1 = require("@/core/events/domain-events");
var PrismaQuestionsRepository = /** @class */ (function () {
    function PrismaQuestionsRepository(prisma, cache, questionAttachmentsRepository) {
        this.prisma = prisma;
        this.cache = cache;
        this.questionAttachmentsRepository = questionAttachmentsRepository;
    }
    PrismaQuestionsRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var question;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.question.findUnique({
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        question = _a.sent();
                        if (!question) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, prisma_question_mapper_1.PrismaQuestionMapper.toDomain(question)];
                }
            });
        });
    };
    PrismaQuestionsRepository.prototype.findBySlug = function (slug) {
        return __awaiter(this, void 0, Promise, function () {
            var question;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.question.findUnique({
                            where: {
                                slug: slug
                            }
                        })];
                    case 1:
                        question = _a.sent();
                        if (!question) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, prisma_question_mapper_1.PrismaQuestionMapper.toDomain(question)];
                }
            });
        });
    };
    PrismaQuestionsRepository.prototype.findDetailsBySlug = function (slug) {
        return __awaiter(this, void 0, Promise, function () {
            var cacheHit, cacheData, question, questionDetails;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cache.get("question:" + slug + ":details")];
                    case 1:
                        cacheHit = _a.sent();
                        if (cacheHit) {
                            cacheData = JSON.parse(cacheHit);
                            return [2 /*return*/, cacheData];
                        }
                        return [4 /*yield*/, this.prisma.question.findUnique({
                                where: {
                                    slug: slug
                                },
                                include: {
                                    author: true,
                                    attachments: true
                                }
                            })];
                    case 2:
                        question = _a.sent();
                        if (!question) {
                            return [2 /*return*/, null];
                        }
                        questionDetails = prisma_question_details_mapper_1.PrismaQuestionDetailsMapper.toDomain(question);
                        return [4 /*yield*/, this.cache.set("question:" + slug + ":details", JSON.stringify(questionDetails))];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, questionDetails];
                }
            });
        });
    };
    PrismaQuestionsRepository.prototype.findManyRecent = function (_a) {
        var page = _a.page;
        return __awaiter(this, void 0, Promise, function () {
            var questions;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.prisma.question.findMany({
                            orderBy: {
                                createdAt: 'desc'
                            },
                            take: 20,
                            skip: (page - 1) * 20
                        })];
                    case 1:
                        questions = _b.sent();
                        return [2 /*return*/, questions.map(prisma_question_mapper_1.PrismaQuestionMapper.toDomain)];
                }
            });
        });
    };
    PrismaQuestionsRepository.prototype.create = function (question) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = prisma_question_mapper_1.PrismaQuestionMapper.toPrisma(question);
                        return [4 /*yield*/, this.prisma.question.create({
                                data: data
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.questionAttachmentsRepository.createMany(question.attachments.getItems())];
                    case 2:
                        _a.sent();
                        domain_events_1.DomainEvents.dispatchEventsForAggregate(question.id);
                        return [2 /*return*/];
                }
            });
        });
    };
    PrismaQuestionsRepository.prototype.save = function (question) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = prisma_question_mapper_1.PrismaQuestionMapper.toPrisma(question);
                        return [4 /*yield*/, Promise.all([
                                this.prisma.question.update({
                                    where: {
                                        id: question.id.toString()
                                    },
                                    data: data
                                }),
                                this.questionAttachmentsRepository.createMany(question.attachments.getNewItems()),
                                this.questionAttachmentsRepository.deleteMany(question.attachments.getRemovedItems()),
                                this.cache["delete"]("question:" + data.slug + ":details"),
                            ])];
                    case 1:
                        _a.sent();
                        domain_events_1.DomainEvents.dispatchEventsForAggregate(question.id);
                        return [2 /*return*/];
                }
            });
        });
    };
    PrismaQuestionsRepository.prototype["delete"] = function (question) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = prisma_question_mapper_1.PrismaQuestionMapper.toPrisma(question);
                        return [4 /*yield*/, this.prisma.question["delete"]({
                                where: {
                                    id: data.id
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PrismaQuestionsRepository = __decorate([
        common_1.Injectable()
    ], PrismaQuestionsRepository);
    return PrismaQuestionsRepository;
}());
exports.PrismaQuestionsRepository = PrismaQuestionsRepository;
