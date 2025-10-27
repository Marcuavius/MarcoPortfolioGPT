import ChatMessage from '../ChatMessage';

export default function ChatMessageExample() {
  return (
    <div className="space-y-4 p-8">
      <ChatMessage 
        role="assistant" 
        content={<p>👋 Hi, I'm Marco's portfolio copilot. Ask me about a project, my process, or try a quick tour.</p>}
      />
      <ChatMessage 
        role="user" 
        content="Show me the soccer site"
      />
      <ChatMessage 
        role="assistant" 
        content={<p>Here's the SoccerCoachConnect project - a full-stack job board connecting coaches and clubs.</p>}
      />
    </div>
  );
}
