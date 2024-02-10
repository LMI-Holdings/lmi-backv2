import jwt from 'jsonwebtoken';

const JWT_SECRET = String(process.env.JWT_SECRET)

export const generateToken = (payload: any): string => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string): any => {
    return jwt.verify(token, JWT_SECRET);
};

export const isTokenExpired = (expiryDate: number): boolean => {
    const currentTimestamp = Date.now();
    const expiryTimestamp = expiryDate * 1000;
    return currentTimestamp >= expiryTimestamp;
};

