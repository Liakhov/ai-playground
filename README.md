# AI Playground

A collection of TypeScript utility functions for interacting with various AI models and providers. A simple CLI interface to experiment with AI capabilities directly from your terminal.

## Setup

```bash
npm install
```

Copy `.env-example` to `.env` and fill in your API keys:

```bash
cp .env-example .env
```

```
OPENAI_API_KEY=your_api_key_here
```

## Usage

### Ask a question (OpenAI chat)
```bash
npm start -- ask "Your question here"
```

### Convert MP4 to MP3
```bash
npm start -- convert input.mp4 output.mp3
```

### Transcribe MP3 to text
```bash
npm start -- transcribe input.mp3 output.txt
```

## Project Structure

```
src/
  index.ts              # Entry point / CLI router
  lib/
    openai.ts           # Shared OpenAI client
  tools/
    ask.ts              # Chat Q&A via OpenAI
    mp4ToMp3.ts         # MP4 to MP3 conversion (ffmpeg)
    transcribeMp3.ts    # MP3 to text transcription (OpenAI)
```

## Scripts

- `npm start` - Run the CLI (with watch mode)
- `npm run build` - Compile TypeScript to JavaScript
- `npm run preview` - Build and run the compiled output
