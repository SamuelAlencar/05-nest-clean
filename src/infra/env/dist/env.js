"use strict";
exports.__esModule = true;
exports.envSchema = void 0;
var zod_1 = require("zod");
exports.envSchema = zod_1.z.object({
    DATABASE_URL: zod_1.z.string().url(),
    JWT_PRIVATE_KEY: zod_1.z.string(),
    JWT_PUBLIC_KEY: zod_1.z.string(),
    CLOUDFLARE_ACCOUNT_ID: zod_1.z.string(),
    AWS_BUCKET_NAME: zod_1.z.string(),
    AWS_ACCESS_KEY_ID: zod_1.z.string(),
    AWS_SECRET_ACCESS_KEY: zod_1.z.string(),
    REDIS_HOST: zod_1.z.string().optional()["default"]('127.0.0.1'),
    REDIS_PORT: zod_1.z.coerce.number().optional()["default"](6379),
    REDIS_DB: zod_1.z.coerce.number().optional()["default"](0),
    PORT: zod_1.z.coerce.number().optional()["default"](3333)
});
