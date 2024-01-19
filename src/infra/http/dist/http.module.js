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
var get_question_by_slug_1 = require("@/domain/forum/application/use-cases/get-question-by-slug");
var get_question_by_slug_controller_1 = require("./controllers/get-question-by-slug.controller");
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule = __decorate([
        common_1.Module({
            imports: [database_module_1.DatabaseModule, cryptography_module_1.CryptographyModule],
            controllers: [
                create_account_controller_1.CreateAccountController,
                authenticate_controller_1.AuthenticateController,
                create_question_controller_1.CreateQuestionController,
                fetch_recent_questions_controller_1.FetchRecentQuestionsController,
                get_question_by_slug_controller_1.GetQuestionBySlugController,
            ],
            providers: [
                create_question_1.CreateQuestionUseCase,
                fetch_recent_questions_1.FetchRecentQuestionsUseCase,
                register_student_1.RegisterStudentUseCase,
                authenticate_student_1.AuthenticateStudentUseCase,
                get_question_by_slug_1.GetQuestionBySlugUseCase,
            ]
        })
    ], HttpModule);
    return HttpModule;
}());
exports.HttpModule = HttpModule;
