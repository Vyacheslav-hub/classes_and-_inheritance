import {Character} from "../Character.js";
import {Bowerman} from "../Bowerman.js";
let character;
let bowman;
beforeEach(() => {
    character = new Character('Bob', 'Bowman');
    bowman = new Bowerman('Ser', 'Bowman');
});

test('проверяем при здоровье меньше 0', () => {
    character.health = 0;

    expect(() => {
        character.levelUp();
    }).toThrow('Нельзя повысить левел умершего');
});

test('levelUp корректно усиливает персонажа', () => {
    bowman.health = 30;

    bowman.levelUp();

    expect(bowman.level).toBe(2);
    expect(bowman.health).toBe(100);
    expect(bowman.attack).toBe(30);
    expect(bowman.defence).toBe(30);
});
