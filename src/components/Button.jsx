export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  leftIcon,
  rightIcon,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 whitespace-nowrap";

  const variants = {
    primary:
      "bg-gradient-to-r from-green-600 to-green-800 text-white shadow-md hover:from-green-700 hover:to-green-900 focus:ring-green-500",
    secondary:
      "bg-white border-2 border-slate-300 text-slate-700 hover:border-slate-400 focus:ring-slate-400",
    red: "bg-red-600 text-white shadow-md hover:bg-red-700 focus:ring-red-500",
    outline:
      "bg-white/10 border-2 border-white/30 text-white backdrop-blur-sm hover:bg-white/20 focus:ring-white",
    white: "bg-white text-red-700 shadow-md hover:bg-red-50 focus:ring-red-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {leftIcon && <span className="shrink-0">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
