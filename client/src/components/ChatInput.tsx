import { useState } from 'react';
import { Plus, Mic, AudioWaveform } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [message, setMessage] = useState('');

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
      <div className="flex items-center gap-3 bg-muted/40 border border-border/30 rounded-full px-4 py-3 focus-within:border-border/60 transition-colors">
        <Plus className="h-5 w-5 text-muted-foreground flex-shrink-0" />
        
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything"
          disabled={disabled}
          className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground"
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
          type="button"
          className="flex-shrink-0 p-2 hover:bg-accent/50 rounded-full transition-colors"
          onClick={() => console.log('Advanced options')}
        >
          <AudioWaveform className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </form>
  );
}
