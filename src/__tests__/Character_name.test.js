import {Character} from "../Character.js";

test('проверяем на валидное имя по длине', () => {
        const character1 = new Character('Bob', 'Bowman');

        expect(character1.name).toBe('Bob');
})


test('проверяем на не валидное имя по длине', () => {
        expect(() => {
                new Character('b', 'Bowman');
        }).toThrow('Длина имени должна находиться в диапазоне от 2 до 10 символов');
})

test('проверяем на не валидное имя по типу', () => {
        expect(() => {
                new Character(2, 'Bowman');
        }).toThrow('Имя должно быть строкой');
})
