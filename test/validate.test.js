// const { validate } = require('../js/validate.js');
import { validate } from '../js/validate.js';

describe('validateNickname', () => {

    test('valid nickname', () => {
        const { isValid } = validate('John_Doe1');
        expect(isValid).toBe(true);
    });

    test('too short', () => {
        const { rules } = validate('ab');
        expect(rules.length).toBe(true);
    });

    test('invalid start character', () => {
        const { rules } = validate('1John');
        expect(rules.startsWithLetter).toBe(false);
    });

    test('invalid characters', () => {
        const { rules } = validate('John-Doe');
        expect(rules.allowedChars).toBe(false);
    });

    test('consecutive underscores', () => {
        const { rules } = validate('John__Doe');
        expect(rules.noConsecutiveUnderscores).toBe(false);
    });

    test('ends with underscore', () => {
        const { rules } = validate('John_');
        expect(rules.notEndWithUnderscore).toBe(false);
    });
});
