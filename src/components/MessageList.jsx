import React from 'react';

function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((message) => (
        <Message
          key={message.id}
          type={message.type}
          content={message.content}
        />
      ))}
    </div>
  );
}

function Message({ type, content }) {
  return (
    <div className={`message ${type}`}>
      <div className="message-content">{content}</div>
    </div>
  );
}

export { MessageList, Message };
