"use strict";
exports.__esModule = true;
exports.PrismaNotificationMapper = void 0;
var unique_entity_id_1 = require("@/core/entities/unique-entity-id");
var notification_1 = require("@/domain/notification/enterprise/entities/notification");
var PrismaNotificationMapper = /** @class */ (function () {
    function PrismaNotificationMapper() {
    }
    PrismaNotificationMapper.toDomain = function (raw) {
        return notification_1.Notification.create({
            title: raw.title,
            content: raw.content,
            recipientId: new unique_entity_id_1.UniqueEntityID(raw.recipientId),
            readAt: raw.readAt,
            createdAt: raw.createdAt
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    };
    PrismaNotificationMapper.toPrisma = function (notification) {
        return {
            id: notification.id.toString(),
            recipientId: notification.recipientId.toString(),
            title: notification.title,
            content: notification.content,
            readAt: notification.readAt,
            createdAt: notification.createdAt
        };
    };
    return PrismaNotificationMapper;
}());
exports.PrismaNotificationMapper = PrismaNotificationMapper;
