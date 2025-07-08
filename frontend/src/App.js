import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  const askGPT = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      return;
    }

    // Add new user question
    const newMessages = [
      ...messages,
      { role: 'user', content: input },
    ];

    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/ask`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      const assistantMessage = { role: 'assistant', content: data.answer };

      setMessages([...newMessages, assistantMessage]);
      setAnswer(data.answer);
    } catch (err) {
      console.error(err);
      setAnswer('Something went wrong.');
    }

    setInput('');
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Ask Me About My Resume</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Resume</h2>
        <p className="bg-white p-4 rounded shadow whitespace-pre-line">
        I'm a software engineer with over 11 years of experience across various industries, including game development and social networks
        </p>
      </div>

      <form onSubmit={askGPT} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="w-full p-3 border border-gray-300 rounded mb-2"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {loading ? 'Thinking…' : 'Ask'}
        </button>
      </form>

      {answer && (
        <div className="mt-4 p-4 bg-green-100 rounded">
          <strong>Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default App;
