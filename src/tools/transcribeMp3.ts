import fs from "fs";
import { openai } from "../lib/openai.js";

/**
 * Transcribes an MP3 file using OpenAI and saves the result to a text file.
 * @param mp3Path Path to the input MP3 file.
 * @param outputTxtPath Path to save the transcribed text file.
 * @returns Promise that resolves with the output text file path.
 */
export async function transcribeMp3(
  mp3Path: string,
  outputTxtPath: string
): Promise<string> {
  const stream = await openai.audio.transcriptions.create({
    file: fs.createReadStream(mp3Path),
    model: "gpt-4o-mini-transcribe",
    response_format: "text",
    stream: true,
  });

  const writeStream = fs.createWriteStream(outputTxtPath);
  for await (const event of stream as AsyncIterable<any>) {
    if (event && typeof event === "object") {
      if (
        event.type === "transcript.text.delta" &&
        typeof event.delta === "string"
      ) {
        writeStream.write(event.delta);
      } else if (
        event.type === "transcript.text.done" &&
        typeof event.text === "string"
      ) {
        writeStream.write(event.text);
        break;
      }
    }
  }
  writeStream.end();
  return outputTxtPath;
}
