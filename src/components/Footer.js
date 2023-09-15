import React from 'react';

export default function Footer() {
  return (
    <footer className="p-4 bottom-0 w-full z-10 flex flex-col items-center justify-center">
      <h1 className='text-gray-400'>Made with ❤️ by 
        <span className="text-blue-300">
          <a href="https://www.linkedin.com/in/dren-sokoli-0003a81a1/" target="_blank"> Dren Sokoli</a>
        </span>
      </h1>
      <p className="text-gray-400 mr-2 ">
        &copy; {new Date().getFullYear()}{' - '}
        <span className="text-blue-300">
          <a href="https://github.com/drensokoli/spoti-engine" target="_blank">Spoti-Engine</a>
        </span>
      </p>
    </footer>
  );
};