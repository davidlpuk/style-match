interface WireframeCardProps {
  children: React.ReactNode;
  className?: string;
}

export function WireframeCard({ children, className = '' }: WireframeCardProps) {
  return (
    <div className={`border-2 border-black bg-white p-6 ${className}`}>
      {children}
    </div>
  );
}
