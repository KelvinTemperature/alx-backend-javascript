import Currency from "./3-currency";

export default class Pricing {
  
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(newAmount) {
    if (typeof(newAmount) !== 'number') {
        throw new TypeError('Amount must be a number')
    }
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
        throw new TypeError('Currency must be a Currency')
    }
    this._currency = newCurrency;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }
  
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})}`;
  }

  convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

}