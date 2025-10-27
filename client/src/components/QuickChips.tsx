import { Badge } from '@/components/ui/badge';

interface QuickChipsProps {
  chips: string[];
  onChipClick: (chip: string) => void;
}

export default function QuickChips({ chips, onChipClick }: QuickChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {chips.map((chip) => (
        <Badge
          key={chip}
          variant="outline"
          className="cursor-pointer hover:bg-accent transition-colors px-3 py-1"
          onClick={() => onChipClick(chip)}
          data-testid={`quick-chip-${chip.toLowerCase()}`}
        >
          {chip}
        </Badge>
      ))}
    </div>
  );
}
