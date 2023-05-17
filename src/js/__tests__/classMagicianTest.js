import Magician from '../classMagician';

test('create Magician', () => {
  const heroMegician = new Magician(1);

  expect(heroMegician).toEqual({
		_distance: 0,
		_stoned: false,
		_attack: 0,
    type: 'Magician',
  });
});