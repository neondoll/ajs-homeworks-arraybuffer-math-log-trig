import BalancedCharacter from './BalancedCharacter';
import CharacterTypes from '../data/CharacterTypes';

export default class Magician extends BalancedCharacter {
  constructor(name) {
    super(name, CharacterTypes.magician);
    this.attack = 10;
    this.defence = 40;
  }
}
