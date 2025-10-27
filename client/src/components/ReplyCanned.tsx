import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { CannedResponse } from '@/data/canned';
import resumePdf from '@assets/resume.pdf';

interface ReplyCannedProps {
  response: CannedResponse;
  onCtaClick?: (action: string) => void;
}

function renderBulletContent(bullet: string) {
  if (bullet.includes('Email:')) {
    const parts = bullet.split('Email:');
    const email = parts[1].trim();
    return (
      <>
        {parts[0]}Email: <a href={`mailto:${email}`} className="text-primary hover:underline" data-testid="link-email">{email}</a>
      </>
    );
  }
  
  if (bullet.includes('Phone:')) {
    const parts = bullet.split('Phone:');
    const phoneMatch = parts[1].match(/\+1 \(\d{3}\) \d{3}-\d{4}/);
    if (phoneMatch) {
      const phone = phoneMatch[0];
      const phoneClean = phone.replace(/\D/g, '');
      return (
        <>
          {parts[0]}Phone: <a href={`tel:+${phoneClean}`} className="text-primary hover:underline" data-testid="link-phone">{phone}</a>
        </>
      );
    }
  }
  
  if (bullet.includes('LinkedIn:')) {
    const parts = bullet.split('LinkedIn:');
    const linkedinUrl = parts[1].trim();
    return (
      <>
        {parts[0]}LinkedIn: <a href={`https://${linkedinUrl}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-testid="link-linkedin">{linkedinUrl}</a>
      </>
    );
  }
  
  if (bullet.includes('GitHub:')) {
    const parts = bullet.split('GitHub:');
    const githubUrl = parts[1].trim();
    return (
      <>
        {parts[0]}GitHub: <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-testid="link-github">{githubUrl}</a>
      </>
    );
  }
  
  if (bullet.includes('Goodreads:')) {
    const parts = bullet.split('Goodreads:');
    const goodreadsUrl = parts[1].trim();
    return (
      <>
        {parts[0]}Goodreads: <a href={goodreadsUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-testid="link-goodreads">{goodreadsUrl}</a>
      </>
    );
  }
  
  if (bullet.includes('Download: Marco Alibaksh Resume')) {
    const parts = bullet.split('Download:');
    return (
      <>
        {parts[0]}Download: <a href={resumePdf} download="Marco_Alibaksh_Resume.pdf" className="text-primary hover:underline" data-testid="link-resume-download">Marco Alibaksh Resume</a>
      </>
    );
  }
  
  return bullet;
}

export default function ReplyCanned({ response, onCtaClick }: ReplyCannedProps) {
  return (
    <Card className="p-6 bg-card border-none outline-none ring-0">
      <h3 className="text-xl font-semibold mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>{response.title}</h3>
      <ul className="space-y-2 mb-4">
        {response.bullets.map((bullet, idx) => (
          <li 
            key={idx} 
            className="flex items-start gap-2 animate-fade-in-up opacity-0"
            style={{ 
              animationDelay: `${100 + (idx * 200)}ms`,
              animationFillMode: 'forwards'
            }}
          >
            <span className="text-primary mt-1">•</span>
            <span className="text-muted-foreground">{renderBulletContent(bullet)}</span>
          </li>
        ))}
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
