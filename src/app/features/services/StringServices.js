export class StringServices {
  static getCapitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  static getEmbedString(url) {
    const index = url.indexOf('.be/');
    return (index !== -1 ? url.substr(index + 4) : null);
  }
}
