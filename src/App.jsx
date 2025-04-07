import Navbar from './components/Navbar.jsx';
import ExpandableCardDemo from './components/Cards';
import { useState } from 'react';

function App() {
  const [mainTitle, setMainTitle] = useState('Yorkshire terrier');
  const [backgroundImage, setBackgroundImage] = useState('/iconofinal.png'); // Fondo predeterminado

  const handleCardClick = (title, imageUrl) => {
    setMainTitle(title);
    setBackgroundImage(imageUrl);
  };

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <Navbar />

        <div className="mt-10 px-4 sm:ml-10 md:ml-20 lg:ml-20">
          <h1 className="text-3xl sm:text-4xl font-semibold dark:text-white">
            <span className="sm:ml-10 md:ml-15 lg:ml-20 text-white">Enfermedades Caninas</span> <br />
          </h1>
          <span className="text-7xl sm:text-8xl md:text-9xl font-[Boldonse] leading-none block mt-4 sm:mt-6">
            <span className="text-yellow-300 sm:mr-10 md:mr-15 lg:mr-20">Perro</span> <br />
            <span className="text-5xl sm:text-8xl ml-10 sm:ml-20 md:ml-30 lg:ml-40  text-[rgba(0,0,0,0.4)] [-webkit-text-stroke:0.5px_yellow] font-[Boldonse]">{mainTitle}</span>
          </span>
        </div>

      <div className="flex text-white justify-end px-15 mt-90 sm:-mt-15  ">
  <div className="relative w-full sm:w-auto sm:size-30  sm:bg-transparent">
    <div className="absolute right-0 bottom-5 w-70 sm:bg-transparent 
                    overflow-y-auto max-h-60 sm:overflow-visible">
      <ExpandableCardDemo onCardClick={handleCardClick} />
    </div>
  </div>
</div>


      </div>
    </>
  );
}

export default App;