import MathAttack from '../math-log-trig';

test('test attack Magician/Daemon', () => {
  const hero = new MathAttack();
  const heroTwo = new MathAttack();

  hero.distance = 5;  
  hero.attack = 100; 
  expect(hero.attack).toEqual(50);

  heroTwo.attack = 100;
  heroTwo.stoned = true;
  expect(hero.attack).toEqual(50);

  hero.attack = 100;
  hero.stoned = true;
  hero.distance = 10;
  expect(hero.attack).toEqual(-17); 

  expect(hero.distance).toBe(10);
  expect(hero.stoned).toBe(true);
  
});