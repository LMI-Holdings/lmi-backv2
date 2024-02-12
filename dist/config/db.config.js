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
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncDatabase = exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize = new sequelize_typescript_1.Sequelize({
    database: 'postgres',
    username: 'postgres.fgjlxfwlkdfwzkqgucdt',
    password: 'lmiholdings.123',
    host: 'aws-0-us-east-1.pooler.supabase.com',
    port: 5432,
    dialect: 'postgres',
    models: [__dirname + '/../models'],
    dialectOptions: {
        connectTimeout: 600000, // Set the connection timeout to 60 seconds (adjust as needed)
    },
});
exports.sequelize = sequelize;
const syncDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.sync();
        console.log('Database synced. app is live!!!!');
    }
    catch (error) {
        console.error('Unable to sync database:', error);
    }
});
exports.syncDatabase = syncDatabase;
