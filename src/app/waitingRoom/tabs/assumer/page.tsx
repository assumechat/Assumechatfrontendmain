'use client';

import { useState, useRef, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import Image from 'next/image';

const ChatSystem = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'What are you studying?', sender: 'other', avatar: 'https://res.cloudinary.com/dipywb0lr/image/upload/v1746702005/image_qkwdzs.jpg' },
        { id: 2, text: 'I think you might be a computer science student!', sender: 'me', avatar: 'https://res.cloudinary.com/dipywb0lr/image/upload/v1746702005/image_jmhhxy.png' },
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const suggestions = [
        'Assume something about me',
        'Take a wild guess...',
        "What's your first impression of me?"
    ];

    const handleSend = () => {
        if (inputValue.trim()) {
            const newMessage = {
                id: messages.length + 1,
                text: inputValue,
                sender: 'me',
                avatar: 'https://res.cloudinary.com/dipywb0lr/image/upload/v1746702005/image_jmhhxy.png'
            };
            setMessages([...messages, newMessage]);
            setInputValue('');

            // Simulate response after 1 second
            setTimeout(() => {
                const response = {
                    id: messages.length + 2,
                    text: 'Interesting! Tell me more about that.',
                    sender: 'other',
                    avatar: 'https://res.cloudinary.com/dipywb0lr/image/upload/v1746702005/image_qkwdzs.jpg'
                };
                setMessages(prev => [...prev, response]);
            }, 1000);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="flex flex-col h-screen md:mt-32 mt-12">
            {/* Scrollable Messages Container */}
            <div className="flex-1 overflow-y-auto pb-32">
                <div className="p-4 space-y-4">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`flex items-start max-w-xs md:max-w-md lg:max-w-lg ${message.sender === 'me' ? 'flex-row-reverse' : ''}`}>
                                <div className="flex-shrink-0 h-8 w-8 rounded-full overflow-hidden">
                                    <Image
                                        src={message.avatar}
                                        alt="User avatar"
                                        width={32}
                                        height={32}
                                        className="object-cover"
                                    />
                                </div>
                                <div
                                    className={`mx-2 px-4 py-2 rounded-lg ${message.sender === 'me'
                                        ? 'bg-[#B30738] text-white rounded-tr-none'
                                        : 'bg-white text-gray-800 rounded-tl-none border border-gray-200'
                                        }`}
                                >
                                    {message.text}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
            </div>

            {/* Fixed Bottom Area */}
            <div className="fixed md:ml-72 bottom-0 left-0 right-0 bg-white">
                {/* Suggestions */}
                <div className="px-4 py-1 grid md:grid-cols-3 grid- w-full flex-wrap gap-2">
                    {suggestions.map((suggestion, index) => (
                        <button
                            key={index}
                            onClick={() => setInputValue(suggestion)}
                            className="text-sm md:text-lg border-1 border-gray-400 px-3 py-2 md:py-3 w-full hover:bg-gray-200 rounded-full text-gray-700 transition"
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4">
                    <div className="flex border border-gray-300 rounded-lg  items-center">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type your message here..."
                            className="flex-1 border  px-4 py-2 "
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim()}
                            className={`text-white px-4 py-2 `}
                        >
                            <FiSend color='#B30738' size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatSystem;