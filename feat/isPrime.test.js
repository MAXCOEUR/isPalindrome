const isPrime = require('./isPrime');

describe('isPrime', () => {
    test('doit retourner false pour 1', () => {
        expect(isPrime(1)).toBe(false);
    });

    test('doit retourner true pour 2', () => {
        expect(isPrime(2)).toBe(true);
    });

    test('doit retourner true pour 3', () => {
        expect(isPrime(3)).toBe(true);
    });

    test('doit retourner false pour 4', () => {
        expect(isPrime(4)).toBe(false);
    });

    test('doit retourner true pour 17', () => {
        expect(isPrime(17)).toBe(true);
    });

    test('doit retourner false pour 100', () => {
        expect(isPrime(100)).toBe(false);
    });
});
