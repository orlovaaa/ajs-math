export default class MathAttack {
	constructor(name) {
		this._distance = 0;
		this._stoned = false;
		this._attack = 0;
	}

	set attack(value) {
		const distanceEffect = (1 - this._distance / 10);
		let attack = value * distanceEffect;
		if (this._stoned) {
		  attack -= Math.log2(this._distance) * 5;
		}
		this._attack = Math.round(attack);
	}
	
	get attack() {
		return this._attack;
	}
	
	set distance(value) {
		this._distance = value;
	}
	
	get distance() {
		return this._distance;
	}
	
	set stoned(value) {
		this._stoned = value;
	}
	
	get stoned() {
		return this._stoned;
	}
}