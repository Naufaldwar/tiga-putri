import React from "react";

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page content.</p>
      {/* make button to home page */}
      <a
        href="/"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to Home Page
      </a>
    </div>
  );
};

export default About;
