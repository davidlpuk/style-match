interface WireframeInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  helper?: string;
  className?: string;
}

export function WireframeInput({ label, type = 'text', placeholder, helper, className = '' }: WireframeInputProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block font-mono text-xs uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className="w-full border-2 border-black px-4 py-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        {type === 'password' && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
            👁
          </span>
        )}
      </div>
      {helper && (
        <p className="font-mono text-xs text-gray-600">{helper}</p>
      )}
    </div>
  );
}
