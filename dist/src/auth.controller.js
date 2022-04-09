"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("./auth.guard");
const local_guard_1 = require("./local.guard");
const login_dto_1 = require("./login.dto");
function AuthController(loginRoute = 'login') {
    class AuthControllerHost {
        constructor(authService) {
            this.authService = authService;
        }
        login(req) {
            return this.authService.signToken(req.user);
        }
    }
    __decorate([
        (0, common_1.Post)(loginRoute),
        (0, common_1.UseGuards)(local_guard_1.LocalAuthGuard),
        (0, auth_guard_1.Public)(),
        (0, swagger_1.ApiOkResponse)(),
        (0, swagger_1.ApiBody)({ type: login_dto_1.LoginDTO }),
        __param(0, (0, common_1.Request)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], AuthControllerHost.prototype, "login", null);
    return AuthControllerHost;
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map