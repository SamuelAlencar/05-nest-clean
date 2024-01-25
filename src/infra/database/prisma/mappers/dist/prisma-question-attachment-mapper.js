"use strict";
exports.__esModule = true;
exports.PrismaQuestionAttachmentMapper = void 0;
var unique_entity_id_1 = require("@/core/entities/unique-entity-id");
var question_attachment_1 = require("@/domain/forum/enterprise/entities/question-attachment");
var PrismaQuestionAttachmentMapper = /** @class */ (function () {
    function PrismaQuestionAttachmentMapper() {
    }
    PrismaQuestionAttachmentMapper.toDomain = function (raw) {
        if (!raw.questionId) {
            throw new Error('Invalid attachment type.');
        }
        return question_attachment_1.QuestionAttachment.create({
            attachmentId: new unique_entity_id_1.UniqueEntityID(raw.id),
            questionId: new unique_entity_id_1.UniqueEntityID(raw.questionId)
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    };
    PrismaQuestionAttachmentMapper.toPrismaUpdateMany = function (attachments) {
        var attachmentIds = attachments.map(function (attachment) {
            return attachment.id.toString();
        });
        return {
            where: {
                id: {
                    "in": attachmentIds
                }
            },
            data: {
                questionId: attachments[0].questionId.toString()
            }
        };
    };
    return PrismaQuestionAttachmentMapper;
}());
exports.PrismaQuestionAttachmentMapper = PrismaQuestionAttachmentMapper;
