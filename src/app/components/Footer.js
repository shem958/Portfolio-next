const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-white">© {new Date().getFullYear()} My Portfolio</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            LinkedIn
          </a>
        </div>
        <a href="#top" className="text-white hover:text-gray-400 mt-4 block">
          Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
