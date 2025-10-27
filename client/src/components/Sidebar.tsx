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
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const [experienceExpanded, setExperienceExpanded] = useState(false);

  return (
    <>
      <aside 
        className={`fixed left-0 top-0 h-full bg-[#181818] transition-all duration-300 ease-in-out z-40 ${
          isOpen ? 'w-[260px]' : 'w-0 md:w-[60px]'
        }`}
      >
        <div className="flex flex-col h-full">
          {isOpen ? (
            <div className="flex flex-col h-full p-2">
              <button
                onClick={onToggle}
                className="p-2 hover:bg-[#303030] rounded-lg transition-colors mb-2 w-fit"
                data-testid="button-toggle-sidebar-inside"
              >
                <PanelLeftClose className="h-5 w-5" />
              </button>

              <button 
                onClick={onNewChat}
                className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-[#303030] transition-colors text-sm text-sidebar-foreground mb-2"
                data-testid="button-new-chat"
              >
                <SquarePen className="h-4 w-4" />
                <span>New chat</span>
              </button>

              <button
                onClick={() => setAboutExpanded(!aboutExpanded)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-[#303030] transition-colors text-sm text-sidebar-foreground mb-4"
                data-testid="button-toggle-about"
              >
                <span className="font-medium">About</span>
                <ChevronRight className={`h-4 w-4 transition-transform ${aboutExpanded ? 'rotate-90' : ''}`} />
              </button>

              {aboutExpanded && (
                <div className="mb-4 space-y-0.5">
                  <button
                    onClick={() => onQuickPrompt('about')}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#303030] transition-colors text-sm text-sidebar-foreground/80"
                    data-testid="about-item-about"
                  >
                    <span>About</span>
                  </button>
                  <button
                    onClick={() => onQuickPrompt('contact')}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#303030] transition-colors text-sm text-sidebar-foreground/80"
                    data-testid="about-item-contact"
                  >
                    <span>Contact</span>
                  </button>
                </div>
              )}

              <button
                onClick={() => setExperienceExpanded(!experienceExpanded)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-[#303030] transition-colors text-sm text-sidebar-foreground mb-4"
                data-testid="button-toggle-experience"
              >
                <span className="font-medium">Experience</span>
                <ChevronRight className={`h-4 w-4 transition-transform ${experienceExpanded ? 'rotate-90' : ''}`} />
              </button>

              {experienceExpanded && (
                <div className="mb-4 space-y-0.5">
                  <button
                    onClick={() => onQuickPrompt('StubHub experience')}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#303030] transition-colors text-sm text-sidebar-foreground/80"
                    data-testid="experience-stubhub"
                  >
                    <span>StubHub</span>
                  </button>
                  <button
                    onClick={() => onQuickPrompt('Omadeus experience')}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#303030] transition-colors text-sm text-sidebar-foreground/80"
                    data-testid="experience-omadeus"
                  >
                    <span>Omadeus</span>
                  </button>
                  <button
                    onClick={() => onQuickPrompt('Nuesoft experience')}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#303030] transition-colors text-sm text-sidebar-foreground/80"
                    data-testid="experience-nuesoft"
                  >
                    <span>Nuesoft</span>
                  </button>
                  <button
                    onClick={() => onQuickPrompt('Apres Diem experience')}
                    className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#303030] transition-colors text-sm text-sidebar-foreground/80"
                    data-testid="experience-apresdiem"
                  >
                    <span>Apres Diem</span>
                  </button>
                </div>
              )}
              
              <div className="flex-1 overflow-y-auto">
                <div className="mb-4">
                  <button
                    onClick={() => setProjectsExpanded(!projectsExpanded)}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-[#303030] transition-colors text-sm text-sidebar-foreground"
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
                          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-[#303030] transition-colors text-sm text-sidebar-foreground/80"
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
                  MarcoGPT 5.0
                </p>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex flex-col p-2 gap-2">
              <button
                onClick={onToggle}
                className="p-2 hover:bg-[#303030] rounded-lg transition-colors"
                data-testid="button-toggle-sidebar-collapsed"
              >
                <PanelLeft className="h-5 w-5" />
              </button>
              <button
                onClick={onNewChat}
                className="p-2 hover:bg-[#303030] rounded-lg transition-colors"
                data-testid="button-new-chat-collapsed"
              >
                <SquarePen className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
