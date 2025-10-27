import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';
import TextType from '@/components/TextType';

interface ReplyProjectCardProps {
  project: Project;
}

export default function ReplyProjectCard({ project }: ReplyProjectCardProps) {
  const titleTypingSpeed = 15;
  const summaryTypingSpeed = 10;
  const impactTypingSpeed = 10;
  
  const titleDelay = 0;
  const titleDuration = project.title.length * titleTypingSpeed;
  
  const summaryDelay = titleDelay + titleDuration + 50;
  const summaryDuration = project.summary.length * summaryTypingSpeed;
  
  const impactHeaderDelay = summaryDelay + summaryDuration + 50;
  const impactHeaderDuration = "Key Impact:".length * impactTypingSpeed;
  
  // Calculate cumulative delays for impact items
  const impactDelays = project.impact.reduce((acc, item, idx) => {
    if (idx === 0) {
      acc.push(impactHeaderDelay + impactHeaderDuration + 50);
    } else {
      const prevItem = project.impact[idx - 1];
      const prevDuration = prevItem.length * impactTypingSpeed;
      const prevDelay = acc[idx - 1];
      acc.push(prevDelay + prevDuration + 50);
    }
    return acc;
  }, [] as number[]);
  
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
        
        <TextType
          text={project.title}
          as="h3"
          className="text-xl font-semibold mb-2"
          typingSpeed={titleTypingSpeed}
          initialDelay={titleDelay}
          loop={false}
          showCursor={false}
        />
        
        <TextType
          text={project.summary}
          as="p"
          className="text-muted-foreground mb-4"
          typingSpeed={summaryTypingSpeed}
          initialDelay={summaryDelay}
          loop={false}
          showCursor={false}
        />
        
        <div className="mb-4">
          <TextType
            text="Key Impact:"
            as="h4"
            className="text-sm font-medium mb-2"
            typingSpeed={impactTypingSpeed}
            initialDelay={impactHeaderDelay}
            loop={false}
            showCursor={false}
          />
          <ul className="space-y-1">
            {project.impact.map((item, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span 
                  className="text-primary mt-1 opacity-0 transition-opacity duration-200"
                  style={{
                    opacity: 1,
                    transitionDelay: `${impactDelays[idx]}ms`
                  }}
                >•</span>
                <TextType
                  text={item}
                  as="span"
                  className=""
                  typingSpeed={impactTypingSpeed}
                  initialDelay={impactDelays[idx]}
                  loop={false}
                  showCursor={false}
                />
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
