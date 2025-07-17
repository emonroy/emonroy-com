import React, { useState } from 'react';

function App() {
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');

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
        setError('');

        try {
            const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/ask`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: newMessages }),
            });

            const data = await res.json();
            const assistantMessage = { role: 'assistant', content: data.answer };

            setMessages([...newMessages, assistantMessage]);
        } catch (err) {
            console.error(err);
            setError('Something went wrong.');
        }

        setInput('');
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row p-6 bg-gray-50 text-gray-800">
            {/* Left rail: Resume PDF */}
            <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0 h-screen">
                <h1 className="text-2xl font-bold mb-4">Eduardo Monroy - Resume</h1>
                <iframe
                    src="/eduardo-monroy-resume.pdf#navpanes=0"
                    title="Resume PDF"
                    className="w-full h-[80vh] border rounded shadow"
                />
                <a
                    href="/eduardo-monroy-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-blue-600 underline"
                >
                    Download PDF
                </a>
            </div>

            {/* Right rail: Chat */}
            <div className="md:w-1/2 md:pl-6 flex flex-col">
                <h2 className="text-xl font-semibold mb-2">Ask me about my resume</h2>

                <form onSubmit={askGPT} className="mb-2">
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
                        Ask
                    </button>
                </form>

                {/* Status section: Thinking... or Error */}
                {loading && (
                    <div className="mb-2 text-gray-500">Thinking…</div>
                )}
                {error && (
                    <div className="mb-2 p-3 bg-red-100 text-red-800 rounded">
                        {error}
                    </div>
                )}

                {/* Chat history */}
                <div className="space-y-2 overflow-y-auto flex-grow">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`p-3 rounded ${msg.role === 'user' ? 'bg-gray-200' : 'bg-green-100'}`}
                        >
                            <strong>{msg.role === 'user' ? 'You' : 'Assistant'}:</strong> {msg.content}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
