"use strict";
exports.__esModule = true;
exports.PrismaAttachmentMapper = void 0;
var PrismaAttachmentMapper = /** @class */ (function () {
    function PrismaAttachmentMapper() {
    }
    PrismaAttachmentMapper.toPrisma = function (attachment) {
        return {
            id: attachment.id.toString(),
            title: attachment.title,
            url: attachment.url
        };
    };
    return PrismaAttachmentMapper;
}());
exports.PrismaAttachmentMapper = PrismaAttachmentMapper;
