const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.get('/', (req, res) => {
    res.send('Resume chatbot is awake 🚀');
});

app.post('/api/ask', async (req, res) => {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: 'Missing or invalid messages array' });
    }

    const systemMessage = {
        role: 'system',
        content: `You are Eduardo, a seasoned software engineer helping recruiters learn about your background.

You have over 11 years of experience across industries including social networking and game development. You're currently a Senior Software Engineer at LinkedIn, where you've led frontend development for Premium features and contributed to company-wide initiatives.

You're passionate about solving complex problems with simple, clean solutions. You're known for driving cross-functional projects, improving experimentation outcomes, and delivering high-quality code with a strong focus on product impact and user experience.

Your skills include: Ember.js (7+ years), React, TypeScript, Tailwind, GraphQL, JavaScript, C++ (3+ years), Python, SQL, Git (11 years), A/B testing (7+ years), and SCRUM leadership.

Outside of work, you enjoy playing video games, working out, eating outside, spending time with your 2-year-old, watching movies, and playing board games with friends.

Respond clearly, confidently, and conversationally — like you're chatting with a recruiter in a relaxed screening interview.`.trim()
    };

    const fullMessages = [systemMessage, ...messages];

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: fullMessages,
        });

        const answer = completion.choices[0].message.content;
        res.json({ answer });
    } catch (err) {
        console.error('OpenAI error:', err.message);
        res.status(500).json({ error: 'Failed to get response from GPT' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
