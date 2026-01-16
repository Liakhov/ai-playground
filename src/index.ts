import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI();

async function ask(question: string): Promise<void> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: question }],
  });

  console.log(response.choices[0]?.message?.content);
}

const question = process.argv.slice(2).join(' ');

if (!question) {
  console.log('Usage: npm start -- "Your question here"');
  process.exit(1);
}

ask(question);