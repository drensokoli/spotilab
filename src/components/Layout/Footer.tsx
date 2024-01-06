import React from 'react';

export default function Footer() {
  return (
    <>
      <div className="flex-grow"></div>
      <footer className="p-4 bottom-0 w-full flex flex-col items-center justify-center z-50">

        <div className="flex flex-col justify-center items-center text-gray-300 py-1">
          <h1 className='text-center text-sm text-gray-400'>We are not related to Spotify AB or any of its partners in any way. All images are copyrighted by their respective copyright owners.</h1>
        </div>
        <h1 className='text-gray-400 text-center'>Made with ❤️ by
          <span className="text-blue-300">
            <a href="https://www.linkedin.com/in/dren-sokoli-0003a81a1/" target="_blank"> Dren Sokoli</a>
          </span>
        </h1>
        <p className="text-gray-400 mr-2 text-center">
          &copy; {new Date().getFullYear()}{' - '}
          <span className="text-blue-300">
            <a href="https://github.com/drensokoli/soniclab" target="_blank">SonicLab</a>
          </span>
        </p>
      </footer>
    </>
  );
};
