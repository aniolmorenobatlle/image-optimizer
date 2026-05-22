# Media Optimizer

A lightweight media optimization toolkit built with Node.js, Sharp, and FFmpeg.

This project automatically:

* resizes images
* converts images to WebP
* converts images to AVIF
* converts GIFs to WebM
* converts GIFs to MP4
* preserves folder structure
* generates responsive assets
* creates output directories automatically

Designed for static websites, Laravel projects, SEO optimization, and performance-focused workflows.

---

# Features

## Image Optimization

* Recursive folder processing
* WebP generation
* AVIF generation
* Multiple responsive sizes
* Automatic directory creation
* Preserves input folder structure

## GIF Optimization

* GIF → WebM conversion
* GIF → MP4 conversion
* Optimized video output
* Fast-start MP4 support
* Preserves folder structure

---

# Project Structure

```text
media-optimizer/
│
├── input/
│   ├── images/
│   │   └── example/
│   │
│   └── videos/
│       └── example/
│
├── output/
│   ├── images/
│   │   ├── webp/
│   │   └── avif/
│   │
│   └── videos/
│       ├── webm/
│       └── mp4/
│
├── scripts/
│   ├── optimize-images.js
│   ├── optimize-gifs.js
│   └── helper.js
│
├── package.json
├── README.md
└── .gitignore
```

---

# Requirements

* Node.js 18+
* npm
* FFmpeg

---

# Installation

Clone the repository:

```bash
git clone https://github.com/aniolmorenobatlle/media-optimizer.git
```

Install dependencies:

```bash
npm install
```

---

# FFmpeg Installation

Required for GIF video conversion.

## macOS

```bash
brew install ffmpeg
```

## Ubuntu / Debian

```bash
sudo apt install ffmpeg
```

## Windows

Download FFmpeg from:

https://ffmpeg.org/download.html

---

# Usage

## Optimize Images

Place images inside:

```text
input/images/
```

Run:

```bash
npm run optimize:images
```

Generated files:

```text
output/images/
```

---

## Optimize GIFs

Place GIF files inside:

```text
input/videos/
```

Run:

```bash
npm run optimize:gifs
```

Generated files:

```text
output/videos/
```

---

# Supported Image Formats

Input formats:

* JPG
* JPEG
* PNG
* WebP
* AVIF

Generated formats:

* WebP
* AVIF

---

# Supported Video Formats

Input formats:

* GIF

Generated formats:

* WebM
* MP4

---

# Default Responsive Sizes

```js
const sizes = [640, 1280, 1920];
```

Example image output:

```text
output/images/
├── webp/
│   └── hero-1280.webp
│
└── avif/
    └── hero-1280.avif
```

Example video output:

```text
output/videos/
├── webm/
│   └── animation.webm
│
└── mp4/
    └── animation.mp4
```

---

# Performance Benefits

Using optimized next-generation formats can significantly reduce:

* page weight
* bandwidth usage
* loading times
* Largest Contentful Paint (LCP)

Useful for:

* Core Web Vitals
* PageSpeed Insights
* SEO optimization
* static websites
* modern frontend workflows

---

# Dependencies

## Images

* Sharp

## Video

* FFmpeg
