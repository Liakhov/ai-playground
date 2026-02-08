import { openai } from '../lib/openai.js';

export async function ask(question: string): Promise<void> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [{ role: 'user', content: question }],
  });

  console.log(response.choices[0]?.message?.content);
}