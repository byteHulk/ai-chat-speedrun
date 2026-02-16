import React, { useState, useEffect, useRef } from 'react';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import Header from './components/Header';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Yo Hank！我是 mac，你的 AI 助手。人生就是一场 speedrun，我们来高效地过剧情吧！🎮💥'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef(null);

  const responses = [
    '好嘞，收到！我们来过剧情吧 🏁',
    '明白，马上处理！⚡',
    '收到！高效解决！🎮',
    'OK，继续！💪',
    '收到！正在执行... 🚀',
    '明白，看我的！🎯'
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  const handleSendMessage = async (content) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content
    };
    setMessages(prev => [...prev, userMessage]);

    // Show typing indicator
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const aiMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: randomResponse
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <div className="app">
      <Header />
      <div className="chat-container" ref={chatContainerRef}>
        <MessageList messages={messages} />
        {isTyping && (
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
      <MessageInput onSendMessage={handleSendMessage} isTyping={isTyping} />
    </div>
  );
}

export default App;
