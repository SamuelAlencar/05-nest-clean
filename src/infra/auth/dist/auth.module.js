"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var jwt_1 = require("@nestjs/jwt");
var passport_1 = require("@nestjs/passport");
var jwt_strategy_1 = require("./jwt.strategy");
var core_1 = require("@nestjs/core");
var jwt_auth_guard_1 = require("./jwt-auth.guard");
var env_service_1 = require("../env/env.service");
var env_module_1 = require("../env/env.module");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        common_1.Module({
            imports: [
                passport_1.PassportModule,
                jwt_1.JwtModule.registerAsync({
                    imports: [env_module_1.EnvModule],
                    inject: [env_service_1.EnvService],
                    global: true,
                    useFactory: function (env) {
                        var privateKey = env.get('JWT_PRIVATE_KEY');
                        var publicKey = env.get('JWT_PUBLIC_KEY');
                        return {
                            signOptions: { algorithm: 'RS256' },
                            privateKey: Buffer.from(privateKey, 'base64'),
                            publicKey: Buffer.from(publicKey, 'base64')
                        };
                    }
                }),
            ],
            providers: [
                jwt_strategy_1.JwtStrategy,
                env_service_1.EnvService,
                {
                    provide: core_1.APP_GUARD,
                    useClass: jwt_auth_guard_1.JwtAuthGuard
                },
            ]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
