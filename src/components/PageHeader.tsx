
interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <div className="py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">{title}</h1>
      {subtitle && <p className="text-gray-600 text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
