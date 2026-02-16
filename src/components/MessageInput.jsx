import React from 'react';

function MessageInput({ onSendMessage, isTyping }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(input);
    setInput('');
  };

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="输入消息..."
        disabled={isTyping}
      />
      <button type="submit" disabled={isTyping}>
        {isTyping ? '思考中...' : '发送'}
      </button>
    </form>
  );
}

export default MessageInput;
