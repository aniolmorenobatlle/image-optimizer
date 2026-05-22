# Image Optimizer

A simple image optimization tool built with Node.js and Sharp.

This project automatically:
- resizes images
- converts them to WebP
- converts them to AVIF
- preserves folder structure
- generates multiple responsive sizes

Designed for static websites, Laravel projects, SEO optimization, and performance improvements.

---

## Features

- Recursive folder processing
- WebP generation
- AVIF generation
- Multiple responsive sizes
- Automatic directory creation
- Preserves input folder structure
- Simple and dependency-light

---

## Project Structure

```text
image-optimizer/
│
├── input/
│   └── example.jpg
│
├── output/
│   └── example/
│
├── scripts/
│   └── optimize.js
│
├── package.json
├── README.md
└── .gitignore
```

---

## Requirements

- Node.js 18+
- npm

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

---

## Usage

Place your images inside:

```text
input/
```

Then run:

```bash
npm run optimize
```

Optimized images will be generated inside:

```text
output/
```

---

## Supported Input Formats

Currently supported:
- JPG
- JPEG
- PNG
- WebP
- AVIF

---

## Generated Formats

The optimizer generates:
- WebP
- AVIF

For each configured responsive size.

---

## Default Sizes

```js
const sizes = [640, 1280, 1920];
```

Example output:

```text
output/
├── webp/
│   └── hero-1280.webp
│
└── avif/
    └── hero-1280.avif
```

---

## Performance Benefits

Using optimized next-gen formats can significantly reduce:
- page weight
- bandwidth usage
- LCP
- loading times

Especially useful for:
- PageSpeed Insights
- Core Web Vitals
- SEO optimization

---

## Dependencies

- Sharp