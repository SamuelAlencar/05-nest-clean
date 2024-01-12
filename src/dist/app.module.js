"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var prisma_service_1 = require("./prisma/prisma.service");
var create_account_controller_1 = require("./controllers/create-account.controller");
var env_1 = require("./env");
var auth_module_1 = require("./auth/auth.module");
var authenticate_controller_1 = require("./controllers/authenticate.controller");
var create_question_controller_1 = require("./controllers/create-question.controller");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                config_1.ConfigModule.forRoot({
                    validate: function (env) { return env_1.envSchema.parse(env); },
                    isGlobal: true
                }),
                auth_module_1.AuthModule,
            ],
            controllers: [
                create_account_controller_1.CreateAccountController,
                authenticate_controller_1.AuthenticateController,
                create_question_controller_1.CreateQuestionController,
            ],
            providers: [prisma_service_1.PrismaService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;