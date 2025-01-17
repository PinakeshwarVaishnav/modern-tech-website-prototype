import Image from "next/image";

const teamMembers = [
  {
    name: "Elena Rodriguez",
    role: "Founder & CEO",
    image: "/elena-rodriguez.jpeg",
    description:
      "Tech visionary with 15 years of startup leadership in AI and innovative technologies",
  },
  {
    name: "Emma Sinclair",
    role: "Chief Technology Officer",
    image: "/emma-sinclair.jpeg",
    description:
      "Machine learning expert specializing in cloud infrastructure and scalable tech solutions",
  },
  {
    name: "Marcus Chen",
    role: "Full-Stack Developer",
    image: "/marcus-chen.jpeg",
    description:
      "Cybersecurity specialist with expertise in blockchain and advanced web technologies",
  },
];

export default function TeamSection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {teamMembers.map((member) => (
        <TeamMemberCard key={member.name} {...member} />
      ))}
    </section>
  );
}

function TeamMemberCard({ name, role, image, description }) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <Image
        src={image}
        alt={name}
        height={500}
        width={500}
        className="w-full h-auto object-cover object-center transform transition-transform duration-300 hover:scale-105"
        quality={90}
      />
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-500 mb-2">{role}</p>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
