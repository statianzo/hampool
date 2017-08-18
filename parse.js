const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const parseSubject = subject => {
  const [id, correct] = subject.split(' ');
  return {id, correct: correct.charCodeAt(1) - 65};
};

const parseQuestionText = text => {
  const [subject, question, ...answerLines] = text.split('\r\n').slice(-7, -1);
  if (!subject) return null;
  const {id, correct} = parseSubject(subject);
  const answers = answerLines.map(a => a.replace(/^[A-D]\. /, ''));

  return {
    id,
    correct,
    question,
    answers,
  };
};

const transformFile = body =>
  body.split('~~').slice(0, -1).map(parseQuestionText).filter(Boolean);

['tech', 'general', 'extra'].forEach(async type => {
  const body = await readFile(`./${type}.txt`, {encoding: 'utf8'});
  const questions = transformFile(body);
  await writeFile(`./${type}.json`, JSON.stringify({questions}, null, 2));
  return questions;
});
