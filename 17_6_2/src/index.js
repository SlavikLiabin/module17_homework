function getPercents(percent, number) {
  return (number / 100) * percent;
}

console.log(getPercents(30, 200));

module.exports = getPercents;
