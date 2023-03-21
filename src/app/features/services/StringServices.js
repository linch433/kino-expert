export class StringServices {
  static getCapitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
