import {Bowerman} from "../Bowerman.js";
let bowman;
beforeEach(() => {
    bowman = new Bowerman('Ser');
});

test('damage уменьшает health по формуле', () => {
    bowman.defence = 0;
    bowman.damage(10);

    expect(bowman.health).toBe(90);
});

test('damage учитывает defence', () => {
    bowman.defence = 50;
    bowman.damage(10);

    expect(bowman.health).toBe(95);
});

test('damage не уменьшает health ниже 0', () => {
    bowman.defence = 0;
    bowman.damage(200);

    expect(bowman.health).toBe(0);
});

