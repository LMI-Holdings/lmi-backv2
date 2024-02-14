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
exports.Storage = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Warehouse_1 = require("./Warehouse"); // Import the Warehouse model
const Freight_1 = require("./Freight"); // Import the DeliveryService model
const sequelize_1 = require("sequelize");
const User_1 = require("./User");
let Storage = class Storage extends sequelize_typescript_1.Model {
};
exports.Storage = Storage;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        defaultValue: sequelize_1.UUIDV4,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Storage.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Warehouse_1.Warehouse),
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.UUID, // Assuming UUID type for the warehouseId
    }),
    __metadata("design:type", String)
], Storage.prototype, "warehouseId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Warehouse_1.Warehouse),
    __metadata("design:type", Warehouse_1.Warehouse)
], Storage.prototype, "warehouse", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Freight_1.Freight),
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.UUID, // Assuming UUID type for the deliveryServiceId
    }),
    __metadata("design:type", String)
], Storage.prototype, "freightserviceId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Freight_1.Freight),
    __metadata("design:type", Freight_1.Freight)
], Storage.prototype, "freightservice", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Storage.prototype, "region", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Storage.prototype, "packageType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Storage.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Storage.prototype, "weight", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Storage.prototype, "contactPerson", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.BOOLEAN,
    }),
    __metadata("design:type", Boolean)
], Storage.prototype, "deliveryServiceNeeded", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.JSONB, // Assuming JSONB type for the warehouseLocation
    }),
    __metadata("design:type", Object)
], Storage.prototype, "warehouseLocation", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: true,
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], Storage.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.UUID,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Storage.prototype, "userId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => User_1.User),
    __metadata("design:type", User_1.User)
], Storage.prototype, "user", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], Storage.prototype, "created_at", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], Storage.prototype, "updated_at", void 0);
exports.Storage = Storage = __decorate([
    sequelize_typescript_1.Table
], Storage);
