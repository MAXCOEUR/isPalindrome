const fibonacci = require('./fibonacci');

describe('fibonacci', () => {
    test('retourne une suite de longueur correcte', () => {
        expect(fibonacci(5).length).toBe(5);
    });

    test('retourne une suite correcte pour n=1', () => {
        expect(fibonacci(1)).toEqual([0]);
    });

    test('retourne une suite correcte pour n=6', () => {
        expect(fibonacci(6)).toEqual([0, 1, 1, 2, 3, 5]);
    });

    test('retourne un tableau vide si n <= 0', () => {
        expect(fibonacci(0)).toEqual([]);
        expect(fibonacci(-3)).toEqual([]);
    });
});
