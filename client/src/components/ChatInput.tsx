import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

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

  return (
    <form onSubmit={handleSubmit} className="relative">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask about my work (e.g., 'Show me the soccer site' or 'process')"
        disabled={disabled}
        className="w-full pr-12 bg-input border-border/50 focus:border-border rounded-xl py-6"
        data-testid="input-chat"
      />
      <Button 
        type="submit" 
        size="icon" 
        disabled={!message.trim() || disabled}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg"
        data-testid="button-send"
        variant="ghost"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
