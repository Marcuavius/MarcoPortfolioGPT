import { Button } from '@/components/ui/button';
import { PanelLeftClose, PanelLeft, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onNewChat: () => void;
  onQuickPrompt: (prompt: string) => void;
  onCategoryToggle: (category: string) => void;
  selectedCategories: string[];
}

const QUICK_PROMPTS = ['Tour', 'Recent Work', 'Case Studies', 'Process', 'Pricing', 'Contact', 'About'];
const PROJECT_CATEGORIES = ['Web Apps', 'Design', 'Branding', 'UI/UX', 'Photography', 'Concepts', 'Marketing'];

export default function Sidebar({ 
  isOpen, 
  onToggle, 
  onNewChat, 
  onQuickPrompt,
  onCategoryToggle,
  selectedCategories
}: SidebarProps) {
  return (
    <>
      <aside 
        className={`fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'w-[280px]' : 'w-0 md:w-[60px]'
        }`}
      >
        <div className="flex flex-col h-full">
          {isOpen ? (
            <div className="flex flex-col h-full p-4">
              <Button 
                onClick={onNewChat}
                className="w-full mb-6 justify-start gap-2"
                data-testid="button-new-chat"
              >
                <Plus className="h-4 w-4" />
                New Chat
              </Button>
              
              <div className="flex-1 overflow-y-auto space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-wide text-muted-foreground mb-3 px-2">
                    Quick Prompts
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {QUICK_PROMPTS.map((prompt) => (
                      <Badge
                        key={prompt}
                        variant="secondary"
                        className="cursor-pointer hover:bg-accent transition-colors"
                        onClick={() => onQuickPrompt(prompt)}
                        data-testid={`chip-${prompt.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {prompt}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xs uppercase tracking-wide text-muted-foreground mb-3 px-2">
                    Project Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_CATEGORIES.map((category) => (
                      <Badge
                        key={category}
                        variant={selectedCategories.includes(category) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-accent transition-colors"
                        onClick={() => onCategoryToggle(category)}
                        data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-sidebar-border">
                <p className="text-xs text-center text-muted-foreground opacity-40">
                  Portfolio Chat — Theater Mode
                </p>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex flex-col items-center pt-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={onNewChat}
                data-testid="button-new-chat-collapsed"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </aside>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggle}
        className="fixed left-4 top-4 z-50"
        data-testid="button-toggle-sidebar"
      >
        {isOpen ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeft className="h-5 w-5" />}
      </Button>
    </>
  );
}
