import ChatInput from '../ChatInput';

export default function ChatInputExample() {
  return (
    <div className="p-8 max-w-3xl">
      <ChatInput onSend={(msg) => console.log('Message sent:', msg)} />
    </div>
  );
}
