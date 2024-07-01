export default class Currency {
  
  constructor(code, name) {
     this.code = code;
     this.name = name;
    }

  set code(newCode) {
    if (typeof(newCode) !== 'string') {
        throw new TypeError("Code must be a String");
        }
    this._code = newCode;
    }
    
  set name(newName) {
    if (typeof(newName) !== 'string') {
        throw new TypeError("Name must be a String");
        }
    this._name = newName;
    }

  get code() {
    return this._code;
    }

  get name() {
    return this._name;
    }

  displayFullCurrency() {
    return `${this.name} (${this.code})`
    }
  }