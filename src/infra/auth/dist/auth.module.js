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
var config_1 = require("@nestjs/config");
var jwt_1 = require("@nestjs/jwt");
var passport_1 = require("@nestjs/passport");
var jwt_strategy_1 = require("./jwt.strategy");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        common_1.Module({
            imports: [
                passport_1.PassportModule,
                jwt_1.JwtModule.registerAsync({
                    inject: [config_1.ConfigService],
                    global: true,
                    useFactory: function (config) {
                        var privateKey = config.get('JWT_PRIVATE_KEY', { infer: true });
                        var publicKey = config.get('JWT_PUBLIC_KEY', { infer: true });
                        return {
                            signOptions: { algorithm: 'RS256' },
                            privateKey: Buffer.from(privateKey, 'base64'),
                            publicKey: Buffer.from(publicKey, 'base64')
                        };
                    }
                }),
            ],
            providers: [jwt_strategy_1.JwtStrategy]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
