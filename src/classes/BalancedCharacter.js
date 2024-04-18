import Character from './Character';

export default class BalancedCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.attackDistance = undefined;
  }

  get attack() {
    let attack = this.baseAttack * (1 - (this.attackDistance - 1) / 10);

    if (this.stoned) {
      attack -= Math.log2(this.attackDistance) * 5;
    }

    return Math.floor(attack);
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get stoned() {
    return this.isStoned;
  }

  set stoned(value) {
    this.isStoned = value;
  }
}
