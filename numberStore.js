let stored = [];

function getNumbers() {
  return [...stored];
}

function updateNumbers(newNums, windowSize) {
  const unique = new Set(stored);

  newNums.forEach((num) => {
    if (!unique.has(num)) {
      unique.add(num);
      stored.push(num);
    }
  });

  while (stored.length > windowSize) {
    stored.shift();
  }

  return [...stored];
}

module.exports = { getNumbers, updateNumbers };
