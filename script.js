const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];
const sentences = ['Your birthmonth is: ', 'You will get rich in: ', 'You will die in: '];

const randomMonth = Math.floor(Math.random() * months.length);
const randomSentence = Math.floor(Math.random() * sentences.length);

const message = sentences[randomSentence] + months[randomMonth];
console.log(message);
