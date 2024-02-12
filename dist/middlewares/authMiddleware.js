"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authAdminGuard = exports.authenticateToken = void 0;
const jwtUtils_1 = require("../utils/jwtUtils");
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Unauthorized: Token not provided" });
    }
    try {
        const decodedToken = (0, jwtUtils_1.verifyToken)(token);
        req.user = decodedToken;
        next();
    }
    catch (error) {
        return res.status(403).json({ error: "Forbidden: Invalid token" });
    }
};
exports.authenticateToken = authenticateToken;
const authAdminGuard = (req, res, next) => {
    const user = req.user;
    if (!user.isAdmin) {
        return res.status(400).json({ error: "you have to be an admin to create admin account", status: 400 });
    }
    next();
};
exports.authAdminGuard = authAdminGuard;
