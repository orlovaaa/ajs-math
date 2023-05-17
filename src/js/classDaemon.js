import MathAttack from './math-log-trig';

export default class Daemon extends MathAttack {
  constructor(name) {
    super(name);
    this.type = 'Daemon';
  }
}
