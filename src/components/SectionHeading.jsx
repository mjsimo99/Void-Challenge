export const SectionHeading = ({
  badge,
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignClasses = {
    center: "items-center text-center",
    left: "items-start text-left",
  };

  return (
    <div className={`flex flex-col gap-4 ${alignClasses[align]} ${className}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-100 rounded-full text-green-700 text-sm font-medium w-fit">
          {badge}
        </span>
      )}
      <h2 className="font-bold text-slate-900 text-3xl sm:text-4xl tracking-tight leading-tight max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-600 text-lg leading-7 max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
};
