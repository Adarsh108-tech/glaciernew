import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NorthStarSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const goals = [
    {
      title: "A Cryosphere Justice Framework",
      desc: "Glaciers legally protected in 10+ countries through new legislative paradigms.",
      image: "https://raw.githubusercontent.com/Adarsh108-tech/glacier-assets/main/img3.webp",
    },
    {
      title: "Cryosphere Pedagogy",
      desc: "Embedding glacial climate science and indigenous wisdom into schools worldwide.",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80",
    },
    {
      title: "Real-time Monitoring",
      desc: "Open-source, satellite-linked data portals providing transparency for all.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80",
    },
    {
      title: "Glacier Guardians Network",
      desc: "Mobilizing a grassroots force of 100,000+ individuals for restoration.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
    },
    {
      title: "Glaciers Resacralized",
      desc: "Rekindling the human spirit through art, ritual, and collective memory.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80",
    },
    {
      title: "Humanity & Glaciers",
      desc: "A transition from exploitation to a relationship built on reverence.",
      image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <section 
      id="north-star" 
      className="relative w-full max-w-full h-screen overflow-hidden bg-glacier-light font-cabin flex flex-col justify-center px-6 md:px-16 lg:px-20"
    >
      {/* Background Text Decor - Positioned to stay inside bounds */}
      <div className="absolute top-0 left-0 select-none pointer-events-none z-0 overflow-hidden">
        <h2 className="text-[20vh] font-nohemi text-glacier-soft/10 leading-none -translate-x-10 translate-y-5">
          2035
        </h2>
      </div>

      <div className="max-w-7xl mx-auto w-full h-[90vh] md:h-[80vh] flex flex-col relative z-10">
        
        {/* Header Section */}
        <header className="mb-4 md:mb-8 flex-shrink-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-2"
          >
            <div className="h-[2px] w-10 bg-glacier-accent" />
            <span className="text-glacier-accent font-bold tracking-widest uppercase text-xs">Our North Star</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-nohemi text-glacier-dark leading-none">
            A world in <span className="text-glacier-primary italic underline decoration-glacier-accent/30">reciprocity</span>
          </h2>
        </header>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 flex-grow overflow-hidden items-center lg:items-stretch">
          
          {/* Left Side: Navigation */}
          <div className="w-full lg:w-3/5 flex flex-col justify-center space-y-1 h-full overflow-y-auto no-scrollbar py-2 scroll-smooth overflow-hidden custom-scrollbar">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`group cursor-pointer py-2 md:py-3 border-l-4 transition-all duration-300 pl-4 md:pl-6 ${
                  hoveredIndex === index ? 'border-glacier-primary bg-white/40' : 'border-transparent hover:border-glacier-soft'
                }`}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <span className={`font-nohemi text-lg md:text-xl transition-colors ${hoveredIndex === index ? 'text-glacier-primary' : 'text-glacier-soft'}`}>
                    {index + 1}.
                  </span>
                  <h3 className={`text-lg md:text-xl lg:text-2xl font-nohemi transition-all ${hoveredIndex === index ? 'text-glacier-dark translate-x-1' : 'text-glacier-dark/40'}`}>
                    {goal.title}
                  </h3>
                </div>
                
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-glacier-dark/70 mt-1 md:mt-2 text-xs md:text-sm lg:text-base max-w-lg leading-relaxed pr-4"
                    >
                      {goal.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Showcase Image Container */}
          <div className="w-full lg:w-2/5 h-full hidden lg:flex items-center justify-center p-4">
            <div className="relative w-full h-full max-h-[450px] aspect-[4/5]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="relative w-full h-full shadow-2xl overflow-hidden rounded-2xl"
                  style={{
                    clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)',
                  }}
                >
                  <img
                    src={goals[hoveredIndex].image}
                    alt={goals[hoveredIndex].title}
                    className="w-full h-full object-cover scale-105"
                  />
                  <div className="absolute inset-0 bg-glacier-dark/20 mix-blend-multiply" />
                  <div className="absolute bottom-6 left-12 text-white">
                    <p className="font-nohemi text-base md:text-lg tracking-tighter uppercase italic opacity-80">Vision 2035</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Decorative Frame Element */}
              <div 
                className="absolute -inset-2 border border-glacier-primary/20 -z-10" 
                style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Bar */}
      <footer className="absolute bottom-4 left-0 w-full flex justify-center items-center gap-4 text-[9px] md:text-[10px] tracking-[0.3em] text-glacier-dark/40 uppercase pointer-events-none">
        <span>Respect</span>
        <span className="w-1 h-1 bg-glacier-accent/40 rounded-full" />
        <span>Protect</span>
        <span className="w-1 h-1 bg-glacier-accent/40 rounded-full" />
        <span>Restore</span>
      </footer>
    </section>
  );
};

export default NorthStarSection;