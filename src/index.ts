import { ask } from './tools/ask.js';

const question = process.argv.slice(2).join(' ');

if (!question) {
  console.log('Usage: npm start -- "Your question here"');
  process.exit(1);
}

ask(question);
