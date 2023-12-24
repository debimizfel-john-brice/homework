import { Request } from 'express';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { UnauthorizedError } from '../2-models/error_status';

const SECRET = "1234567890";

function createToken(payload: object, expiresIn: string = "3h"): string {
    return jwt.sign(payload, SECRET, { expiresIn: expiresIn });
}

// TODO - why async?
function verifyRequestToken(request: Request): any {
    const token = request.headers.authorization?.split(" ")[1];
    if (!token) throw new UnauthorizedError("Missing token");
    return jwt.verify(token, SECRET);
}

function hashPassword(password: string): string {
    const salt = "Ipsum aute qui ipsum cillum.";
    const hash = crypto.createHmac("sha512", salt).update(password).digest("hex");
    return hash;

}

export default {
    createToken,
    verifyRequestToken,
    hashPassword
}