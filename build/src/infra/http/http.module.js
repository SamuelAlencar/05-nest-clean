"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpModule = void 0;
const common_1 = require("@nestjs/common");
const authenticate_controller_1 = require("./controllers/authenticate.controller");
const create_account_controller_1 = require("./controllers/create-account.controller");
const create_question_controller_1 = require("./controllers/create-question.controller");
const fetch_recent_questions_controller_1 = require("./controllers/fetch-recent-questions.controller");
const database_module_1 = require("../database/database.module");
const create_question_1 = require("../../domain/forum/application/use-cases/create-question");
const fetch_recent_questions_1 = require("../../domain/forum/application/use-cases/fetch-recent-questions");
const register_student_1 = require("../../domain/forum/application/use-cases/register-student");
const authenticate_student_1 = require("../../domain/forum/application/use-cases/authenticate-student");
const cryptography_module_1 = require("../cryptography/cryptography.module");
const get_question_by_slug_controller_1 = require("./controllers/get-question-by-slug.controller");
const get_question_by_slug_1 = require("../../domain/forum/application/use-cases/get-question-by-slug");
const edit_question_controller_1 = require("./controllers/edit-question.controller");
const edit_question_1 = require("../../domain/forum/application/use-cases/edit-question");
const delete_question_controller_1 = require("./controllers/delete-question.controller");
const delete_question_1 = require("../../domain/forum/application/use-cases/delete-question");
const answer_question_controller_1 = require("./controllers/answer-question.controller");
const answer_question_1 = require("../../domain/forum/application/use-cases/answer-question");
let HttpModule = exports.HttpModule = class HttpModule {
};
exports.HttpModule = HttpModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, cryptography_module_1.CryptographyModule],
        controllers: [
            create_account_controller_1.CreateAccountController,
            authenticate_controller_1.AuthenticateController,
            create_question_controller_1.CreateQuestionController,
            fetch_recent_questions_controller_1.FetchRecentQuestionsController,
            get_question_by_slug_controller_1.GetQuestionBySlugController,
            edit_question_controller_1.EditQuestionController,
            delete_question_controller_1.DeleteQuestionController,
            answer_question_controller_1.AnswerQuestionController,
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
        ],
    })
], HttpModule);
//# sourceMappingURL=http.module.js.map