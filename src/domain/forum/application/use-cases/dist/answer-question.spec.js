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
var unique_entity_id_1 = require("@/core/entities/unique-entity-id");
var answer_question_1 = require("@/domain/forum/application/use-cases/answer-question");
var in_memory_answer_attachments_repository_1 = require("test/repositories/in-memory-answer-attachments-repository");
var in_memory_answers_repository_1 = require("test/repositories/in-memory-answers-repository");
var inMemoryAnswerAttachmentsRepository;
var inMemoryAnswersRepository;
var sut;
describe('Create Answer', function () {
    beforeEach(function () {
        inMemoryAnswerAttachmentsRepository =
            new in_memory_answer_attachments_repository_1.InMemoryAnswerAttachmentsRepository();
        inMemoryAnswersRepository = new in_memory_answers_repository_1.InMemoryAnswersRepository(inMemoryAnswerAttachmentsRepository);
        sut = new answer_question_1.AnswerQuestionUseCase(inMemoryAnswersRepository);
    });
    it('should be able to create a answer', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, sut.execute({
                        questionId: '1',
                        authorId: '1',
                        content: 'Conteúdo da resposta',
                        attachmentsIds: ['1', '2']
                    })];
                case 1:
                    result = _b.sent();
                    expect(result.isRight()).toBe(true);
                    expect(inMemoryAnswersRepository.items[0]).toEqual((_a = result.value) === null || _a === void 0 ? void 0 : _a.answer);
                    expect(inMemoryAnswersRepository.items[0].attachments.currentItems).toHaveLength(2);
                    expect(inMemoryAnswersRepository.items[0].attachments.currentItems).toEqual([
                        expect.objectContaining({ attachmentId: new unique_entity_id_1.UniqueEntityID('1') }),
                        expect.objectContaining({ attachmentId: new unique_entity_id_1.UniqueEntityID('2') }),
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should persist attachments when creating a new answer', function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, sut.execute({
                        questionId: '1',
                        authorId: '1',
                        content: 'Conteúdo da resposta',
                        attachmentsIds: ['1', '2']
                    })];
                case 1:
                    result = _a.sent();
                    expect(result.isRight()).toBe(true);
                    expect(inMemoryAnswerAttachmentsRepository.items).toHaveLength(2);
                    expect(inMemoryAnswerAttachmentsRepository.items).toEqual(expect.arrayContaining([
                        expect.objectContaining({
                            attachmentId: new unique_entity_id_1.UniqueEntityID('1')
                        }),
                        expect.objectContaining({
                            attachmentId: new unique_entity_id_1.UniqueEntityID('1')
                        }),
                    ]));
                    return [2 /*return*/];
            }
        });
    }); });
});
