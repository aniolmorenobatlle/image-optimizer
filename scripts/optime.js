import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const INPUT_DIR = "./input";
const OUTPUT_DIR = "./output";

const sizes = [640, 1280, 1920];

async function processImage(filePath, relativePath) {

    const ext = path.extname(filePath);
    const fileName = path.basename(filePath, ext);

    const webpOutputDir = path.join(
        OUTPUT_DIR,
        "webp",
        path.dirname(relativePath)
    );

    const avifOutputDir = path.join(
        OUTPUT_DIR,
        "avif",
        path.dirname(relativePath)
    );

    await fs.mkdir(webpOutputDir, { 
        recursive: true 
    });
    
    await fs.mkdir(avifOutputDir, { 
        recursive: true
    });

    for (const size of sizes) {

        const image = sharp(filePath)
            .resize({
                width: size,
                withoutEnlargement: true
            });

        await image.clone()
            .webp({
                quality: 82
            })
            .toFile(
                path.join(
                    webpOutputDir,
                    `${fileName}-${size}.webp`
                )
            );

        await image.clone()
            .avif({
                quality: 65
            })
            .toFile(
                path.join(
                    avifOutputDir,
                    `${fileName}-${size}.avif`
                )
            );

        console.log(`✔ ${fileName} ${size}px`);
    }
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

            if (/\.(jpg|jpeg|png|webp)$/i.test(entry.name)) {

                await processImage(fullPath, relativePath);
            }
        }
    }
}

await walk(INPUT_DIR);

console.log("\nDone.");