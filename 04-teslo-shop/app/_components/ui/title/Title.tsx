interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className={`text-main my-7 text-4xl font-semibold`}>{title}</h1>

      {subtitle && <h3 className="mb-5 text-xl">{subtitle}</h3>}
    </div>
  );
};
