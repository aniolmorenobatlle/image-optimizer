import path from "path";
import fs from "fs/promises";

import { execPromise } from "./helper.js";

const INPUT_DIR  = "./input";
const OUTPUT_DIR = "./output";

async function processGif(filePath, relativePath) {

    if (relativePath.split(path.sep)[0] === "example") return;

    const ext      = path.extname(filePath);
    const fileName = path.basename(filePath, ext);

    const outputDir = path.join(
        OUTPUT_DIR,
        path.dirname(relativePath)
    );

    const webmOutputDir = path.join(
        outputDir,
        "webm",
    );

    const mp4OutputDir = path.join(
        outputDir,
        "mp4",
    );

    await fs.mkdir(webmOutputDir, {
        recursive: true
    });

    await fs.mkdir(mp4OutputDir, {
        recursive: true
    });

    const webmOutput = path.join(
        webmOutputDir,
        `${fileName}.webm`
    );

    const mp4Output = path.join(
        mp4OutputDir,
        `${fileName}.mp4`
    );

    await execPromise(`
        ffmpeg -y -i "${filePath}" \
        -c:v libvpx-vp9 \
        -b:v 0 \
        -crf 30 \
        "${webmOutput}"
    `);

    await execPromise(`
        ffmpeg -y -i "${filePath}" \
        -movflags faststart \
        -pix_fmt yuv420p \
        "${mp4Output}"
    `);

    console.log(`✔ GIF optimized: ${fileName}`);
}

async function walk(dir, base = dir) {

    const entries = await fs.readdir(dir, {
        withFileTypes: true
    });

    for (const entry of entries) {

        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {

            await walk(fullPath, base);

        } else {

            const relativePath = path.relative(base, fullPath);

            if (/\.(gif)$/i.test(entry.name)) {

                await processGif(fullPath, relativePath);
            }
        }
    }
}

await walk(INPUT_DIR);

console.log("\nDone.");