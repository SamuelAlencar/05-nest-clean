"use strict";
exports.__esModule = true;
exports.PrismaAnswerMapper = void 0;
var unique_entity_id_1 = require("@/core/entities/unique-entity-id");
var answer_1 = require("@/domain/forum/enterprise/entities/answer");
var PrismaAnswerMapper = /** @class */ (function () {
    function PrismaAnswerMapper() {
    }
    PrismaAnswerMapper.toDomain = function (raw) {
        return answer_1.Answer.create({
            content: raw.content,
            questionId: new unique_entity_id_1.UniqueEntityID(raw.questionId),
            authorId: new unique_entity_id_1.UniqueEntityID(raw.authorId),
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    };
    PrismaAnswerMapper.toPrisma = function (answer) {
        return {
            id: answer.id.toString(),
            authorId: answer.authorId.toString(),
            questionId: answer.questionId.toString(),
            content: answer.content,
            createdAt: answer.createdAt,
            updatedAt: answer.updatedAt
        };
    };
    return PrismaAnswerMapper;
}());
exports.PrismaAnswerMapper = PrismaAnswerMapper;
