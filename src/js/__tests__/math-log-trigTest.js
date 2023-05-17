import MathAttack from '../math-log-trig';

test('test attack Magician/Daemon', () => {
  const hero = new MathAttack();
  const heroTwo = new MathAttack(2);
  hero.distance = 2;
  hero.attack = 100;
  hero.stoned = true;

  expect(hero.attack).toBe(80);
  expect(hero.distance).toBe(2);
  heroTwo.stoned = false;
  expect(heroTwo.stoned).toBe(false);
});