import { Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwtUtils";


export const authenticateToken = (
    req: any,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers["authorization"];

    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized: Token not provided" });
    }

    try {
        const decodedToken = verifyToken(token);
        req.user = decodedToken;

        next();
    } catch (error) {
        return res.status(403).json({ error: "Forbidden: Invalid token" });
    }
};

export const authAdminGuard = (
    req: any,
    res: Response,
    next: NextFunction
) => {

    const user = req.user
    if(!user.isAdmin) {
        return res.status(400).json({ error: "you have to be an admin to create admin account", status: 400 })
    }
    
    next()
};

