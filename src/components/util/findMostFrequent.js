export function findMostFrequent(arr) {
  const freq = {};
  let maxFreq = 0;
  let mostFreq = null;

  arr.forEach((num) => {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > maxFreq) {
      maxFreq = freq[num];
      mostFreq = num;
    }
  });

  return mostFreq;
}
