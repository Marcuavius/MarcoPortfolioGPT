import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { CannedResponse } from '@/data/canned';
import resumePdf from '@assets/resume.pdf';
import TextType from '@/components/TextType';
import { useState, useEffect } from 'react';

interface ReplyCannedProps {
  response: CannedResponse;
  onCtaClick?: (action: string) => void;
}

function ContactBullet({ bullet, delay }: { bullet: string; delay: number }) {
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLinks(true);
    }, delay + 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  if (bullet.includes('Email:')) {
    const parts = bullet.split('Email:');
    const email = parts[1].trim();
    return (
      <TextType
        text={bullet}
        as="span"
        className="text-muted-foreground"
        typingSpeed={5}
        initialDelay={delay}
        loop={false}
        showCursor={false}
      />
    );
  }
  
  if (bullet.includes('Phone:')) {
    const parts = bullet.split('Phone:');
    const phoneMatch = parts[1].match(/\+1 \(\d{3}\) \d{3}-\d{4}/);
    if (phoneMatch) {
      const phone = phoneMatch[0];
      const phoneClean = phone.replace(/\D/g, '');
      return showLinks ? (
        <span className="text-muted-foreground">
          {parts[0]}Phone: <a href={`tel:+${phoneClean}`} className="text-primary hover:underline" data-testid="link-phone">{phone}</a>
        </span>
      ) : (
        <TextType
          text={bullet}
          as="span"
          className="text-muted-foreground"
          typingSpeed={5}
          initialDelay={delay}
          loop={false}
          showCursor={false}
        />
      );
    }
  }
  
  if (bullet.includes('LinkedIn:')) {
    const parts = bullet.split('LinkedIn:');
    const linkedinUrl = parts[1].trim();
    return showLinks ? (
      <span className="text-muted-foreground">
        {parts[0]}LinkedIn: <a href={`https://${linkedinUrl}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-testid="link-linkedin">{linkedinUrl}</a>
      </span>
    ) : (
      <TextType
        text={bullet}
        as="span"
        className="text-muted-foreground"
        typingSpeed={5}
        initialDelay={delay}
        loop={false}
        showCursor={false}
      />
    );
  }
  
  if (bullet.includes('GitHub:')) {
    const parts = bullet.split('GitHub:');
    const githubUrl = parts[1].trim();
    return showLinks ? (
      <span className="text-muted-foreground">
        {parts[0]}GitHub: <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-testid="link-github">{githubUrl}</a>
      </span>
    ) : (
      <TextType
        text={bullet}
        as="span"
        className="text-muted-foreground"
        typingSpeed={5}
        initialDelay={delay}
        loop={false}
        showCursor={false}
      />
    );
  }
  
  if (bullet.includes('Goodreads:')) {
    const parts = bullet.split('Goodreads:');
    const goodreadsUrl = parts[1].trim();
    return showLinks ? (
      <span className="text-muted-foreground">
        {parts[0]}Goodreads: <a href={goodreadsUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-testid="link-goodreads">{goodreadsUrl}</a>
      </span>
    ) : (
      <TextType
        text={bullet}
        as="span"
        className="text-muted-foreground"
        typingSpeed={5}
        initialDelay={delay}
        loop={false}
        showCursor={false}
      />
    );
  }
  
  if (bullet.includes('View Full Resume')) {
    return showLinks ? (
      <span className="text-muted-foreground">
        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-testid="link-resume-view">📄 View Full Resume</a>
      </span>
    ) : (
      <TextType
        text={bullet}
        as="span"
        className="text-muted-foreground"
        typingSpeed={5}
        initialDelay={delay}
        loop={false}
        showCursor={false}
      />
    );
  }
  
  return (
    <TextType
      text={bullet}
      as="span"
      className="text-muted-foreground"
      typingSpeed={20}
      initialDelay={delay}
      loop={false}
      showCursor={false}
    />
  );
}

export default function ReplyCanned({ response, onCtaClick }: ReplyCannedProps) {
  const titleTypingSpeed = 8;
  const bulletTypingSpeed = 5;
  const titleDelay = 0;
  const isContactSection = response.title.includes("Let's Talk");
  const isAboutSection = response.title.includes("About Marco");
  const hideBullets = isContactSection || isAboutSection;
  
  // Calculate when title finishes typing
  const titleDuration = response.title.length * titleTypingSpeed;
  const bulletStartDelay = titleDelay + titleDuration + 100;
  
  // Calculate cumulative delays for each bullet
  const bulletDelays = response.bullets.reduce((acc, bullet, idx) => {
    if (idx === 0) {
      acc.push(bulletStartDelay);
    } else {
      const prevBullet = response.bullets[idx - 1];
      const prevDuration = prevBullet.length * bulletTypingSpeed;
      const prevDelay = acc[idx - 1];
      acc.push(prevDelay + prevDuration + 50);
    }
    return acc;
  }, [] as number[]);
  
  return (
    <Card className="p-6 bg-transparent border-none outline-none ring-0">
      <TextType
        text={response.title}
        as="h3"
        className="text-xl font-semibold mb-4"
        typingSpeed={titleTypingSpeed}
        initialDelay={titleDelay}
        loop={false}
        showCursor={false}
      />
      <ul className="space-y-2 mb-4">
        {response.bullets.map((bullet, idx) => {
          return (
            <li 
              key={idx} 
              className="flex items-start gap-2"
            >
              {!hideBullets && (
                <span 
                  className="text-primary mt-1 opacity-0 transition-opacity duration-200"
                  style={{
                    opacity: 1,
                    transitionDelay: `${bulletDelays[idx]}ms`
                  }}
                >•</span>
              )}
              {isContactSection ? (
                <ContactBullet bullet={bullet} delay={bulletDelays[idx]} />
              ) : (
                <TextType
                  text={bullet}
                  as="span"
                  className="text-muted-foreground"
                  typingSpeed={bulletTypingSpeed}
                  initialDelay={bulletDelays[idx]}
                  loop={false}
                  showCursor={false}
                />
              )}
            </li>
          );
        })}
      </ul>
      {response.disclaimer && (
        <p className="text-sm text-muted-foreground italic mb-4">{response.disclaimer}</p>
      )}
      {response.cta && (
        <Button
          onClick={() => onCtaClick?.(response.cta!.action)}
          data-testid={`button-${response.cta.action}`}
        >
          {response.cta.label}
        </Button>
      )}
    </Card>
  );
}
