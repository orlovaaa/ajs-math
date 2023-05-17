import Daemon from '../classDaemon';

test('create Magician', () => {
  const heroDaemon = new Daemon(1);

  expect(heroDaemon).toEqual({
		_distance: 0,
		_stoned: false,
		_attack: 0,
    type: 'Daemon',
  });
});