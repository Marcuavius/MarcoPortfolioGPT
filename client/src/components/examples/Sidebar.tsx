import { useState } from 'react';
import Sidebar from '../Sidebar';

export default function SidebarExample() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <Sidebar
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      onNewChat={() => console.log('New chat clicked')}
      onQuickPrompt={(prompt) => console.log('Quick prompt:', prompt)}
      onCategoryToggle={(category) => {
        setSelectedCategories(prev =>
          prev.includes(category)
            ? prev.filter(c => c !== category)
            : [...prev, category]
        );
      }}
      selectedCategories={selectedCategories}
    />
  );
}
