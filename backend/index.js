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

// Your resume and personal context
const resumeText = `
Frontend Developer with 4+ years of experience in React, Tailwind, and modern UI frameworks.
- Led projects using Next.js and Framer Motion
- Focused on UX, accessibility, and performance
`;

const personalInfo = `
Hobbies: Piano, hiking, indie game development
Fun fact: Built a voice-controlled app at a hackathon
Prefers remote, mid-size teams
`;

const systemPrompt = `
You are a helpful assistant answering recruiter questions about a frontend developer.

=== Resume ===
${resumeText}

=== Personal Info ===
${personalInfo}
`;

app.post('/api/ask', async (req, res) => {
    const { messages } = req.body;
  
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Missing or invalid messages array' });
    }
  
    try {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // or 'gpt-4' if you have access
        messages,
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
  
