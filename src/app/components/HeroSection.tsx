import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-rose-500">
      <div className="z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 p-3">
          Welcome to TechNova Innovations
        </h1>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Innovative technology solutions driving digital transformation and
          empowering businesses to achieve their full potential.
        </p>
        <Link
          href="/about"
          className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-full font-semibold transition duration-300"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
