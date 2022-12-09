const stringSize = (text) => {
    text = 'This text has a certain number of characters';
    const result = text.length;
    return result;
}
const replaceCharacterE = (text) => {
    text = 'This text has a certain number of characters';
    const result = text.replace("e", " ");
    return result;
}
const concatString = (text1, text2) => {
    text1 = 'el Javascript shi ';
    text2 = 'ra2e3';
    const result = text1 + text2;
    return result;
}
const showChar5 = (text) => {
    text = 'TDD kicks ass';
    const result = text.charAt(4);
    return result;
}
const showChar9 = (text) => {
    text = 'But it is really annoying to write';
    const result = text.substring(0, 9);
    return result;
}
const toCapitals = (text) => {
    text = 'Another useful function';
    const result = text.toUpperCase();
    console.log(result);
    return result;

}
const toLowerCase = (text) => {
    text = 'This is a sentence!';
    const result = text.toLowerCase();
    console.log(result)
    return result;
}

const removeSpaces = (text) => {
    text = ' Rome wasn\'t built in a day ';
    const result = text.trim();
    console.log(result);
    return result;
}
const IsString = (text) => {
    text = 'Is this a string?';
    const result = text.IsString = true;
    console.log(result);
    return result;

}

const getExtension = (text) => {
    text = 'images/photo01.jpg';
    const result = text.split(".").pop ();
    console.log(result);
    return result;
}
const countSpaces = (text) => {
    text ='Sire open we have a big one!';
    const result = text.split(' ').length - 1;
    console.log(result);
    return result;

}
const InverseString = (text) => {
    return text
      .split("")
      .reverse()
      .join("");
}

const power = (x, y) => {
    return Math.pow(x, y);
}
const absoluteValue = (num) => {
    return Math.abs(num);
}
const absoluteValueArray = (array) => {
    return array.map(Math.abs);
}
const circleSurface = (radius) => {
    return Math.round(Math.PI * radius * radius);
}
const hypothenuse = (ab, ac) => {
    return Math.hypot(ab, ac);
}
const BMI = (weight, height) => {
    return parseFloat((weight / (height * height)).toFixed(2));
}   

const createLanguagesArray = () => {
    const languages = ["Html", "CSS", "Java", "PHP"];
    return languages;
}

const createNumbersArray = () => {
    const numbers = [0, 1, 2, 3, 4, 5];
  return numbers;
}

const replaceElement = (languages) => {
    languages[2] = "Javascript";
  return languages;
}   

const addElement = (languages) => {
    languages.push("Ruby", "Python");
  return languages;
}   

const addNumberElement = (numbers) => {
    numbers.unshift(-2, -1);
  return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
  return languages;
}

const removeLast = (languages) => {
    languages.pop();
  return languages;
}

const convertStrToArr = (social_arr) => {
    const tableau = social_arr.split(",");
  return tableau;
}

const convertArrToStr = (languages) => {
    const str = languages.join();
  return str;
}

const sortArr = (social_arr) => {
    social_arr.sort();
  return social_arr;
}

const invertArr = (social_arr) => {
    social_arr.reverse();
  return social_arr;
}
footer