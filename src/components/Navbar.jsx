import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Buscando:', searchTerm);
  };

  return (
    <nav className="relative flex items-center justify-between p-2 text-xl text-white backdrop-blur-none bg-black/40 z-10">
      {/* Enlaces grandes */}
      <div className="hidden md:flex items-center">
        <a href="/" className="mr-4 hover:text-gray-300">Home</a>
        <a href="/" className="mr-4 hover:text-gray-300">Contacto</a>
      </div>

      {/* Logo */}
      <div className="flex-grow flex justify-center items-center space-x-2">
        <img className="h-16" src="/public/icono.png" alt="Icono de prueba" />
        <h1 className="font-bold text-2xl">Vida <br /> Perruna</h1>
      </div>

      {/* Botones derechos */}
      <div className="flex items-center">
        <button className="hover:text-gray-300" onClick={toggleSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <button className="md:hidden ml-4" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Campo de búsqueda */}
      {isSearchOpen && (
        <form
          onSubmit={handleSearch}
          className="absolute top-full left-0 w-full p-2 bg-black/80 flex justify-center z-20"
        >
          <input
            type="text"
            placeholder="Buscar..."
            className="w-3/4 p-2 rounded bg-white text-black"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="ml-2 bg-yellow-400 px-4 py-2 rounded text-black hover:bg-yellow-500">
            Buscar
          </button>
        </form>
      )}

      {/* Menú móvil */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} flex-col absolute top-full left-0 w-full bg-black/80 md:hidden z-20`}>
        <a href="/" className="p-4 hover:bg-gray-800">Home</a>
        <a href="/" className="p-4 hover:bg-gray-800">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;
