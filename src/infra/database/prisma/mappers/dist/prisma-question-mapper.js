"use strict";
exports.__esModule = true;
exports.PrismaQuestionMapper = void 0;
var unique_entity_id_1 = require("@/core/entities/unique-entity-id");
var question_1 = require("@/domain/forum/enterprise/entities/question");
var slug_1 = require("@/domain/forum/enterprise/entities/value-objects/slug");
var PrismaQuestionMapper = /** @class */ (function () {
    function PrismaQuestionMapper() {
    }
    PrismaQuestionMapper.toDomain = function (raw) {
        return question_1.Question.create({
            title: raw.title,
            content: raw.content,
            authorId: new unique_entity_id_1.UniqueEntityID(raw.authorId),
            bestAnswerId: raw.bestAnswerId
                ? new unique_entity_id_1.UniqueEntityID(raw.bestAnswerId)
                : null,
            slug: slug_1.Slug.create(raw.slug),
            createdAt: raw.createdAt,
            updatedAt: raw.updatedAt
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    };
    PrismaQuestionMapper.toPrisma = function (question) {
        var _a;
        return {
            id: question.id.toString(),
            authorId: question.authorId.toString(),
            bestAnswerId: (_a = question.bestAnswerId) === null || _a === void 0 ? void 0 : _a.toString(),
            title: question.title,
            content: question.content,
            slug: question.slug.value,
            createdAt: question.createdAt,
            updatedAt: question.updatedAt
        };
    };
    return PrismaQuestionMapper;
}());
exports.PrismaQuestionMapper = PrismaQuestionMapper;
