import ReplyProjectCard from '../ReplyProjectCard';
import { PROJECTS } from '@/data/projects';

export default function ReplyProjectCardExample() {
  return (
    <div className="p-8 max-w-2xl">
      <ReplyProjectCard project={PROJECTS[0]} />
    </div>
  );
}
