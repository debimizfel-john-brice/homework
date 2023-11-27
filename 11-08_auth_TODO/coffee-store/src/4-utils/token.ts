import { Request } from 'express';
import jwt from 'jsonwebtoken';
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

export default {
    createToken,
    verifyRequestToken,
}