export const camelToKebabCase = (str: string) => {
  let result = '';

  for (const letter of str) {
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
      result += '-' + letter.toLowerCase();
    } else {
      result += letter;
    }
  }
  return result;
};
