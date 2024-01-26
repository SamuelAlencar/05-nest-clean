"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CacheModule = void 0;
var common_1 = require("@nestjs/common");
var env_module_1 = require("../env/env.module");
var cache_repository_1 = require("./cache-repository");
var redis_cache_repository_1 = require("./redis/redis-cache-repository");
var redis_service_1 = require("./redis/redis.service");
var CacheModule = /** @class */ (function () {
    function CacheModule() {
    }
    CacheModule = __decorate([
        common_1.Module({
            imports: [env_module_1.EnvModule],
            providers: [
                redis_service_1.RedisService,
                {
                    provide: cache_repository_1.CacheRepository,
                    useClass: redis_cache_repository_1.RedisCacheRepository
                },
            ],
            exports: [cache_repository_1.CacheRepository]
        })
    ], CacheModule);
    return CacheModule;
}());
exports.CacheModule = CacheModule;
