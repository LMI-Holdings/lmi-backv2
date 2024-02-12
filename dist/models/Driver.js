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
exports.Driver = void 0;
const sequelize_1 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
const Truck_1 = require("./Truck"); // Import the Truck model
let Driver = class Driver extends sequelize_typescript_1.Model {
};
exports.Driver = Driver;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_1.UUIDV4,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Driver.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", String)
], Driver.prototype, "firstName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", String)
], Driver.prototype, "lastName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        unique: true,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Driver.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
    }),
    __metadata("design:type", String)
], Driver.prototype, "phoneNumber", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => Truck_1.Truck),
    __metadata("design:type", Truck_1.Truck)
], Driver.prototype, "truck", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Driver.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Driver.prototype, "updated_at", void 0);
exports.Driver = Driver = __decorate([
    sequelize_typescript_1.Table
], Driver);
exports.default = Driver;
