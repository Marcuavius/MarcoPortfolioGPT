import ReplyCanned from '../ReplyCanned';
import { CANNED } from '@/data/canned';

export default function ReplyCannedExample() {
  return (
    <div className="p-8 max-w-2xl">
      <ReplyCanned 
        response={CANNED.process} 
        onCtaClick={(action) => console.log('CTA clicked:', action)}
      />
    </div>
  );
}
