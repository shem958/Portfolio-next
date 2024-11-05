const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-teal-500 p-10 text-center">
      <h2 className="text-4xl font-bold text-white">Hello, I&apos;m Shem!</h2>
      <p className="mt-4 text-xl text-white">
        I&apos;m a web developer with a passion for creating beautiful and
        functional websites.
      </p>
      <a
        href="#projects"
        className="mt-6 inline-block bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 transition"
      >
        View My Projects
      </a>
    </section>
  );
};

export default HeroSection;
