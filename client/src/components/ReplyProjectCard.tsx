import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/data/projects';
import TextType from '@/components/TextType';
import { useState, useEffect } from 'react';
import ImageLightbox from '@/components/ImageLightbox';

function DelayedBullet({ delay }: { delay: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className={`text-primary mt-1 transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      •
    </span>
  );
}

interface ReplyProjectCardProps {
  project: Project;
}

export default function ReplyProjectCard({ project }: ReplyProjectCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  
  const titleTypingSpeed = 8;
  const summaryTypingSpeed = 5;
  const impactTypingSpeed = 5;
  
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

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  
  return (
    <>
      <Card className="overflow-hidden bg-transparent border-none outline-none ring-0" data-testid={`card-project-${project.slug}`}>
        {project.gallery ? (
          <div className="w-full overflow-hidden">
            <div className="grid grid-cols-2 gap-2 p-2">
              {project.gallery.map((image, idx) => (
                <div 
                  key={idx}
                  className="aspect-video overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(idx)}
                  data-testid={`image-thumbnail-${idx}`}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={project.heroImage} 
              alt={project.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
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
                <DelayedBullet delay={impactDelays[idx]} />
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
    
    {lightboxOpen && project.gallery && (
      <ImageLightbox
        images={project.gallery}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
      />
    )}
    </>
  );
}
