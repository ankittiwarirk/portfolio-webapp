import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-gray-200 fixed w-full z-10 shadow-md">
      <span className="font-bold text-xl">Ankit Tiwari</span>
      <div className="space-x-4">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
