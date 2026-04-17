export class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = 0;
        this.defence = 0;
    }

    set name(value) {
        const min = 2;
        const max = 10;

        if (typeof value !== 'string') {
            throw new Error("Имя должно быть строкой");
        }

        if (value.length < min || value.length > max) {
            throw new Error(`Длина имени должна находиться в диапазоне от ${min} до ${max} символов`);
        }

        // Если проверка прошла, сохраняем значение
        this._name = value;
    }

    // Геттер для получения значения
    get name() {
        return this._name;
    }

    set type(value) {
        const arrType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof value !== 'string') {
            throw new Error("Тип должен быть строкой");
        }

        if (!arrType.includes(value))  {
            throw new Error("Тип должен быть строкой одного из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie");
        }

        // Если проверка прошла, сохраняем значение
        this._type = value;
    }

    // Геттер для получения значения
    get type() {
        return this._type;
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error('Нельзя повысить левел умершего');
        }else {
            this.level += 1;
            this.health = 100;
            this.attack *= 1.2;
            this.defence *= 1.2;
        }
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);

        if (this.health < 0) {
            this.health = 0;
        }
    }
}
