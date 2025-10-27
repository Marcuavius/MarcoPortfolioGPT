import { useState, useRef, useEffect } from 'react';
import { Share2, Link2, Linkedin, Mail } from 'lucide-react';
import { SiX } from 'react-icons/si';

interface HeaderProps {
  sidebarOpen: boolean;
}

export default function Header({ sidebarOpen }: HeaderProps) {
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowSharePopup(false);
      }
    }

    if (showSharePopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSharePopup]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShareX = () => {
    const text = encodeURIComponent("Check out Marco's portfolio!");
    const url = encodeURIComponent(currentUrl);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(currentUrl);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const handleShareEmail = () => {
    const subject = encodeURIComponent("Check out Marco's portfolio");
    const body = encodeURIComponent(`I thought you might be interested in this portfolio:\n\n${currentUrl}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <header className={`fixed top-0 right-0 h-14 bg-[#212121] z-50 flex items-center justify-between px-4 transition-all duration-300 ${
      sidebarOpen ? 'left-[260px]' : 'left-0 md:left-[60px]'
    }`}>
      <div className="flex items-center">
        <h1 className="text-base font-medium text-foreground">MarcoGPT 5</h1>
      </div>

      <div className="relative" ref={popupRef}>
        <button
          onClick={() => setShowSharePopup(!showSharePopup)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[hsl(0,0%,11%)] transition-colors text-sm text-foreground"
          data-testid="button-share"
        >
          <Share2 className="h-4 w-4" />
          <span>Share</span>
        </button>

        {showSharePopup && (
          <div className="absolute right-0 top-12 bg-[hsl(0,0%,9%)] border border-[hsl(0,0%,18%)] rounded-lg shadow-xl p-2 min-w-[200px]">
            <div className="flex flex-col gap-1">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[hsl(0,0%,15%)] transition-colors text-sm text-foreground w-full text-left"
                data-testid="share-copy-link"
              >
                <Link2 className="h-5 w-5" />
                <span>{copied ? 'Copied!' : 'Copy link'}</span>
              </button>

              <button
                onClick={handleShareX}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[hsl(0,0%,15%)] transition-colors text-sm text-foreground w-full text-left"
                data-testid="share-x"
              >
                <SiX className="h-5 w-5" />
                <span>X</span>
              </button>

              <button
                onClick={handleShareLinkedIn}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[hsl(0,0%,15%)] transition-colors text-sm text-foreground w-full text-left"
                data-testid="share-linkedin"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </button>

              <button
                onClick={handleShareEmail}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[hsl(0,0%,15%)] transition-colors text-sm text-foreground w-full text-left"
                data-testid="share-email"
              >
                <Mail className="h-5 w-5" />
                <span>Email</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
