import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { CannedResponse } from '@/data/canned';

interface ReplyCannedProps {
  response: CannedResponse;
  onCtaClick?: (action: string) => void;
}

export default function ReplyCanned({ response, onCtaClick }: ReplyCannedProps) {
  return (
    <Card className="p-6 bg-card border-card-border">
      <h3 className="text-xl font-semibold mb-4">{response.title}</h3>
      <ul className="space-y-2 mb-4">
        {response.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            <span className="text-muted-foreground">{bullet}</span>
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
