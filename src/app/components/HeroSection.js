const HeroSection = () => {
  return (
    <section className="bg-gray-100 p-10 text-center">
      <h2 className="text-4xl font-bold ">Hello, I&apos;m Shem!</h2>
      <p className="mt-4 text-xl">
        I&apos;m a web developer with a passion for creating beautiful and
        functional websites.
      </p>
      <a
        href="#projects"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        View My Projects
      </a>
    </section>
  );
};

export default HeroSection;
