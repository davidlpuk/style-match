interface WireframeButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  onClick?: () => void;
  className?: string;
}

export function WireframeButton({ children, variant = 'primary', onClick, className = '' }: WireframeButtonProps) {
  const baseStyles = "px-6 py-3 font-mono text-sm transition-all";

  const variants = {
    primary: "border-2 border-black bg-white hover:bg-black hover:text-white",
    secondary: "border border-black bg-white hover:bg-gray-100",
    text: "border-none hover:underline"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
