import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";

ffmpeg.setFfmpegPath(ffmpegPath as unknown as string);

/**
 * Converts an MP4 file to MP3 format.
 * @param {string} inputPath - Path to the input MP4 file.
 * @param {string} outputPath - Path to save the output MP3 file.
 * @returns {Promise<string>} - Resolves with the output MP3 file path.
 */
export function mp4ToMp3(inputPath: string, outputPath: string): Promise<string> {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .toFormat("mp3")
      .on("error", (err: Error) => reject(err))
      .on("end", () => resolve(outputPath))
      .save(outputPath);
  });
}