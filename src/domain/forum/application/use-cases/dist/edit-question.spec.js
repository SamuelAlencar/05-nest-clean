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
var edit_question_1 = require("./edit-question");
var in_memory_questions_repository_1 = require("test/repositories/in-memory-questions-repository");
var make_question_1 = require("test/factories/make-question");
var unique_entity_id_1 = require("@/core/entities/unique-entity-id");
var not_allowed_error_1 = require("@/core/errors/errors/not-allowed-error");
var in_memory_question_attachments_repository_1 = require("test/repositories/in-memory-question-attachments-repository");
var make_question_attachments_1 = require("test/factories/make-question-attachments");
var inMemoryQuestionsRepository;
var inMemoryQuestionAttachmentsRepository;
var sut;
describe('Edit Question', function () {
    beforeEach(function () {
        inMemoryQuestionAttachmentsRepository =
            new in_memory_question_attachments_repository_1.InMemoryQuestionAttachmentsRepository();
        inMemoryQuestionsRepository = new in_memory_questions_repository_1.InMemoryQuestionsRepository(inMemoryQuestionAttachmentsRepository);
        sut = new edit_question_1.EditQuestionUseCase(inMemoryQuestionsRepository, inMemoryQuestionAttachmentsRepository);
    });
    it('should be able to edit a question', function () { return __awaiter(void 0, void 0, void 0, function () {
        var newQuestion;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newQuestion = make_question_1.makeQuestion({
                        authorId: new unique_entity_id_1.UniqueEntityID('author-1')
                    }, new unique_entity_id_1.UniqueEntityID('question-1'));
                    return [4 /*yield*/, inMemoryQuestionsRepository.create(newQuestion)];
                case 1:
                    _a.sent();
                    inMemoryQuestionAttachmentsRepository.items.push(make_question_attachments_1.makeQuestionAttachment({
                        questionId: newQuestion.id,
                        attachmentId: new unique_entity_id_1.UniqueEntityID('1')
                    }), make_question_attachments_1.makeQuestionAttachment({
                        questionId: newQuestion.id,
                        attachmentId: new unique_entity_id_1.UniqueEntityID('2')
                    }));
                    return [4 /*yield*/, sut.execute({
                            questionId: newQuestion.id.toValue(),
                            authorId: 'author-1',
                            title: 'Pergunta teste',
                            content: 'Conteúdo teste',
                            attachmentsIds: ['1', '3']
                        })];
                case 2:
                    _a.sent();
                    expect(inMemoryQuestionsRepository.items[0]).toMatchObject({
                        title: 'Pergunta teste',
                        content: 'Conteúdo teste'
                    });
                    expect(inMemoryQuestionsRepository.items[0].attachments.currentItems).toHaveLength(2);
                    expect(inMemoryQuestionsRepository.items[0].attachments.currentItems).toEqual([
                        expect.objectContaining({ attachmentId: new unique_entity_id_1.UniqueEntityID('1') }),
                        expect.objectContaining({ attachmentId: new unique_entity_id_1.UniqueEntityID('3') }),
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should not be able to edit a question from another user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var newQuestion, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newQuestion = make_question_1.makeQuestion({
                        authorId: new unique_entity_id_1.UniqueEntityID('author-1')
                    }, new unique_entity_id_1.UniqueEntityID('question-1'));
                    return [4 /*yield*/, inMemoryQuestionsRepository.create(newQuestion)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, sut.execute({
                            questionId: newQuestion.id.toValue(),
                            authorId: 'author-2',
                            title: 'Pergunta teste',
                            content: 'Conteúdo teste',
                            attachmentsIds: []
                        })];
                case 2:
                    result = _a.sent();
                    expect(result.isLeft()).toBe(true);
                    expect(result.value).toBeInstanceOf(not_allowed_error_1.NotAllowedError);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should sync new and removed attachment when editing a question', function () { return __awaiter(void 0, void 0, void 0, function () {
        var newQuestion, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newQuestion = make_question_1.makeQuestion({
                        authorId: new unique_entity_id_1.UniqueEntityID('author-1')
                    }, new unique_entity_id_1.UniqueEntityID('question-1'));
                    return [4 /*yield*/, inMemoryQuestionsRepository.create(newQuestion)];
                case 1:
                    _a.sent();
                    inMemoryQuestionAttachmentsRepository.items.push(make_question_attachments_1.makeQuestionAttachment({
                        questionId: newQuestion.id,
                        attachmentId: new unique_entity_id_1.UniqueEntityID('1')
                    }), make_question_attachments_1.makeQuestionAttachment({
                        questionId: newQuestion.id,
                        attachmentId: new unique_entity_id_1.UniqueEntityID('2')
                    }));
                    return [4 /*yield*/, sut.execute({
                            questionId: newQuestion.id.toValue(),
                            authorId: 'author-1',
                            title: 'Pergunta teste',
                            content: 'Conteúdo teste',
                            attachmentsIds: ['1', '3']
                        })];
                case 2:
                    result = _a.sent();
                    expect(result.isRight()).toBe(true);
                    expect(inMemoryQuestionAttachmentsRepository.items).toHaveLength(2);
                    expect(inMemoryQuestionAttachmentsRepository.items).toEqual(expect.arrayContaining([
                        expect.objectContaining({
                            attachmentId: new unique_entity_id_1.UniqueEntityID('1')
                        }),
                        expect.objectContaining({
                            attachmentId: new unique_entity_id_1.UniqueEntityID('3')
                        }),
                    ]));
                    return [2 /*return*/];
            }
        });
    }); });
});
