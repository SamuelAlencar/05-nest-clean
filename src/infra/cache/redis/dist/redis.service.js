"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.RedisService = void 0;
var ioredis_1 = require("ioredis");
var RedisService = /** @class */ (function (_super) {
    __extends(RedisService, _super);
    function RedisService(envService) {
        return _super.call(this, {
            host: envService.get('REDIS_HOST'),
            port: envService.get('REDIS_PORT'),
            db: envService.get('REDIS_DB')
        }) || this;
    }
    RedisService.prototype.onModuleDestroy = function () {
        return this.disconnect();
    };
    return RedisService;
}(ioredis_1.Redis));
exports.RedisService = RedisService;
