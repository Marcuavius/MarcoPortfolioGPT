import { useState, useEffect } from 'react';
import { Plus, Mic, ArrowUp } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

const PLACEHOLDER_PROMPTS = [
  "Tell me about Marco's experience",
  "How do I contact Marco",
  "What did Marco do at StubHub"
];

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % PLACEHOLDER_PROMPTS.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex items-center gap-3 bg-[#2f2f2f] rounded-full px-4 py-3.5">
        <Plus className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={PLACEHOLDER_PROMPTS[placeholderIndex]}
          disabled={disabled}
          className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground/40 transition-all duration-500"
          data-testid="input-chat"
        />
        
        <button
          type="button"
          className="flex-shrink-0 p-2 hover:bg-accent/50 rounded-full transition-colors"
          onClick={() => console.log('Voice input')}
        >
          <Mic className="h-4 w-4 text-muted-foreground" />
        </button>
        
        <button
          type="submit"
          className="flex-shrink-0 p-2 bg-white hover:bg-gray-200 rounded-full transition-colors disabled:opacity-50"
          disabled={!message.trim() || disabled}
          data-testid="button-send"
        >
          <ArrowUp className="h-5 w-5 text-black" />
        </button>
      </div>
    </form>
  );
}
