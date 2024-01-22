"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
const prisma_question_repository_1 = require("./prisma/repositories/prisma-question-repository");
const prisma_question_comments_repository_1 = require("./prisma/repositories/prisma-question-comments-repository");
const prisma_question_attachments_repository_1 = require("./prisma/repositories/prisma-question-attachments-repository");
const prisma_answers_repository_1 = require("./prisma/repositories/prisma-answers-repository");
const prisma_answer_comments_repository_1 = require("./prisma/repositories/prisma-answer-comments-repository");
const prisma_answer_attachments_repository_1 = require("./prisma/repositories/prisma-answer-attachments-repository");
const questions_repository_1 = require("../../domain/forum/application/repositories/questions-repository");
const students_repository_1 = require("../../domain/forum/application/repositories/students-repository");
const prisma_students_repository_1 = require("./prisma/repositories/prisma-students-repository");
const answer_attachments_repository_1 = require("../../domain/forum/application/repositories/answer-attachments-repository");
const answer_comments_repository_1 = require("../../domain/forum/application/repositories/answer-comments-repository");
const answers_repository_1 = require("../../domain/forum/application/repositories/answers-repository");
const question_attachments_repository_1 = require("../../domain/forum/application/repositories/question-attachments-repository");
const question_comments_repository_1 = require("../../domain/forum/application/repositories/question-comments-repository");
let DatabaseModule = exports.DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        providers: [
            prisma_service_1.PrismaService,
            {
                provide: questions_repository_1.QuestionsRepository,
                useClass: prisma_question_repository_1.PrismaQuestionsRepository,
            },
            {
                provide: students_repository_1.StudentsRepository,
                useClass: prisma_students_repository_1.PrismaStudentsRepository,
            },
            {
                provide: question_comments_repository_1.QuestionCommentsRepository,
                useClass: prisma_question_comments_repository_1.PrismaQuestionCommentsRepository,
            },
            {
                provide: question_attachments_repository_1.QuestionAttachmentsRepository,
                useClass: prisma_question_attachments_repository_1.PrismaQuestionAttachmentsRepository,
            },
            {
                provide: answers_repository_1.AnswersRepository,
                useClass: prisma_answers_repository_1.PrismaAnswersRepository,
            },
            {
                provide: answer_comments_repository_1.AnswerCommentsRepository,
                useClass: prisma_answer_comments_repository_1.PrismaAnswerCommentsRepository,
            },
            {
                provide: answer_attachments_repository_1.AnswerAttachmentsRepository,
                useClass: prisma_answer_attachments_repository_1.PrismaAnswerAttachmentsRepository,
            },
        ],
        exports: [
            prisma_service_1.PrismaService,
            questions_repository_1.QuestionsRepository,
            students_repository_1.StudentsRepository,
            question_comments_repository_1.QuestionCommentsRepository,
            question_attachments_repository_1.QuestionAttachmentsRepository,
            answers_repository_1.AnswersRepository,
            answer_comments_repository_1.AnswerCommentsRepository,
            answer_attachments_repository_1.AnswerAttachmentsRepository,
        ],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map