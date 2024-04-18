import BalancedCharacter from './BalancedCharacter';
import CharacterTypes from '../data/CharacterTypes';

export default class Daemon extends BalancedCharacter {
  constructor(name) {
    super(name, CharacterTypes.daemon);
    this.attack = 10;
    this.defence = 40;
  }
}
