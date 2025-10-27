import { useState } from 'react';
import { PanelLeftClose, PanelLeft, SquarePen, ChevronRight, Folder } from 'lucide-react';
import { PROJECTS } from '@/data/projects';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onNewChat: () => void;
  onQuickPrompt: (prompt: string) => void;
  onCategoryToggle: (category: string) => void;
  selectedCategories: string[];
}

export default function Sidebar({ 
  isOpen, 
  onToggle, 
  onNewChat, 
  onQuickPrompt,
}: SidebarProps) {
  const [projectsExpanded, setProjectsExpanded] = useState(true);

  return (
    <>
      <aside 
        className={`fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'w-[260px]' : 'w-0 md:w-[60px]'
        }`}
      >
        <div className="flex flex-col h-full">
          {isOpen ? (
            <div className="flex flex-col h-full p-2">
              <button 
                onClick={onNewChat}
                className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-sidebar-accent transition-colors text-sm text-sidebar-foreground mb-4"
                data-testid="button-new-chat"
              >
                <SquarePen className="h-4 w-4" />
                <span>New chat</span>
              </button>
              
              <div className="flex-1 overflow-y-auto">
                <div className="mb-4">
                  <button
                    onClick={() => setProjectsExpanded(!projectsExpanded)}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-colors text-sm text-sidebar-foreground"
                    data-testid="button-toggle-projects"
                  >
                    <span className="font-medium">Projects</span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${projectsExpanded ? 'rotate-90' : ''}`} />
                  </button>
                  
                  {projectsExpanded && (
                    <div className="mt-1 space-y-0.5">
                      {PROJECTS.map((project) => (
                        <button
                          key={project.slug}
                          onClick={() => onQuickPrompt(project.title)}
                          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-colors text-sm text-sidebar-foreground/80"
                          data-testid={`project-${project.slug}`}
                        >
                          <Folder className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{project.title.replace('.com', '').replace('.net', '')}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="pt-2 border-t border-sidebar-border">
                <p className="text-xs text-center text-muted-foreground/40 px-2 py-2">
                  Portfolio Chat — Theater Mode
                </p>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex flex-col items-center pt-4">
              <button
                onClick={onNewChat}
                className="p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
                data-testid="button-new-chat-collapsed"
              >
                <SquarePen className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </aside>
      
      <button
        onClick={onToggle}
        className="fixed left-4 top-4 z-50 p-2 hover:bg-accent/50 rounded-lg transition-colors"
        data-testid="button-toggle-sidebar"
      >
        {isOpen ? <PanelLeftClose className="h-5 w-5" /> : <PanelLeft className="h-5 w-5" />}
      </button>
    </>
  );
}
