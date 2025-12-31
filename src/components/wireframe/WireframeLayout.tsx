interface WireframeLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
  activeTab?: 'today' | 'closet' | 'profile';
  showHeader?: boolean;
  headerLeft?: React.ReactNode;
  headerRight?: React.ReactNode;
  title?: string;
}

export function WireframeLayout({
  children,
  showNav = false,
  activeTab,
  showHeader = false,
  headerLeft,
  headerRight,
  title
}: WireframeLayoutProps) {
  return (
    <div className="min-h-screen bg-white font-mono flex flex-col">
      {/* Status Bar */}
      <div className="border-b border-black px-4 py-2 text-xs">
        9:41
      </div>

      {/* Header */}
      {showHeader && (
        <div className="border-b border-black px-4 py-4 flex items-center justify-between">
          <div>{headerLeft}</div>
          {title && <div className="font-bold text-sm uppercase">{title}</div>}
          <div>{headerRight}</div>
        </div>
      )}

      {/* Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      {showNav && (
        <nav className="border-t-2 border-black grid grid-cols-3">
          <button className={`py-4 text-center border-r border-black ${activeTab === 'today' ? 'bg-black text-white' : ''}`}>
            <div className="text-lg">★</div>
            <div className="text-xs">Today</div>
          </button>
          <button className={`py-4 text-center border-r border-black ${activeTab === 'closet' ? 'bg-black text-white' : ''}`}>
            <div className="text-lg">▤</div>
            <div className="text-xs">Closet</div>
          </button>
          <button className={`py-4 text-center ${activeTab === 'profile' ? 'bg-black text-white' : ''}`}>
            <div className="text-lg">○</div>
            <div className="text-xs">Profile</div>
          </button>
        </nav>
      )}
    </div>
  );
}
