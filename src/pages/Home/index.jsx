import React from "react";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the home page.</p>
      {/* make button to page about */}
      <a
        href="/about"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go to About Page
      </a>
    </div>
  );
};

export default Home;
