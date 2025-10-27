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
        typingSpeed={20}
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
          typingSpeed={20}
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
        typingSpeed={20}
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
        typingSpeed={20}
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
        typingSpeed={20}
        initialDelay={delay}
        loop={false}
        showCursor={false}
      />
    );
  }
  
  if (bullet.includes('Download: Marco Alibaksh Resume')) {
    const parts = bullet.split('Download:');
    return showLinks ? (
      <span className="text-muted-foreground">
        {parts[0]}Download: <a href={resumePdf} download="Marco_Alibaksh_Resume.pdf" className="text-primary hover:underline" data-testid="link-resume-download">Marco Alibaksh Resume</a>
      </span>
    ) : (
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
  const titleDelay = 0;
  const bulletStartDelay = 400;
  const isContactSection = response.title.includes("Let's Talk");
  
  return (
    <Card className="p-6 bg-[#2a2a2a] border-none outline-none ring-0">
      <TextType
        text={response.title}
        as="h3"
        className="text-xl font-semibold mb-4"
        typingSpeed={30}
        initialDelay={titleDelay}
        loop={false}
        showCursor={false}
      />
      <ul className="space-y-2 mb-4">
        {response.bullets.map((bullet, idx) => {
          const bulletDelay = bulletStartDelay + (idx * 800);
          
          return (
            <li 
              key={idx} 
              className="flex items-start gap-2"
            >
              <span className="text-primary mt-1">•</span>
              {isContactSection ? (
                <ContactBullet bullet={bullet} delay={bulletDelay} />
              ) : (
                <TextType
                  text={bullet}
                  as="span"
                  className="text-muted-foreground"
                  typingSpeed={20}
                  initialDelay={bulletDelay}
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
