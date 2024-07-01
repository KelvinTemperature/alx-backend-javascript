export default class Building {

  constructor(sqft){
    this.sqft = sqft;
  }

  set sqft(newSqft) {
    if (typeof(newSqft) !== 'number'){
        throw new TypeError('sqft must be a number')
    }
    this._sqft = newSqft;
  }

  get sqft() {
    return this._sqft;
  }
}