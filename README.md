# Assignment 13 – Web Component Library (React + TypeScript)

A small UI component library.  
This repo adds **code quality checks**, **GitHub Actions CI**, and **Docker** on port **8018**.

## 1) Requirements

- Node.js 18+ (recommend 20)
- npm
- Git
- Docker

## 2) Install

```bash
npm install
```

## 3) Run (development)

```bash
npm start
# open http://localhost:3000
```

## 4) Storybook (docs)

```bash
npm run storybook
# open http://localhost:6006
```

## 5) Code Quality

```bash
# format code
npm run format

# lint code (no warnings allowed)
npm run lint

# test once in CI mode
npm run test:ci
```

- **Pre-commit hook (Husky + lint-staged)** runs `npm run test:ci` and formatting on **staged files**.  
  If something fails, the commit is blocked.  
  Hook file: `.husky/pre-commit`

## 6) GitHub Actions (CI)

Workflow file: `.github/workflows/node.js.yml`  
It runs on every push and pull request:

1. `npm ci`
2. `npm run lint`
3. `npm run test:ci`
4. `npm run build`

If CI fails, the PR shows a **red** status.

## 7) Docker (production build on port 8018)

Build image:

```bash
docker build -t chen_yaohuang_coding_assignment13 .
```

Run container (use required container name):

```bash
docker run --rm -p 8018:8018   --name chen_yaohuang_coding_assignment13   chen_yaohuang_coding_assignment13

# open http://127.0.0.1:8018
```
