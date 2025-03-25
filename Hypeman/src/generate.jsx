// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";
import React, { useState } from 'react';

const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.OPENAI_API_KEY,
});

const GenerateComponent = ({ tag }) => {
    const [response, setResponse] = useState('');
    const [input, setInput] = useState('');

    const Generate = async () => {
        const messages = [{ role: "system", content: "You are a helpful assistant." }];
        if (tag) {
            messages.push({ role: "system", content: `${tag}` });
        }
        messages.push({ role: "user", content: input });

        const completion = await openai.chat.completions.create({
            messages: messages,
            model: "deepseek-chat",
            temperature: 1.3,
            max_tokens: 150,
        });

        setResponse(completion.choices[0].message.content);
    };

    return (
        <div>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter your question" 
            />
            <button onClick={Generate}>Generate</button>
            <p>{response}</p>
        </div>
    );
};

export default GenerateComponent;