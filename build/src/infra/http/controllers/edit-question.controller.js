"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditQuestionController = void 0;
const common_1 = require("@nestjs/common");
const current_user_decorator_1 = require("../../auth/current-user-decorator");
const zod_validation_pipe_1 = require("../pipes/zod-validation-pipe");
const zod_1 = require("zod");
const edit_question_1 = require("../../../domain/forum/application/use-cases/edit-question");
const editQuestionBodySchema = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
const bodyValidationPipe = new zod_validation_pipe_1.ZodValidationPipe(editQuestionBodySchema);
let EditQuestionController = exports.EditQuestionController = class EditQuestionController {
    editQuestion;
    constructor(editQuestion) {
        this.editQuestion = editQuestion;
    }
    async handle(body, user, questionId) {
        const { title, content } = body;
        const userId = user.sub;
        const result = await this.editQuestion.execute({
            title,
            content,
            authorId: userId,
            attachmentsIds: [],
            questionId,
        });
        if (result.isLeft()) {
            throw new common_1.BadRequestException();
        }
    }
};
__decorate([
    (0, common_1.Put)(),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Body)(bodyValidationPipe)),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], EditQuestionController.prototype, "handle", null);
exports.EditQuestionController = EditQuestionController = __decorate([
    (0, common_1.Controller)('/questions/:id'),
    __metadata("design:paramtypes", [edit_question_1.EditQuestionUseCase])
], EditQuestionController);
//# sourceMappingURL=edit-question.controller.js.map