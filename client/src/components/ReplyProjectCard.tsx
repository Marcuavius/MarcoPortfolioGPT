import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';

interface ReplyProjectCardProps {
  project: Project;
}

export default function ReplyProjectCard({ project }: ReplyProjectCardProps) {
  return (
    <Card className="overflow-hidden bg-transparent border-none outline-none ring-0" data-testid={`card-project-${project.slug}`}>
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={project.heroImage} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.category.slice(0, 3).map((cat) => (
            <Badge key={cat} variant="secondary" className="text-xs">
              {cat}
            </Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 animate-fade-in-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>{project.title}</h3>
        <p className="text-muted-foreground mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          {project.summary}
        </p>
        
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2 animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>Key Impact:</h4>
          <ul className="space-y-1">
            {project.impact.map((item, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-2 text-sm text-muted-foreground animate-fade-in-up opacity-0"
                style={{ 
                  animationDelay: `${300 + (idx * 200)}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <span className="text-primary mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        {project.link !== '#' && (
          <Button 
            variant="default" 
            className="w-full group"
            onClick={() => window.open(project.link, '_blank')}
            data-testid={`button-view-project-${project.slug}`}
          >
            View Project
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        )}
      </div>
    </Card>
  );
}
