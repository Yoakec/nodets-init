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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rhtm = void 0;
/*
 * @Author: Yoakec
 * @Date: 2022-06-17 14:21:47
 * @LastEditors: Yoakec
 * @LastEditTime: 2022-06-17 14:21:59
 * @FilePath: \node_ts\src\entity\Rhtm.ts
 * @Description:
 */
const typeorm_1 = require("typeorm");
let Rhtm = class Rhtm {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Rhtm.prototype, "did", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rhtm.prototype, "rh", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Rhtm.prototype, "tem", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Rhtm.prototype, "lstime", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Rhtm.prototype, "box_num", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Rhtm.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Rhtm.prototype, "userid", void 0);
Rhtm = __decorate([
    (0, typeorm_1.Entity)()
], Rhtm);
exports.Rhtm = Rhtm;
//# sourceMappingURL=Rhtm.js.map