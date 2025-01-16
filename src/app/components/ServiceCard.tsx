interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform">
      <div className="flex items-center mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
