# emonroy-com

An AI-powered personal site that lets recruiters ask questions about your resume and get smart, conversational answers — powered by OpenAI's GPT API.

Built by Eduardo Monroy, a Senior Software Engineer with 11+ years of experience at companies like LinkedIn, with a passion for clean code, great UX, and clever AI tools.

---

## ✨ Features

- 🤖 AI answers recruiter questions about your background  
- 🧠 Memory: follows up on previous questions in a conversation  
- 📄 Injects your real resume + personality into GPT context  
- ⚛️ Built with React, Tailwind, Express, and OpenAI's API  
- 💬 Deployable as a public portfolio chat or private tool  

---

## 🧱 Tech Stack

- Frontend: React (Create React App), TailwindCSS  
- Backend: Node.js, Express, OpenAI API  
- API: chat/completions endpoint (GPT-3.5 / GPT-4)

---

## 🚀 Running Locally

### 1. Clone the repo

git clone https://github.com/your-username/emonroy-com.git  
cd emonroy-com

### 2. Install and run backend

cd backend  
npm install

Create a `.env` file in the `backend/` directory with your OpenAI API key:

OPENAI_API_KEY=sk-...

Then start the server:

node index.js

### 3. Install and run frontend

cd ../frontend  
npm install  
npm start

Open http://localhost:3000 in your browser.

---

## 🧠 Personalization

Your resume and personality are embedded in the GPT system prompt inside:

frontend/src/App.js

You can update your real experience, tone, and hobbies there by editing the `systemMessage`.

---

## 📦 Deployment

Deploy using:

- **Frontend**: [Vercel](https://vercel.com) or [Netlify](https://netlify.com)  
- **Backend**: [Render](https://render.com) or [Railway](https://railway.app)

---

## 👋 About Me

I'm a Senior Software Engineer with over a decade of experience in frontend development, game engines, and leading product-focused teams. I care deeply about clean code, great UX, and building things that make an impact. I currently work at LinkedIn building premium features for millions of users. Outside of work, I enjoy playing video games, working out, eating out, watching movies, and playing board games with friends.
