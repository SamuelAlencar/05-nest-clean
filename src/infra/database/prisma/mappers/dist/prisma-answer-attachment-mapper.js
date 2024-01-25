"use strict";
exports.__esModule = true;
exports.PrismaAnswerAttachmentMapper = void 0;
var unique_entity_id_1 = require("@/core/entities/unique-entity-id");
var answer_attachment_1 = require("@/domain/forum/enterprise/entities/answer-attachment");
var PrismaAnswerAttachmentMapper = /** @class */ (function () {
    function PrismaAnswerAttachmentMapper() {
    }
    PrismaAnswerAttachmentMapper.toDomain = function (raw) {
        if (!raw.answerId) {
            throw new Error('Invalid attachment type.');
        }
        return answer_attachment_1.AnswerAttachment.create({
            attachmentId: new unique_entity_id_1.UniqueEntityID(raw.id),
            answerId: new unique_entity_id_1.UniqueEntityID(raw.answerId)
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    };
    PrismaAnswerAttachmentMapper.toPrismaUpdateMany = function (attachments) {
        var attachmentIds = attachments.map(function (attachment) {
            return attachment.attachmentId.toString();
        });
        return {
            where: {
                id: {
                    "in": attachmentIds
                }
            },
            data: {
                answerId: attachments[0].answerId.toString()
            }
        };
    };
    return PrismaAnswerAttachmentMapper;
}());
exports.PrismaAnswerAttachmentMapper = PrismaAnswerAttachmentMapper;
