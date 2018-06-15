function changePossibilities(amount, denoms) {
  let abacus = new Array(amount + 1).fill(0);
  abacus[0] = 1;
  for (let denom of denoms) {
    for (let currentVal = 1; currentVal < abacus.length; currentVal++) {
      if (denom <= currentVal) {
        abacus[currentVal] += abacus[currentVal - denom];
      }
    }
  }
  return abacus[amount];
}