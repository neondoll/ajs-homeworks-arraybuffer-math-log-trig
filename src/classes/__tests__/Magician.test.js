import Magician from '../Magician';

test('Testing Magician creation', () => {
  const result = new Magician('magician');

  expect(result).toEqual({
    name: 'magician', type: 'Magician', health: 100, level: 1, baseAttack: 10, defence: 40, attackDistance: undefined,
  });
});

test.each([
  [1, 100],
  [2, 90],
  [3, 80],
  [4, 70],
  [5, 60],
])('Testing Magician\'s attack at a distance of %i cells', (attackDistance, expected) => {
  const character = new Magician('magician');
  character.attack = 100;
  character.attackDistance = attackDistance;

  const result = character.attack;

  expect(result).toBe(expected);
});

test.each([
  [1, 100],
  [2, 85],
  [3, 72],
  [4, 60],
  [5, 48],
])('Testing Magician\'s attack at a distance of %i cells with stoned', (attackDistance, expected) => {
  const character = new Magician('magician');
  character.attack = 100;
  character.attackDistance = attackDistance;
  character.stoned = true;

  const result = character.attack;

  expect(result).toBe(expected);
});
