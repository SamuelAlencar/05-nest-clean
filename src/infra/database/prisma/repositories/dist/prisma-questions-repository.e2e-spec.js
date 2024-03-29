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
var questions_repository_1 = require("@/domain/forum/application/repositories/questions-repository");
var app_module_1 = require("@/infra/app.module");
var cache_repository_1 = require("@/infra/cache/cache-repository");
var cache_module_1 = require("@/infra/cache/cache.module");
var database_module_1 = require("@/infra/database/database.module");
var testing_1 = require("@nestjs/testing");
var make_attachment_1 = require("test/factories/make-attachment");
var make_question_1 = require("test/factories/make-question");
var make_question_attachments_1 = require("test/factories/make-question-attachments");
var make_student_1 = require("test/factories/make-student");
describe('Prisma Questions Repository (E2E)', function () {
    var app;
    var studentFactory;
    var questionFactory;
    var attachmentFactory;
    var questionAttachmentFactory;
    var cacheRepository;
    var questionsRepository;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var moduleRef;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.Test.createTestingModule({
                        imports: [app_module_1.AppModule, database_module_1.DatabaseModule, cache_module_1.CacheModule],
                        providers: [
                            make_student_1.StudentFactory,
                            make_question_1.QuestionFactory,
                            make_attachment_1.AttachmentFactory,
                            make_question_attachments_1.QuestionAttachmentFactory,
                        ]
                    }).compile()];
                case 1:
                    moduleRef = _a.sent();
                    app = moduleRef.createNestApplication();
                    studentFactory = moduleRef.get(make_student_1.StudentFactory);
                    questionFactory = moduleRef.get(make_question_1.QuestionFactory);
                    attachmentFactory = moduleRef.get(make_attachment_1.AttachmentFactory);
                    questionAttachmentFactory = moduleRef.get(make_question_attachments_1.QuestionAttachmentFactory);
                    cacheRepository = moduleRef.get(cache_repository_1.CacheRepository);
                    questionsRepository = moduleRef.get(questions_repository_1.QuestionsRepository);
                    return [4 /*yield*/, app.init()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should cache question details', function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, question, attachment, slug, questionDetails, cached;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, studentFactory.makePrismaStudent()];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, questionFactory.makePrismaQuestion({
                            authorId: user.id
                        })];
                case 2:
                    question = _a.sent();
                    return [4 /*yield*/, attachmentFactory.makePrismaAttachment()];
                case 3:
                    attachment = _a.sent();
                    return [4 /*yield*/, questionAttachmentFactory.makePrismaQuestionAttachment({
                            attachmentId: attachment.id,
                            questionId: question.id
                        })];
                case 4:
                    _a.sent();
                    slug = question.slug.value;
                    return [4 /*yield*/, questionsRepository.findDetailsBySlug(slug)];
                case 5:
                    questionDetails = _a.sent();
                    return [4 /*yield*/, cacheRepository.get("question:" + slug + ":details")];
                case 6:
                    cached = _a.sent();
                    expect(cached).toEqual(JSON.stringify(questionDetails));
                    return [2 /*return*/];
            }
        });
    }); });
    it('should return cached question details on subsequent calls', function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, question, attachment, slug, questionDetails;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, studentFactory.makePrismaStudent()];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, questionFactory.makePrismaQuestion({
                            authorId: user.id
                        })];
                case 2:
                    question = _a.sent();
                    return [4 /*yield*/, attachmentFactory.makePrismaAttachment()];
                case 3:
                    attachment = _a.sent();
                    return [4 /*yield*/, questionAttachmentFactory.makePrismaQuestionAttachment({
                            attachmentId: attachment.id,
                            questionId: question.id
                        })];
                case 4:
                    _a.sent();
                    slug = question.slug.value;
                    return [4 /*yield*/, cacheRepository.set("question:" + slug + ":details", JSON.stringify({ empty: true }))];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, questionsRepository.findDetailsBySlug(slug)];
                case 6:
                    questionDetails = _a.sent();
                    expect(questionDetails).toEqual({ empty: true });
                    return [2 /*return*/];
            }
        });
    }); });
    it('should reset question details cache when saving the question', function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, question, attachment, slug, cached;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, studentFactory.makePrismaStudent()];
                case 1:
                    user = _a.sent();
                    return [4 /*yield*/, questionFactory.makePrismaQuestion({
                            authorId: user.id
                        })];
                case 2:
                    question = _a.sent();
                    return [4 /*yield*/, attachmentFactory.makePrismaAttachment()];
                case 3:
                    attachment = _a.sent();
                    return [4 /*yield*/, questionAttachmentFactory.makePrismaQuestionAttachment({
                            attachmentId: attachment.id,
                            questionId: question.id
                        })];
                case 4:
                    _a.sent();
                    slug = question.slug.value;
                    return [4 /*yield*/, cacheRepository.set("question:" + slug + ":details", JSON.stringify({ empty: true }))];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, questionsRepository.save(question)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, cacheRepository.get("question:" + slug + ":details")];
                case 7:
                    cached = _a.sent();
                    expect(cached).toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
