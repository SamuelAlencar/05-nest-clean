"use strict";
exports.__esModule = true;
exports.PrismaStudentMapper = void 0;
var unique_entity_id_1 = require("@/core/entities/unique-entity-id");
var student_1 = require("@/domain/forum/enterprise/entities/student");
var PrismaStudentMapper = /** @class */ (function () {
    function PrismaStudentMapper() {
    }
    PrismaStudentMapper.toDomain = function (raw) {
        return student_1.Student.create({
            name: raw.name,
            email: raw.email,
            password: raw.password
        }, new unique_entity_id_1.UniqueEntityID(raw.id));
    };
    PrismaStudentMapper.toPrisma = function (student) {
        return {
            id: student.id.toString(),
            name: student.name,
            email: student.email,
            password: student.password
        };
    };
    return PrismaStudentMapper;
}());
exports.PrismaStudentMapper = PrismaStudentMapper;
