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
exports.PrismaAnswersRepository = void 0;
var common_1 = require("@nestjs/common");
var prisma_answer_mapper_1 = require("../mappers/prisma-answer-mapper");
var domain_events_1 = require("@/core/events/domain-events");
var PrismaAnswersRepository = /** @class */ (function () {
    function PrismaAnswersRepository(prisma, answerAttachmentsRepository) {
        this.prisma = prisma;
        this.answerAttachmentsRepository = answerAttachmentsRepository;
    }
    PrismaAnswersRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, Promise, function () {
            var answer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.answer.findUnique({
                            where: {
                                id: id
                            }
                        })];
                    case 1:
                        answer = _a.sent();
                        if (!answer) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, prisma_answer_mapper_1.PrismaAnswerMapper.toDomain(answer)];
                }
            });
        });
    };
    PrismaAnswersRepository.prototype.findManyByQuestionId = function (questionId, _a) {
        var page = _a.page;
        return __awaiter(this, void 0, Promise, function () {
            var answers;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.prisma.answer.findMany({
                            where: {
                                questionId: questionId
                            },
                            orderBy: {
                                createdAt: 'desc'
                            },
                            take: 20,
                            skip: (page - 1) * 20
                        })];
                    case 1:
                        answers = _b.sent();
                        return [2 /*return*/, answers.map(prisma_answer_mapper_1.PrismaAnswerMapper.toDomain)];
                }
            });
        });
    };
    PrismaAnswersRepository.prototype.create = function (answer) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = prisma_answer_mapper_1.PrismaAnswerMapper.toPrisma(answer);
                        return [4 /*yield*/, this.prisma.answer.create({
                                data: data
                            })];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.answerAttachmentsRepository.createMany(answer.attachments.getItems())];
                    case 2:
                        _a.sent();
                        domain_events_1.DomainEvents.dispatchEventsForAggregate(answer.id);
                        return [2 /*return*/];
                }
            });
        });
    };
    PrismaAnswersRepository.prototype.save = function (answer) {
        return __awaiter(this, void 0, Promise, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = prisma_answer_mapper_1.PrismaAnswerMapper.toPrisma(answer);
                        return [4 /*yield*/, Promise.all([
                                this.prisma.answer.update({
                                    where: {
                                        id: answer.id.toString()
                                    },
                                    data: data
                                }),
                                this.answerAttachmentsRepository.createMany(answer.attachments.getNewItems()),
                                this.answerAttachmentsRepository.deleteMany(answer.attachments.getRemovedItems()),
                            ])];
                    case 1:
                        _a.sent();
                        domain_events_1.DomainEvents.dispatchEventsForAggregate(answer.id);
                        return [2 /*return*/];
                }
            });
        });
    };
    PrismaAnswersRepository.prototype["delete"] = function (answer) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.prisma.answer["delete"]({
                            where: {
                                id: answer.id.toString()
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PrismaAnswersRepository = __decorate([
        common_1.Injectable()
    ], PrismaAnswersRepository);
    return PrismaAnswersRepository;
}());
exports.PrismaAnswersRepository = PrismaAnswersRepository;
