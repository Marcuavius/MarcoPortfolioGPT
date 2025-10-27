import QuickChips from '../QuickChips';

export default function QuickChipsExample() {
  const chips = ['Tour', 'Projects', 'Process', 'Contact', 'About'];
  
  return (
    <div className="p-8">
      <QuickChips 
        chips={chips} 
        onChipClick={(chip) => console.log('Chip clicked:', chip)}
      />
    </div>
  );
}
