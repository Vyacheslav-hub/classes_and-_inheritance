import {Character} from "../Character.js";

test('проверяем на валидный тип из исходных', () => {
    const character1 = new Character('Bob', 'Bowman');

    expect(character1.type).toBe('Bowman');
})


test('проверяем на не валидный тип из исходных', () => {
    expect(() => {
        new Character('Bob', 'Bow');
    }).toThrow('Тип должен быть строкой одного из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
})

test('проверяем на не валидный тип по типу', () => {
    expect(() => {
        new Character('Bob', 1);
    }).toThrow('Тип должен быть строкой');
})
