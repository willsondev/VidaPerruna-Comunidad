"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../hooks/useOutsideClick";

const cards = [
  {
    description: "Epilepsia ",
    title: "Yorkshire terrier",
    src: "/fondo1.png",
    ctaText: "Play",
    ctaLink: "https://www.youtube.com/watch?v=6SPBg1ZadOU",
    content: () => {
      return (
       <p>
  <strong>Enfermedades propensas:</strong><br />
  Los perros, como el Yorkshire Terrier, pueden sufrir epilepsia, una afección neurológica que causa convulsiones. Otras razas propensas incluyen el Beagle, Pastor Alemán y Golden Retriever. <br /><br />

  <strong>Recomendaciones:</strong><br />
  Chequeos veterinarios, dieta balanceada, vacunas al día e información sobre la salud de la raza.
</p>


      );
    },
  },
  {
    description: "Diabetes",
    title: "Samoyedo",
    src: "/samoyedo.png",
    ctaText: "Play",
    ctaLink: "https://www.youtube.com/watch?v=mWSyCgKUk_Y",
    content: () => {
      return (
        <p>
           <strong>Enfermedades propensas:</strong><br />
       Diabetes:
La diabetes mellitus es otra enfermedad que afecta tanto a humanos como a perros.
          Las razas con mayor riesgo incluyen el Samoyedo, Schnauzer Miniatura, Poodle y Keeshond. <br />
          
          <strong>Recomendaciones:</strong><br />
  Chequeos veterinarios, dieta balanceada, vacunas al día e información sobre la salud de la raza.
        </p>
      );
    },
  },

  {
    description: "Cáncer",
    title: "Bóxer",
    src: "/boxer.png",
    ctaText: "Play",
    ctaLink: "https://www.youtube.com/watch?v=AcpHPjzSdlw",
    content: () => {
      return (
     <p>
           <strong>Enfermedades propensas:</strong><br />
       Cáncer:
Diversos tipos de cáncer, como el linfoma, el osteosarcoma y el cáncer de mama, pueden afectar a perros y humanos.
Razas grandes como el Bóxer, Rottweiler y Golden Retriever son más propensas a ciertos tipos de cáncer. <br />
          
          <strong>Recomendaciones:</strong><br />
  Chequeos veterinarios, dieta balanceada, vacunas al día e información sobre la salud de la raza.
        </p>

      );
    },
  },
  {
    description: "Enfermedades Cardíacas",
    title: "Cavalier King",
    src: "/cavalier.png",
    ctaText: "Play",
    ctaLink: "https://www.youtube.com/watch?v=r8CXcNprBJI",
    content: () => {
      return (
       <p>
           <strong>Enfermedades propensas:</strong><br />
       Enfermedades Cardíacas:
Las enfermedades cardíacas, como la insuficiencia cardíaca congestiva, son comunes en perros, especialmente en razas pequeñas como el Cavalier King Charles Spaniel y el Dachshund. <br />
          
          <strong>Recomendaciones:</strong><br />
  Chequeos veterinarios, dieta balanceada, vacunas al día e información sobre la salud de la raza.
        </p>
      );
    },
  },
  {
    description: "Artritis",
    title: "Pastor Alemán",
    src: "/pastor_aleman.jpg",
    ctaText: "Play",
    ctaLink: "https://www.youtube.com/watch?v=6w-lfbImEqg",
    content: () => {
      return (
         <p>
           <strong>Enfermedades propensas:</strong><br />
       Artritis:
La artritis, una inflamación de las articulaciones, afecta a muchos perros mayores, al igual que a los humanos.
Razas grandes como el Pastor Alemán y el Labrador Retriever son más susceptibles. <br />
          
          <strong>Recomendaciones:</strong><br />
  Chequeos veterinarios, dieta balanceada, vacunas al día e información sobre la salud de la raza.
        </p>
      );
    },
  },
];

// Exportar los títulos de las tarjetas
const cardTitles = cards.map((card) => card.title);
export { cardTitles };

export function ExpandableCardDemo({ onCardClick }) {
  const [active, setActive] = useState(null);
  const [visibleCards, setVisibleCards] = useState(cards.slice(0, 1));
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
        setVisibleCards(cards.slice(0, 1));
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
      setVisibleCards(cards);
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const handleSetActive = (card) => {
    setActive(card);
    if (onCardClick) {
      onCardClick(card.title, card.src); // Llama con título e imagen
    }
  };

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {visibleCards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => handleSetActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default ExpandableCardDemo;