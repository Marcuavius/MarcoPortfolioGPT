import { cn } from '@/lib/utils';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: React.ReactNode;
  timestamp?: string;
}

export default function ChatMessage({ role, content, timestamp }: ChatMessageProps) {
  return (
    <div 
      className={cn(
        "flex gap-4 mb-6",
        role === 'user' ? 'justify-end' : 'justify-start'
      )}
      data-testid={`message-${role}`}
    >
      {role === 'assistant' && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <Bot className="h-5 w-5 text-primary-foreground" />
        </div>
      )}
      
      <div 
        className={cn(
          "max-w-[85%] md:max-w-lg",
          role === 'user' 
            ? 'bg-primary text-primary-foreground rounded-2xl rounded-br-md px-4 py-3' 
            : 'space-y-2'
        )}
      >
        {content}
        {timestamp && (
          <p className="text-xs opacity-40 mt-1">
            {timestamp}
          </p>
        )}
      </div>
      
      {role === 'user' && (
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
          <User className="h-5 w-5 text-accent-foreground" />
        </div>
      )}
    </div>
  );
}
