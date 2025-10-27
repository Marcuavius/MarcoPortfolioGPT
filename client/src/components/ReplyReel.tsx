import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/data/projects';

interface ReplyReelProps {
  projects: Project[];
  onProjectClick?: (project: Project) => void;
}

export default function ReplyReel({ projects, onProjectClick }: ReplyReelProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Found {projects.length} {projects.length === 1 ? 'project' : 'projects'}:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Card 
            key={project.slug}
            className="overflow-hidden bg-card border-none outline-none ring-0 cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
            onClick={() => onProjectClick?.(project)}
            data-testid={`card-project-reel-${project.slug}`}
          >
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={project.heroImage} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-1 mb-2">
                {project.category.slice(0, 2).map((cat) => (
                  <Badge key={cat} variant="secondary" className="text-xs">
                    {cat}
                  </Badge>
                ))}
              </div>
              <h4 className="font-semibold mb-1">{project.title}</h4>
              <p className="text-sm text-muted-foreground line-clamp-2">{project.summary}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
