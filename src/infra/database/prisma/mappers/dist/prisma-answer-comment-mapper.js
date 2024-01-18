"use strict";
exports.__esModule = true;
exports.PrismaAnswerCommentMapper = void 0;
var unique_entity_id_1 = require("@/core/entities/unique-entity-id");
var answer_comment_1 = require("@/domain/forum/enterprise/entities/answer-comment");
var PrismaAnswerCommentMapper = /** @class */ (function () {
    function PrismaAnswerCommentMapper() {
    }
    PrismaAnswerCommentMapper.toDomain = function (raw) {
        if (!raw.answerId) {
            throw new Error('Invalid comment type.');
        }
        return answer_comment_1.AnswerComment.create({
            content: raw.content,
            authorId: new unique_entity_id_1.UniqueEntityID(raw.authorId),
            answerId: new unique_entity_id_1.UniqueEntityID(raw.answerId),
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    };
    PrismaAnswerCommentMapper.toPrisma = function (answerComment) {
        return {
            id: answerComment.id.toString(),
            authorId: answerComment.authorId.toString(),
            answerId: answerComment.answerId.toString(),
            content: answerComment.content,
            createdAt: answerComment.createdAt,
            updatedAt: answerComment.updatedAt
        };
    };
    return PrismaAnswerCommentMapper;
}());
exports.PrismaAnswerCommentMapper = PrismaAnswerCommentMapper;
