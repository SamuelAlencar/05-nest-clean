"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DatabaseModule = void 0;
var common_1 = require("@nestjs/common");
var prisma_service_1 = require("./prisma/prisma.service");
var prisma_questions_repository_1 = require("./prisma/repositories/prisma-questions-repository");
var prisma_question_comments_repository_1 = require("./prisma/repositories/prisma-question-comments-repository");
var prisma_question_attachments_repository_1 = require("./prisma/repositories/prisma-question-attachments-repository");
var prisma_answers_repository_1 = require("./prisma/repositories/prisma-answers-repository");
var prisma_answer_comments_repository_1 = require("./prisma/repositories/prisma-answer-comments-repository");
var prisma_answer_attachments_repository_1 = require("./prisma/repositories/prisma-answer-attachments-repository");
var questions_repository_1 = require("@/domain/forum/application/repositories/questions-repository");
var students_repository_1 = require("@/domain/forum/application/repositories/students-repository");
var prisma_students_repository_1 = require("./prisma/repositories/prisma-students-repository");
var answer_attachments_repository_1 = require("@/domain/forum/application/repositories/answer-attachments-repository");
var answer_comments_repository_1 = require("@/domain/forum/application/repositories/answer-comments-repository");
var answers_repository_1 = require("@/domain/forum/application/repositories/answers-repository");
var question_attachments_repository_1 = require("@/domain/forum/application/repositories/question-attachments-repository");
var question_comments_repository_1 = require("@/domain/forum/application/repositories/question-comments-repository");
var attachments_repository_1 = require("@/domain/forum/application/repositories/attachments-repository");
var prisma_attachments_repository_1 = require("./prisma/repositories/prisma-attachments-repository");
var prisma_notifications_repository_1 = require("./prisma/repositories/prisma-notifications-repository");
var notifications_repository_1 = require("@/domain/notification/application/repositories/notifications-repository");
var DatabaseModule = /** @class */ (function () {
    function DatabaseModule() {
    }
    DatabaseModule = __decorate([
        common_1.Module({
            providers: [
                prisma_service_1.PrismaService,
                {
                    provide: questions_repository_1.QuestionsRepository,
                    useClass: prisma_questions_repository_1.PrismaQuestionsRepository
                },
                {
                    provide: students_repository_1.StudentsRepository,
                    useClass: prisma_students_repository_1.PrismaStudentsRepository
                },
                {
                    provide: question_comments_repository_1.QuestionCommentsRepository,
                    useClass: prisma_question_comments_repository_1.PrismaQuestionCommentsRepository
                },
                {
                    provide: question_attachments_repository_1.QuestionAttachmentsRepository,
                    useClass: prisma_question_attachments_repository_1.PrismaQuestionAttachmentsRepository
                },
                {
                    provide: answers_repository_1.AnswersRepository,
                    useClass: prisma_answers_repository_1.PrismaAnswersRepository
                },
                {
                    provide: answer_comments_repository_1.AnswerCommentsRepository,
                    useClass: prisma_answer_comments_repository_1.PrismaAnswerCommentsRepository
                },
                {
                    provide: answer_attachments_repository_1.AnswerAttachmentsRepository,
                    useClass: prisma_answer_attachments_repository_1.PrismaAnswerAttachmentsRepository
                },
                {
                    provide: attachments_repository_1.AttachmentsRepository,
                    useClass: prisma_attachments_repository_1.PrismaAttachmentsRepository
                },
                {
                    provide: notifications_repository_1.NotificationsRepository,
                    useClass: prisma_notifications_repository_1.PrismaNotificationsRepository
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
                attachments_repository_1.AttachmentsRepository,
                notifications_repository_1.NotificationsRepository,
            ]
        })
    ], DatabaseModule);
    return DatabaseModule;
}());
exports.DatabaseModule = DatabaseModule;
