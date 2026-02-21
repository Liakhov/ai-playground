import { ask } from './tools/ask.js';
import { mp4ToMp3 } from './tools/mp4ToMp3.js';
import { transcribeMp3 } from './tools/transcribeMp3.js';

const [command, ...args] = process.argv.slice(2);

const commands: Record<string, string> = {
  ask:        'npm start -- ask "Your question here"',
  convert:    'npm start -- convert input.mp4 output.mp3',
  transcribe: 'npm start -- transcribe input.mp3 output.md',
};

function printUsage() {
  console.log('Usage:');
  Object.values(commands).forEach((example) => console.log(`  ${example}`));
  process.exit(1);
}

switch (command) {
  case 'ask': {
    const question = args.join(' ');
    if (!question) { console.log(`Usage: ${commands.ask}`); process.exit(1); }
    ask(question);
    break;
  }
  case 'convert': {
    const [input, output] = args;
    if (!input || !output) { console.log(`Usage: ${commands.convert}`); process.exit(1); }
    mp4ToMp3(input, output).then((out) => console.log(`Converted: ${out}`));
    break;
  }
  case 'transcribe': {
    const [input, output] = args;
    if (!input || !output) { console.log(`Usage: ${commands.transcribe}`); process.exit(1); }
    transcribeMp3(input, output).then((out) => console.log(`Transcribed: ${out}`));
    break;
  }
  default:
    printUsage();
}
