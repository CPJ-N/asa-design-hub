// src/components/Hero.tsx
export function Hero() {
    return (
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-6">Arpit Singh Ahluwalia</h1>
          <p className="text-xl text-gray-600 mb-8">
            Product Designer crafting intuitive and impactful digital experiences
          </p>
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            Get in touch
          </a>
        </div>
      </section>
    );
  }