# Web Component Library (React + TypeScript + Storybook)

A small UI component library built with React, TypeScript, and styled-components. Includes Storybook docs, unit tests, and a Dockerfile that serves a production build on port 8083.

## Requirements

- Node.js 18+ (recommended 20)
- npm
- Docker

## Install

```bash
npm install
```

## Development (demo app)

```bash
npm start
# opens http://localhost:3000
```

## Storybook (interactive docs)

```bash
npm run storybook
# opens http://localhost:6006
```

## Run with Docker (production build on 8083)

Build image:

```bash
docker build -t chen_yaohuang_coding_assignment12 .
```

Run container:

```bash
docker run --rm -it -p 8083:8083 --name chen_yaohuang_coding_assignment12 chen_yaohuang_coding_assignment12
# open http://127.0.0.1:8083
```
