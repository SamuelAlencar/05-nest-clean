"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HttpModule = void 0;
var common_1 = require("@nestjs/common");
var authenticate_controller_1 = require("./controllers/authenticate.controller");
var create_account_controller_1 = require("./controllers/create-account.controller");
var create_question_controller_1 = require("./controllers/create-question.controller");
var fetch_recent_questions_controller_1 = require("./controllers/fetch-recent-questions.controller");
var database_module_1 = require("../database/database.module");
var create_question_1 = require("@/domain/forum/application/use-cases/create-question");
var fetch_recent_questions_1 = require("@/domain/forum/application/use-cases/fetch-recent-questions");
var register_student_1 = require("@/domain/forum/application/use-cases/register-student");
var authenticate_student_1 = require("@/domain/forum/application/use-cases/authenticate-student");
var cryptography_module_1 = require("../cryptography/cryptography.module");
var get_question_by_slug_controller_1 = require("./controllers/get-question-by-slug.controller");
var get_question_by_slug_1 = require("@/domain/forum/application/use-cases/get-question-by-slug");
var edit_question_controller_1 = require("./controllers/edit-question.controller");
var edit_question_1 = require("@/domain/forum/application/use-cases/edit-question");
var delete_question_controller_1 = require("./controllers/delete-question.controller");
var delete_question_1 = require("@/domain/forum/application/use-cases/delete-question");
var answer_question_controller_1 = require("./controllers/answer-question.controller");
var answer_question_1 = require("@/domain/forum/application/use-cases/answer-question");
var edit_answer_controller_1 = require("./controllers/edit-answer.controller");
var edit_answer_1 = require("@/domain/forum/application/use-cases/edit-answer");
var delete_answer_controller_1 = require("./controllers/delete-answer.controller");
var delete_answer_1 = require("@/domain/forum/application/use-cases/delete-answer");
var fetch_question_answers_controller_1 = require("./controllers/fetch-question-answers.controller");
var fetch_question_answers_1 = require("@/domain/forum/application/use-cases/fetch-question-answers");
var choose_question_best_answer_controller_1 = require("./controllers/choose-question-best-answer.controller");
var choose_question_best_answer_1 = require("@/domain/forum/application/use-cases/choose-question-best-answer");
var comment_on_question_controller_1 = require("./controllers/comment-on-question.controller");
var comment_on_question_1 = require("@/domain/forum/application/use-cases/comment-on-question");
var delete_question_comment_controller_1 = require("./controllers/delete-question-comment.controller");
var delete_question_comment_1 = require("@/domain/forum/application/use-cases/delete-question-comment");
var comment_on_answer_controller_1 = require("./controllers/comment-on-answer.controller");
var comment_on_answer_1 = require("@/domain/forum/application/use-cases/comment-on-answer");
var delete_answer_comment_controller_1 = require("./controllers/delete-answer-comment.controller");
var delete_answer_comment_1 = require("@/domain/forum/application/use-cases/delete-answer-comment");
var fetch_question_comments_controller_1 = require("./controllers/fetch-question-comments.controller");
var fetch_question_comments_1 = require("@/domain/forum/application/use-cases/fetch-question-comments");
var fetch_answer_comments_controller_1 = require("./controllers/fetch-answer-comments.controller");
var fetch_answer_comments_1 = require("@/domain/forum/application/use-cases/fetch-answer-comments");
var upload_attachment_controller_1 = require("./controllers/upload-attachment.controller");
var storage_module_1 = require("../storage/storage.module");
var upload_and_create_attachment_1 = require("@/domain/forum/application/use-cases/upload-and-create-attachment");
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule = __decorate([
        common_1.Module({
            imports: [database_module_1.DatabaseModule, cryptography_module_1.CryptographyModule, storage_module_1.StorageModule],
            controllers: [
                create_account_controller_1.CreateAccountController,
                authenticate_controller_1.AuthenticateController,
                create_question_controller_1.CreateQuestionController,
                fetch_recent_questions_controller_1.FetchRecentQuestionsController,
                get_question_by_slug_controller_1.GetQuestionBySlugController,
                edit_question_controller_1.EditQuestionController,
                delete_question_controller_1.DeleteQuestionController,
                answer_question_controller_1.AnswerQuestionController,
                edit_answer_controller_1.EditAnswerController,
                delete_answer_controller_1.DeleteAnswerController,
                fetch_question_answers_controller_1.FetchQuestionAnswersController,
                choose_question_best_answer_controller_1.ChooseQuestionBestAnswerController,
                comment_on_question_controller_1.CommentOnQuestionController,
                delete_question_comment_controller_1.DeleteQuestionCommentController,
                comment_on_answer_controller_1.CommentOnAnswerController,
                delete_answer_comment_controller_1.DeleteAnswerCommentController,
                fetch_question_comments_controller_1.FetchQuestionCommentsController,
                fetch_answer_comments_controller_1.FetchAnswerCommentsController,
                upload_attachment_controller_1.UploadAttachmentController,
            ],
            providers: [
                create_question_1.CreateQuestionUseCase,
                fetch_recent_questions_1.FetchRecentQuestionsUseCase,
                register_student_1.RegisterStudentUseCase,
                authenticate_student_1.AuthenticateStudentUseCase,
                get_question_by_slug_1.GetQuestionBySlugUseCase,
                edit_question_1.EditQuestionUseCase,
                delete_question_1.DeleteQuestionUseCase,
                answer_question_1.AnswerQuestionUseCase,
                edit_answer_1.EditAnswerUseCase,
                delete_answer_1.DeleteAnswerUseCase,
                fetch_question_answers_1.FetchQuestionAnswersUseCase,
                choose_question_best_answer_1.ChooseQuestionBestAnswerUseCase,
                comment_on_question_1.CommentOnQuestionUseCase,
                delete_question_comment_1.DeleteQuestionCommentUseCase,
                comment_on_answer_1.CommentOnAnswerUseCase,
                delete_answer_comment_1.DeleteAnswerCommentUseCase,
                fetch_question_comments_1.FetchQuestionCommentsUseCase,
                fetch_answer_comments_1.FetchAnswerCommentsUseCase,
                upload_and_create_attachment_1.UploadAndCreateAttachmentUseCase,
            ]
        })
    ], HttpModule);
    return HttpModule;
}());
exports.HttpModule = HttpModule;
