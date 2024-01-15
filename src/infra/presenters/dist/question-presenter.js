"use strict";
exports.__esModule = true;
exports.QuestionPresenter = void 0;
var QuestionPresenter = /** @class */ (function () {
    function QuestionPresenter() {
    }
    QuestionPresenter.toHTTP = function (question) {
        var _a;
        return {
            id: question.id.toString(),
            title: question.title,
            slug: question.slug.value,
            bestAnswer: (_a = question.bestAnswerId) === null || _a === void 0 ? void 0 : _a.toString(),
            createdAt: question.createdAt,
            updatedAt: question.updatedAt
        };
    };
    return QuestionPresenter;
}());
exports.QuestionPresenter = QuestionPresenter;
