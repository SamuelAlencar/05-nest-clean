"use strict";
exports.__esModule = true;
exports.CurrentUser = void 0;
var common_1 = require("@nestjs/common");
exports.CurrentUser = common_1.createParamDecorator(function (_, context) {
    var request = context.switchToHttp().getRequest();
    return request.user;
});
