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
        "flex gap-3 md:gap-4 mb-6",
        role === 'user' ? 'justify-end' : 'justify-start'
      )}
      data-testid={`message-${role}`}
    >
      {role === 'assistant' && (
        <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-sm bg-muted flex items-center justify-center">
          <Bot className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
        </div>
      )}
      
      <div 
        className={cn(
          "max-w-[85%] md:max-w-2xl",
          role === 'user' 
            ? 'bg-[#303030] text-foreground rounded-2xl px-4 py-3' 
            : 'space-y-2'
        )}
      >
        {content}
        {timestamp && role === 'user' && (
          <p className="text-xs opacity-40 mt-1">
            {timestamp}
          </p>
        )}
      </div>
      
      {role === 'user' && (
        <div className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-sm bg-muted flex items-center justify-center">
          <User className="h-4 w-4 md:h-5 md:w-5 text-foreground" />
        </div>
      )}
    </div>
  );
}
