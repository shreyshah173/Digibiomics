import React, { useState, useRef, useEffect } from 'react';
import { IoMdSend } from "react-icons/io";

function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container whenever messages update
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = { text: input, isUser: true };
      setMessages([...messages, newMessage]);

      // Simulate AI response
      setTimeout(() => {
        const aiMessage = { text: 'This is an AI response.', isUser: false };
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      }, 1000);

      setInput('');
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="w-80 min-h-[70vh] mr-2 bg-white p-4 border border-gray-300 rounded-lg shadow-lg flex flex-col justify-between">
      <div>
        <h2 className="text-lg font-bold mb-2">DigibiomicsAi</h2>
        <h3 className="text-sm text-gray-600 mb-4">Talk with AI</h3>
        <div ref={chatContainerRef} className="flex flex-col space-y-2 mb-4 overflow-y-auto max-h-[50vh]">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg ${
                message.isUser ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex items-center mt-2">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="flex-1 p-2 border border-gray-300 rounded-lg pr-10"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendMessage}
          className="absolute right-2 p-1 text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          <IoMdSend size={20} />
        </button>
      </div>
    </div>
  );
}

export default Chatbox;
