"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StorageModule = void 0;
var uploader_1 = require("@/domain/forum/application/storage/uploader");
var common_1 = require("@nestjs/common");
var r2_storage_1 = require("./r2-storage");
var env_module_1 = require("../env/env.module");
var StorageModule = /** @class */ (function () {
    function StorageModule() {
    }
    StorageModule = __decorate([
        common_1.Module({
            imports: [env_module_1.EnvModule],
            providers: [
                {
                    provide: uploader_1.Uploader,
                    useClass: r2_storage_1.R2Storage
                },
            ],
            exports: [uploader_1.Uploader]
        })
    ], StorageModule);
    return StorageModule;
}());
exports.StorageModule = StorageModule;
