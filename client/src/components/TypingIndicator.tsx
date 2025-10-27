import { Bot } from 'lucide-react';

export default function TypingIndicator() {
  return (
    <div className="flex gap-4 mb-6" data-testid="typing-indicator">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
        <Bot className="h-5 w-5 text-primary-foreground" />
      </div>
      <div className="flex items-center gap-1 px-4 py-3">
        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
