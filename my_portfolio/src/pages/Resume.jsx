const Resume = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">My Resume</h1>

      <iframe
        src="/resume.pdf"
        title="Resume"
        width="80%"
        height="600px"
        className="border shadow-md"
      ></iframe>

      <a
        href="/resume.pdf"
        download="My_Resume.pdf"
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
