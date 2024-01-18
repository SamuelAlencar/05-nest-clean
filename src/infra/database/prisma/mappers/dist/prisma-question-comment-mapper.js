"use strict";
exports.__esModule = true;
exports.PrismaQuestionCommentMapper = void 0;
var unique_entity_id_1 = require("@/core/entities/unique-entity-id");
var question_comment_1 = require("@/domain/forum/enterprise/entities/question-comment");
var PrismaQuestionCommentMapper = /** @class */ (function () {
    function PrismaQuestionCommentMapper() {
    }
    PrismaQuestionCommentMapper.toDomain = function (raw) {
        if (!raw.questionId) {
            throw new Error('Invalid comment type.');
        }
        return question_comment_1.QuestionComment.create({
            content: raw.content,
            authorId: new unique_entity_id_1.UniqueEntityID(raw.authorId),
            questionId: new unique_entity_id_1.UniqueEntityID(raw.questionId),
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    };
    PrismaQuestionCommentMapper.toPrisma = function (questionComment) {
        return {
            id: questionComment.id.toString(),
            authorId: questionComment.authorId.toString(),
            questionId: questionComment.questionId.toString(),
            content: questionComment.content,
            createdAt: questionComment.createdAt,
            updatedAt: questionComment.updatedAt
        };
    };
    return PrismaQuestionCommentMapper;
}());
exports.PrismaQuestionCommentMapper = PrismaQuestionCommentMapper;
