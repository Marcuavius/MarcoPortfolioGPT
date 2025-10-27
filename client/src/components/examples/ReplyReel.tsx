import ReplyReel from '../ReplyReel';
import { PROJECTS } from '@/data/projects';

export default function ReplyReelExample() {
  return (
    <div className="p-8 max-w-4xl">
      <ReplyReel 
        projects={PROJECTS.slice(0, 3)} 
        onProjectClick={(project) => console.log('Project clicked:', project.title)}
      />
    </div>
  );
}
