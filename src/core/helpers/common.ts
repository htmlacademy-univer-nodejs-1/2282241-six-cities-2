import * as crypto from 'node:crypto';
import * as jose from 'jose';
import {ClassConstructor, plainToInstance} from 'class-transformer';
import {TokenPayload} from '../../types/token-payload.js';

export const createSHA256 = (line: string, salt: string): string => {
  const shaHasher = crypto.createHmac('sha256', salt);
  return shaHasher.update(line).digest('hex');
};

export function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : '';
}
export function fillDTO<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(someDto, plainObject, { excludeExtraneousValues: true });
}
export function createErrorObject(message: string) {
  return {
    error: message,
  };
}
export async function createJWT(algorithm: string, jwtSecret: string, payload: TokenPayload): Promise<string> {
  return new jose.SignJWT({ ...payload })
    .setProtectedHeader({ alg: algorithm })
    .setIssuedAt()
    .setExpirationTime('2d')
    .sign(crypto.createSecretKey(jwtSecret, 'utf-8'));
}
