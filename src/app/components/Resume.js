const Resume = () => {
  return (
    <section id="resume" className="p-10">
      <h2 className="text-3xl font-bold text-center">Resume</h2>
      <p className="mt-4 text-center">Download my resume below:</p>
      <a
        href="/path/to/your/resume.pdf"
        className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
