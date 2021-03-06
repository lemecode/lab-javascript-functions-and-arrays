// Progression #1: Greatest of the two numbers
function greatestOfTwoNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  else if (num2 > num1) {
    return num2;
  }
  else {
    return (num1 || num2);
  }

}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words) {
  if (words.length === 0) {
    return null;
  }
  if (words.length === 1) {
    return words[0];
  }
  for (i = 0; i < (words.length - 1); i++) {
    for (j = 1; j < words.length; j++) {
      if (words[i].length > words[j].length) {
        return word[i];
      }
      else if (words[j] > words[j + 1]) {
        return words[j];
        j++;
      }
      else if (words[j] > words[j + 1]) {
        return words[j];
        j++;
      }
      else if (words[j] > words[j + 1]) {
        return words[j];
        j++;
      }
      else if (words[j] > words[j + 1]) {
        return words[j];
        j++;
      }
      else {
        return words[j];
      }
    }
  }
}
// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(spend) {
  if (spend.length === 0) {
    return 0;
  }
  sum = 0
  for (let i = 0; i < spend.length; i++) {
    sum += spend[i];
  }
  return sum;
}
netPrice(numbers);

const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];

function add(array) {
  all_sum = 0;
  for (i = 0; i < array.length; i++) {
    all_sum += array[i];
  }
  return all_sum;
}

add(mixedArr);
// Progression #4: Calculate the average
// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(array) {
  if (array.length === 0) {
    return null;
  }
  return (netPrice(array) / array.length);
}
midPointOfLevels(numbersAvg);

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(array) {
  ln_words = 0;
  if (array.length === 0) {
    return null;
  }
  for (i = 0; i < array.length; i++) {
    ln_words += array[i].length;
  }
  return (ln_words / array.length);
}
averageWordLength(wordsArr);
// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
