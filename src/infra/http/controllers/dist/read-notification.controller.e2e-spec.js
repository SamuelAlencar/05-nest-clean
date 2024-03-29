"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var app_module_1 = require("@/infra/app.module");
var database_module_1 = require("@/infra/database/database.module");
var prisma_service_1 = require("@/infra/database/prisma/prisma.service");
var jwt_1 = require("@nestjs/jwt");
var testing_1 = require("@nestjs/testing");
var supertest_1 = require("supertest");
var make_notification_1 = require("test/factories/make-notification");
var make_student_1 = require("test/factories/make-student");
describe('Read notification (E2E)', function () {
    var app;
    var prisma;
    var studentFactory;
    var notificationFactory;
    var jwt;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var moduleRef;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.Test.createTestingModule({
                        imports: [app_module_1.AppModule, database_module_1.DatabaseModule],
                        providers: [make_student_1.StudentFactory, make_notification_1.NotificationFactory]
                    }).compile()];
                case 1:
                    moduleRef = _a.sent();
                    app = moduleRef.createNestApplication();
                    prisma = moduleRef.get(prisma_service_1.PrismaService);
                    studentFactory = moduleRef.get(make_student_1.StudentFactory);
                    notificationFactory = moduleRef.get(make_notification_1.NotificationFactory);
                    jwt = moduleRef.get(jwt_1.JwtService);
                    return [4 /*yield*/, app.init()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    test('[PATCH] /notifications/:notificationId/read', function () { return __awaiter(void 0, void 0, void 0, function () {
        var user, accessToken, notification, notificationId, response, notificationOnDatabase;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, studentFactory.makePrismaStudent({
                        name: 'John Doe'
                    })];
                case 1:
                    user = _a.sent();
                    accessToken = jwt.sign({ sub: user.id.toString() });
                    return [4 /*yield*/, notificationFactory.makePrismaNotification({
                            recipientId: user.id
                        })];
                case 2:
                    notification = _a.sent();
                    notificationId = notification.id.toString();
                    return [4 /*yield*/, supertest_1["default"](app.getHttpServer())
                            .patch("/notifications/" + notificationId + "/read")
                            .set('Authorization', "Bearer " + accessToken)
                            .send()];
                case 3:
                    response = _a.sent();
                    expect(response.statusCode).toBe(204);
                    return [4 /*yield*/, prisma.notification.findFirst({
                            where: {
                                recipientId: user.id.toString()
                            }
                        })];
                case 4:
                    notificationOnDatabase = _a.sent();
                    expect(notificationOnDatabase === null || notificationOnDatabase === void 0 ? void 0 : notificationOnDatabase.readAt).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
});
