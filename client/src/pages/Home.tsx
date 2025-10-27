import { useState, useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import QuickChips from '@/components/QuickChips';
import TypingIndicator from '@/components/TypingIndicator';
import ReplyCanned from '@/components/ReplyCanned';
import ReplyProjectCard from '@/components/ReplyProjectCard';
import ReplyReel from '@/components/ReplyReel';
import { matchKeywords } from '@/lib/keywordMatcher';
import { CANNED } from '@/data/canned';
import type { Project } from '@/data/projects';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: React.ReactNode;
  timestamp: string;
}

const QUICK_CHIPS = ['Tour', 'Projects', 'Process', 'Contact', 'About'];

const WELCOME_MESSAGE: Message = {
  id: '0',
  role: 'assistant',
  content: "👋 Hi, I'm Marco's portfolio copilot. Ask me about a project, my process, or try a quick tour.",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const match = matchKeywords(text);
      let assistantContent: React.ReactNode;

      switch (match.type) {
        case 'canned':
          if (match.key) {
            assistantContent = (
              <ReplyCanned 
                response={CANNED[match.key]} 
                onCtaClick={(action) => console.log('CTA:', action)}
              />
            );
          }
          break;
        
        case 'project':
          if (match.projects && match.projects.length === 1) {
            assistantContent = <ReplyProjectCard project={match.projects[0]} />;
          } else if (match.projects && match.projects.length > 1) {
            assistantContent = (
              <ReplyReel 
                projects={match.projects} 
                onProjectClick={(project: Project) => handleSendMessage(project.title)}
              />
            );
          }
          break;
        
        case 'projects':
          if (match.projects) {
            assistantContent = (
              <ReplyReel 
                projects={match.projects} 
                onProjectClick={(project: Project) => handleSendMessage(project.title)}
              />
            );
          }
          break;
        
        case 'fallback':
        default:
          assistantContent = (
            <div className="space-y-4">
              <p>I might not know that one yet, but here's what I can show you 👇</p>
              <QuickChips 
                chips={QUICK_CHIPS} 
                onChipClick={handleSendMessage}
              />
            </div>
          );
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setIsTyping(false);
      setMessages(prev => [...prev, assistantMessage]);
    }, 600);
  };

  const handleNewChat = () => {
    setMessages([WELCOME_MESSAGE]);
    setSelectedCategories([]);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        onNewChat={handleNewChat}
        onQuickPrompt={handleSendMessage}
        onCategoryToggle={(category) => {
          setSelectedCategories(prev =>
            prev.includes(category)
              ? prev.filter(c => c !== category)
              : [...prev, category]
          );
        }}
        selectedCategories={selectedCategories}
      />

      <main 
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarOpen ? 'ml-[280px]' : 'ml-0 md:ml-[60px]'
        }`}
      >
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-6 py-4">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground font-bold text-sm">
                M
              </div>
              <span className="font-medium hidden md:inline">Marco's Portfolio</span>
            </div>
            <nav className="flex gap-6 text-sm">
              <button 
                onClick={() => handleSendMessage('work')}
                className="hover:text-primary transition-colors"
                data-testid="nav-work"
              >
                Work
              </button>
              <button 
                onClick={() => handleSendMessage('about')}
                className="hover:text-primary transition-colors"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => handleSendMessage('contact')}
                className="hover:text-primary transition-colors"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </nav>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="max-w-3xl mx-auto">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                role={message.role}
                content={message.content}
                timestamp={message.timestamp}
              />
            ))}
            {isTyping && <TypingIndicator />}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="sticky bottom-0 bg-background border-t border-border px-6 py-4">
          <div className="max-w-3xl mx-auto space-y-3">
            <QuickChips 
              chips={QUICK_CHIPS} 
              onChipClick={handleSendMessage}
            />
            <ChatInput 
              onSend={handleSendMessage}
              disabled={isTyping}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
