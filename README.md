# emonroy-com

An AI-powered personal site that lets recruiters ask questions about your resume and get smart, conversational answers — powered by OpenAI's GPT API.

Built by Eduardo Monroy, a Senior Software Engineer with 11+ years of experience at companies like LinkedIn, with a passion for clean code, great UX, and clever AI tools.

---

## ✨ Features

- 🤖 AI answers recruiter questions about your background  
- 🧠 Memory: follows up on previous questions in a conversation  
- 📄 Injects your real resume + personality into GPT context (handled on the server)
- ⚛️ Built with React, Tailwind, Express, and OpenAI's API  
- 💬 Deployable as a public portfolio chat or private tool  

---

## 🧱 Tech Stack

- **Frontend**: React (Create React App), TailwindCSS  
- **Backend**: Node.js, Express, OpenAI API  
- **API**: `chat/completions` endpoint (GPT-3.5 / GPT-4)

---

## 🚀 Running Locally

### 1. Clone the repo

```bash
git clone https://github.com/emonroy/emonroy-com.git
cd emonroy-com
```

---

### 2. Setup and run backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```
OPENAI_API_KEY=sk-...
```

Start the backend server:

```bash
node index.js
```

> Server runs at `http://localhost:5000`

---

### 3. Setup and run frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend/` directory:

```
REACT_APP_BACKEND_URL=http://localhost:5000
```

Start the frontend:

```bash
npm start
```

Then open http://localhost:3000 in your browser.

---

## 📄 Resume PDF

- The resume PDF is embedded in the left rail of the interface and available for download via a static link (/eduardo-monroy-resume.pdf).

- This file should be placed in the frontend/public/ directory so that it's served efficiently as a static asset.

- **Static files are cached and served by the hosting provider (e.g., Vercel/Netlify), ensuring fast delivery and minimal server load — even during high traffic.**

---

## 📦 Deployment

You can deploy the app easily with:

- **Frontend**: [Vercel](https://vercel.com) or [Netlify](https://netlify.com)  
- **Backend**: [Render](https://render.com), [Railway](https://railway.app), or [Fly.io](https://fly.io)

> Make sure to update `REACT_APP_BACKEND_URL` in the frontend environment variables to match your deployed backend.

---

## 👋 About Me

I'm a Senior Software Engineer with over a decade of experience in frontend development, game engines, and leading product-focused teams. Currently building premium features at LinkedIn. I enjoy playing video games, working out, eating outside, watching movies, and playing board games with friends.

---

## 📄 Attribution

Favicon:
[By Twitter, CC BY 4.0](https://commons.wikimedia.org/w/index.php?curid=80937197)
