import ServiceCard from "../components/ServiceCard";

const serviceData = [
  {
    title: "Web Development",
    description: "Custom web solutions using modern technologies",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure design",
  },
  {
    title: "AI/ML Services",
    description: "Advanced machine learning and AI consulting",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-r from-blue-500 to-rose-400">
      <h1 className="text-4xl font-bold text-center p-6">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}
