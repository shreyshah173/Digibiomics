// src/components/ChatButton.js
import React, { useState } from 'react';
import Chatbox from './Chatbox';

function ChatButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleDiv = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDiv}
        className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center focus:outline-none"
      >
        <i className="fas fa-comments"></i>
      </button>
      {isVisible && (
        <div className="absolute bottom-full mb-2 transform -translate-x-3/4">
          <Chatbox />
        </div>
      )}
    </div>
  );
}

export default ChatButton;
