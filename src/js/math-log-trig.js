export default class MathAttack {
	constructor(name) {
		this._distance = 0;  
		this._stoned = false;
		this._attack = 0; 
	}
	  
	get attack() {
		const distanceEffect = (1 - this._distance / 10);  
		let attack = this._attack * distanceEffect;
		if (this._stoned) {    
		  attack -= Math.log2(this._distance) * 5;
		}  
		return Math.round(attack);
	}

	set attack(value) {
		this._attack = value;
	  }
	  
	set distance(value) {
		this._distance = value; 
		this.attack = this._attack; // пересчитываем атаку при изменении дистанции
	}
	  
	set stoned(value) {
		this._stoned = value;
		this.attack = this._attack; // пересчитываем атаку при изменении состояния stoned 
	}
	  
	get distance() {
		return this._distance; 
	}
	  
	get stoned() {
		return this._stoned; 
	}
}