import { useState, useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
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
import resumePdf from '@assets/resume.pdf';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: React.ReactNode;
  timestamp: string;
}

const QUICK_CHIPS = ['About', 'Experience', 'Projects', 'Contact'];

const WELCOME_MESSAGE: Message = {
  id: '0',
  role: 'assistant',
  content: "👋 Hi, I'm Marco's portfolio copilot. Ask me about a project, my process, or try a quick tour.",
  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const hasStartedChat = messages.length > 0;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleCtaClick = (action: string) => {
    if (action === 'open-resume') {
      window.open(resumePdf, '_blank');
    }
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    
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
                onCtaClick={handleCtaClick}
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
              <p className="animate-fade-in-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
                I might not know that one yet, but here's what I can show you 👇
              </p>
              <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
                <QuickChips 
                  chips={QUICK_CHIPS} 
                  onChipClick={handleSendMessage}
                />
              </div>
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
    if (messages.length > 0) {
      setShowConfirmDialog(true);
    }
  };

  const confirmNewChat = () => {
    setMessages([]);
    setSelectedCategories([]);
    setShowConfirmDialog(false);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Header />
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

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-card-border rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold mb-2">Start a new chat?</h3>
            <p className="text-muted-foreground mb-6">
              This will clear your current conversation. Are you sure you want to continue?
            </p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowConfirmDialog(false)}
                className="px-4 py-2 rounded-lg hover:bg-accent transition-colors"
                data-testid="button-cancel-new-chat"
              >
                Cancel
              </button>
              <button
                onClick={confirmNewChat}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                data-testid="button-confirm-new-chat"
              >
                Start New Chat
              </button>
            </div>
          </div>
        </div>
      )}

      <main 
        className={`flex-1 flex flex-col transition-all duration-300 pt-14 ${
          sidebarOpen ? 'ml-[260px]' : 'ml-0 md:ml-[60px]'
        }`}
      >
        {!hasStartedChat ? (
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="w-full max-w-2xl space-y-6">
              <h1 className="text-2xl md:text-3xl font-normal text-center text-foreground mb-8">
                Explore Marco's portfolio
              </h1>
              <div className="space-y-4">
                <ChatInput 
                  onSend={handleSendMessage}
                  disabled={isTyping}
                />
                <QuickChips 
                  chips={QUICK_CHIPS} 
                  onChipClick={handleSendMessage}
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-4 md:px-6 py-8">
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

            <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm px-4 md:px-6 py-4">
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
          </>
        )}
      </main>
    </div>
  );
}
